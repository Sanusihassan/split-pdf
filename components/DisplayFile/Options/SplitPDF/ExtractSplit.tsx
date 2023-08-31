import { ChangeEvent, useCallback, useState } from "react";
import { useSelectedOption } from "../../../../src/hooks/handleOptionClick";
import { InformationCircleIcon } from "@heroicons/react/solid";
import "pretty-checkbox/src/pretty-checkbox.scss";

import { Checkbox } from "pretty-checkbox-react";


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

      <div className="mt-0 alert alert-info">
        <InformationCircleIcon className="w-5 h-5" /> Every selected page of
        this PDF file will be converted in one PDF file.
        <strong>4 PDF</strong> will be created.
      </div>
    </div>
  );
};

export const ExtractSplit = ({
  showExtractSplit,
}: {
  showExtractSplit: boolean;
}) => {
  const [index, setIndex] = useState(0);
  const handleOptionClick = useSelectedOption(index, setIndex);
  // children
  const ExtractAll = () => {
    return (
      <>
        <div className="alert">Lorem ipsum dolor sit amet.</div>
      </>
    );
  };
  return (
    <div
      className={`${
        showExtractSplit ? "" : "d-none "
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
