"use client";
import Head from "next/head";
import NavBar from "../components/NavBar";
import Tool from "../components/Tool";
import { useRouter } from "next/router";
import {
  edit_page,
  errors,
  nav_content,
  tool,
  tools,
  downloadFile,
} from "../src/content/content";

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

export default ({ item }: { item: data_type }) => {
  const router = useRouter();
  let path = router.asPath;
  // translate this to hindi
  let appology_message = {
    title: "Sorry, This feature is not implemented yet.",
    reason: `We apologize for the inconvenience. This feature is currently under
    development and will be available in a future update. Thank you for
    your understanding.`,
  };

  return (
    <>
      <Head>
        <title>PDFEquips | {item.title}</title>
        <meta name="description" content={item.description} />
        <link rel="icon" href="/logo.png" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
      </Head>
      <NavBar nav_content={nav_content} lang="" />
      {path == "/split-pdf" && "production" === process.env.NODE_ENV ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <h2 className="display-4 text-center">{appology_message.title}</h2>
          <p className="text-center">{appology_message.reason}</p>
        </div>
      ) : (
        <Tool
          tools={tools}
          data={item}
          lang=""
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
