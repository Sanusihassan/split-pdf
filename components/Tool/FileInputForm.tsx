import React, { useEffect, useRef } from "react";
// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// store
import { ToolState, setClick, setFocus } from "../../src/store";
import { handleUpload } from "../../src/handlers/handleUpload";
import { handleChange } from "../../src/handlers/handleChange";
import { useFileStore } from "../../src/file-store";
// types
import type { tools } from "../../content";
import { useRouter } from "next/router";
import { validateFiles } from "../../src/utils";
type AcceptedFileTypes = {
  [key in ".pdf" | ".pptx" | ".docx" | ".xlsx" | ".jpg" | ".html"]: string;
};
interface FileInputFormProps {
  data: {
    type: string;
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
  // redux state
  const statePath = useSelector(
    (state: { tool: ToolState }) => state.tool.path
  );
  const stateFocus = useSelector(
    (state: { tool: ToolState }) => state.tool.focus
  );
  const stateClick = useSelector(
    (state: { tool: ToolState }) => state.tool.click
  );
  const errorMessage = useSelector(
    (state: { tool: ToolState }) => state.tool.errorMessage
  );
  const rangeType = useSelector(
    (state: { tool: ToolState }) => state.tool.rangeType
  );
  const layout = useSelector((state: { tool: ToolState }) => state.tool.layout);
  const fixedRanges = useSelector(
    (state: { tool: ToolState }) => state.tool.fixedRanges
  );
  const ranges = useSelector((state: { tool: ToolState }) => state.tool.ranges);
  const selectedPages = useSelector(
    (state: { tool: ToolState }) => state.tool.selectedPages
  );
  const merge = useSelector((state: { tool: ToolState }) => state.tool.merge);
  const dispatch = useDispatch();
  // file store
  const {
    files,
    setFiles,
    setFileInput,
    setDownloadBtn,
    setSubmitBtn,
    filesLengthOnSubmit,
    setFilesLengthOnSubmit,
  } = useFileStore();
  // refs
  const fileInput = useRef<HTMLInputElement>(null);
  const submitBtn = useRef<HTMLButtonElement>(null);
  const downloadBtn = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    setFileInput(fileInput);
    setSubmitBtn(submitBtn);
    setDownloadBtn(downloadBtn);
    window.addEventListener("focus", () => {
      dispatch(setFocus(true));
      dispatch(setClick(false));
      // if (state.click !== state.focus && (!files.length || files.length == 1)) {
      // t = setInterval(() => {
      validateFiles(files, data.type, errors, dispatch, {
        path: statePath,
        focus: stateFocus,
        click: stateClick,
      });
      // }, 3000);
      // }
    });
  }, [rangeType]);
  // path
  const router = useRouter();
  let path = router.asPath.replace(/^\/[a-z]{2}\//, "").replace(/^\//, "");
  return (
    <form
      onClick={(e) => {
        e.stopPropagation();
      }}
      onSubmit={(e) =>
        handleUpload(
          e,
          downloadBtn,
          dispatch,
          errorMessage,
          files,
          errors,
          filesLengthOnSubmit,
          rangeType == "custom" ? ranges : fixedRanges,
          selectedPages,
          setFilesLengthOnSubmit,
          merge,
          layout
        )
      }
      method="POST"
      encType="multipart/form-data"
    >
      <div
        className={`upload-btn btn btn-lg text-white position-relative overflow-hidden ${path}`}
        onClick={(e) => {
          e.stopPropagation();
          dispatch(setClick(true));
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
        <input
          type="file"
          name="files"
          accept={
            acceptedFileTypes[data.type as keyof typeof acceptedFileTypes]
          }
          multiple={statePath !== "split-pdf" && statePath !== "pdf-to-pdf-a"}
          ref={fileInput}
          className="position-absolute file-input"
          onClick={(e) => {
            e.stopPropagation();
          }}
          onChange={(e) => {
            handleChange(e, dispatch, setFiles, data.type, errors, files, {
              path: statePath,
              focus: stateFocus,
              click: stateClick,
            });
          }}
        />
      </div>
      <a
        href=""
        className="d-none"
        ref={downloadBtn}
        download="__output.pdf"
      ></a>
      {/* <div className="my-4">
          </div> */}
      <button type="submit" ref={submitBtn} className="d-none">
        submit
      </button>
    </form>
  );
};
