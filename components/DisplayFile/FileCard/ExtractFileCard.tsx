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

/**
 * let's say i've changed the input value to 1-3 changing the selectedPages to that value and the uploaded pdf file page count is 3
 * then on the IndividualSelectionComponent all of the check icons would be checked and that's fine, but when i click on each of them
 * 1 - it toggles the check icon which is fine and it's what i'm expecting
 * 2 - it's not updating the selectedPages
 * 3 - if the clicked item is the first or last item it can be toggled but if it's on the middle it cannot be toggled, it's unchecked and checked automatically.
 * 4 - what i'm expecting is that let's say the selectedPages value is 1-3, then i click on the 2th item this would toggle it and hence remove it from the range and updating the range to 1,3 because 2 is unchecked.
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

    // const handleClick = () => {
    //   const pageIndex = index + 1;
    //   let pagesArray = selectedPages.split(",").flatMap((page: string) => {
    //     if (page.includes("-")) {
    //       const [start, end] = page.split("-").map(Number);
    //       return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    //     } else {
    //       return [Number(page)];
    //     }
    //   });

    //   if (pagesArray.includes(pageIndex)) {
    //     pagesArray = pagesArray.filter((page) => page !== pageIndex);
    //   } else {
    //     pagesArray.push(pageIndex);
    //   }
    //   pagesArray.sort((a, b) => a - b);

    //   let newSelectedPages = "";
    //   let start = pagesArray[0];
    //   for (let i = 1; i < pagesArray.length; i++) {
    //     if (pagesArray[i] !== pagesArray[i - 1] + 1) {
    //       newSelectedPages += start === pagesArray[i - 1] ? `${start},` : `${start}-${pagesArray[i - 1]},`;
    //       start = pagesArray[i];
    //     }
    //   }
    //   newSelectedPages += start === pagesArray[pagesArray.length - 1] ? `${start}` : `${start}-${pagesArray[pagesArray.length - 1]}`;

    //   dispatch(setSelectedPages(newSelectedPages));
    //   setShowMark(!showMark);
    // };

    const handleClick = () => {
      const pageIndex = index + 1;
      let pagesArray = selectedPages.split(",").flatMap((page: string) => {
        if (page.includes("-")) {
          const [start, end] = page.split("-").map(Number);
          return Array.from({ length: end - start + 1 }, (_, i) => start + i);
        } else {
          return [Number(page)];
        }
      });

      if (pageIndex === 1 && pagesArray.length === 0) {
        let newSelectedPages = "1";
        dispatch(setSelectedPages(newSelectedPages));
        setShowMark(!showMark);
        return;
      }

      if (pagesArray.includes(pageIndex)) {
        pagesArray = pagesArray.filter((page) => page !== pageIndex);
      } else {
        pagesArray.push(pageIndex);
      }
      pagesArray.sort((a, b) => a - b);

      let newSelectedPages = "";
      let start = pagesArray[0];
      for (let i = 1; i < pagesArray.length; i++) {
        if (pagesArray[i] !== pagesArray[i - 1] + 1) {
          newSelectedPages += start === pagesArray[i - 1] ? `${start},` : `${start}-${pagesArray[i - 1]},`;
          start = pagesArray[i];
        }
      }
      newSelectedPages += start === pagesArray[pagesArray.length - 1] ? `${start}` : `${start}-${pagesArray[pagesArray.length - 1]}`;

      dispatch(setSelectedPages(newSelectedPages));
      setShowMark(!showMark);
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
