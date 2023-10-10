import type {
  nav_content as nav_content_type,
  tool as _tool,
  web2pdftool as _web2pdftool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../../content";

export const nav_content: nav_content_type = {
  // इसे अनदेखा करें
  brand: "Equips",
  merge_pdf: "पीडीएफ विलय करें",
  split_pdf: "पीडीएफ विभाजित करें",
  compress_pdf: "पीडीएफ संपीड़ित करें",
  convert_pdf: "पीडीएफ परिवर्तित करें",
  convert_to_pdf: "पीडीएफ में परिवर्तित करें",
  jpg_to_pdf: "जेपीजी से पीडीएफ",
  word_to_pdf: "शब्द से पीडीएफ",
  markdown_to_pdf: "पीडीएफ में मार्कडाउन करें",
  powerpoint_to_pdf: "पावरपॉइंट से पीडीएफ",
  excel_to_pdf: "एक्सेल से पीडीएफ",
  html_to_pdf: "एचटीएमएल से पीडीएफ",
  web_to_pdf: "वेब से पीडीएफ",
  convert_from_pdf: "पीडीएफ से परिवर्तित करें",
  pdf_to_jpg: "पीडीएफ से जेपीजी",
  pdf_to_word: "पीडीएफ से शब्द",
  pdf_to_powerpoint: "पीडीएफ से पावरपॉइंट",
  pdf_to_excel: "पीडीएफ से एक्सेल",
  pdf_to_pdf_a: "पीडीएफ से पीडीएफ/ए",
  pdf_to_text: "पाठ के लिए पीडीएफ",
  pdf_to_html: "पीडीएफ से एचटीएमएल",
  pdf_to_markdown: "PDF से मार्कडाउन तक",
};
export const landing_page: _landing_page = {
  hero: {
    title: "हमारे व्यापक पीडीएफ समाधान के साथ अपनी उत्पादकता बढ़ाएँ",
    description:
      "अपने पीडीएफ वर्कफ़्लो को अगले स्तर पर ले जाएं - हमारे व्यापक टूलकिट के साथ नई संभावनाओं को अनलॉक करें।",
  },
  features: {
    title: "PDFEquips आपके PDF कार्यों को कैसे सरल बना सकता है",
    description:
      "PDFEquips आपको अपनी PDF फ़ाइलों को आसानी से संभालने के लिए कई सुविधाएं प्रदान करता है। चाहे आप अपने PDF को मर्ज, स्प्लिट, कम्प्रेस, कन्वर्ट, एडिट या प्रोटेक्ट करना चाहते हो, आप कुछ ही क्लिक में सब कुछ कर सकते हो। PDFEquips तेज, विश्वसनीय और सुरक्षित है।",
  },
  why_us: {
    title: "PDF समाधान जिस पर आप भरोसा कर सकते हैं",
    description:
      "PDFEquips आपका अंतिम वेब ऐप है जो PDF को आसानी से प्रबंधित करता है। आपके डिजिटल दस्तावेजों के साथ कुशलता से काम करने के लिए आपको जरूरत होने वाले सभी\
    सुविधाओं का आनंद लें\
    अपने डेटा को सुरक्षित और सुरक्षा में रखते हुए।",
  },
};
export const tool: _tool = {
  Split_PDF: {
    title: "पीडीएफ विभाजित करें",
    description: "एक पीडीएफ फ़ाइल को कई दस्तावेजों में विभाजित करें",
    color: "var(--orange)",
    type: ".pdf",
    to: "/split-pdf",
  },
};

export const downloadFile: _downloadFile = {
  titles: {
    "split-pdf": ["PDF फ़ाइल को विभाजित किया गया है!"],
  },
  btnText: {
    "split-pdf": [
      "विभाजित की गई PDF फ़ाइलें डाउनलोड करें",
      "विभाजित की गई PDF फ़ाइल डाउनलोड करें",
    ]
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
        merge: "सभी रेंजों को एक PDF फ़ाइल में मर्ज करें।"
      },
      fixed_range_options: {
        split_into: "पृष्ठ रेंज में विभाजित करें:",
        alert_info: "इस PDF को फाइलों में विभाजित किया जाएगा",
        pages: "पृष्ठ",
        will_be_created: "बनाई जाएगी।",
      }
    },
    extract_pages_options: {
      extract_mode: "निकालने का मोड:",
      extract_all: "सभी पृष्ठ निकालें",
      select_pages: "पृष्ठ चुनें",
      selection_alert_content: {
        selection_alert: "इस PDF फ़ाइल के हर चयनित पृष्ठ को एक PDF फ़ाइल में कन्वर्ट किया जाएगा।",
        will_be_created: "बनाई जाएगी।"
      },
      select_pages_content: {
        pages_to_extract: "निकालने के लिए पृष्ठ:",
        merge: "निकाले गए PDF को एक PDF फ़ाइल में मर्ज करें।",
        page_selection_example: "उदाहरण: 2,8-32"
      }
    }
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

};
