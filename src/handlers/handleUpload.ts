// ============================================================================
// REFACTORED handleUpload.ts (split-pdf) - Using Blob Pattern
// ============================================================================

import axios from "axios";
import type { errors as _ } from "../content";
import { resetErrorMessage, setField, type ToolState } from "../store";
import type { Action, Dispatch } from "@reduxjs/toolkit/react";
import { parseErrorResponse } from "../utils";

// ============================================================================
// STATE INTERFACE FOR SPLIT PDF
// ============================================================================

export interface SplitPDFUploadState {
  path: string;
  errorMessage: string;
  fileName: string;

  // Split PDF specific state
  splitMode: "split_by_range" | "extract_pages";
  rangeMode?: "custom_range" | "fixed_range";
  extractMode?: "extract_all" | "select_pages";

  // For custom ranges
  customRanges?: Array<{ from: number; to: number }>;

  // For fixed range
  fixedRangeValue?: number;

  // For extract pages
  selectedPages?: string; // e.g., "1-3,5,7-10" or "all"

  // Merge options
  mergeRanges?: boolean;
  mergeExtracted?: boolean;

  // Page count (for validation)
  pageCount?: number;
}

// ============================================================================
// FIX: Properly typed module variables (fixes TS7034)
// ============================================================================

let filesOnSubmit: string[] = [];
let prevState: string | null = null;

// ============================================================================
// HELPERS
// ============================================================================

interface UploadResponse {
  blob: Blob;
  mimeType: string;
}

async function sendRequest(
  url: string,
  formData: FormData
): Promise<UploadResponse> {
  try {
    const response = await axios.post(url, formData, {
      responseType: "blob",
      withCredentials: true,
      headers: { "Content-Type": "multipart/form-data" },
    });

    const blob = new Blob([response.data], {
      type: response.headers["content-type"] || "application/octet-stream",
    });

    return {
      blob,
      mimeType: response.headers["content-type"] || "application/octet-stream",
    };
  } catch (err: any) {
    // Error response might also be a Blob
    if (err.response?.data instanceof Blob) {
      try {
        const text = await err.response.data.text();
        err.response.data = JSON.parse(text);
      } catch (parseError) {
        console.error("Failed to parse error response:", parseError);
        err.response.data = { code: "SERVER_ERROR" };
      }
    }
    throw err;
  }
}

// ============================================================================
// MIME TYPE LOOKUP TABLE
// ============================================================================

const mimeTypeLookupTable: {
  [key: string]: { outputFileMimeType: string; outputFileName: string };
} = {
  "application/zip": {
    outputFileMimeType: "application/zip",
    outputFileName: "split.zip",
  },
  "application/pdf": {
    outputFileMimeType: "application/pdf",
    outputFileName: "split.pdf",
  },
};

// ============================================================================
// MAIN HANDLER (Refactored)
// ============================================================================

export const handleUpload = async (
  e: React.SubmitEvent<HTMLFormElement>,
  // NOTE: downloadBtn parameter REMOVED
  dispatch: Dispatch<Action>,
  state: SplitPDFUploadState,
  files: File[],
  errors: _,
  setDownloadBlob: (blob: Blob, filename: string) => void
) => {
  e.preventDefault();
  dispatch(setField({ isSubmitted: true }));

  if (!files) {
    dispatch(setField({ isSubmitted: false }));
    return;
  }

  // Extract file names from the File[] array
  const fileNames = files.map((file) => file.name);

  // Check if every file name in files is present in filesOnSubmit
  const allFilesPresent = fileNames.every((fileName) =>
    filesOnSubmit.includes(fileName)
  );

  const strState = JSON.stringify(state);

  if (
    allFilesPresent &&
    files.length === filesOnSubmit.length &&
    prevState === strState
  ) {
    dispatch(setField({ showDownloadBtn: true }));
    dispatch(resetErrorMessage());
    return;
  }

  prevState = strState;

  // ────────────────────────────────────────────────────────────────────────
  // PREPARE FORM DATA
  // ────────────────────────────────────────────────────────────────────────

  const formData = new FormData();

  // Add files
  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }

  // ────────────────────────────────────────────────────────────────────────
  // ADD SPLIT PDF PARAMETERS
  // ────────────────────────────────────────────────────────────────────────

  // Add split mode
  formData.append("splitMode", state.splitMode);

  if (state.splitMode === "split_by_range") {
    // Add range mode
    if (state.rangeMode) {
      formData.append("rangeMode", state.rangeMode);
    }

    if (state.rangeMode === "custom_range") {
      // Add custom ranges
      if (state.customRanges && state.customRanges.length > 0) {
        formData.append("ranges", JSON.stringify(state.customRanges));
      }

      // Add merge option for custom ranges
      if (state.mergeRanges !== undefined) {
        formData.append("merge", String(state.mergeRanges));
      }
    } else if (state.rangeMode === "fixed_range") {
      // Add fixed range value
      if (state.fixedRangeValue) {
        formData.append("fixedRangeValue", String(state.fixedRangeValue));
      }
    }
  } else if (state.splitMode === "extract_pages") {
    // Add extract mode
    if (state.extractMode) {
      formData.append("extractMode", state.extractMode);
    }

    if (state.extractMode === "extract_all") {
      // For extract all, send "all"
      formData.append("selectedPages", "all");
    } else if (state.extractMode === "select_pages") {
      // Add selected pages
      if (state.selectedPages) {
        formData.append("selectedPages", state.selectedPages);
      }

      // Add merge option for extracted pages
      if (state.mergeExtracted !== undefined) {
        formData.append("merge", String(state.mergeExtracted));
      }
    }
  }

  // Add page count for validation
  if (state.pageCount) {
    formData.append("pageCount", String(state.pageCount));
  }

  // ────────────────────────────────────────────────────────────────────────
  // PREPARE URL
  // ────────────────────────────────────────────────────────────────────────

  let url: string = "";
  const endpoint = "/api/";

  // @ts-ignore
  if (process.env.NODE_ENV === "development") {
    url = `http://localhost:8000${endpoint}${state.path}`;
  } else {
    url = `${endpoint}${state.path}`;
  }

  // Early exit if there's already an error
  if (state.errorMessage) {
    dispatch(setField({ isSubmitted: false }));
    return;
  }

  // Get original filename for download
  const originalFileName =
    state.fileName || files[0]?.name?.split(".").slice(0, -1).join(".");

  // ────────────────────────────────────────────────────────────────────────
  // API Call & Blob Handling
  // ────────────────────────────────────────────────────────────────────────

  try {
    // NEW: Use sendRequest helper
    const { blob, mimeType } = await sendRequest(url, formData);

    // Look up expected output format
    const mimeTypeData = mimeTypeLookupTable[mimeType] || {
      outputFileMimeType: mimeType,
      outputFileName: "",
    };

    const { outputFileMimeType, outputFileName } = mimeTypeData;

    // Ensure blob has correct MIME type
    const typedBlob = new Blob([blob], {
      type: outputFileMimeType || "application/octet-stream",
    });

    // ───────────────────────────────────────────────────────────────────────
    // NEW: Deferred download via setDownloadBlob
    // ───────────────────────────────────────────────────────────────────────
    setDownloadBlob(
      typedBlob,
      outputFileName && originalFileName
        ? `${originalFileName}-split${outputFileName.substring(outputFileName.lastIndexOf("."))}`
        : outputFileName || state.fileName
    );

    // Update UI state
    dispatch(setField({ showDownloadBtn: true }));
    dispatch(resetErrorMessage());
    dispatch(setField({ isSubmitted: false }));

    // Update tracking
    filesOnSubmit = files.map((f) => f.name);
  } catch (error) {
    // ───────────────────────────────────────────────────────────────────────
    // Error Handling
    // ───────────────────────────────────────────────────────────────────────

    if ((error as { code: string }).code === "ERR_NETWORK") {
      dispatch(setField({ errorMessage: errors.ERR_NETWORK.message }));
      dispatch(setField({ isSubmitted: false }));
      return;
    }

    // Handle server validation/auth errors
    if (axios.isAxiosError(error) && error.response) {
      try {
        // FIX: Properly type errorCode (fixes TS2538)
        const errorCodeMap: Record<string, string> = {
          // File validation errors
          FILE_NOT_UPLOADED: errors.alerts.fileNotUploaded,
          FILE_EMPTY: errors.alerts.fileEmpty,
          FILE_TOO_LARGE: errors.alerts.fileTooLarge,
          INVALID_FILE_TYPE: errors.alerts.invalidFileType,
          FILE_CORRUPT: errors.alerts.fileCorrupt,
          INSUFFICIENT_CONVERSION_UNITS: errors.alerts.insufficientUnits,

          // Auth errors
          AUTH_TOKEN_MISSING: errors.alerts.authRequired,
          AUTH_TOKEN_EXPIRED: errors.alerts.sessionExpired,
          AUTH_INVALID_TOKEN: errors.alerts.invalidToken,
          AUTH_USER_NOT_FOUND: errors.alerts.userNotFound,
          AUTH_SERVER_ERROR: errors.alerts.authError,
          SERVER_CONFIG_ERROR: errors.alerts.serverError,
          MAX_PAGES_EXCEEDED: errors.MAX_PAGES_EXCEEDED?.message || "Max pages exceeded",

          // Split PDF specific errors
          INVALID_PAGE_RANGE: errors.alerts?.invalidPageRange || "Invalid page range",
          INVALID_PAGE_SELECTION:
            errors.alerts?.invalidPageSelection || "Invalid page selection",
          NO_PAGES_SELECTED: errors.alerts?.noPagesSelected || "No pages selected",
          RANGE_OUT_OF_BOUNDS:
            errors.alerts?.rangeOutOfBounds || "Range out of bounds",
        };

        const { errorCode } = parseErrorResponse(error);

        // FIX: Check if errorCode exists before indexing (fixes TS2538)
        if (errorCode && errorCode in errorCodeMap) {
          const message = errorCodeMap[errorCode];
          dispatch(setField({ limitationMsg: message }));
          dispatch(setField({ errorCode }));
          dispatch(setField({ isSubmitted: false }));
          return;
        }
      } catch {
        // Failed to parse error response
      }
    }

    dispatch(setField({ isSubmitted: false }));
  }
};