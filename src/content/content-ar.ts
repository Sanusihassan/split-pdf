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
  brand: "Equips",
  merge_pdf: "دمج PDF",
  split_pdf: "تقسيم PDF",
  compress_pdf: "ضغط PDF",
  convert_pdf: "تحويل PDF",
  convert_to_pdf: "تحويل إلى PDF",
  jpg_to_pdf: "JPG إلى PDF",
  word_to_pdf: "Word إلى PDF",
  powerpoint_to_pdf: "PowerPoint إلى PDF",
  excel_to_pdf: "Excel إلى PDF",
  html_to_pdf: "HTML إلى PDF",
  markdown_to_pdf: "Markdown إلى PDF",
  convert_from_pdf: "تحويل من PDF",
  web_to_pdf: "من الويب إلى PDF",
  pdf_to_jpg: "PDF إلى JPG",
  pdf_to_word: "PDF إلى Word",
  pdf_to_powerpoint: "PDF إلى PowerPoint",
  pdf_to_excel: "PDF إلى Excel",
  pdf_to_pdf_a: "PDF إلى PDF/A",
  pdf_to_text: "PDF إلى نص",
  pdf_to_html: "PDF إلى HTML",
  pdf_to_markdown: "PDF إلى Markdown",
};

export const landing_page: _landing_page = {
  hero: {
    title: "عزز إنتاجيتك من خلال حل ال PDF الشامل الخاص بنا",
    description: `ارتقِ بسير عمل PDF إلى المستوى التالي - أطلق العنان لإمكانيات جديدة باستخدام مجموعة الأدوات الشاملة الخاصة بنا.`,
  },
  features: {
    title: "كيف يمكن لـ PDFEquips تبسيط مهام PDF الخاصة بك",
    description:
      "يوفر لك PDFEquips مجموعة من الميزات للتعامل مع ملفات PDF الخاصة بك بسهولة. سواء أكنت تريد دمج أو تقسيم أو ضغط أو تحويل أو تحرير أو حماية ملفات PDF الخاصة بك ، يمكنك القيام بكل ذلك ببضع نقرات فقط. PDFEquips سريع وموثوق وآمن.",
  },
  why_us: {
    title: "الحل الأمثل لملفات PDF",
    description:
      "PDFEquips هو تطبيق الويب الأمثل لإدارة ملفات PDF بسهولة. استمتع بجميع\
    الميزات التي تحتاجها للعمل بفعالية مع مستنداتك الرقمية\
    مع الحفاظ على أمان وخصوصية بياناتك.",
  },
  // alert: {
  //   title: "ما رأيك في مشاهدة PDFEquips باللغة الإنجليزية؟",
  //   dontShowAgain: "لا تظهر هذا مرة أخرى",
  // },
};

export const tool: _tool = {
  Split_PDF: {
    title: "تقسيم PDF",
    description: "تقسيم ملف PDF إلى عدة مستندات",
    color: "var(--orange)",
    type: ".pdf",
    to: "/split-pdf",
  }
};


export const tools: _tools = {
  select: "اختر",
  or_drop: "أو قم بإسقاط الملفات هنا",
  files: "ملفات",
  drop_files: "قم بوضع الملفات هنا",
};

export const downloadFile: _downloadFile = {
  titles: {
    "split-pdf": ["تم تقسيم ملف ال PDF!"],
  },
  btnText: {
    "split-pdf": ["تحميل ملفات PDF المقسمة", "تحميل ملف PDF مقسم"],
  },
  backto: {
    "split-pdf": "العودة إلى تقسيم ملفات PDF",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    split_pdf: "خيارات تقسيم ملف PDF",
  },
  options: {
    split_by_range: "تقسيم حسب النطاق",
    extract_pages: "استخراج الصفحات",
    split_by_range_options: {
      range_mode: "وضع النطاق:",
      custom_range: "نطاق مخصص",
      fixed_range: "نطاق ثابت",
      custom_range_options: {
        range: "النطاق",
        from: "من",
        to: "إلى",
        add_range: "إضافة نطاق",
        merge: "دمج جميع النطاقات في ملف PDF واحد."
      },
      fixed_range_options: {
        split_into: "تقسيم في نطاق صفحات:",
        alert_info: "سيتم تقسيم هذا الملف PDF إلى ملفات من",
        pages: "صفحات",
        will_be_created: "سيتم إنشاء",
      }
    },
    extract_pages_options: {
      extract_mode: "وضع الاستخراج:",
      extract_all: "استخراج كافة الصفحات",
      select_pages: "حدد الصفحات",
      selection_alert_content: {
        selection_alert: "كل صفحة محددة من ملف PDF هذا سيتم تحويلها إلى ملف PDF واحد.",
        will_be_created: "سيتم إنشاؤه."
      },
      select_pages_content: {
        pages_to_extract: "الصفحات المراد استخراجها:",
        merge: "دمج ملف pdf المستخرج في ملف pdf واحد.",
        page_selection_example: "مثال: 2,8-32"
      }
    }
  },
  loader_text: "يرجى الانتظار...",
  add_more_button: "إضافة المزيد من الملفات",
  action_buttons: {
    split_pdf: "تقسيم PDF",
  },
  select_files_placeholder: "اختر الملفات",
  pages: "صفحة",
  page: "صفحة واحدة",
};


export const errors: _errors = {
  EMPTY_FILE: {
    message: "الملف فارغ. يرجى اختيار ملف صالح.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "حجم الملف كبير جدًا. يرجى اختيار ملف أصغر، أو استخدام أداة ضغط PDF الخاصة بنا لتقليل حجم الملف.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "الملف غير مدعوم.",
    types: {
      PDF: "يرجى اختيار ملف PDF صالح.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message: "الملف تالف ولا يمكن معالجته. يرجى اختيار ملف صالح.",
    code: "ERR_FILE_CORRUPT",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "لقد تجاوزت الحد الأقصى لعدد الملفات المسموح به. يرجى حذف بعض الملفات والمحاولة مرة أخرى.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "لم يتم اختيار أي ملفات. يرجى اختيار ملف واحد على الأقل.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "حدث خطأ غير معروف. يرجى المحاولة مرة أخرى لاحقًا أو الاتصال بالدعم.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "حدث خطأ في الشبكة. يرجى التحقق من اتصالك بالإنترنت وحاول مرة أخرى.",
    code: "ERR_NETWORK",
  },
};
