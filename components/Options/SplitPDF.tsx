import { Row, Col } from "react-bootstrap";
import { useSelectedOption } from "../../src/hooks/handleOptionClick";
import { useState } from "react";
import { SplitByRange } from "./SplitPDF/SplitByRange";
import { ExtractPages } from "./SplitPDF/ExtractPages";
import RangeIcon from "../icons/RangeIcon";
import ExtractPagesIcon from "../icons/ExtractPagesIcon";
import { useDispatch, useSelector } from "react-redux";
import { ToolState, setLayout } from "@/src/store";
import { CheckCircleIcon } from "@heroicons/react/solid";
import type { edit_page } from "@/content";

function SplitPDF({ options, lang }: {
  options: edit_page["options"], lang: string;
}) {
  const [selectedOption, setSelectedOption] = useState(0);
  const handleOptionClick = useSelectedOption(
    selectedOption,
    setSelectedOption
  );
  const layout = useSelector(
    (state: { tool: ToolState }) => state.tool.layout
  );
  const dispatch = useDispatch();
  return (
    <div className="split-pdf-tool grid-body">
      <Row className="m-0 option-row">
        <Col xs={6} className="py-2">
          <div
            className={`option ${selectedOption === 0 ? "active" : ""}`}
            onClick={() => {
              handleOptionClick(0);
              dispatch(setLayout("range"));
            }}
          >
            <RangeIcon className="option-icon" />
            <CheckCircleIcon className={`icon check-icon${layout === "range" ? "" : " d-none"}`} />
            <span className="option-title">{options.split_by_range}</span>
          </div>
        </Col>
        <Col xs={6}>
          <div
            className={`option ${selectedOption === 1 ? "active" : ""}`}
            onClick={() => {
              handleOptionClick(1);
              dispatch(setLayout("extract"));
            }}
          >
            <ExtractPagesIcon className="option-icon" />
            <CheckCircleIcon className={`icon check-icon${layout === "extract" ? "" : " d-none"}`} />
            <span className="option-title">{options.extract_pages}</span>
          </div>
        </Col>
      </Row>
      <SplitByRange showSplitByRange={selectedOption == 0} content={options.split_by_range_options} lang={lang} />
      <ExtractPages showExtractPages={selectedOption == 1} content={options.extract_pages_options} lang={lang} />
    </div>
  );
}
export { SplitPDF };
