import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ToolState {
  showTool: boolean;
  isSubmitted: boolean;
  errorMessage: string;
  showErrorMessage: boolean;
  compressPdf: string | number;
  errorCode: string | null;
  path: string;
  click: boolean;
  focus: boolean;
  showDownloadBtn: boolean;
  showOptions: boolean;
  nav_height: number;
  selectedFile: string;
  layout: "extract" | "range";
  selectedPages: string;
  ranges: { from: number; to: number }[];
  fixedRanges: { from: number; to: number }[];
  rangeType: "custom" | "fixed";
  pageCount: number;
  merge: boolean;
}

const initialState: ToolState = {
  showTool: true,
  errorMessage: "",
  showErrorMessage: false,
  isSubmitted: false,
  compressPdf: "recommended",
  errorCode: null,
  path: "",
  click: false,
  focus: false,
  showDownloadBtn: false,
  showOptions: false,
  nav_height: 0,
  selectedFile: "",
  layout: "range",
  selectedPages: "all",
  ranges: [],
  fixedRanges: [],
  rangeType: "custom",
  pageCount: 0,
  merge: false,
};

const toolSlice = createSlice({
  name: "tool",
  initialState,
  reducers: {
    showTool(state: ToolState) {
      state.showTool = true;
    },
    setClick(state: ToolState, action: PayloadAction<boolean>) {
      state.click = action.payload;
    },
    setFocus(state: ToolState, action: PayloadAction<boolean>) {
      state.focus = action.payload;
    },
    setShowDownloadBtn(state: ToolState, action: PayloadAction<boolean>) {
      state.showDownloadBtn = action.payload;
    },
    setPath(state: ToolState, action: PayloadAction<string>) {
      state.path = action.payload;
    },
    hideTool(state: ToolState) {
      state.showTool = false;
    },
    setErrorMessage(state: ToolState, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
      state.showErrorMessage = true; // set the showErrorMessage property to true when an error message is set
    },
    resetErrorMessage(state: ToolState) {
      state.errorMessage = "";
      state.showErrorMessage = false; // reset the showErrorMessage property to false when the error message is reset
      state.errorCode = null;
      state.isSubmitted = false;
    },
    setCompressPdf(state: ToolState, action: PayloadAction<string | number>) {
      state.compressPdf = action.payload;
    },
    setErrorCode(state: ToolState, action: PayloadAction<string | null>) {
      state.errorCode = action.payload;
    },
    setIsSubmitted(state: ToolState, action: PayloadAction<boolean>) {
      state.isSubmitted = action.payload;
    },
    setShowOptions(state: ToolState, action: PayloadAction<boolean>) {
      state.showOptions = action.payload;
    },
    setNavHeight(state: ToolState, action: PayloadAction<number>) {
      state.nav_height = action.payload;
    },
    setSelectedFile(state: ToolState, action: PayloadAction<string>) {
      state.selectedFile = action.payload;
    },
    setLayout(state: ToolState, action: PayloadAction<"extract" | "range">) {
      state.layout = action.payload;
    },
    setSelectedPages(state: ToolState, action: PayloadAction<string>) {
      if (action.payload === "undefined") {
        state.selectedPages = "";
      } else {
        state.selectedPages = action.payload
          .replace(/0-/g, "")
          .replace(/0,/g, "");
      }
    },
    setRanges(
      state: ToolState,
      action: PayloadAction<
        | { from: number; to: number }[]
        | ((
            prevRanges: { from: number; to: number }[]
          ) => { from: number; to: number }[])
      >
    ) {
      if (typeof action.payload === "function") {
        state.ranges = action.payload(state.ranges);
      } else {
        state.ranges = action.payload;
      }
    },
    setFixedRanges(
      state: ToolState,
      action: PayloadAction<
        | { from: number; to: number }[]
        | ((
            prevRanges: { from: number; to: number }[]
          ) => { from: number; to: number }[])
      >
    ) {
      if (typeof action.payload === "function") {
        state.fixedRanges = action.payload(state.ranges);
      } else {
        state.fixedRanges = action.payload;
      }
    },
    setRangeType(state: ToolState, action: PayloadAction<"custom" | "fixed">) {
      state.rangeType = action.payload;
    },
    setPageCount(state: ToolState, action: PayloadAction<number>) {
      state.pageCount = action.payload;
    },
    setMerge: (
      state,
      action: PayloadAction<boolean | ((prev: boolean) => boolean)>
    ) => {
      if (typeof action.payload === "boolean") {
        state.merge = action.payload;
      } else if (typeof action.payload === "function") {
        state.merge = action.payload(state.merge);
      }
    },
  },
});

export const {
  showTool,
  hideTool,
  setErrorMessage,
  resetErrorMessage,
  setCompressPdf,
  setErrorCode,
  setIsSubmitted,
  setPath,
  setClick,
  setFocus,
  setShowDownloadBtn,
  setShowOptions,
  setNavHeight,
  setSelectedFile,
  setLayout,
  setSelectedPages,
  setRanges,
  setFixedRanges,
  setRangeType,
  setPageCount,
  setMerge,
} = toolSlice.actions;

export default toolSlice.reducer;
