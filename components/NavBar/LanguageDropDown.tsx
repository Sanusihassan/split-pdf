// import Link from "next/link";
import { Dropdown } from "react-bootstrap";
import LanguageIcon from "../icons/LanguageIcon";
import { useSelector } from "react-redux";
import { ToolState } from "../../src/store";
import Cookies from "js-cookie";
import { setLanguage } from "../../src/language";

function LanguageDropdown() {
  const state: ToolState = useSelector(
    (state: { tool: ToolState }) => state.tool
  );
  const setLangToken = (
    language: string,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    setLanguage(language);
    window.location.href = (e.target as HTMLAnchorElement).href;
  };

  const clearLangToken = (e: React.MouseEvent<HTMLAnchorElement>) => {
    Cookies.set("languageToken", "");
    window.location.href = (e.target as HTMLAnchorElement).href;
  };

  return (
    <li className="dropdown-item">
      <Dropdown className="lang-dropdown dropdown-wrapper">
        <Dropdown.Toggle variant="default" id="language-dropdown">
          <LanguageIcon />
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {/* <Link href={`/${state.path}`} passHref> */}
          <a
            href={`/${state.path}`}
            onClick={(e) => clearLangToken(e)}
            className="dropdown-item"
            rel="noopener"
            target="_self"
          >
            English
          </a>
          {/* </Link> */}
          {/* <Link href={`/ar/${state.path}`} passHref> */}
          <a
            href={`/ar/${state.path}`}
            onClick={(e) => setLangToken("ar", e)}
            className="dropdown-item"
            rel="noopener"
            target="_self"
          >
            العربية
          </a>
          {/* </Link> */}
          {/* <Link href={`/fr/${state.path}`} passHref> */}
          <a
            href={`/fr/${state.path}`}
            onClick={(e) => setLangToken("fr", e)}
            className="dropdown-item"
            rel="noopener"
            target="_self"
          >
            française
          </a>
          {/* </Link> */}
          {/* <Link href={`/zh/${state.path}`} passHref> */}
          <a
            href={`/zh/${state.path}`}
            onClick={(e) => setLangToken("zh", e)}
            className="dropdown-item"
            rel="noopener"
            target="_self"
          >
            普通话
          </a>
          {/* </Link> */}
          {/* <Link href={`/hi/${state.path}`} passHref> */}
          <a
            href={`/hi/${state.path}`}
            onClick={(e) => setLangToken("hi", e)}
            className="dropdown-item"
            rel="noopener"
            target="_self"
          >
            हिन्दी
          </a>
          {/* </Link> */}
          {/* <Link href={`/es/${state.path}`} passHref> */}
          <a
            href={`/es/${state.path}`}
            onClick={(e) => setLangToken("es", e)}
            className="dropdown-item"
            rel="noopener"
            target="_self"
          >
            español
          </a>
          {/* </Link> */}
        </Dropdown.Menu>
      </Dropdown>
    </li>
  );
}

export default LanguageDropdown;
