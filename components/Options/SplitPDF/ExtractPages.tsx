import { useCallback, useEffect, useState } from "react";
import { useSelectedOption } from "../../../src/hooks/handleOptionClick";
import { InformationCircleIcon } from "@heroicons/react/solid";
import "pretty-checkbox/src/pretty-checkbox.scss";
import { Checkbox } from "pretty-checkbox-react";
import { getPageCount } from "@/src/utils";
import { useFileStore } from "@/src/file-store";
import { ToolState } from "@/src/store";
import { useSelector } from "react-redux";

const SelectionAlert = ({ selectedPages }: { selectedPages: number }) => {
  return (
    <div className="alert alert-info">
      <InformationCircleIcon className="w-5 h-5" /> Every selected page of this
      PDF file will be converted in one PDF file.
      <strong>{selectedPages} PDF</strong> will be created.
    </div>
  );
};

const SelectAll = ({ showSelectAll }: { showSelectAll: boolean }) => {
  const [inputVal, setInputVal] = useState("");
  const [checked, setChecked] = useState(false);

  const onChange = useCallback(() => {
    setChecked((prev) => !prev);
  }, []);
  return (
    <div className={`${showSelectAll ? "" : "d-none "}select-all`}>
      <h6 className="title">Pages to Extract:</h6>
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="example: 2,8-32"
          value={inputVal}
          onChange={(e) => {
            console.log("changing...");
            setInputVal(e.target.value);
          }}
        />
        {/* <div className="input-group merge-input"> */}
        <Checkbox
          animation="smooth"
          color="primary"
          defaultChecked={checked}
          onChange={onChange}
          className="ml-1 my-3 mb-0"
        >
          Merge extracted pdf in one pdf file.
        </Checkbox>
        {/* </div> */}
      </form>

      <SelectionAlert selectedPages={0} />
    </div>
  );
};

export const ExtractPages = ({
  showExtractPages,
}: {
  showExtractPages: boolean;
}) => {
  const [index, setIndex] = useState(0);
  const handleOptionClick = useSelectedOption(index, setIndex);
  // children
  const ExtractAll = () => {
    const { files } = useFileStore.getState();
    const state = useSelector((state: { tool: ToolState }) => state.tool);
    const [pageCount, setPageCount] = useState(0);


    useEffect(() => {
      getPageCount(files, state, setPageCount);
    }, []);
    return (
      <>
        <SelectionAlert selectedPages={pageCount} />
      </>
    );
  };
  return (
    <div
      className={`${showExtractPages ? "" : "d-none "
        }split-category extract-split`}
    >
      <h6 className="split-category-title">Extract Mode:</h6>
      <div className="btn-row">
        <button
          className={`btn ${index === 0 ? "active" : ""}`}
          onClick={() => handleOptionClick(0)}
          title="Extract all pages"
        >
          Extract all pages
        </button>
        <button
          className={`btn ${index === 1 ? "active" : ""}`}
          onClick={() => handleOptionClick(1)}
          title="Select pages"
        >
          Select pages
        </button>
      </div>
      {index == 0 ? <ExtractAll /> : null}
      <SelectAll showSelectAll={index == 1} />
    </div>
  );
};
