// complete code: 
import { Checkbox } from "pretty-checkbox-react";
import { useState, useCallback } from "react";
import { SelectionAlert } from "./SelectionAlert";
import { useDispatch, useSelector } from "react-redux";
import { ToolState, setSelectedPages } from "@/src/store";

export const SelectPages = ({ showSelectPages }: { showSelectPages: boolean }) => {
    const state = useSelector((state: { tool: ToolState }) => state.tool);
    const [inputVal, setInputVal] = useState("");
    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch();

    const onChange = useCallback(() => {
        setChecked((prev) => !prev);
        if (state.selectedPages !== "all") {
            setInputVal(state.selectedPages);
        }
    }, [state.selectedPages]);
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
                        /**i want to only allow the value to be added if and only if its on the following formats:
                         * $n, $n, $n, .... where n is a number >= 1 <= pageCount where pageCount is the pageCount of the pdf file.
                         * $n, $n, ... $n - $n, ... where n is a number >= 1 <= pageCount where pageCount is the pageCount of the pdf file. and the $n - $n could be anywhere on the string.
                         * it could be at the begenning or at the end or anywhere in the middle.
                         */

                        setInputVal(e.target.value);
                    }}
                    onBlur={(e) => {
                        /**
                         * but the pattern you gave me does'nt match on
                         * 1, 2
                         */
                        const pattern = /^(\d+(?:-\d+)?,)*(\d+(?:-\d+)?)$/;
                        if (pattern.test(e.target.value.replace(/\s/g, ''))) {
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