import { OptionsProps } from "@/src/globalProps";
import { SplitPDF } from "../Options/SplitPDF";

const Options = ({ edit_page, lang }: OptionsProps & { lang: string }) => {
  return <SplitPDF options={edit_page["options"]} lang={lang} />;
};

export default Options;
