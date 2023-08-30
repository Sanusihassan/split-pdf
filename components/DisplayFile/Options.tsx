import { useRouter } from "next/router";
import type { edit_page as _ } from "../../content";
import { SplitPDF } from "./Options/SplitPDF";

export interface OptionsProps {
  layout?: string;
  edit_page: _;
}

const Options = ({ layout, edit_page }: OptionsProps) => {
  let componentToRender: JSX.Element | null;

  const router = useRouter();
  let c = router.asPath.replace(/^\/[a-z]{2}\//, "").replace(/^\//, "");
  switch (layout) {
    case "split-pdf":
      componentToRender = <SplitPDF />;
      break;
    default:
      componentToRender = null;
  }

  return componentToRender;
};

export default Options;
