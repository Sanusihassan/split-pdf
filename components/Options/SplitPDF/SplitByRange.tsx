import { useState } from "react";
import { useSelectedOption } from "../../../src/hooks/handleOptionClick";
import { CustomRange } from "./SplitByRange/CustomRange";
import { FixedRange } from "./SplitByRange/FixedRange";
import { useDispatch } from "react-redux";
import { setRangeType } from "@/src/store";
import { edit_page } from "@/content";

export const SplitByRange = ({
  showSplitByRange,
  content,
  lang
}: {
  showSplitByRange: boolean;
  content: edit_page["options"]["split_by_range_options"];
  lang: string;
}) => {
  const [index, setIndex] = useState(0);
  const handleOptionClick = useSelectedOption(index, setIndex);
  const dispatch = useDispatch();
  return (
    <div
      className={`${showSplitByRange ? "" : "d-none "
        }split-category range-split`}
    >
      <header className="header">
        <h6 className="split-category-title header">{content.range_mode}</h6>
        <div className="row justify-content-between btn-row">
          <button
            className={`btn ${index === 0 ? "active" : ""}`}
            onClick={() => {
              handleOptionClick(0);
              dispatch(setRangeType("custom"));
            }}
          >
            {content.custom_range}
          </button>
          <button
            className={`btn ${index === 1 ? "active" : ""}`}
            onClick={() => {
              handleOptionClick(1);
              dispatch(setRangeType("fixed"));
            }}
          >
            {content.fixed_range}
          </button>
        </div>
      </header>
      <section className="body">
        <CustomRange display={index === 0} content={content.custom_range_options} />
        <FixedRange display={index === 1} content={content.fixed_range_options} lang={lang} />
      </section>
    </div>
  );
};
