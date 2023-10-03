import { Row, Col } from "react-bootstrap";
import { useSelectedOption } from "../../src/hooks/handleOptionClick";
import { useState } from "react";
import { SplitByRange } from "./SplitPDF/SplitByRange";
import { ExtractPages } from "./SplitPDF/ExtractPages";
import RangeIcon from "../icons/RangeIcon";
import ExtractPagesIcon from "../icons/ExtractPagesIcon";
import { useDispatch } from "react-redux";
import { setLayout } from "@/src/store";

function SplitPDF() {
  const [selectedOption, setSelectedOption] = useState(0);
  const handleOptionClick = useSelectedOption(
    selectedOption,
    setSelectedOption
  );
  const dispatch = useDispatch();
  return (
    <div className="split-pdf-tool grid-body">
      <Row className="m-0 option-row">
        <Col xs={6}>
          <div
            className={`option ${selectedOption === 0 ? "active" : ""}`}
            onClick={() => {
              handleOptionClick(0);
              dispatch(setLayout("range"));
            }}
          >
            <RangeIcon className="option-icon" />
            <span className="option-title">Split by range</span>
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
            <span className="option-title">Extract Pages</span>
          </div>
        </Col>
      </Row>
      <SplitByRange showSplitByRange={selectedOption == 0} />
      <ExtractPages showExtractPages={selectedOption == 1} />
    </div>
  );
}
export { SplitPDF };
