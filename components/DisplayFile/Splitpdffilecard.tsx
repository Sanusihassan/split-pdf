// SplitPDFFileCard.tsx - UPDATED with PDF rendering and selection
import { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Trash2, FileText, CheckCircle } from "lucide-react";
import * as pdfjs from "pdfjs-dist";
import type { PDFDocumentProxy, PageViewport, RenderTask } from "pdfjs-dist";
import { useFileStore } from "../../src/file-store";
import { setField, selectToolState } from "../../src/store";
import type { errors as _ } from "../../src/content";

// ============ TYPES ============
export interface SplitPDFFileCardProps {
  file: File;
  errors: _;
  content: {
    page: string;
    pages: string;
    remove_file: string;
    loading: string;
  };
  themeColor?: string;
}

interface PageImage {
  pageNum: number;
  imageUrl: string;
}

// ============ CONSTANTS ============
const THEME_COLOR_DEFAULT = "#fd7e14";

// ============ SKELETON LOADER ============
const PageSkeleton = () => {
  return <div className="aspect-3/4 bg-gray-200 rounded animate-pulse" />;
};

// ============ HELPER FUNCTIONS ============
async function renderPDFPage(
  file: File,
  pageNum: number,
  dispatch: ReturnType<typeof useDispatch>,
  errors: _,
  password?: string,
): Promise<string> {
  const fileUrl = URL.createObjectURL(file);

  try {
    const loadingTask = pdfjs.getDocument({
      url: fileUrl,
      password: password || undefined,
    });

    const pdf: PDFDocumentProxy = await loadingTask.promise;
    const page = await pdf.getPage(pageNum);
    const scale = 1.5;
    const viewport: PageViewport = page.getViewport({ scale });

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    if (!context) {
      throw new Error("Canvas context not available.");
    }

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderTask: RenderTask = page.render({
      canvasContext: context,
      viewport: viewport,
    });

    await renderTask.promise;
    const imageUrl = canvas.toDataURL();

    URL.revokeObjectURL(fileUrl);
    return imageUrl;
  } catch (error: any) {
    URL.revokeObjectURL(fileUrl);

    if (error?.name === "PasswordException") {
      dispatch(setField({ errorCode: "PASSWORD_REQUIRED" }));
      return "";
    }

    dispatch(
      setField({
        errorMessage: errors.FILE_CORRUPT?.message || "File is corrupt",
      }),
    );
    return "";
  }
}

async function getPDFPageCount(
  file: File,
  dispatch: ReturnType<typeof useDispatch>,
  errors: _,
  password?: string,
): Promise<number> {
  const fileUrl = URL.createObjectURL(file);

  try {
    const loadingTask = pdfjs.getDocument({
      url: fileUrl,
      password: password || undefined,
    });

    const pdf: PDFDocumentProxy = await loadingTask.promise;
    const pageCount = pdf.numPages;

    URL.revokeObjectURL(fileUrl);
    return pageCount;
  } catch (error: any) {
    URL.revokeObjectURL(fileUrl);

    if (error?.name === "PasswordException") {
      dispatch(setField({ errorCode: "PASSWORD_REQUIRED" }));
      return 0;
    }

    dispatch(
      setField({
        errorMessage: errors.FILE_CORRUPT?.message || "File is corrupt",
      }),
    );
    return 0;
  }
}

// Parse selected pages string like "1-3,5,7-10" into array of numbers
function parseSelectedPages(selectedPages: string, maxPages: number): number[] {
  if (selectedPages === "all") {
    return Array.from({ length: maxPages }, (_, i) => i + 1);
  }

  const pages = new Set<number>();
  const parts = selectedPages.split(",").map((p) => p.trim());

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

// Convert array of page numbers back to compact string format
function formatSelectedPages(pages: number[]): string {
  if (pages.length === 0) return "";

  const sorted = [...pages].sort((a, b) => a - b);
  const ranges: string[] = [];
  let start = sorted[0];
  let end = sorted[0];

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === end + 1) {
      end = sorted[i];
    } else {
      ranges.push(start === end ? `${start}` : `${start}-${end}`);
      start = sorted[i];
      end = sorted[i];
    }
  }

  ranges.push(start === end ? `${start}` : `${start}-${end}`);
  return ranges.join(",");
}

// ============ PAGE COMPONENT ============
interface PageItemProps {
  pageNum: number;
  imageUrl: string;
  isSelected: boolean;
  isExtractMode: boolean;
  onToggleSelect: (pageNum: number) => void;
  themeColor: string;
}

const PageItem = ({
  pageNum,
  imageUrl,
  isSelected,
  isExtractMode,
  onToggleSelect,
  themeColor,
}: PageItemProps) => {
  return (
    <div
      className={`relative aspect-3/4 rounded-lg overflow-hidden border-2 transition-all ${
        isExtractMode ? "cursor-pointer" : ""
      } ${isSelected ? "" : "border-gray-200"}`}
      style={{
        outlineColor: isSelected ? themeColor : undefined,
        borderColor: isSelected ? themeColor : undefined,
      }}
      onClick={() => isExtractMode && onToggleSelect(pageNum)}
    >
      {/* Page Image */}
      <img
        src={imageUrl}
        alt={`Page ${pageNum}`}
        className="w-full h-full object-contain bg-white"
        draggable={false}
      />

      {/* Selection Checkmark (Extract Mode) */}
      {isExtractMode && (
        <div
          className={`absolute top-2 right-2 w-6 h-6 rounded-full transition-all ${
            isSelected ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundColor: themeColor,
          }}
        >
          <CheckCircle size={24} className="text-white" />
        </div>
      )}

      {/* Page Number Badge */}
      <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/60 text-white text-xs rounded">
        {pageNum}
      </div>
    </div>
  );
};

// ============ MAIN COMPONENT ============
export const SplitPDFFileCard = ({
  file,
  errors,
  content,
  themeColor = THEME_COLOR_DEFAULT,
}: SplitPDFFileCardProps) => {
  const dispatch = useDispatch();
  const { files, setFiles } = useFileStore();
  const [isLoading, setIsLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [pageImages, setPageImages] = useState<PageImage[]>([]);
  const isSubscribedRef = useRef(true);

  // Get state from Redux
  const toolState = useSelector(selectToolState);
  const { splitMode, extractMode, selectedPages } = toolState;

  // Determine if we're in extract mode with page selection
  const isExtractMode =
    splitMode === "extract_pages" && extractMode === "select_pages";
  const isExtractAll =
    splitMode === "extract_pages" && extractMode === "extract_all";

  // Get selected page numbers
  const selectedPageNumbers =
    isExtractMode || isExtractAll
      ? parseSelectedPages(selectedPages, pageCount)
      : [];

  // Load PDF page count and render pages
  useEffect(() => {
    isSubscribedRef.current = true;

    const loadPDF = async () => {
      setIsLoading(true);

      // Get page count
      const count = await getPDFPageCount(file, dispatch, errors);

      if (isSubscribedRef.current && count > 0) {
        setPageCount(count);
        dispatch(setField({ pageCount: count, selectedFile: file.name }));

        // Initialize selectedPages for extract all mode
        if (splitMode === "extract_pages" && extractMode === "extract_all") {
          dispatch(setField({ selectedPages: "all" }));
        }

        // Render pages
        const images: PageImage[] = [];
        for (let i = 1; i <= count; i++) {
          const imageUrl = await renderPDFPage(file, i, dispatch, errors);
          if (isSubscribedRef.current && imageUrl) {
            images.push({ pageNum: i, imageUrl });
            setPageImages([...images]); // Update progressively
          }
        }

        setIsLoading(false);
      }
    };

    loadPDF();

    return () => {
      isSubscribedRef.current = false;
    };
  }, [file, dispatch, errors]);

  // Handle page selection toggle
  const handleToggleSelect = useCallback(
    (pageNum: number) => {
      if (!isExtractMode) return;

      const currentSelected = parseSelectedPages(selectedPages, pageCount);
      const newSelected = currentSelected.includes(pageNum)
        ? currentSelected.filter((p) => p !== pageNum)
        : [...currentSelected, pageNum];

      const newSelectedString = formatSelectedPages(newSelected);
      dispatch(setField({ selectedPages: newSelectedString }));
    },
    [isExtractMode, selectedPages, pageCount, dispatch],
  );

  // Remove file
  const handleRemoveFile = () => {
    const newFiles = files.filter((f) => f.name !== file.name);
    setFiles(newFiles);
    dispatch(setField({ pageCount: 0, selectedFile: "", selectedPages: "" }));
  };

  // Loading state
  if (isLoading || pageImages.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3 flex-1">
            <FileText size={24} style={{ color: themeColor }} />
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              {file.name}
            </h3>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-400 animate-pulse">
              {content.loading}
            </span>
          </div>
          <button
            type="button"
            onClick={handleRemoveFile}
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 size={20} />
          </button>
        </div>

        {/* Skeleton Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: Math.min(pageCount || 8, 8) }).map((_, i) => (
            <PageSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3 flex-1">
            <FileText size={24} style={{ color: themeColor }} />
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              {file.name.length > 40
                ? file.name.slice(0, 20) + "..." + file.name.slice(-17)
                : file.name}
            </h3>
            <span
              className="px-2 py-1 text-xs font-medium rounded-full whitespace-nowrap"
              style={{
                backgroundColor: `${themeColor}15`,
                color: themeColor,
              }}
            >
              {isExtractMode || isExtractAll
                ? `${selectedPageNumbers.length} / ${pageCount}`
                : pageCount}{" "}
              {pageCount === 1 ? content.page : content.pages}
            </span>
          </div>

          {/* Remove File Button */}
          <button
            type="button"
            onClick={handleRemoveFile}
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            title={content.remove_file}
          >
            <Trash2 size={20} />
          </button>
        </div>

        {/* Pages Grid - Responsive: 4 cols on lg, 3 on md, 2 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {pageImages.map((pageImage) => (
            <PageItem
              key={pageImage.pageNum}
              pageNum={pageImage.pageNum}
              imageUrl={pageImage.imageUrl}
              isSelected={selectedPageNumbers.includes(pageImage.pageNum)}
              isExtractMode={isExtractMode || isExtractAll}
              onToggleSelect={handleToggleSelect}
              themeColor={themeColor}
            />
          ))}
        </div>

        {/* Selection Info */}
        {(isExtractMode || isExtractAll) &&
          selectedPageNumbers.length === 0 && (
            <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-700">
                ⚠️ No pages selected. Click on pages to select them.
              </p>
            </div>
          )}
      </div>
    </div>
  );
};

export default SplitPDFFileCard;
