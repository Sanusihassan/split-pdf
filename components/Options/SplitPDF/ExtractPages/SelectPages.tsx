// complete code:
import { Checkbox } from "pretty-checkbox-react";
import { useState, useCallback, useEffect } from "react";
import { SelectionAlert } from "./SelectionAlert";
import { useDispatch, useSelector } from "react-redux";
import { ToolState, setSelectedPages } from "@/src/store";

export const SelectPages = ({
  showSelectPages,
}: {
  showSelectPages: boolean;
}) => {
  const [inputVal, setInputVal] = useState("");
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const selectedPages = useSelector(
    (state: { tool: ToolState }) => state.tool.selectedPages
  );
  const onChange = useCallback(() => {
    setChecked((prev) => !prev);
    if (selectedPages !== "" && selectedPages !== "all") {
      setInputVal(selectedPages);
    }
  }, [selectedPages]);
  useEffect(() => {
    if (selectedPages !== "" && selectedPages !== "all") {
      setInputVal(selectedPages);
    }
  }, [selectedPages]);
  return (
    <div className={`${showSelectPages ? "" : "d-none "}select-all`}>
      <h6 className="title">Pages to Extract:</h6>
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="example: 2,8-32"
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value);
          }}
          onBlur={(e) => {
            const pattern = /^(\d+(?:-\d+)?,)*(\d+(?:-\d+)?)$/;
            if (pattern.test(e.target.value.replace(/\s/g, ""))) {
              setInputVal(e.target.value);
              dispatch(setSelectedPages(e.target.value));
            } else {
              setInputVal("");
              dispatch(setSelectedPages(""));
            }
          }}
        />
        {/* <div className="input-group merge-input"> */}
        <Checkbox
          animation="smooth"
          color="primary"
          defaultChecked={checked}
          onChange={onChange}
          className="ml-1 my-3 mb-0"
        >
          Merge extracted pdf in one pdf file.
        </Checkbox>
        {/* </div> */}
      </form>

      <SelectionAlert selectedPages={0} />
    </div>
  );
};
