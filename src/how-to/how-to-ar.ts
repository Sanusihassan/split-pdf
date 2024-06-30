import { _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "كيفية تقسيم ملف PDF عبر الإنترنت؟",
    description: "خطوات سهلة لتقسيم ملف PDF إلى مستندات متعددة باستخدام أداتنا عبر الإنترنت.",
    step: [
        {
            "@type": "HowToStep",
            name: "الخطوة 1",
            text: "افتح أداة تقسيم PDF على PDFEquips."
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 2",
            text: "اسحب وأسقط ملف PDF أو انقر على زر 'اختر ملف PDF' لتحميل ملف PDF الخاص بك."
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 3",
            text: "اختر خيار التقسيم الخاص بك: 'تقسيم بالنطاق' أو 'استخراج الصفحات'."
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 4",
            text: "انقر على زر 'تقسيم PDF' لمعالجة ملفك."
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 5",
            text: "قم بتنزيل ملفات PDF المقسمة إلى جهازك."
        }
    ]
};
