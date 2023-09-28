import type { errors } from "@/content";
import { useFileStore } from "@/src/file-store";
import { SelectedFiles } from "./SelectedFiles";
import { ToolState, setSelectedFile } from "@/src/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RangeLayout } from "./RangeLayout";
import { v4 as uuidv4 } from 'uuid';
export const FileViewer = ({
    errors,
    loader_text,
    fileDetailProps,
    extension
}: {
    errors: errors;
    loader_text: string;
    fileDetailProps: [string, string, string];
    extension: string;
}) => {
    const { files } = useFileStore.getState();
    const state = useSelector((state: { tool: ToolState }) => state.tool);
    const dispatch = useDispatch();
    useEffect(() => {
        if (state.selectedFile == "" && files.length) {
            dispatch(setSelectedFile(files[0]!.name));
        }
    }, [state.selectedFile, files])
    return (<>
        <SelectedFiles />
        {files.map((file, i) => (
            file.name === state.selectedFile ?
                <RangeLayout
                    file={file}
                    errors={errors}
                    loader_text={loader_text}
                    fileDetailProps={fileDetailProps}
                    extension={extension}
                    key={uuidv4()}
                />
                : null
        ))}
        {/* {currentFile === undefined ? (
            <FileCard
                file={files[0]}
                errors={errors}
                loader_text={loader_text}
                fileDetailProps={fileDetailProps}
                extension={extension}
            />
        ) : (currentFile && (currentFile.name === state.selectedFile) ?
            <FileCard
                file={currentFile}
                errors={errors}
                loader_text={loader_text}
                fileDetailProps={fileDetailProps}
                extension={extension}
            /> : null)
        } */}
    </>);
}