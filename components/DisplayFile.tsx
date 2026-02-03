import { useEffect, useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import type { errors as _, edit_page } from "../src/content";
import Files from "./DisplayFile/Files";
import type { Paths } from "../src/content/content";
type propTypes = {
  extension: string;
  errors: _;
  drop_files: string;
  path: Paths;
  fileCard: edit_page["fileCard"];
};

const DisplayFile = ({
  extension,
  errors,
  drop_files,
  path,
  fileCard,
}: propTypes) => {
  // const [toolTipSizes, setToolTipSizes] = useState<string[]>([]);

  useEffect(() => {
    // const isValid = validateFiles(files, extension, errors, dispatch, {
    //   path: statePath,
    // });
    // if (isValid) {
    //   dispatch(resetErrorMessage());
    // }
  }, [extension]);

  return (
    <>
      <Files
        errors={errors}
        drop_files={drop_files}
        path={path}
        fileCard={fileCard}
      />
    </>
  );
};

export default DisplayFile;
