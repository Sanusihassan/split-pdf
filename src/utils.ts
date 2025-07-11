import { NextRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { AnyAction } from "@reduxjs/toolkit";
import type { errors as _ } from "../content";
import {
  setField
} from "./store";
import { getDocument } from "pdfjs-dist";
import { PDFDocumentProxy, PageViewport, RenderTask } from "pdfjs-dist";
import { GlobalWorkerOptions, version } from "pdfjs-dist";
GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${version}/pdf.worker.min.js`

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
function emptyPDFHandler(dispatch: Dispatch<AnyAction>, errors: _) {
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
  dispatch: Dispatch<AnyAction>,
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
  let tooltipContent = size;
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
            tooltipContent += ` - ${image.width} x ${image.height}`;
            resolve();
          };
        });
      } else if (file.type === "application/pdf") {
        const url = URL.createObjectURL(file);
        const pdf = await getDocument(url).promise;

        const pageCount = pdf.numPages || 0;
        tooltipContent += ` - ${lang === "ar" && pageCount === 1 ? "" : pageCount + " "
          }${pageCount > 1 ? pages : page}`;
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

export async function getNthPageAsImage(
  file: File,
  dispatch: Dispatch<AnyAction>,
  errors: _,
  pageNumber: number,
  pageCount: number
): Promise<string> {
  const fileUrl = URL.createObjectURL(file);
  if (!file.size) {
    return emptyPDFHandler(dispatch, errors);
  } else {
    try {
      const loadingTask = getDocument(fileUrl);
      const pdf: PDFDocumentProxy = await loadingTask.promise;
      const page = await pdf.getPage(pageNumber); // Get the Nth page

      const scale = 1.5;
      const viewport: PageViewport = page.getViewport({ scale });

      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      if (!context) {
        throw new Error("Canvas context not available.");
      }
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderTask: RenderTask = page.render({
        canvasContext: context,
        viewport: viewport,
      });

      await renderTask.promise;

      return canvas.toDataURL();
    } catch (error) {
      console.log(pageCount);
      if (pageCount === 1 || pageCount === 0) {
        dispatch(setField({ errorMessage: errors.ERR_ONLY_ONE_PAGE.message }));
        return DEFAULT_PDF_IMAGE; // Return the placeholder image URL when an error occurs
      }
      dispatch(setField({ errorMessage: errors.FILE_CORRUPT.message }));
      return DEFAULT_PDF_IMAGE; // Return the placeholder image URL when an error occurs
    }
  }
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
export const isDraggableExtension = (ext: string, router: NextRouter) => {
  return ext === ".jpg" || router.asPath.includes("merge-pdf");
};

export function isrtllang(asPath: string): boolean {
  return asPath.startsWith("/ar");
}

export const validateFiles = (
  _files: FileList | File[],
  extension: string,
  errors: _,
  dispatch: Dispatch<AnyAction>,
  state: {
    path: string;
  }
) => {
  const files = Array.from(_files); // convert FileList to File[] array

  let allowedMimeTypes = [
    "application/pdf",
    "text/html",
    "image/jpeg",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "application/vnd.ms-powerpoint",
    "application/vnd.ms-excel",
  ];
  if (files.length == 0) {
    dispatch(setField({ errorMessage: errors.NO_FILES_SELECTED.message }));
    dispatch(setField({ errorCode: "ERR_NO_FILES_SELECTED" }));
    return false;
  }
  const fileSizeLimit = 100 * 1024 * 1024; // 100MB
  for (let i = 0; i < files.length; i++) {
    const file = files[i] || null;
    extension = extension.replace(".", "").toUpperCase();
    let file_extension = file.name.split(".").pop()?.toUpperCase() || "";
    // this contains all types and some special types that might potentially be of than one extension
    const types = [
      "ppt",
      "pptx",
      "doc",
      "docx",
      "xls",
      "xlsx",
      "html",
      "htm",
      "jpg",
      "pdf",
    ];

    if (!file || !file.name) {
      // handle FILE_CORRUPT error
      dispatch(setField({ errorMessage: errors.FILE_CORRUPT.message }));
      return false;
    } else if (!file.type) {
      // handle NOT_SUPPORTED_TYPE error
      dispatch(setField({ errorMessage: errors.NOT_SUPPORTED_TYPE.message }));
      return false;
    } else if (
      !allowedMimeTypes.includes(file.type) ||
      !types.includes(file_extension.toLowerCase())
    ) {
      const errorMessage =
        errors.NOT_SUPPORTED_TYPE.types[
        extension as keyof typeof errors.NOT_SUPPORTED_TYPE.types
        ] || errors.NOT_SUPPORTED_TYPE.message;
      dispatch(setField({ errorMessage: errorMessage }));
      return false;
    } else if (file.size > fileSizeLimit) {
      // handle FILE_TOO_LARGE error
      dispatch(setField({ errorMessage: errors.FILE_TOO_LARGE.message }));
      return false;
    } else if (!file.size) {
      // handle EMPTY_FILE error

      dispatch(setField({ errorMessage: errors.EMPTY_FILE.message }));
      dispatch(setField({ errorCode: "ERR_EMPTY_FILE" }));
      return false;
    }
  }
  return true;
};

interface PDFFile extends Blob {
  name: string;
}
export async function calculatePages(file: PDFFile): Promise<number> {
  const reader = new FileReader();
  if (file) {
    reader.readAsArrayBuffer(file);
    return new Promise<number>((resolve, reject) => {
      reader.onload = async (event) => {
        try {
          const typedArray = new Uint8Array(
            event.target?.result as ArrayBuffer
          );
          const pdf = await getDocument(typedArray).promise;
          resolve(pdf.numPages);
        } catch (error) {
          reject(error);
        }
      };
    });
  } else {
    return Promise.reject("File is not provided");
  }
}

export const getPageCount = async (
  files: File[],
  stateSelectedFile: string,
  dispatch: Dispatch<AnyAction>
) => {
  if (files.length > 0) {
    const selectedFile = files.filter(
      (file) => file.name === stateSelectedFile
    );
    dispatch(setField({ pageCount: await calculatePages(selectedFile[0] || files[0]) }));
  }
};
