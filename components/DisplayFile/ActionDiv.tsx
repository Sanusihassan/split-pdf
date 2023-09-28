import { TrashIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { ToolState } from "../../src/store";
import { useFileStore } from "../../src/file-store";
import { ActionProps } from "@/src/globalProps";

export const ActionDiv = ({
  index,
  extension,
  errors,
  fileName,
}: ActionProps) => {
  const state = useSelector((state: { tool: ToolState }) => state.tool);
  // the files:
  const { files, setFiles } = useFileStore.getState();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //  const newFiles = store.files.filter((file) => file.name !== item.file.name);
    const newFiles = files.filter((file) => file.name !== fileName);
    setFiles(newFiles);
  };
  // const rotatedImageUrl = useRotatedImage(item.imageUrl);
  // router and tool path
  const router = useRouter();
  let path = router.asPath.replace(/^\/[a-z]{2}\//, "").replace(/^\//, "");
  // const handleRotateImage = useCallback(() => {
  //   if (rotatedImageUrl) {
  //     const newImageUrls = [...imageUrls];
  //     newImageUrls[index].imageUrl = rotatedImageUrl;
  //     setImageUrls(newImageUrls);
  //   }
  // }, [index, imageUrls, setImageUrls, rotatedImageUrl]);

  return (
    <div
      className={`action-div d-flex ${extension == ".html" ? "justify-content-end" : "justify-content-between"
        }`}
    >
      <button
        className="btn btn-light"
        onClick={(e) => handleClick(e)}
      >
        <TrashIcon className="icon hero-icon" />
      </button>

      {/* {extension != ".html" ? (
        <button className="btn btn-light" onClick={handleRotateImage}>
          <RefreshIcon className="hero-icon" />
        </button>
      ) : null} */}
    </div>
  );
};
