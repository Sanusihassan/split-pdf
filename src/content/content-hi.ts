import type {
  tool as _tool,
  web2pdftool as _web2pdftool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../../content";

export const tool: _tool = {
  Split_PDF: {
    title: "PDF विभाजित करें",
    seoTitle: "PDF को कई दस्तावेजों में ऑनलाइन सुरक्षित रूप से विभाजित करें",
    description: "एक PDF फ़ाइल को कई दस्तावेज़ों में विभाजित करें।",
    color: "var(--orange)",
    type: ".pdf",
    to: "/split-pdf",
    keywords: "PDF विभाजित करें, PDF विभाजन, PDF विभाजक, PDF पृष्ठ निकालें, ऑनलाइन PDF टूल",
    features: [
      {
        title: "सटीक पृष्ठ विभाजन",
        description: "अपने PDF को व्यक्तिगत पृष्ठों या पृष्ठों की एक श्रेणी में आसानी से विभाजित करें, मूल दस्तावेज़ की अखंडता को बनाए रखते हुए।"
      },
      {
        title: "तेज़ और कुशल",
        description: "तेजी से प्रसंस्करण समय का अनुभव करें, जिससे आप अपने PDF दस्तावेज़ों को कुछ ही सेकंड में विभाजित कर सकें।"
      },
      {
        title: "सुरक्षित और निजी",
        description: "हमारा टूल यह सुनिश्चित करता है कि विभाजन प्रक्रिया के दौरान आपकी फ़ाइलों को सुरक्षित रूप से संभाला जाए।"
      }
    ]
  }
};



export const downloadFile: _downloadFile = {
  titles: {
    "split-pdf": [
      "PDF फ़ाइल को विभाजित किया गया है!",
      "पीडीएफ फाइलें विभाजित हो गई हैं!",
    ],
  },
  btnText: {
    "split-pdf": [
      "विभाजित की गई PDF फ़ाइलें डाउनलोड करें",
      "विभाजित की गई PDF फ़ाइल डाउनलोड करें",
    ],
  },
  backto: {
    "split-pdf": "विभाजित की गई PDF को वापस जाएं",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    split_pdf: "PDF विभाजन विकल्प",
  },
  loader_text: "कृपया प्रतीक्षा करें...",
  add_more_button: "अधिक फ़ाइलें जोड़ें",
  options: {
    split_by_range: "रेंज से विभाजित करें",
    extract_pages: "पृष्ठ निकालें",
    split_by_range_options: {
      range_mode: "रेंज मोड:",
      custom_range: "कस्टम रेंज",
      fixed_range: "निश्चित रेंज",
      custom_range_options: {
        range: "रेंज",
        from: "से",
        to: "तक",
        add_range: "रेंज जोड़ें",
        merge: "सभी रेंजों को एक PDF फ़ाइल में मर्ज करें।",
      },
      fixed_range_options: {
        split_into: "पृष्ठ रेंज में विभाजित करें:",
        alert_info: "इस PDF को फाइलों में विभाजित किया जाएगा",
        pages: "पृष्ठ",
        will_be_created: "बनाई जाएगी।",
      },
    },
    extract_pages_options: {
      extract_mode: "निकालने का मोड:",
      extract_all: "सभी पृष्ठ निकालें",
      select_pages: "पृष्ठ चुनें",
      selection_alert_content: {
        selection_alert:
          "इस PDF फ़ाइल के हर चयनित पृष्ठ को एक PDF फ़ाइल में कन्वर्ट किया जाएगा।",
        will_be_created: "बनाई जाएगी।",
      },
      select_pages_content: {
        pages_to_extract: "निकालने के लिए पृष्ठ:",
        merge: "निकाले गए PDF को एक PDF फ़ाइल में मर्ज करें।",
        page_selection_example: "उदाहरण: 2,8-32",
      },
    },
  },
  action_buttons: {
    split_pdf: "पीडीएफ विभाजित करें",
  },
  select_files_placeholder: "फ़ाइलें चुनें",
  pages: "पृष्ठों",
  page: "पृष्ठ",
};

export const tools: _tools = {
  select: "चुनें",
  or_drop: "या फ़ाइलें यहां छोड़ें",
  files: "फाइलें",
  drop_files: "फ़ाइलें यहाँ खींचें",
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "शर्तें",
  conditions: "उपयोग की शर्तें",
  privacy_policy: "गोपनीयता नीति",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "फ़ाइल खाली है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "फ़ाइल बहुत बड़ी है। कृपया एक छोटी फ़ाइल चुनें या हमारा कंप्रेस-पीडीएफ़ उपकरण उपयोग करके फ़ाइल का आकार कम करें।",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "फ़ाइल एक समर्थित प्रकार नहीं है।",
    types: {
      PDF: "कृपया एक मान्य पीडीएफ़फ़ाइल चुनें।",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "फ़ाइल का डाटा भ्रष्ट है और इसे प्रसंस्करण नहीं किया जा सकता है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_FILE_CORRUPT",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "आपने अनुमति दी हुई अधिकतम फ़ाइलों की संख्या पार कर दी है। कृपया कुछ फ़ाइलें हटाएं और पुनः प्रयास करें।",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "कोई फ़ाइल चयनित नहीं की गई है। कृपया कम से कम एक फ़ाइल चुनें।",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "एक अज्ञात त्रुटि हुई है। कृपया बाद में पुनः प्रयास करें या सहायता से संपर्क करें।",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "नेटवर्क में त्रुटि हो गई है। कृपया अपना इंटरनेट कनेक्शन जांचें और पुनः प्रयास करें।",
    code: "ERR_NETWORK",
  },
  ERR_ONLY_ONE_PAGE: {
    message: "आपकी PDF में केवल एक पृष्ठ है और इसे विभाजित नहीं किया जा सकता।",
    code: "ERR_ONLY_ONE_PAGE",
  },
};
