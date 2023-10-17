// complete code:
import { Checkbox } from "pretty-checkbox-react";
import { useState, useCallback, useEffect, useRef } from "react";
import { SelectionAlert } from "./SelectionAlert";
import { useDispatch, useSelector } from "react-redux";
import { ToolState, setMerge, setSelectedPages } from "@/src/store";
import { edit_page } from "@/content";

export const SelectPages = ({
  showSelectPages,
  lang,
  content,
  alert_content,
}: {
  showSelectPages: boolean;
  lang: string;
  content: edit_page["options"]["extract_pages_options"]["select_pages_content"];
  alert_content: edit_page["options"]["extract_pages_options"]["selection_alert_content"];
}) => {
  const [inputVal, setInputVal] = useState("");
  // const [checked, setChecked] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>({} as NodeJS.Timeout);
  const dispatch = useDispatch();
  const selectedPages = useSelector(
    (state: { tool: ToolState }) => state.tool.selectedPages
  );
  const merge = useSelector((state: { tool: ToolState }) => state.tool.merge);
  const onChange = useCallback(() => {
    dispatch(setMerge((prev) => !prev));
    if (selectedPages !== "" && selectedPages !== "all") {
      setInputVal(selectedPages);
    }
  }, [selectedPages]);
  useEffect(() => {
    if (selectedPages !== "" && selectedPages !== "all") {
      setInputVal(selectedPages);
    } else {
      setInputVal("");
    }
  }, [selectedPages]);
  return (
    <div className={`${showSelectPages ? "" : "d-none "}select-all`}>
      <h6 className="title">{content.pages_to_extract}</h6>
      <form>
        <input
          type="text"
          className="form-control"
          placeholder={content.page_selection_example}
          value={inputVal}
          onChange={(e) => {
            setInputVal(e.target.value);
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
              const pattern = /^(\d+(?:-\d+)?,)*(\d+(?:-\d+)?)$/;
              if (pattern.test(e.target.value.replace(/\s/g, ""))) {
                setInputVal(e.target.value);
                dispatch(setSelectedPages(e.target.value));
              } else {
                setInputVal("");
                dispatch(setSelectedPages(""));
              }
            }, 2000);
          }}
        />
        {/* <div className="input-group merge-input"> */}
        <Checkbox
          animation="smooth"
          color="primary"
          defaultChecked={merge}
          onChange={onChange}
          className="ml-1 my-3 mb-0"
        >
          {content.merge}
        </Checkbox>
        {/* </div> */}
      </form>

      <SelectionAlert
        selectedPages={selectedPages.split(/[,|-]/).length}
        content={alert_content}
        lang={lang}
      />
    </div>
  );
};
