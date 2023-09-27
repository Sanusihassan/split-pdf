import { Dispatch, SetStateAction, useEffect } from "react";
import type { errors as _ } from "../../content";
import { FileViewer } from "./FileViwer";

type FileProps = {
  errors: _;
  extension: string;
  toolTipSizes: string[];
  setToolTipSizes: Dispatch<SetStateAction<string[]>>;
  loader_text: string;
  showSpinner: boolean;
  fileDetailProps: [string, string, string];
};
const Files = ({
  errors,
  extension,
  toolTipSizes,
  loader_text,
  showSpinner,
  fileDetailProps,
}: FileProps) => {

  return (
    <>
      <div
        className="display-file"
      >
        <FileViewer
          errors={errors}
          loader_text={loader_text}
          fileDetailProps={fileDetailProps}
          extension={extension}
        />
      </div>
    </>
  );
};

export default Files;
