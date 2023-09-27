/**
 * in this component i
 */
import {
  PhotographIcon,
  DocumentIcon,
  PresentationChartBarIcon,
  TableIcon,
  CodeIcon,
  DocumentAddIcon,
  GlobeIcon,
  DocumentTextIcon,
} from "@heroicons/react/outline";
import { NavDropdown } from "react-bootstrap";
import type { nav_content } from "../../content";


import { useDispatch, useSelector } from "react-redux";
import { setPath, ToolState } from "../../src/store";

const ConvertPDFDropdown = ({
  langPath,
  handleClick,
  nav_content,
}: {
  langPath: string;
  handleClick: () => void;
  nav_content: nav_content;
}) => {
  const state = useSelector((state: { tool: ToolState }) => state.tool);
  const dispatch = useDispatch();
  return (
    <>
      <NavDropdown
        title={nav_content.convert_pdf}
        id="basic-nav-dropdown"
        className="w-100 convert-dropdown dropdown-wrapper"
      >
        <div className="d-flex flex-row w-100 flex-wrap drop-down-container">
          <div className="col-12 col-md-6">
            <div className="converter-title h6">
              {" "}
              <bdi>{nav_content.convert_to_pdf}</bdi>{" "}
            </div>

            <a
              href={`https://www.pdfequips.com${langPath}jpg-to-pdf`}
              onClick={() => {
                dispatch(setPath("jpg-to-pdf"));
                handleClick();
              }}
              className="dropdown-item"
            >
              <PhotographIcon
                style={{
                  color: "#f1c40f",
                }}
                className="h-5 w-5 inline-block mr-2"
              />{" "}
              <bdi>{nav_content.jpg_to_pdf}</bdi>{" "}
            </a>

            {/* <Link
             > */}
            <a
              href={`https://www.pdfequips.com${langPath}word-to-pdf`}
              onClick={() => {
                dispatch(setPath("word-to-pdf"));
                handleClick();
              }}
              className="dropdown-item"
            >
              <DocumentIcon
                style={{
                  color: "#1B5EBE",
                }}
                className="h-5 w-5 inline-block mr-2"
              />{" "}
              <bdi>{nav_content.word_to_pdf}</bdi>{" "}
            </a>
            {/* </Link> */}
            {/* <Link
              className="dropdown-item"
              > */}
            <a
              href={`https://www.pdfequips.com${langPath}powerpoint-to-pdf`}
              onClick={() => {
                dispatch(setPath("powerpoint-to-pdf"));
                handleClick();
              }}
              className="dropdown-item"
            >
              <PresentationChartBarIcon
                style={{
                  color: "#C13B1B",
                }}
                className="h-5 w-5 inline-block mr-2"
              />{" "}
              <bdi>{nav_content.powerpoint_to_pdf}</bdi>{" "}
            </a>
            {/* </Link> */}
            {/* <Link className="dropdown-item" 
            > */}
            <a
              href={`https://www.pdfequips.com${langPath}excel-to-pdf`}
              onClick={() => {
                dispatch(setPath("excel-to-pdf"));
                handleClick();
              }}
              className="dropdown-item"
            >
              <TableIcon
                style={{
                  color: "#10793F",
                }}
                className="h-5 w-5 inline-block mr-2"
              />{" "}
              <bdi>{nav_content.excel_to_pdf}</bdi>{" "}
            </a>
            {/* </Link> */}
            {/* <Link className="dropdown-item"
             > */}
            <a
              href={`https://www.pdfequips.com${langPath}html-to-pdf`}
              onClick={() => {
                dispatch(setPath("html-to-pdf"));
                handleClick();
              }}
              className="dropdown-item"
            >
              <CodeIcon className="h-5 w-5 inline-block mr-2 html" />{" "}
              <bdi>{nav_content.html_to_pdf}</bdi>{" "}
            </a>
            {/* </Link> */}
            {/* <Link className="dropdown-item" href={`https://www.pdfequips.com${langPath}web-to-pdf`}>
              <a onClick={handleClick} className="dropdown-item">
                <GlobeIcon className="h-5 w-5 inline-block mr-2 web" />{" "}
                <bdi>{nav_content.web_to_pdf}</bdi>{" "}
              </a>
            </Link> */}
            {/* <Link className="dropdown-item" href={`https://www.pdfequips.com${langPath}markdown-to-pdf`}>
              <a onClick={handleClick} className="dropdown-item">
                <MarkdownIcon className="h-5 w-5 inline-block mr-2 web" />{" "}
                <bdi>{nav_content.markdown_to_pdf}</bdi>{" "}
              </a>
            </Link> */}
          </div>
          <div className="col-12 col-md-6">
            <div className="converter-title h6">
              {" "}
              <bdi>{nav_content.convert_from_pdf}</bdi>{" "}
            </div>
            {/* <Link className="dropdown-item"> */}
            <a
              href={`https://www.pdfequips.com${langPath}pdf-to-jpg`}
              onClick={() => {
                dispatch(setPath("pdf-to-jpg"));
                handleClick();
              }}
              className="dropdown-item"
            >
              {" "}
              <bdi>{nav_content.pdf_to_jpg}</bdi>{" "}
              <PhotographIcon
                style={{
                  color: "#f1c40f",
                }}
                className="h-5 w-5 inline-block mr-2"
              />
            </a>
            {/* </Link> */}
            {/* <Link className="dropdown-item"
             > */}
            <a
              href={`https://www.pdfequips.com${langPath}pdf-to-word`}
              onClick={() => {
                dispatch(setPath("pdf-to-word"));
                handleClick();
              }}
              className="dropdown-item"
            >
              {" "}
              <bdi>{nav_content.pdf_to_word}</bdi>{" "}
              <DocumentIcon
                style={{
                  color: "#1B5EBE",
                }}
                className="h-5 w-5 inline-block mr-2"
              />
            </a>
            {/* </Link> */}
            {/* <Link
              className="dropdown-item"
              > */}
            <a
              href={`https://www.pdfequips.com${langPath}pdf-to-powerpoint`}
              onClick={() => {
                dispatch(setPath("pdf-to-powerpoint"));
                handleClick();
              }}
              className="dropdown-item"
            >
              {" "}
              <bdi>{nav_content.pdf_to_powerpoint}</bdi>{" "}
              <PresentationChartBarIcon
                style={{
                  color: "#C13B1B",
                }}
                className="h-5 w-5 inline-block mr-2"
              />
            </a>
            {/* </Link> */}
            {/* <Link className="dropdown-item" 
            > */}
            <a
              href={`https://www.pdfequips.com${langPath}pdf-to-excel`}
              onClick={() => {
                dispatch(setPath("pdf-to-excel"));
                handleClick();
              }}
              className="dropdown-item"
            >
              {" "}
              <bdi>{nav_content.pdf_to_excel}</bdi>{" "}
              <TableIcon
                style={{
                  color: "#10793F",
                }}
                className="h-5 w-5 inline-block mr-2"
              />
            </a>
            {/* </Link> */}
            {/* <Link 
            > */}
            <a
              href={`https://www.pdfequips.com${langPath}pdf-to-pdf-a`}
              onClick={() => {
                handleClick();
                dispatch(setPath("pdf-to-pdf-a"));
              }}
              className="dropdown-item"
            >
              {" "}
              <bdi>{nav_content.pdf_to_pdf_a}</bdi>{" "}
              <DocumentAddIcon className="h-5 w-5 inline-block mr-2" />
            </a>
            {/* </Link> */}
            {/* <Link
             > */}
            <a
              href={`https://www.pdfequips.com${langPath}pdf-to-text`}
              onClick={() => {
                dispatch(setPath("pdf-to-text"));
                handleClick();
              }}
              className="dropdown-item"
            >
              {" "}
              <bdi>{nav_content.pdf_to_text}</bdi>{" "}
              <DocumentTextIcon className="h-5 w-5 inline-block mr-2 text" />
            </a>
            {/* </Link> */}
            {/* <Link href={`https://www.pdfequips.com${langPath}pdf-to-html`}>
              <a onClick={handleClick} className="dropdown-item">
                {" "}
                <bdi>{nav_content.pdf_to_html}</bdi>{" "}
                <CodeIcon className="h-5 w-5 inline-block mr-2 html" />
              </a>
            </Link>
            <Link href={`https://www.pdfequips.com${langPath}pdf-to-markdown`}>
              <a onClick={handleClick} className="dropdown-item">
                {" "}
                <bdi>{nav_content.pdf_to_markdown}</bdi>{" "}
                <MarkdownIcon className="h-5 w-5 inline-block mr-2 web" />{" "}
              </a>
            </Link> */}
          </div>
        </div>
      </NavDropdown>
    </>
  );
};

export default ConvertPDFDropdown;
