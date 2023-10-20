// content
import type { nav_content } from "./navbar";
import { nav_content as en_nav_content } from "./content/en";
import { nav_content as ar_nav_content } from "./content/ar";
import { nav_content as es_nav_content } from "./content/es";
import { nav_content as fr_nav_content } from "./content/fr";
import { nav_content as hi_nav_content } from "./content/hi";
import { nav_content as zh_nav_content } from "./content/zh";
export function getNavContent(lang: string): nav_content {
  let navContent: nav_content;
  switch (lang) {
    case "ar":
      navContent = ar_nav_content;
      break;
    case "es":
      navContent = es_nav_content;
      break;
    case "fr":
      navContent = fr_nav_content;
      break;
    case "hi":
      navContent = hi_nav_content;
      break;
    case "zh":
      navContent = zh_nav_content;
      break;
    default:
      navContent = en_nav_content;
      break;
  }
  return navContent;
}
