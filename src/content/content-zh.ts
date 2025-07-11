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
    title: "拆分 PDF",
    seoTitle: "在线拆分 PDF 为多个文档，安全可靠",
    description: "将一个 PDF 文件拆分为多个文档。",
    color: "var(--orange)",
    type: ".pdf",
    to: "/split-pdf",
    keywords: "拆分 PDF, 分割 PDF, PDF 拆分器, 提取 PDF 页面, 在线 PDF 工具",
    features: [
      {
        title: "精确的页面拆分",
        description: "轻松将 PDF 拆分为单个页面或页面范围，同时保持原始文档的完整性。"
      },
      {
        title: "快速高效",
        description: "体验快速处理时间，使您可以在几秒钟内拆分 PDF 文档。"
      },
      {
        title: "安全私密",
        description: "我们的工具确保在拆分过程中安全处理您的文件，保护您的数据。"
      }
    ]
  }
};



export const downloadFile: _downloadFile = {
  titles: {
    "split-pdf": ["PDF文件已拆分！", "PDF 文件已被分割！"],
  },
  btnText: {
    "split-pdf": ["下载拆分后的PDF文件", "下载拆分后的PDF文件"],
  },
  backto: {
    "split-pdf": "返回拆分PDF",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    split_pdf: "拆分PDF选项",
  },
  loader_text: "请稍等...",
  add_more_button: "添加更多文件",
  options: {
    split_by_range: "按范围分割",
    extract_pages: "提取页面",
    split_by_range_options: {
      range_mode: "范围模式：",
      custom_range: "自定义范围",
      fixed_range: "固定范围",
      custom_range_options: {
        range: "范围",
        from: "从",
        to: "到",
        add_range: "添加范围",
        merge: "将所有范围合并为一个PDF文件。",
      },
      fixed_range_options: {
        split_into: "分割成页面范围：",
        alert_info: "此PDF将分割为文件",
        pages: "页",
        will_be_created: "将被创建。",
      },
    },
    extract_pages_options: {
      extract_mode: "提取模式：",
      extract_all: "提取所有页面",
      select_pages: "选择页面",
      selection_alert_content: {
        selection_alert: "此PDF文件的每个选择的页面将被转换为一个PDF文件。",
        will_be_created: "将被创建。",
      },
      select_pages_content: {
        pages_to_extract: "要提取的页面：",
        merge: "合并提取的PDF为一个PDF文件。",
        page_selection_example: "示例：2，8-32",
      },
    },
  },
  action_buttons: {
    split_pdf: "拆分PDF",
  },
  select_files_placeholder: "选择文件",
  pages: "页",
  page: "页",
};

export const tools: _tools = {
  select: "选择",
  or_drop: "或将文件拖放到此处",
  files: "文件",
  drop_files: "在此处拖放文件",
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "条款",
  conditions: "条件",
  privacy_policy: "隐私政策",
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
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message: "文件已损坏，无法处理。请选择一个有效的文件。",
    code: "ERR_FILE_CORRUPT",
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
  ERR_ONLY_ONE_PAGE: {
    message: "您的 PDF 仅有一页，无法进行拆分。",
    code: "ERR_ONLY_ONE_PAGE",
  },
};
