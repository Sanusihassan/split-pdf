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
type OmitFileName<T extends ActionProps> = Omit<T, "fileName" | "index">;

type CardProps = OmitFileName<ActionProps> & {
  file: File;
  errors: _;
  loader_text: string;
  fileDetailProps: [string, string, string];
  index?: number | string;
  from?: number;
  to?: number;
  setIsloaded?: Dispatch<SetStateAction<boolean>>

};

const FileCard = ({
  file,
  errors,
  extension,
  loader_text,
  fileDetailProps,
  from,
  to,
  setIsloaded
}: CardProps) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [tooltipSize, setToolTipSize] = useState("");
  const dispatch = useDispatch();
  let isSubscribed = true;
  const processFile = async () => {
    try {
      setImageUrls([]);
      if (extension && extension === ".pdf") {
        if (isSubscribed) {
          for (let i = "number" === typeof (from) ? from : 1; i <= ("number" === typeof (to) ? to : pageCount); i += 1) {
            let url = await getNthPageAsImage(file, dispatch, errors, i);
            setImageUrls(prevUrls => [...prevUrls, url]);
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
    if (setIsloaded) {
      setIsloaded(true);
    }
    (async () => {
      let size = await getFileDetailsTooltipContent(
        file,
        ...fileDetailProps,
        dispatch,
        errors
      );
      if ("number" !== typeof (to) && "number" !== typeof (from)) {
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
      <div className="pages">{
        imageUrls.map((imageUrl, index) => (
          <div
            key={index.toString()}
            className="position-relative"
          >
            <ImageWithLoader imageUrl={imageUrl} loader_text={loader_text} />
          </div>
        ))}
      </div>
    </>
  );
};

export default FileCard;
