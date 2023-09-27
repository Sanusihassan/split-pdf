import type { errors } from "@/content";
import FileCard from "./FileCard";
import { useFileStore } from "@/src/file-store";
import { SelectedFiles } from "./SelectedFiles";
import { ToolState, setSelectedFile } from "@/src/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RangeLayout } from "./RangeLayout";
import { v4 as uuidv4 } from 'uuid';
{/* SelectedFiles is a dropdown of files to select to view, i want to display only one file (the selected one) if i've displayed the selected files the other ones should not be visible */ }
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
    // const _print = (...args: any) => {
    //     console.log(...args);
    //     return true;
    // }

    const dispatch = useDispatch();
    useEffect(() => {
        if (state.selectedFile == "" && files.length) {
            dispatch(setSelectedFile(files[0]!.name));
        }
    }, [state.selectedFile, files])
    return (<>
        <SelectedFiles />
        {files.map(file => (
            file.name === state.selectedFile ?
                <RangeLayout
                    file={file}
                    errors={errors}
                    loader_text={loader_text}
                    fileDetailProps={fileDetailProps}
                    extension={extension}
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