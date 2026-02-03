export const tool = {
  Split_PDF: {
    title: "Split PDF",
    seoTitle: "Divide PDF into Multiple Documents Online Securely",
    description: "Divide one PDF file into multiple documents.",
    color: "var(--orange)",
    type: ".pdf",
    to: "/split-pdf",
    keywords: "split PDF, divide PDF, PDF splitter, extract PDF pages, online PDF tool",
    features: [
      {
        title: "Accurate Page Splitting",
        description: "Easily split your PDF into individual pages or a range of pages, maintaining the integrity of your original document."
      },
      {
        title: "Fast and Efficient",
        description: "Experience quick processing times, allowing you to split your PDF documents in just seconds."
      },
      {
        title: "Secure and Private",
        description: "Our tool ensures your files are handled securely, protecting your data during the splitting process."
      }
    ]
  }
};
export type Paths = "split-pdf";

export const edit_page = {
  edit_page_titles: {
    split_pdf: "Split PDF options"
  },
  loader_text: "please wait...",
  add_more_button: "Add more files",
  fileCard: {
    page: "page",
    pages: "pages",
    remove_file: "Remove file",
    loading: "Loading...",
    warning: "⚠️ No pages selected. Click on pages to select them."
  },
  options: {
    split_by_range: "Split by range",
    extract_pages: "Extract Pages",
    split_by_range_options: {
      range_mode: "RANGE MODE:",
      custom_range: "custom range",
      fixed_range: "fixed range",
      custom_range_options: {
        range: "Range",
        from: "From",
        to: "To",
        add_range: "Add Range",
        merge: "Merge all ranges in one PDF file.",
      },
      fixed_range_options: {
        split_into: "split in page range of:",
        alert_info: "This PDF will be split in files of",
        pages: "pages",
        will_be_created: "PDF will be created.",
      },
    },
    extract_pages_options: {
      extract_mode: "EXTRACT MODE:",
      extract_all: "Extract all pages",
      select_pages: "Select pages",
      selection_alert_content: {
        selection_alert:
          "Every selected page of this PDF file will be converted in one PDF file.",
        will_be_created: "PDF will be created.",
      },
      select_pages_content: {
        pages_to_extract: "Pages to Extract:",
        merge: "Merge extracted pdf in one pdf file.",
        page_selection_example: "example: 2,8-32",
      },
    },
  },
  action_buttons: {
    split_pdf: "Split PDF"
  },
  select_files_placeholder: "Select Files",
  pages: "pages",
  page: "page",
  filenameOptions: {
    label: "Output File Name (Optional)",
    placeholder: "Enter file name",
    helperText: "This will be the name of the compressed PDF when downloaded.",
    cta: "View Plans",
    upgradeNotice: {
      msg: "Levels from 2.0 to 10.0 are available with premium.",
      cta: "Upgrade now",
    },
  },
};

export const downloadFile = {
  titles: {
    "split-pdf": [
      "PDF file has been split!",
      "PDF files have been split!"
    ]
  },
  btnText: {
    "split-pdf": [
      "Download Split PDF files",
      "Download Split PDF file"
    ]
  },
  backto: {
    "split-pdf": "Back To Split PDF"
  }
};

export const tools = {
  select: "Select",
  or_drop: "or drop files here",
  files: "files",
  drop_files: "Drag files here",
};

export const errors = {
  EMPTY_FILE: {
    message: "The file is empty. Please choose a valid file.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "The file is too large. Please choose a smaller file, or use our compress-pdf tool to reduce the file size.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "The file is not a supported type.",
    types: {
      PDF: "Please choose a valid PDF file.",
      DOC: "Please choose a valid Word document file.",
      DOCX: "Please choose a valid Word document file.",
      XLS: "Please choose a valid Excel spreadsheet file.",
      XLSX: "Please choose a valid Excel spreadsheet file.",
      PPT: "Please choose a valid PowerPoint presentation file.",
      PPTX: "Please choose a valid PowerPoint presentation file.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "The file is corrupt and cannot be processed. Please choose a valid file.",
    code: "ERR_FILE_CORRUPT",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "You have exceeded the maximum number of files allowed. Please delete some files and try again.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "No files selected. Please select at least one file.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "An unknown error occurred. Please try again later or contact support.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "A network error occurred. Please check your internet connection and try again.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Please upload at least two files to merge.",
    code: "ERR_UPLOAD_COUNT",
  },
  PASSWORD_REQUIRED: {
    message: "PDF requires a password.",
    code: "PASSWORD_REQUIRED",
  },

  INCORRECT_PASSWORD: {
    message: "The password you entered is incorrect.",
    code: "INCORRECT_PASSWORD",
  },
  MAX_DAILY_USAGE: {
    message:
      "You’ve reached your daily usage limit. Please upgrade your plan to continue using this feature without interruption.",
    code: "MAX_DAILY_USAGE",
  },
  MAX_PAGES_EXCEEDED: {
    message: "The PDF exceeds the maximum page limit of 50 pages.",
    code: "ERR_MAX_PAGES_EXCEEDED",
  },
  alerts: {
    // Frontend validation
    maxFiles: "Max 15 files. Subscribe for more!",
    singleFileSize: "File size must be under 100 MB. Upgrade to upload bigger files!",
    perFilePages: "500 pages per file. Unlock more now!",
    fileSize: "50MB per file. Upgrade for more!",
    serverError: "Server error. Please try again later.",
    // Backend file validation
    fileNotUploaded: "No file was uploaded. Please select a file.",
    fileEmpty: "The uploaded file is empty. Please select a valid file.",
    fileTooLarge: "File exceeds 200MB limit. Upgrade for larger files!",
    invalidFileType: "Invalid file type. Please upload a supported format.",
    fileCorrupt: "File appears to be corrupted. Please try another file.",
    insufficientUnits: "Not enough conversion units. Upgrade or recharge!",
    // Auth errors
    authRequired: "Please log in to use premium features.",
    sessionExpired: "Your session has expired. Please log in again.",
    invalidToken: "Authentication failed. Please log in again.",
    userNotFound: "Account not found. Please log in again.",
    authError: "Authentication error. Please try again.",
    notPasswordProtected: "One or more files are not password protected",
    invalidSplitMode: "Invalid split mode selected.",
    invalidRangeMode: "Invalid range mode selected.",
    invalidExtractMode: "Invalid extract mode selected.",
    noRangesProvided: "Please provide at least one page range.",
    noFixedRangeValue: "Please specify the number of pages per split.",
    invalidFixedRangeValue: "Invalid number of pages. Please enter a positive number.",
    noPagesSelected: "Please select at least one page to extract.",
    invalidPageRange: "Invalid page range. Please check your page numbers.",
    invalidPageSelection: "Invalid page selection. Use format like '1-3,5,7-10'.",
    rangeOutOfBounds: "Page range exceeds the number of pages in the PDF.",
    pdfTooManyPages: "PDF has too many pages. Please use a smaller document.",
    splitFailed: "Failed to split PDF. Please try again.",
  },
};

export const adBlockerContent = {
  title: "Ad Blocker Detected",
  description: "We noticed you're using an ad blocker. Please consider disabling it or upgrade to premium for an ad-free experience!",
  reloadPage: "Reload Page",
  upgradeToPremium: "Upgrade to Premium"
}
export type adBlockerContentType = typeof adBlockerContent;