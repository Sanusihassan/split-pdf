import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
type WritableDraft<T> = {
  -readonly [K in keyof T]: Draft<T[K]>;
};

type k = keyof WritableDraft<ToolState>;

export interface ToolState {
  showTool: boolean;
  isSubmitted: boolean;
  errorMessage: string;
  showErrorMessage: boolean;
  errorCode: string | null;
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
  errorCode: null,
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
    resetErrorMessage(state: ToolState) {
      state.errorMessage = "";
      state.showErrorMessage = false;
      state.errorCode = null;
      state.isSubmitted = false;
    },
    setField(state, action: PayloadAction<Partial<ToolState>>) {
      Object.keys(action.payload).forEach((key) => {
        // Cast the key to keyof ToolState to ensure it's a valid key
        const typedKey = key as k;
        const value = action.payload[typedKey];
        if (value !== undefined) {
          // @ts-ignore
          state[typedKey] = value;
        }
      });
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
  setField,
  resetErrorMessage,
  setSelectedPages,
  setRanges,
  setFixedRanges,
  setMerge,
} = toolSlice.actions;

export default toolSlice.reducer;
