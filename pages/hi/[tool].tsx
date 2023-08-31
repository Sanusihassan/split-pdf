// import data from "../src/data";

type _t = keyof typeof tool;

import Head from "next/head";
import NavBar from "../../components/NavBar";
import Tool from "../../components/Tool";
import { useRouter } from "next/router";
import {
  edit_page,
  nav_content,
  tool,
  tools,
  downloadFile,
} from "../../src/content/content-hi";
import { useEffect } from "react";
import { errors } from "../../src/content/content-hi";

type data_type = {
  title: string;
  description: string;
  color: string;
  type: string;
};

export async function getStaticPaths() {
  const paths = Object.keys(routes).map((key) => ({
    params: { tool: key.substring(1) },
  }));
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({
  params,
}: {
  params: {
    tool: string;
  };
}) {
  const item = routes[`/${params.tool}` as keyof typeof routes].item;
  return { props: { item } };
}

export default ({ item, lang }: { item: data_type; lang: string }) => {
  const router = useRouter();
  let path = router.asPath;
  let appology_message = {
    title: "क्षमा करें, यह सुविधा अभी तक लागू नहीं की गई है।",
    reason: `हम असुविधा के लिए क्षमा मांगते हैं। यह सुविधा वर्तमान में विकास के अंतर्गत है और एक भविष्य के अद्यतन में उपलब्ध होगी। आपकी समझदारी के लिए धन्यवाद।`,
  };
  return (
    // Type '{ state: ToolState; dispatch: Dispatch<ToolAction>; }' is not assignable to type 'ToolState'.

    <>
      <Head>
        <title>PDFEquips | {item.title}</title>
        <meta name="description" content={item.description} />
        <link rel="icon" href="/logo.png" />
      </Head>
      <NavBar nav_content={nav_content} lang={lang} />
      {path == "/hi/split-pdf" ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            height: "100%",
          }}
        >
          <h2 className="display-4 text-center">{appology_message.title}</h2>
          <p className="text-center">{appology_message.reason}</p>
        </div>
      ) : (
        <Tool
          tools={tools}
          data={item}
          lang={lang}
          errors={errors}
          edit_page={edit_page}
          pages={edit_page.pages}
          page={edit_page.page}
          downloadFile={downloadFile}
        />
      )}
    </>
  );
};

// export default ToolPage;
export const routes = {
  "/split-pdf": { item: tool["Split_PDF"] },
};
