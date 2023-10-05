import EllipsisIcon from "@/components/icons/Ellipsis";
import ImageWithLoader from "../ImageWithLoader";

export const RangeFileCard = ({
  image1Url,
  image2Url,
  loader_text,
  fromToEqual,
}: {
  image1Url: string;
  image2Url?: string;
  loader_text: string;
  fromToEqual: boolean;
}) => {
  return (
    <div
      className={`position-relative range-file-card${
        fromToEqual ? " one-item-grid" : ""
      }`}
    >
      {fromToEqual ? (
        <div className="only-child">
          <ImageWithLoader imageUrl={image1Url} loader_text={loader_text} />
        </div>
      ) : (
        <>
          <ImageWithLoader imageUrl={image1Url} loader_text={loader_text} />
          <EllipsisIcon className="icon" />
          <ImageWithLoader
            imageUrl={image2Url || ""}
            loader_text={loader_text}
          />
        </>
      )}
    </div>
  );
};
