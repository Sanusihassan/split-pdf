import { useFileStore } from "@/src/file-store";
import { ToolState } from "@/src/store";
import { getPageCount } from "@/src/utils";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectionAlert } from "./SelectionAlert";
import { edit_page } from "@/content";

export const ExtractAll = ({
  showExtractAll,
  content,
  lang,
}: {
  showExtractAll: boolean;
  content: edit_page["options"]["extract_pages_options"]["selection_alert_content"];
  lang: string;
}) => {
  const { files } = useFileStore();
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
  }, [pageCount]);
  return (
    <div className={`${showExtractAll ? "" : "d-none"}`}>
      <SelectionAlert selectedPages={pageCount} content={content} lang={lang} />
    </div>
  );
};
