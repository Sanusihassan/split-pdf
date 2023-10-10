import { edit_page } from "@/content";
import { useFileStore } from "@/src/file-store";
import { TypeWithdisplayProp } from "@/src/globalProps";
import { ToolState, setFixedRanges } from "@/src/store";
import { getPageCount } from "@/src/utils";
import { InformationCircleIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export const FixedRange = ({ display, content, lang }: TypeWithdisplayProp & {
  content: edit_page["options"]["split_by_range_options"]["fixed_range_options"];
  lang: string;
}) => {
  const [pages, setPages] = useState(1);
  const { files } = useFileStore.getState();
  const dispatch = useDispatch();
  const selectedFile = useSelector(
    (state: { tool: ToolState }) => state.tool.selectedFile
  );
  const rangeType = useSelector(
    (state: { tool: ToolState }) => state.tool.rangeType
  );
  const pageCount = useSelector(
    (state: { tool: ToolState }) => state.tool.pageCount
  );
  useEffect(() => {
    if (!pageCount) {
      getPageCount(files, selectedFile, dispatch);
    }
    if (rangeType == "fixed" && pages > 0 && pageCount > 0) {
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
          <label className="col-7 label">{content.split_into} </label>
          <input
            type="number"
            className="form-control"
            value={pages}
            onChange={(e) => setPages(parseInt(e.target.value))}
            placeholder="To"
          />
        </div>
        <div className="alert alert-info">
          <InformationCircleIcon className="w-5 h-5" />
          {"ar" !== lang ?
            content.alert_info
            :
            pages == 1 ?
              "سيتم تقسيم هذا الملف إلى ملفات مكونة من صفحة واحدة،" :
              "سيتم تقسيم هذا الملف إلى ملفات مكونة من،"
          } {" "}
          <span
            style={
              pages > pageCount || pages <= 0 ? { color: "#fc271c" } : undefined
            }
          >
            {pages == 1 ? "" : isNaN(pages) ? "" : pages}
          </span>{" "}
          {"ar" === lang && Math.round(
            pages
          ) == 1 ? "" : content.pages}{" "}
          {"ar" === lang ? content.will_be_created : ""}{"  "}
          <strong>
            {pages > 0
              ? Math.round(
                (pageCount as number) / pages
              )
              : `${parseInt(pageCount.toString())}`}{" "}
            {"ar" === lang ? "ملفات PDF" : "PDF"}{lang == "en" && (pageCount as number) / pages > 1 ? "s" : ""}
          </strong>
          {" "}
          {"ar" === lang ? "" : content.will_be_created}
        </div>
      </Row>
    </>
  );
};
