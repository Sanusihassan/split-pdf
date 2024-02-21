import axios from "axios";
import { Dispatch, RefObject } from "react";
// import type { ToolData, errorType } from "../../components/Tool";
import { downloadConvertedFile } from "../downloadFile";
import type { errors as _ } from "../../content";
import { AnyAction } from "@reduxjs/toolkit";
// import { shallow } from "zustand"
import {
  resetErrorMessage,
  setField
} from "../store";

let prevState = "";

export const handleUpload = async (
  e: React.FormEvent<HTMLFormElement>,
  downloadBtn: RefObject<HTMLAnchorElement>,
  dispatch: Dispatch<AnyAction>,
  // path: string,
  errorMessage: string,
  files: File[],
  errors: _,
  filesOnSubmit: string[],
  ranges: { from: number; to: number }[],
  selectedPages: string,
  setFilesOnSubmit: (value: string[]) => void,
  merge: boolean,
  layout: "extract" | "range"
) => {
  e.preventDefault();
  dispatch(setField({ isSubmitted: true }));

  if (!files) return;
  // Extract file names from the File[] array
  const fileNames = files.map((file) => file.name);

  // Check if every file name in files is present in filesOnSubmit
  const allFilesPresent = fileNames.every((fileName) =>
    filesOnSubmit.includes(fileName)
  );

  if (allFilesPresent && files.length === filesOnSubmit.length && (
    prevState === JSON.stringify({
      selectedPages,
      merge,
      ranges
    })
  )) {
    dispatch(setField({ showDownloadBtn: true }));
    dispatch(resetErrorMessage());
    return;
  }
  let path = "";
  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }
  if (layout === "extract") {
    path = "extract-pages"
    formData.append("selectedPages", selectedPages);
    formData.append("merge", merge.toString());
  } else {
    formData.append("ranges", JSON.stringify(ranges));
    path = "split-by-range"
  }

  let url;
  // @ts-ignore
  if (process.env.NODE_ENV === "development") {
    url = `http://149.100.159.150:5000/api/${path}`;
  } else {
    url = `/api/${path}`;
  }
  if (errorMessage) {
    return;
  }
  const originalFileName = files[0]?.name?.split(".").slice(0, -1).join(".");

  const mimeTypeLookupTable: {
    [key: string]: { outputFileMimeType: string; outputFileName: string };
  } = {
    "application/zip": {
      outputFileMimeType: "application/zip",
      outputFileName: `PDFEquips-${path}.zip`,
    },
    "application/pdf": {
      outputFileMimeType: "application/pdf",
      outputFileName: `${originalFileName}.pdf`,
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

    dispatch(setField({ showDownloadBtn: true }));
    downloadConvertedFile(
      response,
      outputFileMimeType,
      outputFileName,
      downloadBtn
    );
    setFilesOnSubmit(files.map(f => f.name));
    prevState = JSON.stringify({
      selectedPages,
      merge,
      ranges
    })

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      dispatch(resetErrorMessage());
      dispatch(setField({ isSubmitted: false }));
    }
  } catch (error) {
    if ((error as { code: string }).code === "ERR_NETWORK") {
      dispatch(setField({ errorMessage: errors.ERR_NETWORK.message }));
      return;
    }
    dispatch(setField({ isSubmitted: false }));
  } finally {
    dispatch(setField({ isSubmitted: false }));
  }
};
