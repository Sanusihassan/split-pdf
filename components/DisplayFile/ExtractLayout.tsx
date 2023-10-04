import { FileCardProps } from "@/src/globalProps";
import FileCard from "./FileCard";
import { ToolState } from "@/src/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export const ExtractLayout = ({
  file,
  errors,
  loader_text,
  fileDetailProps,
  extension,
}: FileCardProps) => {
  const selectedPages = useSelector(
    (state: { tool: ToolState }) => state.tool.selectedPages
  );
  useEffect(() => {
    console.log("ExtractLayout => ", selectedPages)
  }, [selectedPages]);
  return (
    <>
      <FileCard
        errors={errors}
        file={file}
        loader_text={loader_text}
        fileDetailProps={fileDetailProps}
        extension={extension}
        layout="extract"
      />
    </>
  );
};
