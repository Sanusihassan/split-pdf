export const tool = {
  Split_PDF: {
    title: "Split PDF",
    seoTitle: "Split PDF Online - Divide PDF into Multiple Documents Securely",
    description: "Divide one PDF file into multiple documents",
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


export const edit_page = {
  edit_page_titles: {
    split_pdf: "Split PDF options",
  },
  loader_text: "please wait...",
  add_more_button: "Add more files",
  options: {
    split_by_range: "Split by range",
    extract_pages: "Extract Pages",
    split_by_range_options: {
      range_mode: "Range Mode:",
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
        will_be_created: "will be created.",
      },
    },
    extract_pages_options: {
      extract_mode: "Extract Mode:",
      extract_all: "Extract all pages",
      select_pages: "Select pages",
      selection_alert_content: {
        selection_alert:
          "Every selected page of this PDF file will be converted in one PDF file.",
        will_be_created: "will be created.",
      },
      select_pages_content: {
        pages_to_extract: "Pages to Extract:",
        merge: "Merge extracted pdf in one pdf file.",
        page_selection_example: "example: 2,8-32",
      },
    },
  },
  action_buttons: {
    split_pdf: "Split PDF",
  },
  select_files_placeholder: "Select Files",
  pages: "pages",
  page: "page",
};

export const tools = {
  select: "Select",
  or_drop: "or drop files here",
  files: "files",
  drop_files: "Drag files here",
};

export const downloadFile = {
  titles: {
    "split-pdf": ["PDF file has been split!", "PDF files have been split!"],
  },

  btnText: {
    "split-pdf": ["Download Split PDF files", "Download Split PDF file"],
  },

  backto: {
    "split-pdf": "Back To Split PDF",
  },
};

export const footer = {
  brand: "PDFEquips",
  terms: "terms",
  conditions: "conditions",
  privacy_policy: "privacy policy",
}

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
  // i want another error like this but when only one file is uploaded
  ERR_NETWORK: {
    message:
      "A network error occurred. Please check your internet connection and try again.",
    code: "ERR_NETWORK",
  },
};
