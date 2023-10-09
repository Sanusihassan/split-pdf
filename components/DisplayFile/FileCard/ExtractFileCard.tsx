import { ToolState, setSelectedPages } from "@/src/store";
import { CheckCircleIcon } from "@heroicons/react/outline";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


const AllSelectionComponent = React.memo(() => {
  const selectedPages = useSelector(
    (state: { tool: ToolState }) => state.tool.selectedPages
  );
  const [showMark, setShowMark] = useState(selectedPages === "all");

  useEffect(() => {
    setShowMark(selectedPages === "all");
  }, [selectedPages]);

  return (
    <div className="extract-file-card">
      <CheckCircleIcon className={`icon${showMark ? "" : " d-none"}`} />
    </div>
  );
});

// please help me with my code:
/**
 * the selectedPages might in the following pattern:
 * /^(\d+(?:-\d+)?,)*(\d+(?:-\d+)?)$/
 * what i want is when the selectedPages changes i want every page that is in the selectedPages separated by comma to be selected (this is working fine)
 * but every range selected by hyphen also to be selected i.e all of the range but this is not working as i've commneted the code.
 */

const IndividualSelectionComponent = React.memo(
  ({ index }: { index: number }) => {
    const selectedPages = useSelector(
      (state: { tool: ToolState }) => state.tool.selectedPages
    );
    const [showMark, setShowMark] = useState(
      selectedPages.includes(`${index + 1}`)
    );
    useEffect(() => {
      const pages = selectedPages.split(",");
      let isSelected = false;
      for (const page of pages) {
        if (page.includes("-")) {
          const [start, end] = page.split("-").map(Number);
          if (index + 1 >= start && index + 1 <= end) {
            isSelected = true;
            break;
          }
        } else if (index + 1 === Number(page)) {
          isSelected = true;
          break;
        }
      }
      setShowMark(isSelected);
    }, [selectedPages]);

    const dispatch = useDispatch();

    const handleClick = () => {
      setShowMark(!showMark);
      const pageIndex = `${index + 1}`;
      if (selectedPages.includes(pageIndex)) {
        const pagesArray = selectedPages.split(",");
        const pageIndexInArray = pagesArray.indexOf(pageIndex);
        if (pageIndexInArray > -1) {
          pagesArray.splice(pageIndexInArray, 1);
        }
        dispatch(setSelectedPages(pagesArray.join(",")));
      } else {
        dispatch(
          setSelectedPages(
            `${selectedPages.length === 0
              ? pageIndex
              : `${selectedPages},${pageIndex}`
            }`
          )
        );
      }
    };

    return (
      <div onClick={handleClick} className="extract-file-card">
        <CheckCircleIcon className={`icon${showMark ? "" : " d-none"}`} />
      </div>
    );
  }
);

export const ExtractFileCard = React.memo(({ index }: { index: number }) => {
  const selectedPages = useSelector(
    (state: { tool: ToolState }) => state.tool.selectedPages
  );

  if (selectedPages === "all") {
    return <AllSelectionComponent />;
  } else {
    return <IndividualSelectionComponent index={index} />;
  }
});
