//
import type { errors as _ } from "../../content";
import { useEffect, useState } from "react";
import { Loader } from "./Loader";
import {
  calculatePages,
  getFileDetailsTooltipContent,
  getNthPageAsImage,
  getPlaceHoderImageUrl,
} from "../../src/utils";
import { useDispatch } from "react-redux";
import ImageWithLoader from "./ImageWithLoader";
import { ActionProps } from "@/src/globalProps";
import React from "react";
type OmitFileName<T extends ActionProps> = Omit<T, "fileName" | "index">;
// import isEqual from "lodash.isequal";
import { RangeFileCard } from "./FileCard/RangeFileCard";
import { ExtractFileCard } from "./FileCard/ExtractFileCard";

type CardProps = OmitFileName<ActionProps> & {
  file: File;
  errors: _;
  loader_text: string;
  fileDetailProps: [string, string, string];
  range?: { from: number; to: number };
  layout?: "extract" | "range";
};

const FileCard = React.memo(
  ({
    file,
    errors,
    extension,
    loader_text,
    fileDetailProps,
    layout,
    range,
  }: CardProps) => {
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const [pageCount, setPageCount] = useState(0);
    const [tooltipSize, setToolTipSize] = useState("");
    const dispatch = useDispatch();

    let isSubscribed = true;
    let from: any, to: any;
    if (
      range &&
      range.from > 0 &&
      range.to > 0 &&
      range.from <= range.to &&
      layout &&
      layout === "range"
    ) {
      from = range.from;
      to = range.to;
    }
    const processFile = async () => {
      try {
        setImageUrls([]);
        if (extension && extension === ".pdf") {
          if (isSubscribed) {
            if (layout == "extract") {
              for (let i = 1; i <= pageCount; i += 1) {
                let url = await getNthPageAsImage(file, dispatch, errors, i);
                setImageUrls((prevUrls) => [...prevUrls, url]);
              }
            } else {
              if (from && to && from === to) {
                let startUrl = await getNthPageAsImage(
                  file,
                  dispatch,
                  errors,
                  from
                );
                setImageUrls((prevUrls) => [...prevUrls, startUrl]);
              } else {
                let startUrl = await getNthPageAsImage(
                  file,
                  dispatch,
                  errors,
                  from ? from : 1
                );
                let endUrl = await getNthPageAsImage(
                  file,
                  dispatch,
                  errors,
                  to ? to : pageCount > 0 ? pageCount : 2
                );
                setImageUrls((prevUrls) => [...prevUrls, startUrl]);
                setImageUrls((prevUrls) => [...prevUrls, endUrl]);
              }
            }
          }
        } else if (extension && extension !== ".jpg") {
          if (isSubscribed) {
            setImageUrls(
              !file.size
                ? ["/images/corrupted.png"]
                : [getPlaceHoderImageUrl(extension)]
            );
          }
        }
      } catch (error) {
        console.error("Error processing files:", error);
      }
    };
    useEffect(() => {
      (async () => {
        let size = await getFileDetailsTooltipContent(
          file,
          ...fileDetailProps,
          dispatch,
          errors
        );
        if ("number" !== typeof to || "number" !== typeof from) {
          let _pageCount = await calculatePages(file);
          setPageCount(_pageCount);
        }
        setToolTipSize(size);
      })();
      processFile();
      return () => {
        isSubscribed = false;
      };
    }, [extension, file, pageCount, range]);
    return (
      <>
        {imageUrls.length == 0 ? (
          <div className="initial-loader">
            <Loader loader_text={loader_text} animate={false} />
          </div>
        ) : null}
        <div className="pages">
          {layout == "extract" ? (
            imageUrls.map((imageUrl, index) => (
              <div key={index.toString()} className="position-relative">
                <ExtractFileCard index={index} />
                <ImageWithLoader
                  imageUrl={imageUrl}
                  loader_text={loader_text}
                />
              </div>
            ))
          ) : (
            <>
              <RangeFileCard
                image1Url={imageUrls[0]}
                image2Url={imageUrls[1]}
                loader_text={loader_text}
                fromToEqual={from && to && from === to}
              />
            </>
          )}
        </div>
      </>
    );
  },
  // (prevProps, nextProps) => isEqual(prevProps.range, nextProps.range)
);

export default FileCard;
