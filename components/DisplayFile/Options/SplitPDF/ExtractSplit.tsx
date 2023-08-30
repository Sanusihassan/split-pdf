import { ChangeEvent, useState } from "react";
import { useSelectedOption } from "../../../../src/hooks/handleOptionClick";
import { InformationCircleIcon } from "@heroicons/react/solid";

export const ExtractSplit = () => {
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
  const SelectAll = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
    };

    return (
      <div className="select-all">
        <h6 className="title">Pages to Extract:</h6>
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="example: 2,8-32"
          />
          <div className="input-group merge-input">
            <label htmlFor="b" className="ml-1 lead">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
                name="a"
                id="b"
                // className="form-control"
              />
              Merge extracted pdf in one pdf file.
            </label>
          </div>
        </form>
        <div className="alert alert-info">
          <InformationCircleIcon className="w-5 h-5" /> Every selected page of
          this PDF file will be converted in one PDF file.
          <strong>4 PDF</strong> will be created.
        </div>
      </div>
    );
  };
  return (
    <div className="split-category extract-split">
      <h6 className="split-category-title">Extract Mode:</h6>
      <div className="btn-row">
        <button
          className={`btn ${index === 0 ? "active" : ""}`}
          onClick={() => handleOptionClick(0)}
        >
          Extract all pages
        </button>
        <button
          className={`btn ${index === 1 ? "active" : ""}`}
          onClick={() => handleOptionClick(1)}
        >
          Select pages
        </button>
      </div>
      {index == 0 ? <ExtractAll /> : null}
      {index == 1 ? <SelectAll /> : null}
    </div>
  );
};
