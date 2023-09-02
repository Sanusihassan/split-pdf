import { useFileStore } from "@/src/file-store";
import { calculatePages } from "@/src/utils";
import { XIcon, PlusIcon } from "@heroicons/react/solid";
import { useCallback, useEffect, useState } from "react";
import { TypeWithdisplayProp } from "./FixedRange";
import { Checkbox } from "pretty-checkbox-react";

import { useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
const ItemTypes = {
  RANGE: 'range',
};

// Inside the mapping function
// const [{ isDragging }, drag] = useDrag<
//   { type: string; index: number },
//   unknown,
//   { isDragging: boolean }
// >({
//   item: { type: ItemTypes.RANGE, index: number },
//   collect: (monitor: DragSourceMonitor) => ({
//     isDragging: monitor.isDragging(),
//   }),
// });

// const [, drop] = useDrop<
//   { type: string; index: number },
//   unknown,
//   { isOver: boolean }
// >({
//   accept: ItemTypes.RANGE,
//   hover: (item, monitor) => {
//     const draggingIndex = item.index;
//     const targetIndex = i;

//     // Reorder the ranges array
//     if (draggingIndex !== targetIndex) {
//       setRanges((prevRanges) => {
//         const updatedRanges = [...prevRanges];
//         const draggingRange = updatedRanges[draggingIndex];
//         updatedRanges.splice(draggingIndex, 1);
//         updatedRanges.splice(targetIndex, 0, draggingRange);
//         return updatedRanges;
//       });
//     }
//   },
// });


export const CustomRange = ({ display }: TypeWithdisplayProp) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [checked, setChecked] = useState(false);
  const onChange = useCallback(() => {
    setChecked((prev) => !prev);
  }, []);
  const { files } = useFileStore.getState();
  const getPageCount = async () => {
    if (files) {
      setPageCount(await calculatePages(files[0]));
    }
  };
  useEffect(() => {
    getPageCount();
    setRanges([{ from: 1, to: pageCount }]);
  }, [pageCount, files]);

  const [ranges, setRanges] = useState<{ from: number; to: number }[]>([
    { from: 1, to: pageCount as number },
  ]);
  const handleAddRangeClick = () => {
    if (from && to) {
      setRanges([...ranges, { from: parseInt(from), to: parseInt(to) }]);
      setFrom("");
      setTo("");
    } else {
      if (ranges.length > 0) {
        const lastRange = ranges[ranges.length - 1];
        if (lastRange.to == pageCount) {
          setRanges([...ranges, { from: pageCount, to: pageCount }]);
        } else {
          setRanges([
            ...ranges,
            {
              from:
                lastRange.from + 1 < pageCount
                  ? lastRange.from + 1
                  : lastRange.from,
              to: pageCount,
            },
          ]);
        }
      } else {
        setRanges([...ranges, { from: 1, to: pageCount }]);
      }
    }
  };

  const handleDeleteRangeClick = (index: number) => {
    setRanges(ranges.filter((range, i) => i !== index));
  };

  return (
    <div className={`${display ? "" : "d-none "}`}>
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
      {/* consider these ranges, i want to make each range draggable and it should be only dragged and dropped on the y axis i.e vertically if you like. */}
      {ranges.map((range, i) => (
        <DndProvider backend={HTML5Backend}>
          <div className="row mb-3 range" key={i}>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h6 className="ignore-margin card-title split-category-title">
                    Range {i}
                  </h6>
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
                    {/* <div className="position-absolute delete-button"> */}
                    <button
                      className="btn btn-link text-danger"
                      onClick={() => handleDeleteRangeClick(i)}
                    >
                      <XIcon className="icon" />
                    </button>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DndProvider>
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
      <Checkbox
        animation="smooth"
        color="primary"
        defaultChecked={checked}
        onChange={onChange}
        className="ml-1 my-3 mb-0"
      >
        Merge all ranges in one PDF file.
      </Checkbox>
    </div>
  );
};
