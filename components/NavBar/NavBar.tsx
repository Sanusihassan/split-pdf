import { Navbar, Nav } from "react-bootstrap";

import Link from "next/link";
import { useRouter } from "next/router";
import ConvertPDFDropdown from "./ConvertDropDown";
import LanguageDropdown from "./LanguageDropDown";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useFileStore } from "../../src/file-store";

import {
  showTool,
  ToolState,
  resetErrorMessage,
  setPath,
  setShowDownloadBtn,
} from "../../src/store";
import { getNavContent } from "./getNavContent";

const NavBar = ({ lang }: { lang: string }) => {
  const navContent = getNavContent(lang);
  const dispatch = useDispatch();
  const statePath = useSelector(
    (state: { tool: ToolState }) => state.tool.path
  );
  const router = useRouter();
  let path = router.asPath.replace(/^\/[a-z]{2}\//, "").replace(/^\//, "");
  const { files, setFiles } = useFileStore.getState();
  function handleClick(): void {
    if (files.length > 0) {
      dispatch(showTool());
    }
    if (
      !statePath.startsWith("pdf-") ||
      !["merge-pdf", "compress-pdf"].includes(statePath)
    ) {
      setFiles([]);
    } else {
      const allPdf = files.every((file) => file.name.endsWith(".pdf"));
      if (!allPdf) {
        setFiles([]);
      }
    }
    // hide downloadFile component each time a tool link is clicked
    dispatch(setShowDownloadBtn(false));
    dispatch(resetErrorMessage());
  }
  let langPath = lang.length > 0 ? `/${lang}/` : "/";
  return (
    <Navbar
      bg="light"
      expand="lg"
      className={`${path !== "markdown-to-pdf" ? "shadow" : ""}`}
    >
      <Link href={`/${lang}`} legacyBehavior>
        <a
          onClick={(e) => {
            handleClick();
          }}
          className="text-decoration-none text-dark text-nowrap navbar-brand d-flex flex-row justify-content-between align-items-center"
          style={{
            fontSize: "0.95em",
            lineHeight: 2,
            direction: "ltr",
          }}
          translate="no"
        >
          <img
            src="/logo.png"
            className="img-fluid"
            alt="PDFEquips"
            width="35"
            height="20"
            draggable="false"
            style={{
              objectFit: "cover",
            }}
          />
          <span
            style={{
              marginTop: "7.1%",
              textTransform: "capitalize",
              fontWeight: "500",
            }}
          >
            {navContent.brand}
          </span>
        </a>
      </Link>

      <Navbar.Toggle aria-controls="main-nav" />
      <Navbar.Collapse id="main-nav">
        <Nav className="align-items-center">
          {/* <Link 
          > */}
          <a
            href={`https://www.pdfequips.com${langPath}merge-pdf`}
            onClick={(e) => {
              dispatch(setPath("merge-pdf"));
              handleClick();
            }}
            className="dropdown-item"
          >
            <bdi>{navContent.merge_pdf}</bdi>
          </a>
          {/* </Link> */}
          {/* <Link className="dropdown-item" href={`${langPath}split-pdf`}>
            <a onClick={handleClick} className="dropdown-item">
              <bdi>{navContent.split_pdf}</bdi>
            </a>
          </Link> */}
          {/* <Link className="dropdown-item"
           > */}
          <a
            href={`https://www.pdfequips.com${langPath}read-edit-pdf`}
            onClick={(e) => {
              dispatch(setPath("compress-pdf"));
              handleClick();
            }}
            className="dropdown-item"
          >
            <bdi>{navContent.read_edit_pdf}</bdi>
          </a>
          <a
            href={`https://www.pdfequips.com${langPath}compress-pdf`}
            onClick={(e) => {
              dispatch(setPath("compress-pdf"));
              handleClick();
            }}
            className="dropdown-item"
          >
            <bdi>{navContent.compress_pdf}</bdi>
          </a>
          {/* </Link> */}
          <ConvertPDFDropdown
            handleClick={handleClick}
            langPath={langPath}
            lang={lang}
          />
          <LanguageDropdown />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
