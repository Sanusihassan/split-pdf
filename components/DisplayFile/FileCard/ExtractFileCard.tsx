import { ToolState, setSelectedPages } from "@/src/store";
import { CheckCircleIcon } from "@heroicons/react/outline";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// export const ExtractFileCard = React.memo(({ index }: { index: number }) => {
//     const selectedPages = useSelector(
//       (state: { tool: ToolState }) => state.tool.selectedPages
//     );
//     const [showMark, setShowMark] = useState(selectedPages == "all");

//     useEffect(() => {
//       setShowMark(selectedPages == "all");
//     }, [selectedPages]);
//     const dispatch = useDispatch();
//     return (
//       <div
//         onClick={() => {
//           setShowMark(!showMark);
//           if (selectedPages != "all") {
//             const pageIndex = `${index + 1}`;
//             if (selectedPages.includes(pageIndex)) {
//               // If the page index is already included, remove it
//               const pagesArray = selectedPages.split(",");
//               const pageIndexInArray = pagesArray.indexOf(pageIndex);
//               if (pageIndexInArray > -1) {
//                 pagesArray.splice(pageIndexInArray, 1);
//               }
//               dispatch(setSelectedPages(pagesArray.join(",")));
//             } else {
//               // If the page index is not included, add it
//               dispatch(
//                 setSelectedPages(
//                   `${
//                     selectedPages?.length === 0
//                       ? pageIndex
//                       : `${selectedPages},${pageIndex}`
//                   }`
//                 )
//               );
//             }
//           }
//         }}
//         className="extract-file-card"
//       >
//         <CheckCircleIcon className={`icon${showMark ? "" : " d-none"}`} />
//       </div>
//     );
// });

const AllSelectionComponent = React.memo(() => {
  const selectedPages = useSelector(
    (state: { tool: ToolState }) => state.tool.selectedPages
  );
  const [showMark, setShowMark] = useState(selectedPages === "all");

  useEffect(() => {
    setShowMark(selectedPages === "all");
  }, [selectedPages]);

  const dispatch = useDispatch();

  const handleClick = () => {
    setShowMark(!showMark);
    dispatch(setSelectedPages(showMark ? "" : "all"));
  };

  return (
    <div onClick={handleClick} className="extract-file-card">
      <CheckCircleIcon className={`icon${showMark ? "" : " d-none"}`} />
    </div>
  );
});

const IndividualSelectionComponent = React.memo(
  ({ index }: { index: number }) => {
    const selectedPages = useSelector(
      (state: { tool: ToolState }) => state.tool.selectedPages
    );
    const [showMark, setShowMark] = useState(
      selectedPages.includes(`${index + 1}`)
    );

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
            `${
              selectedPages.length === 0
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
