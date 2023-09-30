import type { errors as _ } from "../../content";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
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
import EllipsisIcon from "../icons/Ellipsis";
type OmitFileName<T extends ActionProps> = Omit<T, "fileName" | "index">;

type CardProps = OmitFileName<ActionProps> & {
  file: File;
  errors: _;
  loader_text: string;
  fileDetailProps: [string, string, string];
  index?: number | string;
  range?: { from: number; to: number };
  layout?: "extract" | "range"
};

const RangeFileCard = ({
  image1Url,
  image2Url,
  loader_text
}: {
  image1Url: string;
  image2Url: string;
  loader_text: string;
}) => {
  return (
    <div
      className="position-relative"
    >
      <ImageWithLoader imageUrl={image1Url} loader_text={loader_text} />
      <EllipsisIcon className="icon" />
      <ImageWithLoader imageUrl={image2Url} loader_text={loader_text} />
    </div>
  )
}

const FileCard = ({
  file,
  errors,
  extension,
  loader_text,
  fileDetailProps,
  range,
  layout
}: CardProps) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [tooltipSize, setToolTipSize] = useState("");
  const dispatch = useDispatch();
  let isSubscribed = true;
  let from: any, to: any;
  if (range && (range.from > 0 && range.to > 0) && (range.from <= range.to) && (layout && layout === "range")) {
    from = range.from;
    to = range.to;
  }
  const processFile = async () => {
    try {
      setImageUrls([]);
      if (extension && extension === ".pdf") {
        if (isSubscribed) {
          if (layout === "extract") {
            for (let i = 1; i <= pageCount; i += 1) {
              let url = await getNthPageAsImage(file, dispatch, errors, i);
              setImageUrls(prevUrls => [...prevUrls, url]);
            }
          } else {
            console.log(from, to)
            let startUrl = await getNthPageAsImage(file, dispatch, errors, (from ? from : 1));
            let endUrl = await getNthPageAsImage(file, dispatch, errors, (to ? to : (pageCount > 0 ? pageCount : 2)));
            setImageUrls(prevUrls => [...prevUrls, startUrl]);
            setImageUrls(prevUrls => [...prevUrls, endUrl]);
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
      if ("number" !== typeof (to) || "number" !== typeof (from)) {
        let _pageCount = await calculatePages(file);
        setPageCount(_pageCount);
      }
      setToolTipSize(size);
    })();
    processFile();
    return () => {
      isSubscribed = false;
    };
  }, [extension, file, pageCount, from, to]);
  return (
    <>
      {imageUrls.length == 0 ?
        <div className="initial-loader">
          <Loader loader_text={loader_text} animate={false} />
        </div>
        : null}
      <div className="pages">
        {
          layout == "range" ?
            imageUrls.map((imageUrl, index) => (
              <div
                key={index.toString()}
                className="position-relative"
              >
                <ImageWithLoader imageUrl={imageUrl} loader_text={loader_text} />
              </div>
            )) : <RangeFileCard image1Url={imageUrls[0]} image2Url={imageUrls[1]} loader_text={loader_text} />}
      </div>
    </>
  );
};

export default FileCard;
