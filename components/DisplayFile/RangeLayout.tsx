import { ToolState } from "@/src/store";
import FileCard from "./FileCard"
// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { errors } from "@/content";
import { memo, useContext, useEffect } from "react";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { RangeContext } from "@/pages/_app";

interface RangeProps {
    file: File;
    errors: errors;
    loader_text: string;
    fileDetailProps: [string, string, string];
    extension: string;
}

/**
 * the issue is that the RangeLayout is rerendering each time the ranges is changed,
 * and rerendering all the child FileCard components
 * but i want each FileCard component to react to it's own range passed to it and not all of them.
 */

export const RangeLayout = React.memo(({ file, errors, loader_text, fileDetailProps, extension }: RangeProps) => {
    const { ranges } = useContext(RangeContext);
    useEffect(() => {
        console.log("component updated");
    }, [])
    return (
        <div className="range-layout mt-2">
            {
                ranges.map((range, i) => (
                    <div className="range" key={i}>
                        <h6 className="text-uppercase">range {i + 1}</h6>
                        {React.useMemo(() => (
                            <FileCard
                                errors={errors} file={file}
                                loader_text={loader_text}
                                fileDetailProps={fileDetailProps}
                                extension={extension}
                                layout="range"
                                key={i}
                                range={range}
                            />), [range])}
                    </div>
                ))
            }
        </div>
    )
});

