import type {
  nav_content as _nav_content,
  tool as _tool,
  web2pdftool as _web2pdftool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../../content";
export const nav_content: _nav_content = {
  brand: "Equips",
  merge_pdf: "合并PDF",
  split_pdf: "拆分PDF",
  compress_pdf: "压缩PDF",
  convert_pdf: "转换PDF",
  convert_to_pdf: "转换为PDF",
  jpg_to_pdf: "JPG转PDF",
  word_to_pdf: "Word转PDF",
  markdown_to_pdf: "降价到 PDF",
  powerpoint_to_pdf: "PowerPoint转PDF",
  excel_to_pdf: "Excel转PDF",
  html_to_pdf: "HTML转PDF",
  web_to_pdf: "网页转 PDF",
  convert_from_pdf: "从PDF转换",
  pdf_to_jpg: "PDF转JPG",
  pdf_to_word: "PDF转Word",
  pdf_to_powerpoint: "PDF转PowerPoint",
  pdf_to_excel: "PDF转Excel",
  pdf_to_pdf_a: "PDF转PDF/A",
  pdf_to_text: "PDF 转文本",
  pdf_to_html: "PDF 到 HTML",
  pdf_to_markdown: "PDF 到 Markdown",
};

export const landing_page: _landing_page = {
  hero: {
    title: "利用我们全面的 PDF 解决方案提高您的工作效率",
    description:
      "将您的 PDF 工作流程提升到新的水平 - 使用我们的综合工具包解锁新的可能性。",
  },
  features: {
    title: "PDFEquips 如何简化您的 PDF 任务",
    description:
      "PDFEquips 为您提供了一系列功能，让您轻松处理 PDF 文件。无论您想要合并、分割、压缩、转换、编辑或保护您的 PDF，您都可以用几下点击完成。PDFEquips 快速、可靠、安全。",
  },
  why_us: {
    title: "您可以信赖的 PDF 解决方案",
    description:
      "PDFEquips 是您管理 PDF 的终极网络应用程序。享受所有\
    您需要高效处理数字文档的功能\
    同时保证您的数据安全和隐私。",
  },
};

export const tool: _tool = {
  Split_PDF: {
    title: "拆分PDF",
    description: "将一个PDF文件分割成多个文档",
    color: "var(--orange)",
    type: ".pdf",
    to: "/split-pdf",
  },
};

export const downloadFile: _downloadFile = {
  titles: {
    "merge-pdf": ["PDF文件已合并！", "PDF文件已合并！"],
    "split-pdf": ["PDF文件已拆分！"],
    "compress-pdf": ["PDF文件已压缩！", "PDF文件已压缩！"],
    "pdf-to-powerpoint": [
      "PDF文件已转换为PowerPoint！",
      "PDF文件已转换为PowerPoint！",
    ],
    "jpg-to-pdf": ["JPG文件已转换为PDF！", "JPG文件已转换为PDF！"],
    "word-to-pdf": ["Word文件已转换为PDF！", "Word文件已转换为PDF！"],
    "powerpoint-to-pdf": [
      "PowerPoint文件已转换为PDF！",
      "PowerPoint文件已转换为PDF！",
    ],
    "excel-to-pdf": ["Excel文件已转换为PDF！", "Excel文件已转换为PDF！"],
    "html-to-pdf": ["HTML文件已转换为PDF！", "HTML文件已转换为PDF！"],
    "pdf-to-jpg": ["PDF文件已转换为JPG！", "PDF文件已转换为JPG！"],
    "pdf-to-word": ["PDF文件已转换为Word！", "PDF文件已转换为Word！"],
    "pdf-to-excel": ["PDF文件已转换为Excel！", "PDF文件已转换为Excel！"],
    "pdf-to-pdf-a": ["PDF文件已转换为PDF/A！", "PDF文件已转换为PDF/A！"],
    "web-to-pdf": ["网站已转换为PDF！", "网站已转换为PDF！"],
    "pdf-to-text": ["PDF文件已转换为文本！", "PDF文件已转换为文本！"],
    "markdown-to-pdf": [
      "Markdown文件已转换为PDF！",
      "Markdown文件已转换为PDF！",
    ],
    "pdf-to-html": ["PDF文件已转换为HTML！", "PDF文件已转换为HTML！"],
    "pdf-to-markdown": [
      "PDF文件已转换为Markdown！",
      "PDF文件已转换为Markdown！",
    ],
  },
  btnText: {
    "merge-pdf": ["下载合并后的PDF文件", "下载合并后的PDF文件"],
    "split-pdf": ["下载拆分后的PDF文件", "下载拆分后的PDF文件"],
    "compress-pdf": ["下载压缩后的PDF文件", "下载压缩后的PDF文件"],
    "pdf-to-powerpoint": [
      "下载转换后的PowerPoint文件",
      "下载转换后的PowerPoint文件",
    ],
    "jpg-to-pdf": ["下载转换后的PDF文件", "下载转换后的PDF文件"],
    "word-to-pdf": ["下载转换后的PDF文件", "下载转换后的PDF文件"],
    "powerpoint-to-pdf": ["下载转换后的PDF文件", "下载转换后的PDF文件"],
    "excel-to-pdf": ["下载转换后的PDF文件", "下载转换后的PDF文件"],
    "html-to-pdf": ["下载转换后的PDF文件", "下载转换后的PDF文件"],
    "pdf-to-jpg": ["下载转换后的JPG文件", "下载转换后的JPG文件"],
    "pdf-to-word": ["下载转换后的Word文件", "下载转换后的Word文件"],
    "pdf-to-excel": ["下载转换后的Excel文件", "下载转换后的Excel文件"],
    "pdf-to-pdf-a": ["下载转换后的PDF/A文件", "下载转换后的PDF/A文件"],
    "web-to-pdf": ["下载转换后的PDF文件", "下载转换后的PDF文件"],
    "pdf-to-text": ["下载转换后的文本文件", "下载转换后的文本文件"],
    "markdown-to-pdf": ["下载转换后的PDF文件", "下载转换后的PDF文件"],
    "pdf-to-html": ["下载转换后的HTML文件", "下载转换后的HTML文件"],
    "pdf-to-markdown": ["下载转换后的Markdown文件", "下载转换后的Markdown文件"],
  },
  backto: {
    "merge-pdf": "返回合并PDF",
    "split-pdf": "返回拆分PDF",
    "compress-pdf": "返回压缩PDF",
    "pdf-to-powerpoint": "返回PDF转Powerpoint",
    "jpg-to-pdf": "返回JPG转PDF",
    "word-to-pdf": "返回Word转PDF",
    "powerpoint-to-pdf": "返回Powerpoint转PDF",
    "excel-to-pdf": "返回Excel转PDF",
    "html-to-pdf": "返回HTML转PDF",
    "pdf-to-jpg": "返回PDF转JPG",
    "pdf-to-word": "返回PDF转Word",
    "pdf-to-excel": "返回PDF转Excel",
    "pdf-to-pdf-a": "返回PDF转PDF-A",
    "web-to-pdf": "返回Web转PDF",
    "pdf-to-text": "返回PDF转文本",
    "markdown-to-pdf": "返回Markdown转PDF",
    "pdf-to-html": "返回PDF转HTML",
    "pdf-to-markdown": "返回PDF转Markdown",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    merge_pdf: "合并PDF选项",
    split_pdf: "拆分PDF选项",
    compress_pdf: "压缩PDF选项",
    pdf_to_powerpoint: "PDF转Powerpoint选项",
    jpg_to_pdf: "JPG转PDF选项",
    word_to_pdf: "WORD转PDF选项",
    powerpoint_to_pdf: "Powerpoint转PDF选项",
    excel_to_pdf: "EXCEL转PDF选项",
    html_to_pdf: "HTML转PDF选项",
    pdf_to_jpg: "PDF转JPG选项",
    pdf_to_word: "PDF转WORD选项",
    pdf_to_excel: "PDF转EXCEL选项",
    pdf_to_pdf_a: "PDF转PDF/A选项",
    pdf_to_text: "PDF 转文本选项",
  },
  loader_text: "请稍等...",
  add_more_button: "添加更多文件",
  action_buttons: {
    merge_pdf: "合并PDF",
    split_pdf: "拆分PDF",
    compress_pdf: "压缩PDF",
    pdf_to_powerpoint: "转换为PowerPoint",
    jpg_to_pdf: "转换为PDF",
    word_to_pdf: "转换为PDF",
    powerpoint_to_pdf: "转换为PDF",
    excel_to_pdf: "转换为PDF",
    html_to_pdf: "转换为PDF",
    pdf_to_jpg: "转换为JPG",
    pdf_to_word: "转换为Word",
    pdf_to_excel: "转换为Excel",
    pdf_to_pdf_a: "转换为PDF/A",
    pdf_to_text: "转换为文本",
    translate_pdf: "翻译 PDF",
  },
  pages: "页",
  page: "页",
  compress_pdf: [
    {
      title: "推荐压缩",
      description: "文件大小和质量之间的最佳平衡",
    },
    {
      title: "较少压缩",
      description: "较小的文件大小但质量较低",
    },
    {
      title: "极度压缩",
      description: "文件大小显著减小但质量明显降低",
    },
    {
      title: "自定义压缩",
      description: "选择自己的压缩量",
    },
  ],
  merge_pdf:
    "使用拖放改变PDF文件合并的顺序。单击并   按住一个文件,将其移动到所需位置,然后释放鼠标按钮。   PDF文件从上到下合并。要删除文件,请单击文件顶部的删除   图标。要旋转页面,请单击页面缩略图顶部的旋转图标,然后选择所需的旋转角度。文件处于   所需的顺序和方向,单击“合并”按钮将它们合并为一个PDF文件。",
};

export const tools: _tools = {
  select: "选择",
  or_drop: "或将文件拖放到此处",
  files: "文件",
  drop_files: "在此处拖放文件",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "文件为空，请选择一个有效的文件。",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "文件太大。请选择一个更小的文件，或使用我们的压缩PDF工具来减小文件大小。",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "文件不是受支持的类型。",
    types: {
      PDF: "请选择一个有效的PDF文件。",
      JPG: "请选择一个有效的JPEG图片文件。",
      DOC: "请选择一个有效的Word文档文件。",
      DOCX: "请选择一个有效的Word文档文件。",
      XLS: "请选择一个有效的Excel电子表格文件。",
      XLSX: "请选择一个有效的Excel电子表格文件。",
      PPT: "请选择一个有效的PowerPoint演示文稿文件。",
      PPTX: "请选择一个有效的PowerPoint演示文稿文件。",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message: "文件已损坏，无法处理。请选择一个有效的文件。",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message: "文件缺少字体。请确保所有字体都嵌入在PDF文件中。",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message: "文件包含无效的图像数据。请确保所有图像格式正确。",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message: "文件存在安全风险，无法处理。请选择一个有效的文件。",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message: "您已超出允许的最大文件数。请删除一些文件并重试。",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "未选择任何文件。请选择至少一个文件。",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message: "发生未知错误。请稍后重试或联系支持人员。",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message: "网络错误，请检查您的互联网连接并重试。",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "请至少上传两个文件以合并。",
    code: "ERR_UPLOAD_COUNT",
  },
};
