import { useEffect } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { useRouter } from "next/router";
import { validateFiles } from "../src/utils";
import type { errors as _, edit_page } from "../content";
import { useSelector, useDispatch } from "react-redux";
import { ToolState, resetErrorMessage, setErrorMessage, setPath } from "../src/store";
import { useFileStore } from "../src/file-store";
import { FileViewer } from "./DisplayFile/FileViwer";
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
  // actual files
  const { files } = useFileStore.getState();
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
    const max_files = 5;
    if (state && files.length > max_files) {
      dispatch(setErrorMessage(errors.MAX_FILES_EXCEEDED.message));
    }
    let isSubscribed = true;
    return () => {
      isSubscribed = false;
    };
  }, [extension]);


  return (
    <>
      <div
        className="display-file"
      >
        <FileViewer
          errors={errors}
          loader_text={edit_page["loader_text"]}
          fileDetailProps={[pages, page, lang]}
          extension={extension}
        />
      </div>
    </>
  );
};

export default DisplayFile;
