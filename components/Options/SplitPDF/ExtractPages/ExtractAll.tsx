import { useFileStore } from "@/src/file-store";
import { ToolState } from "@/src/store";
import { getPageCount } from "@/src/utils";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { SelectionAlert } from "./SelectionAlert";

export const ExtractAll = ({ showExtractAll }: { showExtractAll: boolean }) => {
  const { files } = useFileStore.getState();

  const [pageCount, setPageCount] = useState(0);
  const selectedFile = useSelector(
    (state: { tool: ToolState }) => state.tool.selectedFile
  );

  useEffect(() => {
    getPageCount(files, selectedFile, setPageCount);
  }, []);
  return (
    <div className={`${showExtractAll ? "" : "d-none"}`}>
      <SelectionAlert selectedPages={pageCount} />
    </div>
  );
};
