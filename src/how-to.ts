export const SplitPDFHOWTO = {
  "@context": "http://schema.org",
  "@type": "HowTo",
  name: "How to Split PDF Files",
  description: "Step-by-step guide for splitting PDF files.",
  step: [
    {
      "@type": "HowToStep",
      name: "Step 1: Choose Split Mode",
      text: "Select the mode for splitting the PDF.",
      substeps: ["Choose between 'Split by range' or 'Extract pages'."],
    },
    {
      "@type": "HowToStep",
      name: "Step 2A: Split by Range",
      text: "Split the PDF based on specified ranges.",
      substeps: [
        "Select 'Custom range' or 'Fixed range'.",
        {
          "@type": "HowToStep",
          name: "Option 1: Custom Range",
          text: "Define custom ranges to split the PDF.",
          substeps: [
            "Add as many ranges as needed with 'from' and 'to' numbers.",
          ],
        },
        {
          "@type": "HowToStep",
          name: "Option 2: Fixed Range",
          text: "Split the PDF into files of a specific number of pages.",
          substeps: [
            "Set the number of pages per split PDF file.",
            "PDFs will be created according to the set number of pages.",
          ],
        },
      ],
    },
    {
      "@type": "HowToStep",
      name: "Step 2B: Extract Pages",
      text: "Extract specific pages from the PDF.",
      substeps: [
        "Choose between 'Extract all' or 'Select pages'.",
        "If 'Extract all' is selected, create a PDF file for each page.",
        "If 'Select pages' is chosen, create individual PDFs for each selected page.",
      ],
    },
  ],
};

export const SplitPDFHOWTO_ar = {
  "@context": "http://schema.org",
  "@type": "HowTo",
  name: "كيفية تقسيم ملفات PDF",
  description: "دليل خطوة بخطوة لتقسيم ملفات PDF.",
  step: [
    {
      "@type": "HowToStep",
      name: "الخطوة 1: اختر وضع التقسيم",
      text: "حدد وضع تقسيم الملفات الخاص بـ PDF.",
      substeps: ["اختر بين 'تقسيم حسب النطاق' أو 'استخراج الصفحات'."],
    },
    {
      "@type": "HowToStep",
      name: "الخطوة 2أ: تقسيم حسب النطاق",
      text: "تقسيم ملف PDF استنادًا إلى النطاقات المحددة.",
      substeps: [
        "اختر 'نطاق مخصص' أو 'نطاق ثابت'.",
        {
          "@type": "HowToStep",
          name: "الخيار 1: النطاق المخصص",
          text: "حدد نطاقات مخصصة لتقسيم ملف PDF.",
          substeps: ["أضف عددًا غير محدود من النطاقات مع أرقام 'من' و 'إلى'."],
        },
        {
          "@type": "HowToStep",
          name: "الخيار 2: النطاق الثابت",
          text: "تقسيم ملف PDF إلى ملفات بعدد محدد من الصفحات.",
          substeps: [
            "قم بتعيين عدد الصفحات لكل ملف PDF.",
            "سيتم إنشاء ملفات PDF وفقًا لعدد الصفحات المحدد.",
          ],
        },
      ],
    },
    {
      "@type": "HowToStep",
      name: "الخطوة 2ب: استخراج الصفحات",
      text: "استخرج صفحات معينة من ملف PDF.",
      substeps: [
        "اختر بين 'استخراج الكل' أو 'تحديد الصفحات'.",
        "إذا تم اختيار 'استخراج الكل'، أنشئ ملف PDF لكل صفحة.",
        "إذا تم اختيار 'تحديد الصفحات'، أنشئ ملفات PDF فردية لكل صفحة محددة.",
      ],
    },
  ],
};

export const SplitPDFHOWTO_es = {
  "@context": "http://schema.org",
  "@type": "HowTo",
  name: "Cómo Dividir Archivos PDF",
  description: "Guía paso a paso para dividir archivos PDF.",
  step: [
    {
      "@type": "HowToStep",
      name: "Paso 1: Elija el Modo de División",
      text: "Seleccione el modo de división para los archivos PDF.",
      substeps: ["Elija entre 'Dividir por rango' o 'Extraer páginas'."],
    },
    {
      "@type": "HowToStep",
      name: "Paso 2A: Dividir por Rango",
      text: "Divida el PDF en rangos específicos.",
      substeps: [
        "Seleccione 'Rango personalizado' o 'Rango fijo'.",
        {
          "@type": "HowToStep",
          name: "Opción 1: Rango Personalizado",
          text: "Defina rangos personalizados para dividir el PDF.",
          substeps: [
            "Agregue tantos rangos como sea necesario con números 'desde' y 'hasta'.",
          ],
        },
        {
          "@type": "HowToStep",
          name: "Opción 2: Rango Fijo",
          text: "Divida el PDF en archivos de un número específico de páginas.",
          substeps: [
            "Establezca el número de páginas por archivo PDF.",
            "Se crearán PDFs según el número de páginas establecido.",
          ],
        },
      ],
    },
    {
      "@type": "HowToStep",
      name: "Paso 2B: Extraer Páginas",
      text: "Extraiga páginas específicas del PDF.",
      substeps: [
        "Elija entre 'Extraer todo' o 'Seleccionar páginas'.",
        "Si selecciona 'Extraer todo', cree un archivo PDF para cada página.",
        "Si selecciona 'Seleccionar páginas', cree PDFs individuales para cada página seleccionada.",
      ],
    },
  ],
};

export const SplitPDFHOWTO_fr = {
  "@context": "http://schema.org",
  "@type": "HowTo",
  name: "Comment Diviser des Fichiers PDF",
  description: "Guide étape par étape pour diviser des fichiers PDF.",
  step: [
    {
      "@type": "HowToStep",
      name: "Étape 1 : Choisissez le Mode de Division",
      text: "Sélectionnez le mode de division pour les fichiers PDF.",
      substeps: [
        "Choisissez entre 'Diviser par plage' ou 'Extraire des pages'.",
      ],
    },
    {
      "@type": "HowToStep",
      name: "Étape 2A : Diviser par Plage",
      text: "Divisez le PDF en plages spécifiques.",
      substeps: [
        "Sélectionnez 'Plage personnalisée' ou 'Plage fixe'.",
        {
          "@type": "HowToStep",
          name: "Option 1 : Plage Personnalisée",
          text: "Définissez des plages personnalisées pour diviser le PDF.",
          substeps: [
            "Ajoutez autant de plages que nécessaire avec les chiffres 'de' et 'à'.",
          ],
        },
        {
          "@type": "HowToStep",
          name: "Option 2 : Plage Fixe",
          text: "Divisez le PDF en fichiers d'un nombre spécifique de pages.",
          substeps: [
            "Définissez le nombre de pages par fichier PDF.",
            "Les PDF seront créés selon le nombre de pages défini.",
          ],
        },
      ],
    },
    {
      "@type": "HowToStep",
      name: "Étape 2B : Extraire des Pages",
      text: "Extrayez des pages spécifiques du PDF.",
      substeps: [
        "Choisissez entre 'Extraire tout' ou 'Sélectionner des pages'.",
        "Si vous choisissez 'Extraire tout', créez un fichier PDF pour chaque page.",
        "Si vous choisissez 'Sélectionner des pages', créez des PDF individuels pour chaque page sélectionnée.",
      ],
    },
  ],
};

export const SplitPDFHOWTO_hi = {
  "@context": "http://schema.org",
  "@type": "HowTo",
  name: "PDF फाइलों को कैसे विभाजित करें",
  description: "PDF फाइलों को विभाजित करने के लिए चरण-दर-चरण गाइड।",
  step: [
    {
      "@type": "HowToStep",
      name: "कदम 1: विभाजन मोड चुनें",
      text: "PDF के विभाजन के लिए मोड का चयन करें।",
      substeps: ["'रेंज द्वारा विभाजित करें' या 'पृष्ठ निकालें' के बीच चुनें।"],
    },
    {
      "@type": "HowToStep",
      name: "कदम 2ए: रेंज द्वारा विभाजित करें",
      text: "निर्दिष्ट रेंजों के आधार पर PDF को विभाजित करें।",
      substeps: [
        "'कस्टम रेंज' या 'निश्चित रेंज' का चयन करें।",
        {
          "@type": "HowToStep",
          name: "विकल्प 1: कस्टम रेंज",
          text: "PDF को विभाजित करने के लिए विशेष रेंजों को परिभाषित करें।",
          substeps: [
            "'से' और 'तक' संख्याओं के साथ जितने भी रेंज चाहिए, उन्हें जोड़ें।",
          ],
        },
        {
          "@type": "HowToStep",
          name: "विकल्प 2: निश्चित रेंज",
          text: "PDF को निश्चित संख्या की पृष्ठों के फ़ाइलों में विभाजित करें।",
          substeps: [
            "प्रति विभाजन PDF फ़ाइल के लिए पृष्ठों की संख्या सेट करें।",
            "पीडीएफ़ सेट नंबर के अनुसार बनाया जाएगा।",
          ],
        },
      ],
    },
    {
      "@type": "HowToStep",
      name: "कदम 2ब: पृष्ठ निकालें",
      text: "PDF से विशिष्ट पृष्ठ निकालें।",
      substeps: [
        "'सभी पृष्ठ निकालें' या 'पृष्ठ चुनें' के बीच चुनें।",
        "'सभी पृष्ठ निकालें' चुनने पर, प्रत्येक पृष्ठ के लिए एक पीडीएफ़ फ़ाइल बनाई जाएगी।",
        "'पृष्ठ चुनें' चुनने पर, चयनित प्रत्येक पृष्ठ के लिए व्यक्तिगत पीडीएफ़ बनाएं।",
      ],
    },
  ],
};

export const SplitPDFHOWTO_zh = {
  "@context": "http://schema.org",
  "@type": "HowTo",
  name: "如何拆分PDF文件",
  description: "按步骤拆分PDF文件的指南。",
  step: [
    {
      "@type": "HowToStep",
      name: "步骤 1：选择拆分模式",
      text: "选择拆分PDF文件的模式。",
      substeps: ["在'按范围拆分'或'提取页面'之间进行选择。"],
    },
    {
      "@type": "HowToStep",
      name: "步骤 2A：按范围拆分",
      text: "根据指定范围拆分PDF文件。",
      substeps: [
        "选择'自定义范围'或'固定范围'。",
        {
          "@type": "HowToStep",
          name: "选项 1：自定义范围",
          text: "定义用于拆分PDF文件的自定义范围。",
          substeps: ["添加任意数量的范围，每个范围都有'从'和'到'的数字。"],
        },
        {
          "@type": "HowToStep",
          name: "选项 2：固定范围",
          text: "将PDF文件拆分为特定页数的文件。",
          substeps: [
            "设置每个拆分PDF文件的页数。",
            "PDF将根据设置的页数创建。",
          ],
        },
      ],
    },
    {
      "@type": "HowToStep",
      name: "步骤 2B：提取页面",
      text: "从PDF文件中提取特定页面。",
      substeps: [
        "选择'提取全部'或'选择页面'。",
        "如果选择'提取全部'，将为每个页面创建一个PDF文件。",
        "如果选择'选择页面'，将为每个选定的页面创建单独的PDF文件。",
      ],
    },
  ],
};
