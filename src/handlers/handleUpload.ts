import axios from "axios";
import { Dispatch, RefObject } from "react";
// import type { ToolData, errorType } from "../../components/Tool";
import { downloadConvertedFile } from "../downloadFile";
import type { errors as _ } from "../../content";
import { AnyAction } from "@reduxjs/toolkit";
// import { shallow } from "zustand"
import {
  ToolState,
  resetErrorMessage,
  setErrorMessage,
  setIsSubmitted,
  setShowDownloadBtn,
} from "../store";

// this is the handleUpload function that is calling the download function maybe the issue is here
export const handleUpload = async (
  e: React.FormEvent<HTMLFormElement>,
  downloadBtn: RefObject<HTMLAnchorElement>,
  dispatch: Dispatch<AnyAction>,
  state: ToolState,
  files: File[],
  errors: _,
  filesLengthOnSubmit: number,
  setFilesLengthOnSubmit: (value: number) => void
) => {
  e.preventDefault();
  dispatch(setIsSubmitted(true));

  if (!files) return;
  // subscribe to the files state and get the previous files
  if (filesLengthOnSubmit == files.length) {
    dispatch(setShowDownloadBtn(true));
    dispatch(resetErrorMessage());
    return;
  }

  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }
  let url;
  // @ts-ignore
  if (process.env.NODE_ENV === "development") {
    url = `http://149.100.159.150:5000/${state.path}`;
    // url = `https://5000-planetcreat-pdfequipsap-te4zoi6qkr3.ws-eu102.gitpod.io/${state.path}`;
  } else {
    url = `/api/${state.path}`;
  }
  if (state?.errorMessage) {
    return;
  }
  formData.append("compress_amount", String(state?.compressPdf));
  const originalFileName = files[0]?.name?.split(".").slice(0, -1).join(".");

  const mimeTypeLookupTable: {
    [key: string]: { outputFileMimeType: string; outputFileName: string };
  } = {
    "application/zip": {
      outputFileMimeType: "application/zip",
      outputFileName: `PDFEquips-${state.path}.zip`,
    },
    "application/pdf": {
      outputFileMimeType: "application/pdf",
      outputFileName: `${originalFileName}.pdf`,
    },
    "application/msword": {
      outputFileMimeType: "application/msword",
      outputFileName: `${originalFileName}.docx`,
    },
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
      outputFileMimeType:
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      outputFileName: `${originalFileName}.docx`,
    },
    "application/vnd.ms-excel": {
      outputFileMimeType: "application/vnd.ms-excel",
      outputFileName: `${originalFileName}.xlsx`,
    },
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
      outputFileMimeType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      outputFileName: `${originalFileName}.xlsx`,
    },
    "application/vnd.ms-powerpoint": {
      outputFileMimeType: "application/vnd.ms-powerpoint",
      outputFileName: `${originalFileName}.pptx`,
    },
    "application/vnd.openxmlformats-officedocument.presentationml.presentation":
    {
      outputFileMimeType:
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      outputFileName: `${originalFileName}.pptx`,
    },
    "text/plain": {
      outputFileMimeType: "text/plain",
      outputFileName: `${originalFileName}.txt`,
    },
  };

  try {
    const response = await axios.post(url, formData, {
      responseType: "arraybuffer",
    });
    // const originalFileName = files[0]?.name?.split(".").slice(0, -1).join(".");
    const mimeType = response.data.type || response.headers["content-type"];
    const mimeTypeData = mimeTypeLookupTable[mimeType] || {
      outputFileMimeType: mimeType,
      outputFileName: "",
    };
    const { outputFileMimeType, outputFileName } = mimeTypeData;

    dispatch(setShowDownloadBtn(true));
    downloadConvertedFile(
      response,
      outputFileMimeType,
      outputFileName,
      downloadBtn
    );
    setFilesLengthOnSubmit(files.length);

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      dispatch(resetErrorMessage());
      dispatch(setIsSubmitted(false));
    }
  } catch (error) {
    if ((error as { code: string }).code === "ERR_NETWORK") {
      dispatch(setErrorMessage(errors.ERR_NETWORK.message));
      return;
    }
    dispatch(setIsSubmitted(false));
  } finally {
    dispatch(setIsSubmitted(false));
  }
};
