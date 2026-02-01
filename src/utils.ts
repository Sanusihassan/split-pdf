import { useEffect, useMemo, useState } from "react";
import { type Action, type Dispatch } from "@reduxjs/toolkit";
import type { errors as _ } from "./content";
import { resetErrorMessage, setField } from "./store";
import * as pdfjs from "pdfjs-dist";
import axios from "axios";
import {
  type PDFDocumentProxy,
  type PageViewport,
  type RenderTask,
} from "pdfjs-dist";
import { toast } from "react-toastify";
import type { Paths } from "./content/content";
import { renderQueue } from "./RenderQueue";

// Proper worker configuration - do this ONCE at module level
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString();

export function useLoadedImage(src: string): HTMLImageElement | null {
  const [loadedImage, setLoadedImage] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoadedImage(img);
  }, [src]);

  return loadedImage;
}
export function useRotatedImage(imageUrl: string): string | null {
  const image = useLoadedImage(imageUrl);

  return useMemo(() => {
    if (!image) return null;

    const canvas = document.createElement("canvas");
    canvas.width = image.height;
    canvas.height = image.width;
    const ctx = canvas.getContext("2d")!;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((90 * Math.PI) / 180);
    ctx.drawImage(image, -image.width / 2, -image.height / 2);
    return canvas.toDataURL();
  }, [image]);
}

const DEFAULT_PDF_IMAGE = "/images/corrupted.png";
function emptyPDFHandler(dispatch: Dispatch<Action>, errors: _) {
  dispatch(setField({ errorMessage: errors.EMPTY_FILE.message }));
  dispatch(setField({ errorCode: "ERR_EMPTY_FILE" }));
  return DEFAULT_PDF_IMAGE;
}
// i don't know why but when i pass any other file type except images or pdfs this function will cause the application to crash by entering an infinite loop
export const getFileDetailsTooltipContent = async (
  file: File,
  pages: string,
  page: string,
  lang: string,
  dispatch: Dispatch<Action>,
  errors: _
): Promise<string> => {
  const sizeInBytes = file.size;
  let size: string = "";
  let isoCode = lang === "fr" ? "fr-FR" : lang == "" ? "en" : lang;
  size = new Intl.NumberFormat(isoCode, {
    notation: "compact",
    style: "unit",
    unit: "byte",
    unitDisplay: "narrow",
  }).format(sizeInBytes);
  let tooltipContent = "<bdi>" + size;
  if (file.size === 0) {
    emptyPDFHandler(dispatch, errors);
    throw Error("ERROR: FILE_SIZE_ZERO");
  } else {
    if (
      file.type !== "image/png" &&
      file.type !== "image/jpeg" &&
      file.type !== "application/pdf"
    ) {
      return tooltipContent;
    }
    try {
      if (file.type === "image/jpeg" || file.type === "image/png") {
        const image = new Image();
        image.src = URL.createObjectURL(file);
        await new Promise<void>((resolve) => {
          image.onload = () => {
            tooltipContent += `</bdi> - <bdi>${image.width} x ${image.height}</bdi>`;
            resolve();
          };
        });
      } else if (file.type === "application/pdf") {
        const url = URL.createObjectURL(file);
        const pdf = await pdfjs.getDocument(url).promise;

        const pageCount = pdf.numPages || 0;
        if (pageCount === 2 && lang === "ar") {
          tooltipContent += " - صفحتين</bdi>";
        } else {
          tooltipContent += ` - ${lang === "ar" && pageCount === 1 ? "" : pageCount + " "
            }${pageCount > 1 ? pages : page}</bdi>`;
        }
        URL.revokeObjectURL(url);
        if (!file.size) {
          emptyPDFHandler(dispatch, errors);
        }
      }
    } catch (e) {
      if (!file.size) {
        emptyPDFHandler(dispatch, errors);
      }
    }
  }

  return tooltipContent;
};

export async function getFirstPageAsImage(
  file: File,
  dispatch: Dispatch<Action>,
  errors: _,
  password?: string
): Promise<string> {
  // Wrap the entire operation in the queue
  return renderQueue.add(async () => {
    const fileUrl = URL.createObjectURL(file);

    if (!file.size) {
      return emptyPDFHandler(dispatch, errors);
    }

    try {
      const loadingTask = pdfjs.getDocument({
        url: fileUrl,
        password: password || undefined,
      });

      let tid;

      loadingTask.onPassword = (updatePassword, reason) => {
        if (reason === pdfjs.PasswordResponses.NEED_PASSWORD) {
          if (password) {
            updatePassword(password);
            if (tid) {
              toast.dismiss(tid);
            }
          } else {
            dispatch(setField({ errorCode: "PASSWORD_REQUIRED" }));
            tid = toast.error(errors.PASSWORD_REQUIRED.message);
            throw new Error("PASSWORD_REQUIRED");
          }
        } else if (reason === pdfjs.PasswordResponses.INCORRECT_PASSWORD) {
          dispatch(setField({ errorCode: "INCORRECT_PASSWORD" }));
          tid = toast.error(errors.INCORRECT_PASSWORD.message);
          throw new Error("INCORRECT_PASSWORD");
        }
      };
      dispatch(setField({ errorCode: null }));
      dispatch(setField({ errorMessage: "" }));

      const pdf: PDFDocumentProxy = await loadingTask.promise;
      const page = await pdf.getPage(1);

      const scale = 1.5;
      const viewport: PageViewport = page.getViewport({ scale });

      // Try OffscreenCanvas for better performance (if available)
      const canvas = typeof OffscreenCanvas !== 'undefined'
        ? new OffscreenCanvas(viewport.width, viewport.height)
        : document.createElement("canvas");

      if (canvas instanceof HTMLCanvasElement) {
        canvas.width = viewport.width;
        canvas.height = viewport.height;
      }

      const context = canvas.getContext("2d");
      if (!context) {
        throw new Error("Canvas context not available.");
      }

      const renderTask: RenderTask = page.render({
        canvasContext: context as any,
        viewport: viewport,
      });

      await renderTask.promise;

      // Convert to data URL
      let dataUrl: string;
      if (canvas instanceof OffscreenCanvas) {
        const blob = await canvas.convertToBlob({ type: 'image/png' });
        dataUrl = await blobToDataURL(blob);
      } else {
        dataUrl = canvas.toDataURL();
      }

      URL.revokeObjectURL(fileUrl);
      return dataUrl;

    } catch (error: any) {
      URL.revokeObjectURL(fileUrl);

      if (!error.code) {
        dispatch(setField({ errorMessage: errors.FILE_CORRUPT.message }));
        return DEFAULT_PDF_IMAGE;
      }

      const { code } = error;
      if (code === pdfjs.PasswordResponses.NEED_PASSWORD) {
        dispatch(setField({ errorMessage: errors.PASSWORD_REQUIRED.message }));
        return "/images/locked.png";
      } else {
        dispatch(setField({ errorMessage: errors.INCORRECT_PASSWORD.message }));
        return "/images/locked.png";
      }
    }
  });
}

export async function getNthPageAsImage(
  file: File,
  dispatch: Dispatch<Action>,
  errors: _,
  pageNumber: number
): Promise<string> {
  return renderQueue.add(async () => {
    const fileUrl = URL.createObjectURL(file);

    if (!file.size) {
      return emptyPDFHandler(dispatch, errors);
    }

    try {
      const loadingTask = pdfjs.getDocument(fileUrl);
      const pdf: PDFDocumentProxy = await loadingTask.promise;
      const page = await pdf.getPage(pageNumber);

      const scale = 1.5;
      const viewport: PageViewport = page.getViewport({ scale });

      // Try OffscreenCanvas for better performance
      const canvas = typeof OffscreenCanvas !== 'undefined'
        ? new OffscreenCanvas(viewport.width, viewport.height)
        : document.createElement("canvas");

      if (canvas instanceof HTMLCanvasElement) {
        canvas.width = viewport.width;
        canvas.height = viewport.height;
      }

      const context = canvas.getContext("2d");
      if (!context) {
        throw new Error("Canvas context not available.");
      }

      const renderTask: RenderTask = page.render({
        canvasContext: context as any,
        viewport: viewport,
      });

      await renderTask.promise;

      // Convert to data URL
      let dataUrl: string;
      if (canvas instanceof OffscreenCanvas) {
        const blob = await canvas.convertToBlob({ type: 'image/png' });
        dataUrl = await blobToDataURL(blob);
      } else {
        dataUrl = canvas.toDataURL();
      }

      URL.revokeObjectURL(fileUrl);
      return dataUrl;

    } catch (error) {
      URL.revokeObjectURL(fileUrl);
      return DEFAULT_PDF_IMAGE;
    }
  });
}

// Helper function for OffscreenCanvas
function blobToDataURL(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
export const getPlaceHoderImageUrl = (extension: string) => {
  switch (extension) {
    case ".docx":
      return "/images/word.png";
    case ".html":
      return "/images/html.png";
    case ".pptx":
      return "/images/powerpoint.png";
    case ".xlsx":
      return "/images/excel.png";
    default:
      return "images/pdf.png";
  }
};

// a function to check if the extension is .jpg or .pdf:
export const isDraggableExtension = (ext: string, asPath: string) => {
  return ext === ".jpg" || asPath.includes("merge-pdf");
};

interface PDFFile extends Blob {
  name: string;
}

let pdfWorker: Worker | null = null;

export async function calculatePages(file: PDFFile): Promise<number> {
  // Initialize worker if needed
  if (!pdfWorker) {
    pdfWorker = new Worker(new URL('./pdfWorker.ts', import.meta.url), {
      type: 'module'
    });
  }

  return new Promise<number>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = async (event) => {
      const arrayBuffer = event.target?.result as ArrayBuffer;

      pdfWorker!.postMessage({
        type: 'calculatePages',
        data: { fileData: arrayBuffer }
      });

      const handleMessage = (e: MessageEvent) => {
        if (e.data.type === 'success') {
          pdfWorker!.removeEventListener('message', handleMessage);
          resolve(e.data.pageCount);
        } else if (e.data.type === 'error') {
          pdfWorker!.removeEventListener('message', handleMessage);
          reject(new Error(e.data.error));
        }
      };

      pdfWorker!.addEventListener('message', handleMessage);
    };

    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsArrayBuffer(file);
  });
}


/**
 * Sanitizes a string to be a valid key for both JavaScript objects and Python dictionaries.
 * Produces a Linux filename-friendly string using built-in functions.
 * Ensures consistent behavior across JS and Python.
 *
 * @param input - The string to sanitize
 * @returns A sanitized key safe for both JS and Python
 */
export function sanitizeKey(input: string | number | null | undefined): string {
  if (input == null || input === "") {
    return "key_empty";
  }

  let key = String(input);

  // Normalize unicode by removing diacritics
  key = key.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Replace any non-alphanumeric or underscore characters with underscore
  key = key.replace(/[^a-zA-Z0-9_]/g, "_");

  // Remove consecutive underscores
  while (key.includes("__")) {
    key = key.replace(/__/g, "_");
  }

  // Trim leading and trailing underscores
  key = key.replace(/^_+|_+$/g, "");

  // Ensure it doesn't start with a digit
  if (/^\d/.test(key)) {
    key = "key_" + key;
  }

  // Ensure it starts with a valid character (letter or underscore)
  if (key.length > 0 && !/^[a-zA-Z_]/.test(key)) {
    key = "key_" + key;
  }

  // Handle empty result after sanitization
  if (key === "" || key === "_") {
    return "key_sanitized";
  }

  return key;
}

// Add this outside the component (after imports)
export const PATH_ACCEPTED_FILES: Record<string, Record<string, string[]>> = {
  // PDF to other formats - accept PDF only
  "split-pdf": { "application/pdf": [".pdf"] },
};

// Helper to get the primary MIME type for validation
export const getValidationMimeType = (path: Paths): string | undefined => {
  const accepted = PATH_ACCEPTED_FILES[path];
  if (!accepted) return undefined;
  return Object.keys(accepted)[0];
};

// If validateFiles needs all MIME types for a path
export const getAllMimeTypes = (path: Paths): string[] => {
  const accepted = PATH_ACCEPTED_FILES[path];
  return accepted ? Object.keys(accepted) : [];
};


// All accepted extensions
export const ACCEPTED = [
  ".pdf",
];

// All accepted MIME types
export const acceptedMimeTypes = [
  "application/pdf", // .pdf
];

// Generalized filter function for file validation
export const filterNewFiles = (
  acceptedFiles: File[],
  existingFiles: File[],
  allowedExtensions: string | string[]
): File[] => {
  return acceptedFiles.filter((newFile) => {
    const isDuplicate = existingFiles.some(
      (existingFile) =>
        existingFile.name === newFile.name && existingFile.size === newFile.size
    );

    const extensionsToCheck = Array.isArray(allowedExtensions)
      ? allowedExtensions
      : [allowedExtensions];

    const hasCorrectExtension = extensionsToCheck.some(ext =>
      newFile.name.toLowerCase().endsWith(ext.toLowerCase())
    );

    return !isDuplicate && hasCorrectExtension;
  });
};
interface ParsedError {
  errorCode: string | undefined;
  message: string | undefined;
}

export const parseErrorResponse = (error: unknown): ParsedError => {
  if (!axios.isAxiosError(error) || !error.response?.data) {
    return { errorCode: undefined, message: undefined };
  }

  try {
    // If responseType is arraybuffer, data will be ArrayBuffer even for errors
    const data = error.response.data;

    if (data instanceof ArrayBuffer) {
      const decoder = new TextDecoder('utf-8');
      const jsonString = decoder.decode(data);
      const parsed = JSON.parse(jsonString);
      return {
        errorCode: parsed.errorCode,
        message: parsed.message
      };
    }

    // If it's already an object
    if (typeof data === 'object') {
      return {
        errorCode: data.errorCode,
        message: data.message
      };
    }
  } catch {
    // JSON parse failed
  }

  return { errorCode: undefined, message: undefined };
};

type FileValidationError =
  | "NO_FILES_SELECTED"
  | "FILE_CORRUPT"
  | "EMPTY_FILE"
  | "NOT_SUPPORTED_TYPE"
  | "UNKNOWN_ERROR";

/**
 * Perform generic file validations.
 */
export function genericFileValidation(
  file: File | null,
  contentType: string | string[]
): FileValidationError | null {
  if (file === null) {
    return "NO_FILES_SELECTED";
  }

  try {
    if (!file.name) {
      return "FILE_CORRUPT";
    }

    // Check if file is empty
    if (file.size === 0) {
      return "EMPTY_FILE";
    }

    // Normalize content_type to array
    const allowedTypes =
      typeof contentType === "string" ? [contentType] : contentType;

    if (!file.type || !allowedTypes.includes(file.type)) {
      return "NOT_SUPPORTED_TYPE";
    }
  } catch {
    return "UNKNOWN_ERROR";
  }

  return null;
}

export const validateFiles = (
  filesToValidate: File[],
  dispatch: Dispatch<Action>,
  errors: _,
  mimetype: string | string[]
): { isValid: boolean } => {
  const errorCode =
    filesToValidate
      .map((file) => genericFileValidation(file, mimetype))
      .find((result) => result !== null) || null;
  let tid = null;
  if (errorCode) {
    dispatch(setField({ errorCode }));
    let errMsg = "";

    if (errorCode === "EMPTY_FILE") {
      errMsg = errors.EMPTY_FILE.message;
    } else if (errorCode === "FILE_CORRUPT") {
      errMsg = errors.FILE_CORRUPT.message;
    } else if (errorCode === "NO_FILES_SELECTED") {
      errMsg = errors.NO_FILES_SELECTED.message;
    } else if (errorCode === "NOT_SUPPORTED_TYPE") {
      errMsg = errors.NOT_SUPPORTED_TYPE.message;
    } else if (errorCode === "UNKNOWN_ERROR") {
      errMsg = errors.UNKNOWN_ERROR.message;
    }

    tid = toast(errMsg);

    return { isValid: false };
  }
  if (filesToValidate.length) {
    dispatch(setField({ showTool: false }));
    dispatch(resetErrorMessage());
    if (tid) {
      toast.dismiss(tid);
    }
    return { isValid: true };
  }

  return { isValid: false };
};
// Create worker instance (singleton)
let analysisWorker: Worker | null = null;

function getAnalysisWorker(): Worker {
  if (!analysisWorker) {
    analysisWorker = new Worker(
      new URL('./pdfAnalysisWorker.ts', import.meta.url),
      { type: 'module' }
    );
  }
  return analysisWorker;
}

// Optional: Clean up worker when done
export function terminateAnalysisWorker() {
  if (analysisWorker) {
    analysisWorker.terminate();
    analysisWorker = null;
  }
}


export function shortenFileName(name: string, maxLength = 20) {
  if (name.length <= maxLength) return name;

  const dotIndex = name.lastIndexOf(".");
  const ext = dotIndex !== -1 ? name.slice(dotIndex) : "";
  const base = dotIndex !== -1 ? name.slice(0, dotIndex) : name;

  const shortenedBase =
    base.length > maxLength
      ? base.slice(0, maxLength / 2) + "..." + base.slice(-maxLength / 2)
      : base;

  return shortenedBase + ext;
}
