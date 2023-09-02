import { useRouter } from "next/router";
import type { edit_page as _ } from "../../content";
import { SplitPDF } from "../Options/SplitPDF";

export interface OptionsProps {
  edit_page: _;
}

const Options = ({ edit_page }: OptionsProps) => {
  return <SplitPDF />;
};

export default Options;
