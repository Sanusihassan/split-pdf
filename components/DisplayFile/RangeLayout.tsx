import { ToolState } from "@/src/store";
import FileCard from "./FileCard";
// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { errors } from "@/content";
import { useEffect } from "react";
import React from "react";

interface RangeProps {
  file: File;
  errors: errors;
  loader_text: string;
  fileDetailProps: [string, string, string];
  extension: string;
}

export const RangeLayout = React.memo(
  ({ file, errors, loader_text, fileDetailProps, extension }: RangeProps) => {
    const ranges = useSelector(
      (state: { tool: ToolState }) => state.tool.ranges
    );
    useEffect(() => {
      console.log("component updated");
    }, [ranges]);
    return (
      <div className="range-layout mt-2">
        {ranges.map((range, i) => (
          <div className="range" key={i}>
            <h6 className="text-uppercase">range {i + 1}</h6>
            <FileCard
              errors={errors}
              file={file}
              loader_text={loader_text}
              fileDetailProps={fileDetailProps}
              extension={extension}
              layout="range"
              key={i}
              range={range}
            />
          </div>
        ))}
      </div>
    );
  }
);
