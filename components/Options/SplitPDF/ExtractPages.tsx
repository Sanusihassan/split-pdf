import { useState } from "react";
import { useSelectedOption } from "../../../src/hooks/handleOptionClick";
import { ExtractAll } from "./ExtractPages/ExtractAll";
import { SelectPages } from "./ExtractPages/SelectPages";
import { useDispatch } from "react-redux";
import { setSelectedPages } from "@/src/store";
import { edit_page } from "@/content";

export const ExtractPages = ({
  showExtractPages,
  lang,
  content
}: {
  showExtractPages: boolean;
  content: edit_page["options"]["extract_pages_options"],
  lang: string;
}) => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const handleOptionClick = useSelectedOption(index, setIndex);
  return (
    <div
      className={`${showExtractPages ? "" : "d-none "
        }split-category extract-split`}
    >
      <h6 className="split-category-title">{content.extract_mode}</h6>
      <div className="btn-row">
        <button
          className={`btn ${index === 0 ? "active" : ""}`}
          onClick={() => {
            handleOptionClick(0);
            dispatch(setSelectedPages("all"));
          }}
          title={content.extract_all}
        >
          {content.extract_all}
        </button>
        <button
          className={`btn ${index === 1 ? "active" : ""}`}
          onClick={() => {
            handleOptionClick(1);
            dispatch(setSelectedPages(""));
          }}
          title={content.select_pages}
        >
          {content.select_pages}
        </button>
      </div>
      <ExtractAll showExtractAll={index == 0} content={content.selection_alert_content} lang={lang} />
      <SelectPages showSelectPages={index == 1} alert_content={content.selection_alert_content} lang={lang} content={content.select_pages_content} />
    </div>
  );
};
