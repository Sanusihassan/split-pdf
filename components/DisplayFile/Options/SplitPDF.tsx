import { Row, Col } from "react-bootstrap";
import {
  ArrowsExpandIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/outline";
import { useSelectedOption } from "../../../src/hooks/handleOptionClick";
import { useState } from "react";
import { RangeSplit } from "./SplitPDF/RangeSplit";
import { ExtractSplit } from "./SplitPDF/ExtractSplit";

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
            <ArrowsExpandIcon className="option-icon" />
            <span className="option-title">Split by range</span>
          </div>
        </Col>
        <Col xs={6}>
          <div
            className={`option ${selectedOption === 1 ? "active" : ""}`}
            onClick={() => handleOptionClick(1)}
          >
            <DocumentDuplicateIcon className="option-icon" />
            <span className="option-title">Extract Pages</span>
          </div>
        </Col>
      </Row>
      {selectedOption == 0 ? <RangeSplit /> : null}
      {selectedOption == 1 ? <ExtractSplit /> : null}
    </div>
  );
}
export { SplitPDF };
