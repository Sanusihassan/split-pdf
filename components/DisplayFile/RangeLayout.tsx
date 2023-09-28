import { ToolState } from "@/src/store";
import FileCard from "./FileCard"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { errors } from "@/content";

interface RangeProps {
    file: File;
    errors: errors;
    loader_text: string;
    fileDetailProps: [string, string, string];
    extension: string;
}

export const RangeLayout = ({ file, errors, loader_text, fileDetailProps, extension }: RangeProps) => {
    const state = useSelector((state: { tool: ToolState }) => state.tool);
    // useEffect(() => {
    //     console.log("ranges => ", state.ranges);
    // }, [state.ranges]);
    return (
        <div className="range-layout mt-1">
            {
                state.ranges.map((range, i) => (
                    <div className="range" key={i}>
                        <h6 className="text-uppercase">range {i + 1}</h6>
                        <FileCard
                            errors={errors} file={file}
                            loader_text={loader_text}
                            fileDetailProps={fileDetailProps}
                            extension={extension}
                            from={range.from > 0 && range.from < range.to ? range.from : undefined}
                            to={range.to > 0 && range.to > range.from ? range.to : undefined}
                        />
                    </div>
                ))
            }
        </div>
    )
}