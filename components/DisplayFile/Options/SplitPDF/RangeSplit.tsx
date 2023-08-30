import { useContext, useEffect, useState } from "react";
import { useSelectedOption } from "../../../../src/hooks/handleOptionClick";
// import { PlusIcon } from '@heroicons/react/outline';
import { useFileStore } from "../../../../src/file-store";

import {
  TrashIcon,
  InformationCircleIcon,
  PlusIcon,
} from "@heroicons/react/solid";
import { Row, Col } from "react-bootstrap";
import { calculatePages } from "../../../../src/utils";

export const RangeSplit = () => {
  const [ranges, setRanges] = useState<{ from: number; to: number }[]>([
    { from: 1, to: 3 },
  ]); // Add type annotation for `ranges`
  const [index, setIndex] = useState(0);
  const handleOptionClick = useSelectedOption(index, setIndex);

  const CustomRange = () => {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    const handleAddRangeClick = () => {
      if (from && to) {
        setRanges([...ranges, { from: parseInt(from), to: parseInt(to) }]);
        setFrom("");
        setTo("");
      }
    };

    const handleDeleteRangeClick = (index: number) => {
      setRanges(ranges.filter((range, i) => i !== index));
    };

    return (
      <>
        <div className="row mb-3 range-input">
          <div className="col">
            <input
              type="number"
              className="form-control"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="From"
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="To"
            />
          </div>
        </div>
        {ranges.map((range, i) => (
          <div className="row mb-3 range" key={i}>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <div className="row flex-nowrap justify-content-between align-items-center range-input-wrapper">
                    <div className="row flex-nowrap input-group">
                      <span className="input-group-text" id="basic-addon1">
                        From
                      </span>
                      <input
                        type="number"
                        className="form-control"
                        value={range.from}
                        onChange={(e) =>
                          setRanges(
                            ranges.map((r) =>
                              r.to === range.to
                                ? { ...r, from: parseInt(e.target.value, 10) }
                                : r
                            )
                          )
                        }
                        placeholder="From"
                      />
                    </div>
                    <div className="row flex-nowrap input-group">
                      <span className="input-group-text" id="basic-addon1">
                        To
                      </span>
                      <input
                        type="number"
                        className="form-control"
                        value={range.to}
                        onChange={(e) =>
                          setRanges(
                            ranges.map((r) =>
                              r.to === range.to
                                ? { ...r, to: parseInt(e.target.value, 10) }
                                : r
                            )
                          )
                        }
                        placeholder="To"
                      />
                    </div>
                    <div className="position-absolute delete-button">
                      <button
                        className="btn btn-link text-danger"
                        onClick={() => handleDeleteRangeClick(i)}
                      >
                        <TrashIcon className="icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="row justify-content-center add-btn">
          <button
            className="col-6 btn btn-dark row align-items-center"
            onClick={handleAddRangeClick}
          >
            <PlusIcon className="icon mr-2" />
            <span>Add Range</span>
          </button>
        </div>
      </>
    );
  };

  const FixedRange = () => {
    const [pages, setPages] = useState(1);
    // let pagesCount = 0;
    const [pageCount, setPageCount] = useState(0);
    const { files, setFiles } = useFileStore.getState();
    const getPageCount = async () => {
      if (files) {
        setPageCount(await calculatePages(files[0]));
      }
    };
    useEffect(() => {
      getPageCount();
    }, []);
    return (
      <>
        <Row className="fixed-range">
          <div className="input">
            <label className="col-7 label">split in page range of: </label>
            <input
              type="number"
              className="form-control"
              value={pages}
              onChange={(e) => setPages(parseInt(e.target.value))}
              placeholder="To"
            />
          </div>
          {/* i already have pdfjs-dist installed, i want a way to calculate the number of the pdf files would be created and insert that info in the "x PDF" part */}
          <div className="alert alert-info">
            <InformationCircleIcon className="w-5 h-5" /> This PDF will be split
            in files of {pages} pages{" "}
            <strong>
              {pages !== 0 ? pageCount / pages : parseInt(`${pageCount}`)} PDF
            </strong>{" "}
            will be created.
          </div>
        </Row>
      </>
    );
  };

  return (
    <div className="split-category range-split">
      <header className="header">
        <h6 className="split-category-title header">Range Mode:</h6>
        <div className="row justify-content-between btn-row">
          <button
            className={`btn ${index === 0 ? "active" : ""}`}
            onClick={() => handleOptionClick(0)}
          >
            custom range
          </button>
          <button
            className={`btn ${index === 1 ? "active" : ""}`}
            onClick={() => handleOptionClick(1)}
          >
            fixed range
          </button>
        </div>
      </header>
      <section className="body">
        {index === 0 ? <CustomRange /> : null}
        {index === 1 ? <FixedRange /> : null}
      </section>
    </div>
  );
};
