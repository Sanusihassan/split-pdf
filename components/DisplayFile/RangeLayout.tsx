import { ToolState } from "@/src/store";
import FileCard from "./FileCard"
// import { useEffect, useState } from "react";
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
    // this is displaying a range of pages from the selected pages
    /**
     * for example ranges: [
     *  {from: 1, to: 2}
     *  {from: 2, to: 3}
     *  {from: 3, to: 3}
     * ]
     * this should display 3 FileCard components each displays pages fom the from property to the to property
     * that's working fine, but when updating any of the from or the to property of any range in the ranges array, they all update at once
     * i want each FileCard component to be individual component and doesn't respond to changes in other ranges unless the change is in it's range object
     * or in other words is it possible to change one range in the ranges array and not alter the entire array?
     */
    return (
        <div className="range-layout mt-2">
            {
                state.ranges.map((range, i) => (
                    <div className="range" key={i}>
                        <h6 className="text-uppercase">range {i + 1}</h6>
                        <FileCard
                            errors={errors} file={file}
                            loader_text={loader_text}
                            fileDetailProps={fileDetailProps}
                            extension={extension}
                            range={range}
                            layout="range"
                        // from={range.from > 0 && range.from <= range.to ? range.from : undefined}
                        // to={range.to > 0 && range.to >= range.from ? range.to : undefined}
                        />
                    </div>
                ))
            }
        </div>
    )
}