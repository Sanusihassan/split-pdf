import { useEffect } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { useRouter } from "next/router";
import { validateFiles } from "../src/utils";
import type { errors as _, edit_page } from "../content";
import { useSelector, useDispatch } from "react-redux";
import {
  ToolState,
  resetErrorMessage,
  setField
} from "../src/store";
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
  useEffect(() => {
    let isSubscribed = true;
    return () => {
      isSubscribed = false;
    };
  }, [extension]);

  return (
    <>
      <div className="display-file">
        <FileViewer
          errors={errors}
          loader_text={edit_page["loader_text"]}
          fileDetailProps={[pages, page, lang]}
          extension={extension}
          select_files_placeholder={edit_page["select_files_placeholder"]}
        />
      </div>
    </>
  );
};

export default DisplayFile;
