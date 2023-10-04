import { useRouter } from "next/router";
import DisplayFile from "./DisplayFile";
import { useEffect, useRef, useState } from "react";

import Options from "./DisplayFile/Options";
import type { edit_page } from "../content";
import ErrorElement from "./ErrorElement";
import type { errors as _ } from "../content";
import { CogIcon } from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  ToolState,
  resetErrorMessage,
  setPath,
  setShowOptions,
} from "../src/store";
import { useFileStore } from "../src/file-store";
import AddMoreButton from "./EditArea/AddMoreButton";
import { SubmitBtn } from "./EditArea/SubmitBtn";

type editPageProps = {
  extension: string;
  edit_page: edit_page;
  pages: string;
  page: string;
  lang: string;
  errors: _;
};

const EditPage = ({
  extension,
  edit_page,
  pages,
  page,
  lang,
  errors,
}: editPageProps) => {
  const [isOnline, setIsOnline] = useState(true);
  const handleOnlineStatus = () => setIsOnline(true);
  const handleOfflineStatus = () => setIsOnline(false);
  // const [showOptions, setShowOptions] = useState(false);
  const errorCode = useSelector(
    (state: { tool: ToolState }) => state.tool.errorCode
  );
  const statePath = useSelector(
    (state: { tool: ToolState }) => state.tool.path
  );
  const showTool = useSelector(
    (state: { tool: ToolState }) => state.tool.showTool
  );
  const navHeight = useSelector(
    (state: { tool: ToolState }) => state.tool.nav_height
  );
  const showOptions = useSelector(
    (state: { tool: ToolState }) => state.tool.showOptions
  );
  const dispatch = useDispatch();
  // actual files;
  const { files, fileInput } = useFileStore.getState();
  useEffect(() => {
    if (errorCode == "ERR_NO_FILES_SELECTED" && files.length > 0) {
      dispatch(resetErrorMessage());
    }
    if (statePath !== k) {
      dispatch(setPath(k));
    }
  }, [errorCode]);

  const router = useRouter();
  let k = router.asPath.replace(/^\/[a-z]{2}\//, "").replace(/^\//, "");
  const gearRef = useRef(null);
  return (
    <aside className={`edit-page ${showTool || showTool ? "d-none" : ""}`}>
      <section className="edit-area position-relative">
        <DisplayFile
          extension={extension}
          pages={pages}
          page={page}
          lang={lang}
          errors={errors}
          edit_page={edit_page}
        />
        {/* {state?.showErrorMessage ? <ErrorElement state={state} /> : null} */}
        <ErrorElement />
        <AddMoreButton
          onClick={() => {
            if (fileInput) {
              fileInput?.current?.click();
            }
          }}
          lang={lang}
          path={statePath}
          text={edit_page.add_more_button}
        />
        {/* when clicking on this */}
        <button
          className="gear-button btn btn-light"
          onClick={() => {
            dispatch(setShowOptions(!showOptions));
          }}
          ref={gearRef}
          style={
            showOptions
              ? {
                  top:
                    navHeight +
                    (gearRef.current
                      ? (gearRef.current as HTMLElement).clientHeight
                      : 0),
                }
              : {}
          }
        >
          <CogIcon className="w-6 h-6 me-2 gear-icon" />
        </button>
      </section>
      <section
        className={`options bg-white ${showOptions ? " expanded" : ""}`}
        style={
          showOptions
            ? {
                top: navHeight,
              }
            : {}
        }
      >
        <h5 className="text-uppercase grid-header">
          <bdi>
            {
              edit_page.edit_page_titles[
                k.replace(/-/g, "_") as keyof typeof edit_page.edit_page_titles
              ]
            }
          </bdi>
        </h5>
        {/* {"development" == process.env.NODE_ENV ? (
          ) : null} */}
        <Options edit_page={edit_page} />
        <SubmitBtn k={k} edit_page={edit_page} />
      </section>
    </aside>
  );
};

export default EditPage;
