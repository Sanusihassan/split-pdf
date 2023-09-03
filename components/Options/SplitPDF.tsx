import { Row, Col } from "react-bootstrap";
import { useSelectedOption } from "../../src/hooks/handleOptionClick";
import { useState } from "react";
import { SplitByRange } from "./SplitPDF/SplitByRange";
import { ExtractPages } from "./SplitPDF/ExtractPages";
import RangeIcon from "../icons/RangeIcon";
import ExtractPagesIcon from "../icons/ExtractPagesIcon";

function SplitPDF() {
  const [selectedOption, setSelectedOption] = useState(0);
  const handleOptionClick = useSelectedOption(
    selectedOption,
    setSelectedOption
  );
  return (
    <div className="split-pdf-tool grid-body">
      <Row className="m-0 option-row">
        <Col xs={6}>
          <div
            className={`option ${selectedOption === 0 ? "active" : ""}`}
            onClick={() => handleOptionClick(0)}
          >
            <RangeIcon className="option-icon" />
            <span className="option-title">Split by range</span>
          </div>
        </Col>
        <Col xs={6}>
          <div
            className={`option ${selectedOption === 1 ? "active" : ""}`}
            onClick={() => handleOptionClick(1)}
          >
            <ExtractPagesIcon className="option-icon" />
            <span className="option-title">Extract Pages</span>
          </div>
        </Col>
      </Row>
      {selectedOption == 0 ? <SplitByRange /> : null}
      <ExtractPages showExtractPages={selectedOption == 1} />
    </div>
  );
}
export { SplitPDF };
