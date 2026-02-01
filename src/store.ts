// redux store.ts (EXTENDED VERSION)
import { createSlice, createSelector, type Draft, type PayloadAction } from "@reduxjs/toolkit";

type WritableDraft<T> = {
  -readonly [K in keyof T]: Draft<T[K]>;
};

type k = keyof WritableDraft<ToolState>;

// ============================================
// SPLIT PDF TYPES
// ============================================
export interface SplitRange {
  id: string;
  from: number;
  to: number;
}

// ============================================
// TOOL STATE INTERFACE (EXTENDED)
// ============================================
export interface ToolState {
  showTool: boolean;
  isSubmitted: boolean;
  errorMessage: string;
  errorCode: string | null;
  showDownloadBtn: boolean;
  showOptions: boolean;
  fileName: string;
  limitationMsg: string;
  rotations: { k: string; r: number }[];
  passwords: { k: string; p: string }[];
  subscriptionStatus: boolean | null;
  isAdBlocked: boolean;
  selectedPages: string;
  selectedFile: string;
  pageCount: number;

  // ============================================
  // SPLIT PDF STATE (NEW)
  // ============================================
  splitMode: "split_by_range" | "extract_pages";
  rangeMode: "custom_range" | "fixed_range";
  extractMode: "extract_all" | "select_pages";
  customRanges: SplitRange[];
  fixedRangeValue: number;
  mergeRanges: boolean;
  mergeExtracted: boolean;
  extractPagesInput: string;
}

const initialState: ToolState = {
  showTool: true,
  errorMessage: "",
  isSubmitted: false,
  errorCode: null,
  showDownloadBtn: false,
  showOptions: false,
  fileName: "",
  limitationMsg: "",
  rotations: [],
  passwords: [],
  subscriptionStatus: null,
  isAdBlocked: false,
  selectedPages: "",
  selectedFile: "",
  pageCount: 0,

  // Split PDF initial state
  splitMode: "split_by_range",
  rangeMode: "fixed_range",
  extractMode: "extract_all",
  customRanges: [],
  fixedRangeValue: 1,
  mergeRanges: false,
  mergeExtracted: false,
  extractPagesInput: "",
};

const toolSlice = createSlice({
  name: "tool",
  initialState,
  reducers: {
    resetErrorMessage(state: ToolState) {
      state.errorMessage = "";
      state.errorCode = null;
      state.isSubmitted = false;
    },
    setField(state, action: PayloadAction<Partial<ToolState>>) {
      Object.keys(action.payload).forEach((key) => {
        const typedKey = key as k;
        const value = action.payload[typedKey];
        if (value !== undefined) {
          // @ts-ignore
          state[typedKey] = value;
        }
      });
    },

    // ============================================
    // SPLIT PDF REDUCERS (NEW)
    // ============================================
    setSplitMode(state, action: PayloadAction<"split_by_range" | "extract_pages">) {
      state.splitMode = action.payload;
    },
    setRangeMode(state, action: PayloadAction<"custom_range" | "fixed_range">) {
      state.rangeMode = action.payload;
    },
    setExtractMode(state, action: PayloadAction<"extract_all" | "select_pages">) {
      state.extractMode = action.payload;
    },
    setCustomRanges(state, action: PayloadAction<SplitRange[]>) {
      state.customRanges = action.payload;
    },
    addCustomRange(state, action: PayloadAction<SplitRange>) {
      state.customRanges.push(action.payload);
    },
    removeCustomRange(state, action: PayloadAction<string>) {
      state.customRanges = state.customRanges.filter(r => r.id !== action.payload);
    },
    updateCustomRange(state, action: PayloadAction<SplitRange>) {
      const index = state.customRanges.findIndex(r => r.id === action.payload.id);
      if (index !== -1) {
        state.customRanges[index] = action.payload;
      }
    },
    setFixedRangeValue(state, action: PayloadAction<number>) {
      state.fixedRangeValue = action.payload;
    },
    setMergeRanges(state, action: PayloadAction<boolean>) {
      state.mergeRanges = action.payload;
    },
    setMergeExtracted(state, action: PayloadAction<boolean>) {
      state.mergeExtracted = action.payload;
    },
    setExtractPagesInput(state, action: PayloadAction<string>) {
      state.extractPagesInput = action.payload;
    },
    resetSplitPDFState(state) {
      // Reset only Split PDF related state
      state.splitMode = "split_by_range";
      state.rangeMode = "fixed_range";
      state.extractMode = "extract_all";
      state.customRanges = [];
      state.fixedRangeValue = 1;
      state.mergeRanges = false;
      state.mergeExtracted = false;
      state.extractPagesInput = "";
    },
  },
});

export const {
  resetErrorMessage,
  setField,
  // Split PDF actions
  setSplitMode,
  setRangeMode,
  setExtractMode,
  setCustomRanges,
  addCustomRange,
  removeCustomRange,
  updateCustomRange,
  setFixedRangeValue,
  setMergeRanges,
  setMergeExtracted,
  setExtractPagesInput,
  resetSplitPDFState,
} = toolSlice.actions;

// ============================================
// MEMOIZED SELECTORS (prevent unnecessary rerenders)
// ============================================

/**
 * Select the entire tool state
 */
export const selectToolState = (state: { tool: ToolState }) => state.tool;

export const selectRotations = createSelector(
  [selectToolState],
  (state) => state.rotations
);

export const selectPasswords = createSelector(
  [selectToolState],
  (state) => state.passwords
);

// ============================================
// SPLIT PDF SELECTORS (NEW)
// ============================================

export const selectSplitMode = createSelector(
  [selectToolState],
  (state) => state.splitMode
);

export const selectRangeMode = createSelector(
  [selectToolState],
  (state) => state.rangeMode
);

export const selectExtractMode = createSelector(
  [selectToolState],
  (state) => state.extractMode
);

export const selectCustomRanges = createSelector(
  [selectToolState],
  (state) => state.customRanges
);

export const selectFixedRangeValue = createSelector(
  [selectToolState],
  (state) => state.fixedRangeValue
);

export const selectMergeRanges = createSelector(
  [selectToolState],
  (state) => state.mergeRanges
);

export const selectMergeExtracted = createSelector(
  [selectToolState],
  (state) => state.mergeExtracted
);

export const selectExtractPagesInput = createSelector(
  [selectToolState],
  (state) => state.extractPagesInput
);

export const selectPageCount = createSelector(
  [selectToolState],
  (state) => state.pageCount
);

export default toolSlice.reducer;