import { useSelector } from "react-redux";
import { setField, type ToolState } from "../src/store";
import { DownloadIcon, ArrowLeftIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { Tooltip } from "react-tooltip";
import type { downloadFile } from "../src/content";
import { useEffect, useState } from "react";
import { useFileStore } from "../src/file-store";
import { increaseDailySiteUsage } from "fetch-subscription-status";
import { PremiumToast } from "./PremiumToast";
import ShareOverlay from "./ShareOverlay";
// Safari-safe blob download: runs synchronously inside the click handler
// so the user-gesture chain stays intact.
function saveBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 100);
}
export function getRandomCtaIndex(length: number = 3): number {
  return Math.floor(Math.random() * length);
}
const OUTPUT_EXTENSIONS: Record<string, string> = {
  "split-pdf": "pdf",
};
function resolveFileName(
  fileName: string | undefined,
  path: string,
  blob: Blob,
  isMultiple: boolean,
): string {
  const ext =
    isMultiple || blob.type === "application/zip"
      ? "zip"
      : (OUTPUT_EXTENSIONS[path] ?? "");

  if (!ext) return fileName || "PDFEquips";
  if (!fileName) return `converted.${ext}`;

  // Strip any input extension and apply the output one — the source name
  // carries the wrong extension for every convert tool.
  const base = fileName.replace(/\.[a-z0-9]{2,4}$/i, "");
  return `${base}.${ext}`;
}
const DownloadFile = ({
  lang,
  downloadFile,
  path,
}: {
  lang: string;
  downloadFile: downloadFile;
  path: string;
}) => {
  const { files, downloadBlob, clearDownloadBlob } = useFileStore();
  const dispatch = useDispatch();
  const showDownloadBtn = useSelector(
    (state: { tool: ToolState }) => state.tool.showDownloadBtn,
  );
  const subscriptionStatus = useSelector(
    (state: { tool: ToolState }) => state.tool.subscriptionStatus,
  );
  const fileName = useSelector(
    (state: { tool: ToolState }) => state.tool.fileName,
  );
  const [showShareOverlay, setShowShareOverlay] = useState(false);
  const [overlayContent, setOverlayContent] = useState<{
    modalTitle: string;
    modalDescription: string;
    shareText: string;
    url: string;
  } | null>(null); // no index, no default title — nothing to move *from*
  const shareContent =
    downloadFile.shareOverlay[path as keyof typeof downloadFile.shareOverlay];
  const handleDownload = () => {
    if (!downloadBlob) return;
    const name = resolveFileName(
      fileName,
      path,
      downloadBlob,
      Boolean(files && files.length > 1),
    );

    saveBlob(downloadBlob, name);
    if (!subscriptionStatus) {
      // Coin flip happens once, here — not on every render.
      const shouldShowOverlay = Math.random() < 0.5;

      if (shouldShowOverlay) {
        const index = getRandomCtaIndex(shareContent.modalTitles.length);
        setOverlayContent({
          modalTitle: shareContent.modalTitles[index],
          modalDescription: shareContent.modalDescription,
          shareText: shareContent.shareText,
          url: shareContent.url,
        });
        setShowShareOverlay(true);
      }

      increaseDailySiteUsage(); // stays outside the if — usage counts either way
    }
  };

  const handleBack = () => {
    clearDownloadBlob?.();
    dispatch(setField({ showDownloadBtn: false }));
  };
  useEffect(() => {}, [downloadFile, showDownloadBtn]);
  return (
    <>
      <div
        className={`download-page${showDownloadBtn ? " d-flex" : " d-none"}`}
      >
        <h3 className="text-center mb-4">
          <bdi>
            {downloadFile.titles &&
              downloadFile.titles[path as keyof typeof downloadFile.titles] &&
              downloadFile.titles[path as keyof typeof downloadFile.titles][
                files && files.length > 1 ? 0 : 1
              ]}
          </bdi>
        </h3>
        <div className="download-btn-container">
          <button
            className="back-btn"
            style={lang == "ar" ? { order: 1 } : {}}
            data-tooltip-content={
              downloadFile.backto[path as keyof typeof downloadFile.backto]
            }
            data-tooltip-id="download-btn-tooltip"
            data-tooltip-place="left"
            onClick={handleBack}
          >
            <ArrowLeftIcon className="icon" />
            <Tooltip id="download-btn-tooltip" />
          </button>
          <button className={`download-btn ${path}`} onClick={handleDownload}>
            <DownloadIcon className="icon text-white mr-2" />
            <bdi>
              {downloadFile.btnText &&
                downloadFile.btnText[
                  path as keyof typeof downloadFile.btnText
                ] &&
                downloadFile.btnText[path as keyof typeof downloadFile.btnText][
                  files && files.length > 1 ? 0 : 1
                ]}
            </bdi>
          </button>
        </div>
      </div>
      {!subscriptionStatus ? (
        <PremiumToast
          content={downloadFile.premiumToast}
          lang={lang}
          theme={path}
        />
      ) : null}
      <ShareOverlay
        content={overlayContent}
        isOpen={showShareOverlay}
        extra={downloadFile.shareOverlayExtra}
        onClose={() => setShowShareOverlay(false)}
      />
    </>
  );
};

export default DownloadFile;
