import type { adBlockerContentType } from "./content";
import type { edit_page as _edit_page, tool as _tool, tools as _tools, downloadFile as _downloadFile, errors as _ } from "../content";

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

export const edit_page: _edit_page = {
    edit_page_titles: {
        split_pdf: "PDF विभाजन विकल्प"
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
                will_be_created: "बनाई जाएगी।"
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
        split_pdf: "पीडीएफ विभाजित करें"
    },
    select_files_placeholder: "फ़ाइलें चुनें",
    pages: "पृष्ठों",
    page: "पृष्ठ",
    filenameOptions: {
        label: "आउटपुट फ़ाइल का नाम (वैकल्पिक)",
        placeholder: "फ़ाइल का नाम दर्ज करें",
        helperText: "डाउनलोड करते समय यह संकुचित PDF का नाम होगा।",
        cta: "योजनाएँ देखें",
        upgradeNotice: {
            msg: "2.0 से 10.0 तक के स्तर प्रीमियम में उपलब्ध हैं।",
            cta: "अभी अपग्रेड करें",
        },
    },
    fileCard: {
        page: "पेज",
        pages: "पेज",
        remove_file: "फाइल हटाएं",
        loading: "लोड हो रहा है...",
        warning: "⚠️ कोई पेज नहीं चुना गया। उन्हें चुनने के लिए पेजों पर क्लिक करें."
    },
};

export const downloadFile: _downloadFile = {
    titles: {
        "split-pdf": [
            "PDF फ़ाइल को विभाजित किया गया है!",
            "पीडीएफ फाइलें विभाजित हो गई हैं!"
        ]
    },
    btnText: {
        "split-pdf": [
            "विभाजित की गई PDF फ़ाइलें डाउनलोड करें",
            "विभाजित की गई PDF फ़ाइल डाउनलोड करें"
        ]
    },
    backto: {
        "split-pdf": "विभाजित की गई PDF को वापस जाएं"
    }
};

// Hindi (hi) - tools
export const tools: _tools = {
    select: "चुनें",
    or_drop: "या फ़ाइलें यहाँ ड्रॉप करें",
    files: "फ़ाइलें",
    drop_files: "फ़ाइलें यहाँ ड्रैग करें",
};


export const errors: _ = {
    EMPTY_FILE: {
        message: "फ़ाइल खाली है। कृपया वैध फ़ाइल चुनें।",
        code: "ERR_EMPTY_FILE",
    },
    FILE_TOO_LARGE: {
        message:
            "फ़ाइल बहुत बड़ी है। छोटी फ़ाइल चुनें या हमारा compress-pdf टूल इस्तेमाल करके साइज़ कम करें।",
        code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
    },
    NOT_SUPPORTED_TYPE: {
        message: "फ़ाइल का प्रकार समर्थित नहीं है।",
        types: {
            PDF: "कृपया वैध PDF फ़ाइल चुनें।",
            DOC: "कृपया वैध वर्ड डॉक्यूमेंट चुनें।",
            DOCX: "कृपया वैध वर्ड डॉक्यूमेंट चुनें।",
            XLS: "कृपया वैध एक्सेल स्प्रेडशीट चुनें।",
            XLSX: "कृपया वैध एक्सेल स्प्रेडशीट चुनें।",
            PPT: "कृपया वैध पावरपॉइंट प्रेजेंटेशन चुनें।",
            PPTX: "कृपया वैध पावरपॉइंट प्रेजेंटेशन चुनें।",
        },
        code: "ERR_INVALID_FILE_TYPE",
    },
    FILE_CORRUPT: {
        message:
            "फ़ाइल खराब है और प्रोसेस नहीं की जा सकती। कृपया वैध फ़ाइल चुनें।",
        code: "ERR_FILE_CORRUPT",
    },
    MAX_FILES_EXCEEDED: {
        message:
            "आपने अधिकतम अनुमत फ़ाइलों की संख्या पार कर ली है। कुछ फ़ाइलें हटाकर दोबारा कोशिश करें।",
        code: "ERR_MAX_FILES_EXCEEDED",
    },
    NO_FILES_SELECTED: {
        message: "कोई फ़ाइल चुनी नहीं गई। कम से कम एक फ़ाइल चुनें।",
        code: "ERR_NO_FILES_SELECTED",
    },
    UNKNOWN_ERROR: {
        message:
            "एक अज्ञात त्रुटि हुई। बाद में दोबारा कोशिश करें या सपोर्ट से संपर्क करें।",
        code: "ERR_UNKNOWN",
    },
    ERR_NETWORK: {
        message:
            "नेटवर्क त्रुटि हुई। अपना इंटरनेट कनेक्शन जांचें और दोबारा कोशिश करें।",
        code: "ERR_NETWORK",
    },
    ERR_UPLOAD_COUNT: {
        message: "मर्ज करने के लिए कम से कम दो फ़ाइलें अपलोड करें।",
        code: "ERR_UPLOAD_COUNT",
    },
    PASSWORD_REQUIRED: {
        message: "PDF में पासवर्ड की आवश्यकता है।",
        code: "PASSWORD_REQUIRED",
    },
    INCORRECT_PASSWORD: {
        message: "आपने गलत पासवर्ड डाला है।",
        code: "INCORRECT_PASSWORD",
    },
    MAX_DAILY_USAGE: {
        message:
            "आपने अपनी दैनिक उपयोग सीमा पूरी कर ली है। बिना रुकावट के जारी रखने के लिए प्लान अपग्रेड करें।",
        code: "MAX_DAILY_USAGE",
    },
    MAX_PAGES_EXCEEDED: {
        message: "PDF अधिकतम 50 पृष्ठों की सीमा से अधिक है।",
        code: "ERR_MAX_PAGES_EXCEEDED",
    },
    alerts: {
        // Frontend validation
        maxFiles: "अधिकतम 15 फाइलें। अधिक के लिए सब्सक्राइब करें!",
        singleFileSize: "फाइल का आकार 100 MB से कम होना चाहिए। बड़ी फाइलें अपलोड करने के लिए अपग्रेड करें!",
        perFilePages: "प्रति फाइल 500 पेज। अभी अनलॉक करें!",
        fileSize: "प्रति फाइल 50 MB। अधिक के लिए अपग्रेड करें!",
        notPasswordProtected: "एक या अधिक फ़ाइलें पासवर्ड से सुरक्षित नहीं हैं",
        // Backend file validation
        fileNotUploaded: "कोई फाइल अपलोड नहीं हुई। कृपया एक फाइल चुनें।",
        fileEmpty: "अपलोड की गई फाइल खाली है। कृपया एक वैध फाइल चुनें।",
        fileTooLarge: "फाइल 200 MB की सीमा से अधिक है। बड़ी फाइलों के लिए अपग्रेड करें!",
        invalidFileType: "अमान्य फाइल प्रकार। कृपया समर्थित फॉर्मेट अपलोड करें।",
        fileCorrupt: "फाइल दूषित प्रतीत होती है। कृपया कोई अन्य फाइल आज़माएं।",
        insufficientUnits: "पर्याप्त कन्वर्शन यूनिट नहीं हैं। अपग्रेड करें या रिचार्ज करें!",
        // Auth errors
        authRequired: "प्रीमियम सुविधाओं का उपयोग करने के लिए कृपया लॉग इन करें।",
        sessionExpired: "आपका सेशन समाप्त हो गया है। कृपया फिर से लॉग इन करें।",
        invalidToken: "प्रमाणीकरण विफल। कृपया फिर से लॉग इन करें।",
        userNotFound: "खाता नहीं मिला। कृपया फिर से लॉग इन करें।",
        authError: "प्रमाणीकरण त्रुटि। कृपया पुनः प्रयास करें।",
        serverError: "सर्वर त्रुटि। कृपया बाद में पुनः प्रयास करें।",
        invalidSplitMode: "अमान्य विभाजन मोड चुना गया।",
        invalidRangeMode: "अमान्य रेंज मोड चुना गया।",
        invalidExtractMode: "अमान्य निकालने का मोड चुना गया।",
        noRangesProvided: "कृपया कम से कम एक पेज रेंज प्रदान करें।",
        noFixedRangeValue: "कृपया प्रति विभाजन पेजों की संख्या निर्दिष्ट करें।",
        invalidFixedRangeValue: "अमान्य पेजों की संख्या। कृपया एक सकारात्मक संख्या दर्ज करें।",
        noPagesSelected: "कृपया निकालने के लिए कम से कम एक पेज चुनें।",
        invalidPageRange: "अमान्य पेज रेंज। कृपया अपने पेज नंबरों की जाँच करें।",
        invalidPageSelection: "अमान्य पेज चयन। '1-3,5,7-10' जैसे फॉर्मेट का उपयोग करें।",
        rangeOutOfBounds: "पेज रेंज PDF में पेजों की संख्या से अधिक है।",
        pdfTooManyPages: "PDF में बहुत अधिक पेज हैं। कृपया एक छोटा दस्तावेज़ उपयोग करें।",
        splitFailed: "PDF विभाजित करने में विफल। कृपया पुनः प्रयास करें।",
    },
};

export const adBlockerContent: adBlockerContentType = {
    title: "विज्ञापन अवरोधक पता चला",
    description: "हमने देखा कि आप विज्ञापन अवरोधक इस्तेमाल कर रहे हैं। इसे बंद करें या प्रीमियम में अपग्रेड करें ताकि विज्ञापन-मुक्त अनुभव मिले!",
    reloadPage: "पेज रीलोड करें",
    upgradeToPremium: "प्रीमियम में अपग्रेड करें"
};