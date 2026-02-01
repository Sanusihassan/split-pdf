// SplitPDFOptions.tsx (UPDATED FOR UNIFIED STORE)
import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Info, Plus, X } from "lucide-react";
import {
  type SplitRange,
  selectSplitMode,
  selectRangeMode,
  selectExtractMode,
  selectCustomRanges,
  selectFixedRangeValue,
  selectMergeRanges,
  selectMergeExtracted,
  selectExtractPagesInput,
  selectPageCount,
  addCustomRange,
  setSplitMode,
  setRangeMode,
  updateCustomRange,
  removeCustomRange,
  setMergeRanges,
  setFixedRangeValue,
  setExtractMode,
  setField,
  setExtractPagesInput,
  setMergeExtracted,
} from "../../../src/store";
import RangeIcon from "../../icons/RangeIcon";
import ExtractPagesIcon from "../../icons/ExtractPagesIcon";

// ============ TYPES ============
export interface SplitPDFOptionsProps {
  content: {
    split_by_range: string;
    extract_pages: string;
    split_by_range_options: {
      range_mode: string;
      custom_range: string;
      fixed_range: string;
      custom_range_options: {
        range: string;
        from: string;
        to: string;
        add_range: string;
        merge: string;
      };
      fixed_range_options: {
        split_into: string;
        alert_info: string;
        pages: string;
        will_be_created: string;
      };
    };
    extract_pages_options: {
      extract_mode: string;
      extract_all: string;
      select_pages: string;
      selection_alert_content: {
        selection_alert: string;
        will_be_created: string;
      };
      select_pages_content: {
        pages_to_extract: string;
        merge: string;
        page_selection_example: string;
      };
    };
  };
  themeColor?: string;
}

// ============ CONSTANTS ============
const THEME_COLOR_DEFAULT = "#fd7e14";

// ============ HELPER FUNCTIONS ============
function generateRangeId(): string {
  return `range-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

function parsePageSelection(input: string, maxPages: number): number[] {
  const pages = new Set<number>();
  const parts = input.split(",").map((p) => p.trim());

  for (const part of parts) {
    if (part.includes("-")) {
      const [start, end] = part.split("-").map((n) => parseInt(n.trim(), 10));
      if (!isNaN(start) && !isNaN(end) && start <= end) {
        for (let i = Math.max(1, start); i <= Math.min(maxPages, end); i++) {
          pages.add(i);
        }
      }
    } else {
      const page = parseInt(part, 10);
      if (!isNaN(page) && page >= 1 && page <= maxPages) {
        pages.add(page);
      }
    }
  }

  return Array.from(pages).sort((a, b) => a - b);
}

// ============ SUBCOMPONENTS ============

// Custom Range Item Component
interface CustomRangeItemProps {
  range: SplitRange;
  index: number;
  maxPages: number;
  onUpdate: (range: SplitRange) => void;
  onRemove: (id: string) => void;
  content: SplitPDFOptionsProps["content"]["split_by_range_options"]["custom_range_options"];
  themeColor: string;
}

const CustomRangeItem = ({
  range,
  index,
  maxPages,
  onUpdate,
  onRemove,
  content,
  themeColor,
}: CustomRangeItemProps) => {
  return (
    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
      <span className="text-sm font-medium text-gray-600 min-w-15">
        {content.range} {index + 1}:
      </span>
      <div className="flex items-center gap-2 flex-1">
        <div className="flex items-center gap-1">
          <label className="text-xs text-gray-500">{content.from}</label>
          <input
            type="number"
            value={range.from}
            onChange={(e) => {
              const val = parseInt(e.target.value, 10);
              if (!isNaN(val) && val >= 1 && val <= maxPages) {
                onUpdate({ ...range, from: val });
              }
            }}
            min={1}
            max={maxPages}
            className="w-20 px-2 py-1 text-sm border border-gray-200 rounded focus:outline-none focus:ring-2"
            style={{
              outlineColor: themeColor,
            }}
            onFocus={(e) => {
              e.target.style.borderColor = themeColor;
              e.target.style.boxShadow = `0 0 0 2px ${themeColor}40`;
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#e5e7eb";
              e.target.style.boxShadow = "none";
            }}
          />
        </div>
        <span className="text-gray-400">-</span>
        <div className="flex items-center gap-1">
          <label className="text-xs text-gray-500">{content.to}</label>
          <input
            type="number"
            value={range.to}
            onChange={(e) => {
              const val = parseInt(e.target.value, 10);
              if (
                !isNaN(val) &&
                val >= 1 &&
                val <= maxPages &&
                val >= range.from
              ) {
                onUpdate({ ...range, to: val });
              }
            }}
            min={range.from}
            max={maxPages}
            className="w-20 px-2 py-1 text-sm border border-gray-200 rounded focus:outline-none focus:ring-2"
            onFocus={(e) => {
              e.target.style.borderColor = themeColor;
              e.target.style.boxShadow = `0 0 0 2px ${themeColor}40`;
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#e5e7eb";
              e.target.style.boxShadow = "none";
            }}
          />
        </div>
      </div>
      {index > 0 && (
        <button
          type="button"
          onClick={() => onRemove(range.id)}
          className="p-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

// ============ MAIN COMPONENT ============
export const SplitPDFOptions = ({
  content,
  themeColor = THEME_COLOR_DEFAULT,
}: SplitPDFOptionsProps) => {
  const dispatch = useDispatch();

  // Redux selectors (using memoized selectors from unified store)
  const splitMode = useSelector(selectSplitMode);
  const rangeMode = useSelector(selectRangeMode);
  const extractMode = useSelector(selectExtractMode);
  const customRanges = useSelector(selectCustomRanges);
  const fixedRangeValue = useSelector(selectFixedRangeValue);
  const mergeRanges = useSelector(selectMergeRanges);
  const mergeExtracted = useSelector(selectMergeExtracted);
  const extractPagesInput = useSelector(selectExtractPagesInput);
  const pageCount = useSelector(selectPageCount);

  // Initialize default range if empty
  const initializeDefaultRange = useCallback(() => {
    if (customRanges.length === 0 && pageCount > 0) {
      dispatch(
        addCustomRange({
          id: generateRangeId(),
          from: 1,
          to: pageCount,
        }),
      );
    }
  }, [customRanges.length, pageCount, dispatch]);

  // Initialize on mount or when switching to custom range
  if (
    rangeMode === "custom_range" &&
    customRanges.length === 0 &&
    pageCount > 0
  ) {
    initializeDefaultRange();
  }

  // Calculate number of files that will be created
  const filesWillBeCreated = useMemo(() => {
    if (splitMode === "split_by_range") {
      if (rangeMode === "custom_range") {
        return mergeRanges ? 1 : customRanges.length;
      } else {
        // Fixed range
        return Math.ceil(pageCount / fixedRangeValue);
      }
    } else {
      // Extract pages mode
      if (extractMode === "extract_all") {
        return pageCount;
      } else {
        // Select pages
        const selectedPages = parsePageSelection(extractPagesInput, pageCount);
        return mergeExtracted ? 1 : selectedPages.length;
      }
    }
  }, [
    splitMode,
    rangeMode,
    extractMode,
    customRanges.length,
    fixedRangeValue,
    pageCount,
    mergeRanges,
    mergeExtracted,
    extractPagesInput,
  ]);

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      {/* Main Mode Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          type="button"
          onClick={() => dispatch(setSplitMode("split_by_range"))}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${
            splitMode === "split_by_range"
              ? "text-white shadow-md"
              : "text-gray-600 bg-gray-100 hover:bg-gray-200"
          }`}
          style={{
            backgroundColor:
              splitMode === "split_by_range" ? themeColor : undefined,
          }}
        >
          <div className="flex flex-col items-center justify-center">
            <RangeIcon
              className={`${splitMode === "split_by_range" ? "fill-white" : "fill-gray-600"} w-10 h-10 text-2xl`}
            />
          </div>

          {content.split_by_range}
        </button>
        <button
          type="button"
          onClick={() => dispatch(setSplitMode("extract_pages"))}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${
            splitMode === "extract_pages"
              ? "text-white shadow-md"
              : "text-gray-600 bg-gray-100 hover:bg-gray-200"
          }`}
          style={{
            backgroundColor:
              splitMode === "extract_pages" ? themeColor : undefined,
          }}
        >
          <div className="flex flex-col items-center justify-center">
            <ExtractPagesIcon
              className={`${splitMode === "extract_pages" ? "fill-white" : "fill-gray-600"} w-10 h-10 text-2xl`}
            />
          </div>
          {content.extract_pages}
        </button>
      </div>

      {/* Split by Range Options */}
      {splitMode === "split_by_range" && (
        <div className="space-y-4">
          {/* Range Mode Title */}
          <h3 className="text-sm font-semibold" style={{ color: themeColor }}>
            {content.split_by_range_options.range_mode}
          </h3>

          {/* Range Mode Selector */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => dispatch(setRangeMode("custom_range"))}
              className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                rangeMode === "custom_range"
                  ? "border-2 bg-white"
                  : "border border-gray-200 bg-white hover:bg-gray-50"
              }`}
              style={{
                borderColor:
                  rangeMode === "custom_range" ? themeColor : undefined,
                color: rangeMode === "custom_range" ? themeColor : undefined,
              }}
            >
              {content.split_by_range_options.custom_range}
            </button>
            <button
              type="button"
              onClick={() => dispatch(setRangeMode("fixed_range"))}
              className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                rangeMode === "fixed_range"
                  ? "border-2 bg-white"
                  : "border border-gray-200 bg-white hover:bg-gray-50"
              }`}
              style={{
                borderColor:
                  rangeMode === "fixed_range" ? themeColor : undefined,
                color: rangeMode === "fixed_range" ? themeColor : undefined,
              }}
            >
              {content.split_by_range_options.fixed_range}
            </button>
          </div>

          {/* Custom Range Options */}
          {rangeMode === "custom_range" && (
            <div className="space-y-3">
              {/* Custom Ranges List */}
              <div className="space-y-2">
                {customRanges.map((range, index) => (
                  <CustomRangeItem
                    key={range.id}
                    range={range}
                    index={index}
                    maxPages={pageCount}
                    onUpdate={(updatedRange) =>
                      dispatch(updateCustomRange(updatedRange))
                    }
                    onRemove={(id) => dispatch(removeCustomRange(id))}
                    content={
                      content.split_by_range_options.custom_range_options
                    }
                    themeColor={themeColor}
                  />
                ))}
              </div>

              {/* Add Range Button */}
              <button
                type="button"
                onClick={() => {
                  const lastRange = customRanges[customRanges.length - 1];
                  const newFrom = lastRange
                    ? Math.min(lastRange.to + 1, pageCount)
                    : 1;
                  dispatch(
                    addCustomRange({
                      id: generateRangeId(),
                      from: newFrom,
                      to: pageCount,
                    }),
                  );
                }}
                className="w-full px-4 py-2 border-2 border-dashed rounded-lg text-sm font-medium transition-colors hover:bg-gray-50 my-2"
                style={{
                  borderColor: themeColor,
                  color: themeColor,
                }}
              >
                <Plus size={16} className="inline mr-2" />
                {content.split_by_range_options.custom_range_options.add_range}
              </button>

              {/* Merge Checkbox */}
              <label
                className="flex-important items-center gap-2 cursor-pointer mt-2"
                onClick={(e) => dispatch(setMergeRanges(!mergeRanges))}
              >
                <input
                  type="checkbox"
                  checked={mergeRanges}
                  onClick={(e) => e.stopPropagation()}
                  onChange={(e) => dispatch(setMergeRanges(e.target.checked))}
                  className="w-4 h-4 rounded border-gray-300 cursor-pointer"
                  style={{
                    accentColor: themeColor,
                  }}
                />
                <span className="text-sm text-gray-700">
                  {content.split_by_range_options.custom_range_options.merge}
                </span>
              </label>
            </div>
          )}

          {/* Fixed Range Options */}
          {rangeMode === "fixed_range" && (
            <div className="space-y-3">
              {/* Fixed Range Input */}
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-700 whitespace-nowrap">
                  {
                    content.split_by_range_options.fixed_range_options
                      .split_into
                  }
                </label>
                <input
                  type="number"
                  value={fixedRangeValue}
                  onChange={(e) => {
                    const val = parseInt(e.target.value, 10);
                    if (!isNaN(val) && val >= 1 && val <= pageCount) {
                      dispatch(setFixedRangeValue(val));
                    }
                  }}
                  min={1}
                  max={pageCount}
                  className="w-20 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2"
                  onFocus={(e) => {
                    e.target.style.borderColor = themeColor;
                    e.target.style.boxShadow = `0 0 0 2px ${themeColor}40`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e5e7eb";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Info Alert */}
              <div
                className="flex items-start gap-2 p-3 rounded-lg"
                style={{
                  backgroundColor: `${themeColor}10`,
                  borderLeft: `3px solid ${themeColor}`,
                }}
              >
                <Info size={16} style={{ color: themeColor, marginTop: 2 }} />
                <p className="text-sm text-gray-700">
                  {
                    content.split_by_range_options.fixed_range_options
                      .alert_info
                  }{" "}
                  {fixedRangeValue}{" "}
                  {content.split_by_range_options.fixed_range_options.pages}{" "}
                  <strong style={{ color: themeColor }}>
                    {filesWillBeCreated}
                  </strong>{" "}
                  {
                    content.split_by_range_options.fixed_range_options
                      .will_be_created
                  }
                </p>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Extract Pages Options */}
      {splitMode === "extract_pages" && (
        <div className="space-y-4">
          {/* Extract Mode Title */}
          <h3 className="text-sm font-semibold" style={{ color: themeColor }}>
            {content.extract_pages_options.extract_mode}
          </h3>

          {/* Extract Mode Selector */}
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => {
                dispatch(setExtractMode("extract_all"));
                dispatch(setField({ selectedPages: "all" }));
              }}
              className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                extractMode === "extract_all"
                  ? "border-2 bg-white"
                  : "border border-gray-200 bg-white hover:bg-gray-50"
              }`}
              style={{
                borderColor:
                  extractMode === "extract_all" ? themeColor : undefined,
                color: extractMode === "extract_all" ? themeColor : undefined,
              }}
            >
              {content.extract_pages_options.extract_all}
            </button>
            <button
              type="button"
              onClick={() => {
                dispatch(setExtractMode("select_pages"));
                dispatch(setField({ selectedPages: "" }));
              }}
              className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                extractMode === "select_pages"
                  ? "border-2 bg-white"
                  : "border border-gray-200 bg-white hover:bg-gray-50"
              }`}
              style={{
                borderColor:
                  extractMode === "select_pages" ? themeColor : undefined,
                color: extractMode === "select_pages" ? themeColor : undefined,
              }}
            >
              {content.extract_pages_options.select_pages}
            </button>
          </div>

          {/* Extract All Options */}
          {extractMode === "extract_all" && (
            <div
              className="flex items-start gap-2 p-3 rounded-lg"
              style={{
                backgroundColor: `${themeColor}10`,
                borderLeft: `3px solid ${themeColor}`,
              }}
            >
              <Info size={16} style={{ color: themeColor, marginTop: 2 }} />
              <p className="text-sm text-gray-700">
                {
                  content.extract_pages_options.selection_alert_content
                    .selection_alert
                }{" "}
                <strong style={{ color: themeColor }}>
                  {filesWillBeCreated}
                </strong>{" "}
                {
                  content.extract_pages_options.selection_alert_content
                    .will_be_created
                }
              </p>
            </div>
          )}

          {/* Select Pages Options */}
          {extractMode === "select_pages" && (
            <div className="space-y-3">
              {/* Pages to Extract */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {
                    content.extract_pages_options.select_pages_content
                      .pages_to_extract
                  }
                </label>
                <input
                  type="text"
                  value={extractPagesInput}
                  onChange={(e) => {
                    const value = e.target.value;
                    dispatch(setExtractPagesInput(value));
                    // Also update selectedPages for the FileCard to use
                    dispatch(setField({ selectedPages: value }));
                  }}
                  placeholder={
                    content.extract_pages_options.select_pages_content
                      .page_selection_example
                  }
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2"
                  onFocus={(e) => {
                    e.target.style.borderColor = themeColor;
                    e.target.style.boxShadow = `0 0 0 2px ${themeColor}40`;
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e5e7eb";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Merge Checkbox */}
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={mergeExtracted}
                  onChange={(e) =>
                    dispatch(setMergeExtracted(e.target.checked))
                  }
                  className="w-4 h-4 rounded border-gray-300 cursor-pointer"
                  style={{
                    accentColor: themeColor,
                  }}
                />
                <span className="text-sm text-gray-700">
                  {content.extract_pages_options.select_pages_content.merge}
                </span>
              </label>

              {/* Info Alert */}
              <div
                className="flex items-start gap-2 p-3 rounded-lg"
                style={{
                  backgroundColor: `${themeColor}10`,
                  borderLeft: `3px solid ${themeColor}`,
                }}
              >
                <Info size={16} style={{ color: themeColor, marginTop: 2 }} />
                <p className="text-sm text-gray-700">
                  {
                    content.extract_pages_options.selection_alert_content
                      .selection_alert
                  }{" "}
                  <strong style={{ color: themeColor }}>
                    {filesWillBeCreated}
                  </strong>{" "}
                  {
                    content.extract_pages_options.selection_alert_content
                      .will_be_created
                  }
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SplitPDFOptions;
