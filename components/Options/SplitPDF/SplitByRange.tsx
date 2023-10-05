import { useState } from "react";
import { useSelectedOption } from "../../../src/hooks/handleOptionClick";
import { CustomRange } from "./SplitByRange/CustomRange";
import { FixedRange } from "./SplitByRange/FixedRange";
import { useDispatch } from "react-redux";
import { setRangeType } from "@/src/store";

export const SplitByRange = ({
  showSplitByRange,
}: {
  showSplitByRange: boolean;
}) => {
  const [index, setIndex] = useState(0);
  const handleOptionClick = useSelectedOption(index, setIndex);
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        showSplitByRange ? "" : "d-none "
      }split-category range-split`}
    >
      <header className="header">
        <h6 className="split-category-title header">Range Mode:</h6>
        <div className="row justify-content-between btn-row">
          <button
            className={`btn ${index === 0 ? "active" : ""}`}
            onClick={() => {
              handleOptionClick(0);
              dispatch(setRangeType("custom"));
            }}
          >
            custom range
          </button>
          <button
            className={`btn ${index === 1 ? "active" : ""}`}
            onClick={() => {
              handleOptionClick(1);
              dispatch(setRangeType("fixed"));
            }}
          >
            fixed range
          </button>
        </div>
      </header>
      <section className="body">
        <CustomRange display={index === 0} />
        <FixedRange display={index === 1} />
      </section>
    </div>
  );
};
