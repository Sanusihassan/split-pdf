import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// store
import { selectToolState, type ToolState } from "../../src/store";
import {
  handleUpload,
  type SplitPDFUploadState,
} from "../../src/handlers/handleUpload";
import { handleChange } from "../../src/handlers/handleChange";
import { useFileStore } from "../../src/file-store";
// types
import type { tools } from "../../src/content";
import Loading from "../Loading";
import type { Paths } from "../../src/content/content";
type AcceptedFileTypes = {
  [key in ".pdf" | ".pptx" | ".docx" | ".xlsx" | ".jpg" | ".html"]: string;
};
interface FileInputFormProps {
  data: {
    type: string;
    to: string;
  };
  acceptedFileTypes: AcceptedFileTypes;
  errors: any;
  lang: string;
  tools: tools;
}
export const FileInputForm: React.FC<FileInputFormProps> = ({
  data,
  acceptedFileTypes,
  errors,
  lang,
  tools,
}) => {
  const path = data.to.replace("/", "") as Paths;
  const errorMessage = useSelector(
    (state: { tool: ToolState }) => state.tool.errorMessage,
  );
  const fileName = useSelector(
    (state: { tool: ToolState }) => state.tool.fileName,
  );
  const toolState = useSelector(selectToolState);

  const dispatch = useDispatch();
  // file store
  const { files, setFiles, setFileInput, setSubmitBtn, setDownloadBlob } =
    useFileStore();

  // refs
  const fileInput = useRef<HTMLInputElement | null>(null);
  const submitBtn = useRef<HTMLButtonElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const setupRefs = () => {
      setLoaded(true);
      setFileInput(fileInput);
      setSubmitBtn(submitBtn);
    };

    if ("requestIdleCallback" in window) {
      const id = requestIdleCallback(setupRefs, { timeout: 3000 });
      return () => cancelIdleCallback(id);
    } else {
      // Fallback for older browsers
      if (document.readyState === "complete") {
        setupRefs();
      } else {
        document.addEventListener("DOMContentLoaded", setupRefs, {
          once: true,
        });
        return () =>
          document.removeEventListener("DOMContentLoaded", setupRefs);
      }
    }
  }, [setFileInput, setSubmitBtn]);
  return (
    <form
      onClick={(e) => {
        e.stopPropagation();
      }}
      onSubmit={(e) => {
        const uploadState: SplitPDFUploadState = {
          path: "split-pdf", // Your API endpoint
          errorMessage: toolState.errorMessage,
          fileName: toolState.fileName || files[0]?.name || "",

          // Split PDF specific state from Redux
          splitMode: toolState.splitMode,
          pageCount: toolState.pageCount,
        };
        // Add mode-specific parameters
        if (toolState.splitMode === "split_by_range") {
          uploadState.rangeMode = toolState.rangeMode;

          if (toolState.rangeMode === "custom_range") {
            // Convert customRanges to format without id
            uploadState.customRanges = toolState.customRanges.map((range) => ({
              from: range.from,
              to: range.to,
            }));
            uploadState.mergeRanges = toolState.mergeRanges;
          } else if (toolState.rangeMode === "fixed_range") {
            uploadState.fixedRangeValue = toolState.fixedRangeValue;
          }
        } else if (toolState.splitMode === "extract_pages") {
          uploadState.extractMode = toolState.extractMode;
          uploadState.selectedPages = toolState.selectedPages;

          if (toolState.extractMode === "select_pages") {
            uploadState.mergeExtracted = toolState.mergeExtracted;
          }
        }
        handleUpload(e, dispatch, uploadState, files, errors, setDownloadBlob);
      }}
      method="POST"
      encType="multipart/form-data"
    >
      <div
        className={`upload-btn ${path}${!loaded ? " border-0" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
        role="button"
      >
        {lang == "ar" ? (
          <bdi>
            {tools.select} {tools.files}
            <span className="text-uppercase">
              {data.type.replace(".", "")}
            </span>{" "}
          </bdi>
        ) : (
          <bdi>
            {tools.select}{" "}
            <span className="text-uppercase">{data.type.replace(".", "")}</span>{" "}
            {tools.files}
          </bdi>
        )}
        <Loading theme={data.to.replace("/", "")} show={!loaded} />
        <input
          type="file"
          name="files"
          accept={
            acceptedFileTypes[data.type as keyof typeof acceptedFileTypes]
          }
          multiple
          ref={fileInput}
          className={`position-absolute file-input${!loaded ? "border-0 opacity-0" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
          }}
          onChange={(e) => {
            handleChange(e, dispatch, setFiles, errors, files, path);
          }}
          disabled={!loaded}
        />
      </div>
      {/* <div className="my-4">
          </div> */}
      <button type="submit" ref={submitBtn} className="d-none">
        submit
      </button>
    </form>
  );
};
