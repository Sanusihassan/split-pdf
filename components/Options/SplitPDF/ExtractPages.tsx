import { useState } from "react";
import { useSelectedOption } from "../../../src/hooks/handleOptionClick";
import { ExtractAll } from "./ExtractPages/ExtractAll";
import { SelectPages } from "./ExtractPages/SelectPages";
import { useDispatch } from "react-redux";
import { setSelectedPages } from "@/src/store";

export const ExtractPages = ({
  showExtractPages,
}: {
  showExtractPages: boolean;
}) => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  // const handleOptionClick = (index: number) => {
  //   if (index == 0) {
  //     
  //   }

  // }
  const handleOptionClick = useSelectedOption(index, setIndex);
  return (
    <div
      className={`${showExtractPages ? "" : "d-none "
        }split-category extract-split`}
    >
      <h6 className="split-category-title">Extract Mode:</h6>
      <div className="btn-row">
        <button
          className={`btn ${index === 0 ? "active" : ""}`}
          onClick={() => {
            handleOptionClick(0);
            dispatch(setSelectedPages("all"));
          }}
          title="Extract all pages"
        >
          Extract all pages
        </button>
        <button
          className={`btn ${index === 1 ? "active" : ""}`}
          onClick={() => {
            handleOptionClick(1);
            dispatch(setSelectedPages(""));
          }}
          title="Select pages"
        >
          Select pages
        </button>
      </div>
      <ExtractAll showExtractAll={index == 0} />
      <SelectPages showSelectPages={index == 1} />
    </div>
  );
};
