import type { tool as _tool, tools as _tools, edit_page as _edit_page, downloadFile as _downloadFile, errors as _errors } from "../content";
import type { adBlockerContentType } from "./content";

export const tool: _tool = {
    Split_PDF: {
        title: "تقسيم PDF",
        seoTitle: "تقسيم ملف PDF إلى عدة مستندات عبر الإنترنت بأمان",
        description: "قسّم ملف PDF واحد إلى عدة مستندات.",
        color: "var(--orange)",
        type: ".pdf",
        to: "/split-pdf",
        keywords: "تقسيم PDF, تقسيم ملف PDF, أداة تقسيم PDF, استخراج صفحات PDF, أداة PDF عبر الإنترنت",
        features: [
            {
                title: "تقسيم الصفحات بدقة",
                description: "قسّم ملف PDF بسهولة إلى صفحات فردية أو مجموعة من الصفحات مع الحفاظ على سلامة المستند الأصلي."
            },
            {
                title: "سريع وفعال",
                description: "استمتع بأوقات معالجة سريعة، مما يتيح لك تقسيم مستندات PDF الخاصة بك في ثوانٍ فقط."
            },
            {
                title: "آمن وخاص",
                description: "تضمن أداتنا التعامل مع ملفاتك بشكل آمن، مما يحمي بياناتك أثناء عملية التقسيم."
            }
        ]
    }
};

export const edit_page: _edit_page = {
    edit_page_titles: {
        split_pdf: "خيارات تقسيم ملف PDF"
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
                will_be_created: "سيتم إنشاء"
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
        split_pdf: "تقسيم PDF"
    },
    select_files_placeholder: "اختر الملفات",
    pages: "صفحة",
    page: "صفحة واحدة",
    filenameOptions: {
        label: "اسم الملف الناتج (اختياري)",
        placeholder: "أدخل اسم الملف",
        helperText: "سيكون هذا هو اسم ملف PDF المضغوط عند تنزيله.",
        cta: "عرض الخطط",
        upgradeNotice: {
            msg: "المستويات من 2.0 إلى 10.0 متاحة مع الخطة المميزة.",
            cta: "الترقية الآن",
        },
    },
    fileCard: {
        page: "صفحة",
        pages: "صفحات",
        remove_file: "إزالة الملف",
        loading: "جاري التحميل...",
    },
};

export const downloadFile: _downloadFile = {
    titles: {
        "split-pdf": [
            "تم تقسيم ملف ال PDF!",
            "تم تقسيم ملفات PDF!"
        ]
    },
    btnText: {
        "split-pdf": [
            "تحميل ملفات PDF المقسمة",
            "تحميل ملف PDF مقسم"
        ]
    },
    backto: {
        "split-pdf": "العودة إلى تقسيم ملفات PDF"
    }
};


export const tools: _tools = {
    select: "اختر",
    or_drop: "أو أسقط الملفات هنا",
    files: "ملفات",
    drop_files: "اسحب الملفات هنا",
};

export const errors: _errors = {
    EMPTY_FILE: {
        message: "الملف فارغ. يرجى اختيار ملف صالح.",
        code: "ERR_EMPTY_FILE",
    },
    FILE_TOO_LARGE: {
        message:
            "حجم الملف كبير جدًا. يرجى اختيار ملف أصغر، أو استخدم أداة ضغط PDF لتقليل حجم الملف.",
        code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
    },
    NOT_SUPPORTED_TYPE: {
        message: "نوع الملف غير مدعوم.",
        types: {
            PDF: "يرجى اختيار ملف PDF صالح.",
            DOC: "يرجى اختيار ملف مستند وورد صالح.",
            DOCX: "يرجى اختيار ملف مستند وورد صالح.",
            XLS: "يرجى اختيار ملف جدول إكسل صالح.",
            XLSX: "يرجى اختيار ملف جدول إكسل صالح.",
            PPT: "يرجى اختيار ملف عرض تقديمي باور بوينت صالح.",
            PPTX: "يرجى اختيار ملف عرض تقديمي باور بوينت صالح.",
        },
        code: "ERR_INVALID_FILE_TYPE",
    },
    FILE_CORRUPT: {
        message:
            "الملف تالف ولا يمكن معالجته. يرجى اختيار ملف صالح.",
        code: "ERR_FILE_CORRUPT",
    },
    MAX_FILES_EXCEEDED: {
        message:
            "لقد تجاوزت الحد الأقصى لعدد الملفات المسموح به. يرجى حذف بعض الملفات وحاول مرة أخرى.",
        code: "ERR_MAX_FILES_EXCEEDED",
    },
    NO_FILES_SELECTED: {
        message: "لم يتم اختيار أي ملفات. يرجى اختيار ملف واحد على الأقل.",
        code: "ERR_NO_FILES_SELECTED",
    },
    UNKNOWN_ERROR: {
        message:
            "حدث خطأ غير معروف. يرجى المحاولة مرة أخرى لاحقًا أو التواصل مع الدعم.",
        code: "ERR_UNKNOWN",
    },
    ERR_NETWORK: {
        message:
            "حدث خطأ في الشبكة. يرجى التحقق من اتصال الإنترنت وحاول مرة أخرى.",
        code: "ERR_NETWORK",
    },
    ERR_UPLOAD_COUNT: {
        message: "يرجى رفع ملفين على الأقل للدمج.",
        code: "ERR_UPLOAD_COUNT",
    },
    PASSWORD_REQUIRED: {
        message: "ملف PDF يتطلب كلمة مرور.",
        code: "PASSWORD_REQUIRED",
    },
    INCORRECT_PASSWORD: {
        message: "كلمة المرور التي أدخلتها غير صحيحة.",
        code: "INCORRECT_PASSWORD",
    },
    MAX_DAILY_USAGE: {
        message:
            "لقد وصلت إلى الحد اليومي للاستخدام. يرجى ترقية خطتك لمواصلة استخدام الميزة بدون انقطاع.",
        code: "MAX_DAILY_USAGE",
    },
    MAX_PAGES_EXCEEDED: {
        message: "يتجاوز ملف PDF الحد الأقصى لعدد الصفحات وهو 50 صفحة.",
        code: "ERR_MAX_PAGES_EXCEEDED",
    },
    alerts: {
        // Frontend validation
        maxFiles: "الحد الأقصى 15 ملفًا. اشترك للمزيد!",
        singleFileSize: "يجب أن يكون حجم الملف أقل من 100 ميجابايت. قم بالترقية لرفع ملفات أكبر!",
        perFilePages: "500 صفحة لكل ملف. افتح المزيد الآن!",
        fileSize: "50 ميجابايت لكل ملف. قم بالترقية للمزيد!",
        notPasswordProtected: "واحد أو أكثر من الملفات غير محمي بكلمة مرور",
        // Backend file validation
        fileNotUploaded: "لم يتم رفع أي ملف. يرجى اختيار ملف.",
        fileEmpty: "الملف المرفوع فارغ. يرجى اختيار ملف صالح.",
        fileTooLarge: "الملف يتجاوز 200 ميجابايت. قم بالترقية لملفات أكبر!",
        invalidFileType: "نوع الملف غير صالح. يرجى رفع تنسيق مدعوم.",
        fileCorrupt: "يبدو أن الملف تالف. يرجى تجربة ملف آخر.",
        insufficientUnits: "لا توجد وحدات تحويل كافية. قم بالترقية أو إعادة الشحن!",
        // Auth errors
        authRequired: "يرجى تسجيل الدخول لاستخدام الميزات المميزة.",
        sessionExpired: "انتهت صلاحية جلستك. يرجى تسجيل الدخول مرة أخرى.",
        invalidToken: "فشل التحقق. يرجى تسجيل الدخول مرة أخرى.",
        userNotFound: "الحساب غير موجود. يرجى تسجيل الدخول مرة أخرى.",
        authError: "خطأ في المصادقة. يرجى المحاولة مرة أخرى.",
        serverError: "خطأ في الخادم. يرجى المحاولة لاحقًا.",
        invalidSplitMode: "تم اختيار وضع تقسيم غير صالح.",
        invalidRangeMode: "تم اختيار وضع نطاق غير صالح.",
        invalidExtractMode: "تم اختيار وضع استخراج غير صالح.",
        noRangesProvided: "يرجى تقديم نطاق صفحات واحد على الأقل.",
        noFixedRangeValue: "يرجى تحديد عدد الصفحات لكل تقسيم.",
        invalidFixedRangeValue: "عدد صفحات غير صالح. يرجى إدخال رقم إيجابي.",
        noPagesSelected: "يرجى تحديد صفحة واحدة على الأقل للاستخراج.",
        invalidPageRange: "نطاق صفحات غير صالح. يرجى التحقق من أرقام الصفحات الخاصة بك.",
        invalidPageSelection: "تحديد صفحات غير صالح. استخدم تنسيق مثل '1-3,5,7-10'.",
        rangeOutOfBounds: "نطاق الصفحات يتجاوز عدد الصفحات في ملف PDF.",
        pdfTooManyPages: "ملف PDF يحتوي على صفحات كثيرة جدًا. يرجى استخدام وثيقة أصغر.",
        splitFailed: "فشل في تقسيم ملف PDF. يرجى المحاولة مرة أخرى.",
    },
};

export const adBlockerContent: adBlockerContentType = {
    title: "تم اكتشاف مانع الإعلانات",
    description: "لاحظنا أنك تستخدم مانع الإعلانات. يرجى التفكير في تعطيله أو الترقية إلى النسخة المميزة للحصول على تجربة خالية من الإعلانات!",
    reloadPage: "إعادة تحميل الصفحة",
    upgradeToPremium: "الترقية إلى النسخة المميزة"
}