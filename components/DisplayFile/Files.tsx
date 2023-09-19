import { Dispatch, SetStateAction, useEffect } from "react";
import type { errors as _ } from "../../content";
import ImageCard from "./ImageCard";
import FileCard from "./FileCard";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { isDraggableExtension } from "../../src/utils";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import store, { ToolState } from "../../src/store";
import { useFileStore } from "../../src/file-store";
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
