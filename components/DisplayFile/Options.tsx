import type { edit_page as _ } from "../../src/content";
import { OutputFileNameInput } from "./Options/OutputFileNameInput";
import SplitPDFOptions from "./Options/SplitPDFOptions";
export interface OptionsProps {
  layout: "lock-pdf" | "unlock-pdf";
  edit_page: _;
}

const Options = ({ layout, edit_page }: OptionsProps) => {
  return (
    <>
      <SplitPDFOptions content={edit_page.options} themeColor="#fd7e14" />
      <OutputFileNameInput content={edit_page.fileNameInput} />
    </>
  );
};

export default Options;
