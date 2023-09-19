import { useEffect, useState, RefObject, useContext } from "react";
import "react-tooltip/dist/react-tooltip.css";

import {
  getFileDetailsTooltipContent,
  getPlaceHoderImageUrl,
  isDraggableExtension,
} from "../src/utils";

import { useRouter } from "next/router";

import { validateFiles } from "../src/utils";

import type { errors as _, edit_page } from "../content";
import Files from "./DisplayFile/Files";
// import { ToolStoreContext } from "../src/ToolStoreContext";
import { useSelector, useDispatch } from "react-redux";
import { ToolState, resetErrorMessage, setPath } from "../src/store";
import { useFileStore } from "../src/file-store";
type propTypes = {
  extension: string;
  pages: string;
  page: string;
  lang: string;
  errors: _;
  edit_page: edit_page;
};

const DisplayFile = ({
  extension,
  pages,
  page,
  lang,
  errors,
  edit_page,
}: propTypes) => {
  const [showSpinner, setShowSpinner] = useState(true);
  const [toolTipSizes, setToolTipSizes] = useState<string[]>([]);
  // actual files
  const { files, setFiles, imageUrls, setImageUrls } = useFileStore.getState();
  const state = useSelector((state: { tool: ToolState }) => state.tool);
  const dispatch = useDispatch();
  // router
  const router = useRouter();
  let path = router.asPath.replace(/^\/[a-z]{2}\//, "").replace(/^\//, "");
  useEffect(() => {
    if (state.path == "" || state.path !== path) {
      dispatch(setPath(path));
    }
    const isValid = validateFiles(files, extension, errors, dispatch, state);
    if (isValid) {
      dispatch(resetErrorMessage());
    }
    // const max_files = 2;
    // if (state && files.length > max_files) {
    //   state?.setErrorMessage(errors.MAX_FILES_EXCEEDED.message);
    // }
    let isSubscribed = true;
    console.log(toolTipSizes);
    return () => {
      isSubscribed = false;
    };
  }, [extension, state.rerender]);
  const handleDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
  };

  return (
    <>
      <Files
        errors={errors}
        extension={extension}
        setToolTipSizes={setToolTipSizes}
        toolTipSizes={toolTipSizes}
        loader_text={edit_page.loader_text}
        showSpinner={showSpinner}
        fileDetailProps={[pages, page, lang]}
      />
    </>
  );
};

export default DisplayFile;
