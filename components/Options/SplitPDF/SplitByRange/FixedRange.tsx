import { useFileStore } from "@/src/file-store";
import { TypeWithdisplayProp } from "@/src/globalProps";
import { ToolState, setFixedRanges } from "@/src/store";
import { getPageCount } from "@/src/utils";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export const FixedRange = ({ display }: TypeWithdisplayProp) => {
  const [pages, setPages] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const { files } = useFileStore.getState();
  const dispatch = useDispatch();
  const selectedFile = useSelector(
    (state: { tool: ToolState }) => state.tool.selectedFile
  );
  const rangeType = useSelector(
    (state: { tool: ToolState }) => state.tool.rangeType
  );
  useEffect(() => {
    getPageCount(files, selectedFile, setPageCount);
    if (rangeType == "fixed") {
      const totalRanges = pages >= pageCount ? 1 : Math.ceil(pageCount / pages);
      const ranges = Array.from({ length: totalRanges }, (_, i) => {
        const from = i * pages + 1;
        const to = Math.min((i + 1) * pages, pageCount);
        return { from, to };
      });
      dispatch(setFixedRanges(ranges));
    }
  }, [selectedFile, pageCount, pages, rangeType]);

  return (
    <>
      <Row className={`${display ? "" : "d-none "}fixed-range`}>
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
        <div className="alert alert-info">
          <InformationCircleIcon className="w-5 h-5" /> This PDF will be split
          in files of{" "}
          <span
            style={
              pages > pageCount || pages <= 0 ? { color: "#fc271c" } : undefined
            }
          >
            {pages}
          </span>{" "}
          pages{" "}
          <strong>
            {pages > 0
              ? Math.round(
                  pages >= pageCount ? 1 : (pageCount as number) / pages
                )
              : `${parseInt(pageCount.toString())}`}{" "}
            PDF
          </strong>{" "}
          will be created.
        </div>
      </Row>
    </>
  );
};
