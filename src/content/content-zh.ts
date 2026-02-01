import type { edit_page as _edit_page, tool as _tool, tools as _tools, downloadFile as _downloadFile, errors as _ } from "../content";
import type { adBlockerContentType } from "./content";

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

export const edit_page: _edit_page = {
    edit_page_titles: {
        split_pdf: "拆分PDF选项"
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
                merge: "将所有范围合并为一个PDF文件。"
            },
            fixed_range_options: {
                split_into: "分割成页面范围：",
                alert_info: "此PDF将分割为文件",
                pages: "页",
                will_be_created: "将被创建。"
            }
        },
        extract_pages_options: {
            extract_mode: "提取模式：",
            extract_all: "提取所有页面",
            select_pages: "选择页面",
            selection_alert_content: {
                selection_alert: "此PDF文件的每个选择的页面将被转换为一个PDF文件。",
                will_be_created: "将被创建。"
            },
            select_pages_content: {
                pages_to_extract: "要提取的页面：",
                merge: "合并提取的PDF为一个PDF文件。",
                page_selection_example: "示例：2，8-32"
            }
        }
    },
    action_buttons: {
        split_pdf: "拆分PDF"
    },
    select_files_placeholder: "选择文件",
    pages: "页",
    page: "页",
    filenameOptions: {
        label: "输出文件名（可选）",
        placeholder: "输入文件名",
        helperText: "这将是下载时压缩 PDF 的名称。",
        cta: "查看方案",
        upgradeNotice: {
            msg: "2.0 到 10.0 的级别可在高级版中使用。",
            cta: "立即升级",
        },
    },
    fileCard: {
        page: "页",
        pages: "页",
        remove_file: "移除文件",
        loading: "正在加载...",
    },
};

export const downloadFile: _downloadFile = {
    titles: {
        "split-pdf": [
            "PDF文件已拆分！",
            "PDF 文件已被分割！"
        ]
    },
    btnText: {
        "split-pdf": [
            "下载拆分后的PDF文件",
            "下载拆分后的PDF文件"
        ]
    },
    backto: {
        "split-pdf": "返回拆分PDF"
    }
};



export const tools: _tools = {
    select: "选择",
    or_drop: "或将文件拖放到此处",
    files: "文件",
    drop_files: "将文件拖到这里",
};


export const errors: _ = {
    EMPTY_FILE: {
        message: "文件为空。请选择有效文件。",
        code: "ERR_EMPTY_FILE",
    },
    FILE_TOO_LARGE: {
        message:
            "文件太大。请选更小的文件，或使用我们的 compress-pdf 工具减小文件大小。",
        code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
    },
    NOT_SUPPORTED_TYPE: {
        message: "不支持的文件类型。",
        types: {
            PDF: "请选择有效的 PDF 文件。",
            DOC: "请选择有效的 Word 文档。",
            DOCX: "请选择有效的 Word 文档。",
            XLS: "请选择有效的 Excel 表格。",
            XLSX: "请选择有效的 Excel 表格。",
            PPT: "请选择有效的 PowerPoint 演示文稿。",
            PPTX: "请选择有效的 PowerPoint 演示文稿。",
        },
        code: "ERR_INVALID_FILE_TYPE",
    },
    FILE_CORRUPT: {
        message:
            "文件已损坏，无法处理。请选有效文件。",
        code: "ERR_FILE_CORRUPT",
    },
    MAX_FILES_EXCEEDED: {
        message:
            "已超过允许的最大文件数量。请删除部分文件后再试。",
        code: "ERR_MAX_FILES_EXCEEDED",
    },
    NO_FILES_SELECTED: {
        message: "未选择任何文件。请至少选择一个文件。",
        code: "ERR_NO_FILES_SELECTED",
    },
    UNKNOWN_ERROR: {
        message:
            "发生未知错误。请稍后再试或联系客服。",
        code: "ERR_UNKNOWN",
    },
    ERR_NETWORK: {
        message:
            "发生网络错误。请检查网络连接后再试。",
        code: "ERR_NETWORK",
    },
    ERR_UPLOAD_COUNT: {
        message: "请至少上传两个文件进行合并。",
        code: "ERR_UPLOAD_COUNT",
    },
    PASSWORD_REQUIRED: {
        message: "PDF 需要密码。",
        code: "PASSWORD_REQUIRED",
    },
    INCORRECT_PASSWORD: {
        message: "您输入的密码不正确。",
        code: "INCORRECT_PASSWORD",
    },
    MAX_DAILY_USAGE: {
        message:
            "您已达到每日使用上限。请升级套餐，继续无中断使用此功能。",
        code: "MAX_DAILY_USAGE",
    },
    MAX_PAGES_EXCEEDED: {
        message: "PDF 超过最大页数限制 50 页。",
        code: "ERR_MAX_PAGES_EXCEEDED",
    },
    alerts: {
        // Frontend validation
        maxFiles: "最多15个文件。订阅获取更多！",
        singleFileSize: "文件大小必须小于100 MB。升级以上传更大的文件！",
        perFilePages: "每个文件500页。立即解锁更多！",
        fileSize: "每个文件50 MB。升级获取更多！",
        notPasswordProtected: "一个或多个文件未受密码保护",
        // Backend file validation
        fileNotUploaded: "未上传文件。请选择一个文件。",
        fileEmpty: "上传的文件为空。请选择一个有效的文件。",
        fileTooLarge: "文件超过200 MB限制。升级以获取更大文件！",
        invalidFileType: "文件类型无效。请上传支持的格式。",
        fileCorrupt: "文件似乎已损坏。请尝试其他文件。",
        insufficientUnits: "转换单位不足。升级或充值！",
        // Auth errors
        authRequired: "请登录以使用高级功能。",
        sessionExpired: "您的会话已过期。请重新登录。",
        invalidToken: "身份验证失败。请重新登录。",
        userNotFound: "未找到账户。请重新登录。",
        authError: "身份验证错误。请重试。",
        serverError: "服务器错误。请稍后重试。",
        invalidSplitMode: "选择的拆分模式无效。",
        invalidRangeMode: "选择的范围模式无效。",
        invalidExtractMode: "选择的提取模式无效。",
        noRangesProvided: "请至少提供一个页面范围。",
        noFixedRangeValue: "请指定每个拆分的页面数。",
        invalidFixedRangeValue: "页面数无效。请输入一个正数。",
        noPagesSelected: "请至少选择一个页面进行提取。",
        invalidPageRange: "页面范围无效。请检查您的页码。",
        invalidPageSelection: "页面选择无效。请使用如 '1-3,5,7-10' 的格式。",
        rangeOutOfBounds: "页面范围超出 PDF 中的页面数。",
        pdfTooManyPages: "PDF 页面过多。请使用较小的文档。",
        splitFailed: "拆分 PDF 失败。请重试。",
    },
};

export const adBlockerContent: adBlockerContentType = {
    title: "检测到广告拦截器",
    description: "我们注意到您正在使用广告拦截器。请考虑关闭它，或升级到高级版享受无广告体验！",
    reloadPage: "重新加载页面",
    upgradeToPremium: "升级到高级版"
};