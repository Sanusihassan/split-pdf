/**
 * how can i solve this issue?:
 * Warning: You have opted-out of Automatic Static Optimization due to `getInitialProps` in `pages/_app`. This does not opt-out pages with `getStaticProps`
Read more: https://nextjs.org/docs/messages/opt-out-auto-static-optimization
 */
// this is my _app.tsx file:
import type { AppContext, AppProps } from "next/app";
import Head from "next/head";
import "../index.scss";
// redux store
import { Provider as ReduxProvider } from "react-redux";
// @ts-ignore
import { configureStore } from "@reduxjs/toolkit";
import toolReducer from "../src/store";

// zustand store
import { createStore } from "zustand";
interface FileStore {
  files: File[];
  setFiles: (files: File[]) => void;
}

export const useFileStore = createStore<FileStore>((set) => ({
  files: [],
  setFiles: (files) => set({ files }),
}));

const store = configureStore({
  reducer: {
    tool: toolReducer,
  },
});

function MyApp({ Component, pageProps, lang }: AppProps & { lang: string }) {

  return (
    <>
      <Head>
        {/* JSX expressions must have one parent element.ts(2657) */}
        {"production" === process.env.NODE_ENV ?
          (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=G-NY5F91MF0B`}
              ></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
    
        gtag('config', 'G-NY5F91MF0B');
      `,
                }}
              ></script>
            </>
          ) : null
        }
      </Head>
      <ReduxProvider store={store}>
        <Component useFileStore={useFileStore} {...pageProps} lang={lang ? lang : "en"} />
      </ReduxProvider>
    </>
  );
}


MyApp.getInitialProps = async ({
  Component,
  ctx,
}: AppContext): Promise<{
  pageProps: Record<string, unknown>;
  lang: string;
}> => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  const path = ctx.asPath || "";
  const lang = path.split("/")[1] || ""; // default to English if language code cannot be extracted

  return { pageProps, lang };
};


// In your page component file




export default MyApp;
