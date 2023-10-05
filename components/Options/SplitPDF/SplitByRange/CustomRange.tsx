// this is the component responsible for creating updating and deleting ranges:
import { useFileStore } from "@/src/file-store";
import { getPageCount } from "@/src/utils";
import { XIcon, PlusIcon } from "@heroicons/react/solid";
import { useCallback, useEffect, useState } from "react";
import { Checkbox } from "pretty-checkbox-react";
import { DragDropContext, Draggable, DropResult } from "react-beautiful-dnd";

import { Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { ToolState, setRanges } from "@/src/store";
import { TypeWithdisplayProp } from "@/src/globalProps";
import { useDispatch } from "react-redux";

type Ranges = {
  from: number;
  to: number;
}[];

const reorder = (
  list: Ranges,
  startIndex: number,
  endIndex: number
): Ranges => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

// the issue still occurs, i think because when updating any of them i'm updating them all at once
// and this is the code that does crud on the ranges:
export const CustomRange = ({ display }: TypeWithdisplayProp) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [pageCount, setPageCount] = useState(0);
  const [checked, setChecked] = useState(false);
  const handleCheckChange = useCallback(() => {
    setChecked((prev) => !prev);
  }, []);
  const { files } = useFileStore.getState();

  const selectedFile = useSelector(
    (state: { tool: ToolState }) => state.tool.selectedFile
  );
  const ranges = useSelector((state: { tool: ToolState }) => state.tool.ranges);
  // const { ranges, setRanges } = useContext(RangeContext);
  const dispatch = useDispatch();
  useEffect(() => {
    getPageCount(files, selectedFile, setPageCount);
    dispatch(setRanges([{ from: 1, to: pageCount > 0 ? pageCount : 1 }]));
  }, [selectedFile]);

  const onDragEnd = (result: DropResult) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const updatedRanges = reorder(
      ranges,
      result.source.index,
      result.destination.index
    );

    dispatch(setRanges(updatedRanges));
  };
  const handleAddRangeClick = () => {
    if (from && to) {
      dispatch(
        setRanges([...ranges, { from: parseInt(from), to: parseInt(to) }])
      );
      setFrom("");
      setTo("");
    } else {
      if (ranges.length > 0) {
        const lastRange = ranges[ranges.length - 1];
        if (lastRange.to == pageCount) {
          dispatch(setRanges([...ranges, { from: pageCount, to: pageCount }]));
        }
      } else {
        dispatch(setRanges([...ranges, { from: 1, to: pageCount }]));
      }
    }
  };

  const handleDeleteRangeClick = (index: number) => {
    dispatch(setRanges(ranges.filter((range, i) => i !== index)));
  };

  return (
    <div className={`${display ? "" : "d-none "}`}>
      <div className="row mb-3 range-input">
        <div className="col">
          <input
            type="number"
            className="form-control"
            value={from}
            max={pageCount > 0 ? pageCount : undefined}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="From"
          />
        </div>
        <div className="col">
          <input
            type="number"
            className="form-control"
            value={to}
            max={pageCount > 0 ? pageCount : undefined}
            onChange={(e) => setTo(e.target.value)}
            placeholder="To"
          />
        </div>
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="ranges" direction="horizontal">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {ranges.map((range, i) => (
                <Draggable
                  key={i.toString()}
                  draggableId={i.toString()}
                  index={i}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className="row mb-3 range">
                        <div className="col">
                          <div className="card">
                            <div className="card-body">
                              <h6 className="ignore-margin card-title split-category-title">
                                Range {i + 1}
                              </h6>
                              <div className="row flex-nowrap justify-content-between align-items-center range-input-wrapper">
                                <div className="row flex-nowrap input-group">
                                  <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                  >
                                    From
                                  </span>
                                  <input
                                    type="number"
                                    className="form-control"
                                    value={range.from}
                                    // onChange={
                                    //   (e) => {
                                    //     setRanges((prevRanges) =>
                                    //       prevRanges.map((r, index) =>
                                    //         index === i
                                    //           ? {
                                    //             ...r,
                                    //             from: parseInt(
                                    //               e.target.value,
                                    //               10
                                    //             ),
                                    //           }
                                    //           : { ...r }
                                    //       )
                                    //     );

                                    //     // onChange(e, i, "from");
                                    //   }
                                    // }
                                    onChange={(e) => {
                                      dispatch(
                                        setRanges((prevRanges) =>
                                          prevRanges.map((r, index) =>
                                            index === i
                                              ? {
                                                  ...r,
                                                  from: parseInt(
                                                    e.target.value,
                                                    10
                                                  ),
                                                }
                                              : r
                                          )
                                        )
                                      );
                                    }}
                                    placeholder="From"
                                  />
                                </div>
                                <div className="row flex-nowrap input-group">
                                  <span
                                    className="input-group-text"
                                    id="basic-addon1"
                                  >
                                    To
                                  </span>
                                  <input
                                    type="number"
                                    className="form-control"
                                    value={range.to}
                                    // onChange={
                                    //   (e) => {
                                    //     setRanges((prevRanges) =>
                                    //       prevRanges.map((r, index) =>
                                    //         index === i
                                    //           ? {
                                    //             ...r,
                                    //             to: parseInt(
                                    //               e.target.value,
                                    //               10
                                    //             ),
                                    //           }
                                    //           : r
                                    //       )
                                    //     )

                                    //     // onChange(e, i, "to");
                                    //   }
                                    // }
                                    onChange={(e) => {
                                      dispatch(
                                        setRanges((prevRanges) =>
                                          prevRanges.map((r, index) =>
                                            index === i
                                              ? {
                                                  ...r,
                                                  to: parseInt(
                                                    e.target.value,
                                                    10
                                                  ),
                                                }
                                              : r
                                          )
                                        )
                                      );
                                    }}
                                    placeholder="To"
                                  />
                                </div>
                                {/* <div className="position-absolute delete-button"> */}
                                <button
                                  className="btn btn-link text-danger"
                                  onClick={() => {
                                    handleDeleteRangeClick(i);
                                  }}
                                >
                                  <XIcon className="icon" />
                                </button>
                                {/* </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className="row justify-content-center add-btn">
        <button
          className="col-6 btn btn-dark row align-items-center"
          onClick={() => {
            handleAddRangeClick();
          }}
        >
          <PlusIcon className="icon mr-2" />
          <span>Add Range</span>
        </button>
      </div>
      <Checkbox
        animation="smooth"
        color="primary"
        defaultChecked={checked}
        onChange={handleCheckChange}
        className="ml-1 my-3 mb-0"
      >
        Merge all ranges in one PDF file.
      </Checkbox>
    </div>
  );
};
