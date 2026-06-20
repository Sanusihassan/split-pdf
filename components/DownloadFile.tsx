import { useSelector } from "react-redux";
import { setField, type ToolState } from "../src/store";
import { DownloadIcon, ArrowLeftIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { Tooltip } from "react-tooltip";
import type { downloadFile } from "../src/content";
import { useEffect } from "react";
import { useFileStore } from "../src/file-store";
import { increaseDailySiteUsage } from "fetch-subscription-status";
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
  const handleDownload = () => {
    if (!downloadBlob) return;
    saveBlob(downloadBlob, fileName || "PDFEquips");
    if (!subscriptionStatus) {
      increaseDailySiteUsage();
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
    </>
  );
};

export default DownloadFile;
