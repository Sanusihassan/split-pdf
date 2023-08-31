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
} from "../../src/content/content-es";
import { useEffect } from "react";
import { errors } from "../../src/content/content-es";

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
    title: "Lo siento, esta característica aún no está implementada.",
    reason:
      "Pedimos disculpas por las molestias. Esta característica está actualmente en desarrollo y estará disponible en una próxima actualización. Gracias por su comprensión.",
  };

  return (
    <>
      <Head>
        <title>PDFEquips | {item.title}</title>
        <meta name="description" content={item.description} />
        <link rel="icon" href="/logo.png" />
        {/* needed for styles */}
      </Head>
      <NavBar nav_content={nav_content} lang={lang} />
      {path == "/es/split-pdf" ? (
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
