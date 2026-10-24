import { useEffect } from "react";
import { Provider as ReduxProvider, useSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import toolReducer, { type ToolState } from "../src/store";
import { Tool as ToolComponent, type ToolProps } from "./Tool";
import AdBlockDetector from "./AdBlockDetector";
import type { adBlockerContentType } from "../src/content/content";

let store: ReturnType<typeof configureStore> | null = null;

function getStore() {
  if (!store) {
    store = configureStore({
      reducer: {
        tool: toolReducer,
      },
    });
  }
  return store;
}

type ToolWrapperProps = ToolProps & {
  adBlockerContent: adBlockerContentType;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Mirrors `showTool` onto <html data-show-tool="..."> so the static,
// server-rendered content (HowTo, Features) can be hidden with CSS
// without being part of this React island.
function ShowToolSync() {
  const showTool = useSelector(
    (state: { tool: ToolState }) => state.tool.showTool,
  );
  useEffect(() => {
    document.documentElement.dataset.showTool = String(showTool);
  }, [showTool]);
  return null;
}

export function ToolWrapper(props: ToolWrapperProps) {
  const { adBlockerContent, lang } = props;
  const reduxStore = getStore();
  return (
    <ReduxProvider store={reduxStore}>
      <ShowToolSync />
      <ToolComponent {...props} />
      <AdBlockDetector content={adBlockerContent} lang={lang} />
    </ReduxProvider>
  );
}
