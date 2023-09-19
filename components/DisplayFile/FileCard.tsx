import { ActionProps } from "./ActionDiv";
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
type OmitFileName<T extends ActionProps> = Omit<T, "fileName" | "index">;

type CardProps = OmitFileName<ActionProps> & {
  file: File;
  errors: _;
  loader_text: string;
  fileDetailProps: [string, string, string];
  index?: number | string;
};

const FileCard = ({
  file,
  errors,
  extension,
  loader_text,
  fileDetailProps,
}: CardProps) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [tooltipSize, setToolTipSize] = useState("");
  const dispatch = useDispatch();
  let isSubscribed = true;
  useEffect(() => {
    (async () => {
      let size = await getFileDetailsTooltipContent(
        file,
        ...fileDetailProps,
        dispatch,
        errors
      );
      let _pageCount = await calculatePages(file);
      setToolTipSize(size);
      setPageCount(_pageCount);
    })();
    const processFile = async () => {
      try {
        if (extension && extension === ".pdf") {
          if (isSubscribed) {
            for (let i = 1; i <= pageCount; i += 1) {
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
    processFile();
    return () => {
      isSubscribed = false;
    };
  }, [extension, file, pageCount]);
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
