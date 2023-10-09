import { useFileStore } from "@/src/file-store";
import { ToolState } from "@/src/store";
import { getPageCount } from "@/src/utils";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectionAlert } from "./SelectionAlert";

export const ExtractAll = ({ showExtractAll }: { showExtractAll: boolean }) => {
  const { files } = useFileStore.getState();
  const selectedFile = useSelector(
    (state: { tool: ToolState }) => state.tool.selectedFile
  );
  const pageCount = useSelector(
    (state: { tool: ToolState }) => state.tool.pageCount
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!pageCount) {
      getPageCount(files, selectedFile, dispatch);
    }
    console.log(pageCount)
  }, [pageCount]);
  return (
    <div className={`${showExtractAll ? "" : "d-none"}`}>
      <SelectionAlert selectedPages={pageCount} />
    </div>
  );
};
