export const nav_content = {
  brand: "Equips",
  merge_pdf: "Merge PDF",
  split_pdf: "Split PDF",
  compress_pdf: "Compress PDF",
  convert_pdf: "Convert PDF",
  convert_to_pdf: "Convert to PDF",
  jpg_to_pdf: "JPG to PDF",
  word_to_pdf: "WORD to PDF",
  powerpoint_to_pdf: "POWERPOINT to PDF",
  excel_to_pdf: "EXCEL to PDF",
  html_to_pdf: "HTML to PDF",
  web_to_pdf: "Web to PDF",
  markdown_to_pdf: "Markdown to PDF",
  convert_from_pdf: "Convert from PDF",
  pdf_to_jpg: "PDF to JPG",
  pdf_to_word: "PDF to WORD",
  pdf_to_powerpoint: "PDF to POWERPOINT",
  pdf_to_excel: "PDF to EXCEL",
  pdf_to_pdf_a: "PDF to PDF/A",
  pdf_to_text: "PDF to text",
  pdf_to_html: "PDF to HTML",
  pdf_to_markdown: "PDF to Markdown",
};
export const landing_page = {
  hero: {
    title: "Enhance Your Productivity with our Comprehensive PDF Solution",
    // translate this to Spanish but ignore the PDFequips part
    description: `Take Your PDF Workflows to the Next Level - Unlock New Possibilities with Our Comprehensive Toolkit.`,
  },
  features: {
    title: "How PDFEquips Can Simplify Your PDF Tasks",
    description:
      "PDFEquips offers you a range of features to handle your PDF files with\
    ease. Whether you want to merge, split, compress, convert, edit, or\
    protect your PDFs, you can do it all with just a few clicks. PDFEquips\
    is fast, reliable, and secure.",
  },
  why_us: {
    title: "The PDF solution you can rely on",
    description:
      "PDFEquips is your ultimate web app for managing PDF with ease. Enjoy all\
    the features you need to work effectively with your digital documents\
    while keeping your data safe and secure.",
  },
};

export const tool = {
  Split_PDF: {
    title: "Split PDF",
    description: "Divide one PDF file into multiple documents",
    color: "var(--orange)",
    type: ".pdf",
    to: "/split-pdf",
  },
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
        merge: "Merge all ranges in one PDF file."
      },
      fixed_range_options: {
        split_into: "split in page range of:",
        alert_info: "This PDF will be split in files of",
        pages: "pages",
        will_be_created: "will be created.",
      }
    },
    extract_pages_options: {
      extract_mode: "Extract Mode:",
      extract_all: "Extract all pages",
      select_pages: "Select pages",
      selection_alert_content: {
        selection_alert: "Every selected page of this PDF file will be converted in one PDF file.",
        will_be_created: "will be created."
      },
      select_pages_content: {
        pages_to_extract: "Pages to Extract:",
        merge: "Merge extracted pdf in one pdf file.",
        page_selection_example: "example: 2,8-32"
      }
    }
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
  }
};
