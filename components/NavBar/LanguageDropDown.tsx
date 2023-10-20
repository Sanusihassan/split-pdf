// import Link from "next/link";
import { Dropdown } from "react-bootstrap";
import LanguageIcon from "./icons/LanguageIcon";
import { useSelector } from "react-redux";
import { ToolState } from "../../src/store";
import Cookies from "js-cookie";
import { setLanguage } from "../../src/language";

function LanguageDropdown() {
  const statePath = useSelector(
    (state: { tool: ToolState }) => state.tool.path
  );
  // const dispatch = useDispatch();
  // as you can see from this function it's setting a cookie using this function:
  /**
   * export const setLanguage = (language: string) => {
      Cookies.set("languageToken", language, { expires: 365 });
    };
   */
  // i want to get the token in nginx to serve the HTML file for the requested language code according to the languageToken
  // note that english is the default language and it's value is empty string
  const setLangToken = (
    language: string,
    // @ts-ignore
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
          {/* <Link href={`/${statePath}`} passHref> */}
          <a
            href={`/${statePath}`}
            onClick={(e) => clearLangToken(e)}
            className="dropdown-item"
            rel="noopener"
            target="_self"
          >
            English
          </a>
          {/* </Link> */}
          {/* <Link href={`/ar/${statePath}`} passHref> */}
          <a
            href={`/ar/${statePath}`}
            onClick={(e) => setLangToken("ar", e)}
            className="dropdown-item"
            rel="noopener"
            target="_self"
          >
            العربية
          </a>
          {/* </Link> */}
          {/* <Link href={`/fr/${statePath}`} passHref> */}
          <a
            href={`/fr/${statePath}`}
            onClick={(e) => setLangToken("fr", e)}
            className="dropdown-item"
            rel="noopener"
            target="_self"
          >
            française
          </a>
          {/* </Link> */}
          {/* <Link href={`/zh/${statePath}`} passHref> */}
          <a
            href={`/zh/${statePath}`}
            onClick={(e) => setLangToken("zh", e)}
            className="dropdown-item"
            rel="noopener"
            target="_self"
          >
            普通话
          </a>
          {/* </Link> */}
          {/* <Link href={`/hi/${statePath}`} passHref> */}
          <a
            href={`/hi/${statePath}`}
            onClick={(e) => setLangToken("hi", e)}
            className="dropdown-item"
            rel="noopener"
            target="_self"
          >
            हिन्दी
          </a>
          {/* </Link> */}
          {/* <Link href={`/es/${statePath}`} passHref> */}
          <a
            href={`/es/${statePath}`}
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
