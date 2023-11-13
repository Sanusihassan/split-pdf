import type { errors } from "@/content";
import { useFileStore } from "@/src/file-store";
import { SelectedFiles } from "./SelectedFiles";
import { ToolState, setSelectedFile } from "@/src/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RangeLayout } from "./RangeLayout";
import { v4 as uuidv4 } from "uuid";
import { ExtractLayout } from "./ExtractLayout";
export const FileViewer = ({
  errors,
  loader_text,
  fileDetailProps,
  extension,
  select_files_placeholder,
}: {
  errors: errors;
  loader_text: string;
  fileDetailProps: [string, string, string];
  extension: string;
  select_files_placeholder: string;
}) => {
  const { files } = useFileStore();
  const selectedFile = useSelector(
    (state: { tool: ToolState }) => state.tool.selectedFile
  );
  const stateLayout = useSelector(
    (state: { tool: ToolState }) => state.tool.layout
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (selectedFile == "" && files.length) {
      dispatch(setSelectedFile(files[0]!.name));
    }
  }, [selectedFile, files, stateLayout]);
  return (
    <>
      <SelectedFiles select_files_placeholder={select_files_placeholder} />
      {files.map((file, i) =>
        file.name === selectedFile ? (
          stateLayout === "extract" ? (
            <ExtractLayout
              file={file}
              errors={errors}
              loader_text={loader_text}
              fileDetailProps={fileDetailProps}
              extension={extension}
              key={uuidv4()}
            />
          ) : (
            <RangeLayout
              file={file}
              errors={errors}
              loader_text={loader_text}
              fileDetailProps={fileDetailProps}
              extension={extension}
              key={uuidv4()}
            />
          )
        ) : null
      )}
      {/* {currentFile === undefined ? (
            <FileCard
                file={files[0]}
                errors={errors}
                loader_text={loader_text}
                fileDetailProps={fileDetailProps}
                extension={extension}
            />
        ) : (currentFile && (currentFile.name === selectedFile) ?
            <FileCard
                file={currentFile}
                errors={errors}
                loader_text={loader_text}
                fileDetailProps={fileDetailProps}
                extension={extension}
            /> : null)
        } */}
    </>
  );
};
