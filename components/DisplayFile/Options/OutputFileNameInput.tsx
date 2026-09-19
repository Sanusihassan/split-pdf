import { useDispatch, useSelector } from "react-redux";
import type { edit_page } from "../../../src/content";
import { setField, type ToolState } from "../../../src/store";

import { useEffect, useRef } from "react";
import { useFileStore } from "../../../src/file-store";

const THEME_COLOR = "#fd7e14";

export const OutputFileNameInput = ({
  content,
}: {
  content: edit_page["fileNameInput"];
}) => {
  const dispatch = useDispatch();
  const { files } = useFileStore();
  const fileName = useSelector(
    (state: { tool: ToolState }) => state.tool.fileName,
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setField({ fileName: e.target.value }));
  };
  // Track whether we've already set the initial default filename
  const hasSetDefault = useRef(false);
  useEffect(() => {
    if (files.length && !fileName && !hasSetDefault.current) {
      dispatch(setField({ fileName: files[0].name.split(".")[0] }));
      hasSetDefault.current = true; // ensure we don't reset again
    }
  }, [files, fileName, dispatch]);

  return (
    <div className="my-6 mx-3">
      <label
        htmlFor="fileNameInput"
        className="block text-sm text-gray-700 mb-1.5"
      >
        {content.label}
      </label>
      <input
        type="text"
        id="fileNameInput"
        placeholder={content.placeholder}
        value={fileName}
        onChange={handleChange}
        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none"
        onFocus={(e) => {
          e.target.style.borderColor = THEME_COLOR;
          e.target.style.boxShadow = `0 0 0 2px ${THEME_COLOR}40`;
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "#e5e7eb";
          e.target.style.boxShadow = "none";
        }}
      />
      <div className="text-xs text-gray-500 mt-1.5">{content.helperText}</div>
    </div>
  );
};
