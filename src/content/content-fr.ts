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
  merge_pdf: "Fusionner des PDF",
  split_pdf: "Diviser des PDF",
  compress_pdf: "Compresser des PDF",
  convert_pdf: "Convertir des PDF",
  convert_to_pdf: "Convertir en PDF",
  jpg_to_pdf: "JPG en PDF",
  word_to_pdf: "WORD en PDF",
  powerpoint_to_pdf: "POWERPOINT en PDF",
  excel_to_pdf: "EXCEL en PDF",
  html_to_pdf: "HTML en PDF",
  web_to_pdf: "Web vers PDF",
  markdown_to_pdf: "Markdown en PDF",
  convert_from_pdf: "Convertir à partir de PDF",
  pdf_to_jpg: "PDF en JPG",
  pdf_to_word: "PDF en WORD",
  pdf_to_powerpoint: "PDF en POWERPOINT",
  pdf_to_excel: "PDF en EXCEL",
  pdf_to_pdf_a: "PDF en PDF/A",
  pdf_to_text: "PDF en texte",
  pdf_to_html: "PDF vers HTML",
  pdf_to_markdown: "PDF à Markdown",
};
export const landing_page: _landing_page = {
  hero: {
    title: "Améliorez votre productivité avec notre solution PDF complète",
    description:
      "Faites passer vos flux de travail PDF au niveau supérieur - Débloquez de nouvelles possibilités avec notre boîte à outils complète.",
  },
  features: {
    title: "Comment PDFEquips peut simplifier vos tâches PDF",
    description:
      "PDFEquips vous propose une gamme de fonctionnalités pour gérer vos fichiers PDF en toute simplicité. Que vous souhaitiez fusionner, diviser, compresser, convertir, modifier ou protéger vos PDF, vous pouvez tout faire en quelques clics. PDFEquips est rapide, fiable et sécurisé.",
  },
  why_us: {
    title: "La solution PDF sur laquelle vous pouvez compter",
    description:
      "PDFEquips est votre application web ultime pour gérer les PDF en toute simplicité. Profitez de toutes\
    les fonctionnalités dont vous avez besoin pour travailler efficacement avec vos documents numériques\
    tout en préservant la sécurité et la confidentialité de vos données.",
  },
};

export const tool: _tool = {
  Split_PDF: {
    title: "Diviser des PDF",
    description: "Divisez un fichier PDF en plusieurs documents",
    color: "var(--orange)",
    type: ".pdf",
    to: "/split-pdf",
  },
};

export const tools: _tools = {
  select: "Sélectionner",
  or_drop: "ou déposer des fichiers ici",
  files: "fichiers",
  drop_files: "Déposez les fichiers ici",
};

export const downloadFile: _downloadFile = {
  titles: {
    "merge-pdf": [
      "Fusion de fichiers PDF réussie !",
      "Fusion de fichier PDF réussie !",
    ],
    "split-pdf": ["Fichier PDF divisé avec succès !"],
    "compress-pdf": [
      "Compression de fichiers PDF réussie !",
      "Compression de fichier PDF réussie !",
    ],
    "pdf-to-powerpoint": [
      "Conversion de fichiers PDF en PowerPoint réussie !",
      "Conversion de fichier PDF en PowerPoint réussie !",
    ],
    "jpg-to-pdf": [
      "Conversion de fichiers JPG en PDF réussie !",
      "Conversion de fichier JPG en PDF réussie !",
    ],
    "word-to-pdf": [
      "Conversion de fichiers Word en PDF réussie !",
      "Conversion de fichier Word en PDF réussie !",
    ],
    "powerpoint-to-pdf": [
      "Conversion de fichiers PowerPoint en PDF réussie !",
      "Conversion de fichier PowerPoint en PDF réussie !",
    ],
    "excel-to-pdf": [
      "Conversion de fichiers Excel en PDF réussie !",
      "Conversion de fichier Excel en PDF réussie !",
    ],
    "html-to-pdf": [
      "Conversion de fichiers HTML en PDF réussie !",
      "Conversion de fichier HTML en PDF réussie !",
    ],
    "pdf-to-jpg": [
      "Conversion de fichiers PDF en JPG réussie !",
      "Conversion de fichier PDF en JPG réussie !",
    ],
    "pdf-to-word": [
      "Conversion de fichiers PDF en Word réussie !",
      "Conversion de fichier PDF en Word réussie !",
    ],
    "pdf-to-excel": [
      "Conversion de fichiers PDF en Excel réussie !",
      "Conversion de fichier PDF en Excel réussie !",
    ],
    "pdf-to-pdf-a": [
      "Conversion de fichiers PDF en PDF/A réussie !",
      "Conversion de fichier PDF en PDF/A réussie !",
    ],
    "web-to-pdf": [
      "Conversion de sites Web en fichiers PDF réussie !",
      "Conversion de site Web en fichier PDF réussie !",
    ],
    "pdf-to-text": [
      "Conversion de fichiers PDF en texte réussie !",
      "Conversion de fichier PDF en texte réussie !",
    ],
    "markdown-to-pdf": [
      "Conversion de fichiers Markdown en PDF réussie !",
      "Conversion de fichier Markdown en PDF réussie !",
    ],
    "pdf-to-html": [
      "Conversion de fichiers PDF en HTML réussie !",
      "Conversion de fichier PDF en HTML réussie !",
    ],
    "pdf-to-markdown": [
      "Conversion de fichiers PDF en Markdown réussie !",
      "Conversion de fichier PDF en Markdown réussie !",
    ],
  },
  btnText: {
    "merge-pdf": [
      "Télécharger les fichiers PDF fusionnés",
      "Télécharger le fichier PDF fusionné",
    ],
    "split-pdf": [
      "Télécharger les fichiers PDF divisés",
      "Télécharger le fichier PDF divisé",
    ],
    "compress-pdf": [
      "Télécharger les fichiers PDF compressés",
      "Télécharger le fichier PDF compressé",
    ],
    "pdf-to-powerpoint": [
      "Télécharger les fichiers PowerPoint convertis",
      "Télécharger le fichier PowerPoint converti",
    ],
    "jpg-to-pdf": [
      "Télécharger les fichiers PDF convertis",
      "Télécharger le fichier PDF converti",
    ],
    "word-to-pdf": [
      "Télécharger les fichiers PDF convertis",
      "Télécharger le fichier PDF converti",
    ],
    "powerpoint-to-pdf": [
      "Télécharger les fichiers PDF convertis",
      "Télécharger le fichier PDF converti",
    ],
    "excel-to-pdf": [
      "Télécharger les fichiers PDF convertis",
      "Télécharger le fichier PDF converti",
    ],
    "html-to-pdf": [
      "Télécharger les fichiers PDF convertis",
      "Télécharger le fichier PDF converti",
    ],
    "pdf-to-jpg": [
      "Télécharger les fichiers JPG convertis",
      "Télécharger le fichier JPG converti",
    ],
    "pdf-to-word": [
      "Télécharger les fichiers Word convertis",
      "Télécharger le fichier Word converti",
    ],
    "pdf-to-excel": [
      "Télécharger les fichiers Excel convertis",
      "Télécharger le fichier Excel converti",
    ],
    "pdf-to-pdf-a": [
      "Télécharger les fichiers PDF/A convertis",
      "Télécharger le fichierPDF/A converti",
    ],
    "web-to-pdf": [
      "Télécharger les fichiers PDF convertis",
      "Télécharger le fichier PDF converti",
    ],
    "pdf-to-text": [
      "Télécharger les fichiers texte extraits",
      "Télécharger le fichier texte extrait",
    ],
    "markdown-to-pdf": [
      "Télécharger les fichiers PDF convertis",
      "Télécharger le fichier PDF converti",
    ],
    "pdf-to-html": [
      "Télécharger les fichiers HTML convertis",
      "Télécharger le fichier HTML converti",
    ],
    "pdf-to-markdown": [
      "Télécharger les fichiers Markdown convertis",
      "Télécharger le fichier Markdown converti",
    ],
  },
  backto: {
    "merge-pdf": "Retour à Fusionner PDF",
    "split-pdf": "Retour à Diviser PDF",
    "compress-pdf": "Retour à Compresser PDF",
    "pdf-to-powerpoint": "Retour à PDF vers Powerpoint",
    "jpg-to-pdf": "Retour à JPG vers PDF",
    "word-to-pdf": "Retour à Word vers PDF",
    "powerpoint-to-pdf": "Retour à Powerpoint vers PDF",
    "excel-to-pdf": "Retour à Excel vers PDF",
    "html-to-pdf": "Retour à HTML vers PDF",
    "pdf-to-jpg": "Retour à PDF vers JPG",
    "pdf-to-word": "Retour à PDF vers Word",
    "pdf-to-excel": "Retour à PDF vers Excel",
    "pdf-to-pdf-a": "Retour à PDF vers PDF-A",
    "web-to-pdf": "Retour à Web vers PDF",
    "pdf-to-text": "Retour à PDF vers Texte",
    "markdown-to-pdf": "Retour à Markdown vers PDF",
    "pdf-to-html": "Retour à PDF vers HTML",
    "pdf-to-markdown": "Retour à PDF vers Markdown",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    merge_pdf: "Options de fusion de PDF",
    split_pdf: "Options de séparation de PDF",
    compress_pdf: "Options de compression de PDF",
    pdf_to_powerpoint: "Options de conversion de PDF en PowerPoint",
    jpg_to_pdf: "Options de conversion de JPG en PDF",
    word_to_pdf: "Options de conversion de WORD en PDF",
    powerpoint_to_pdf: "Options de conversion de POWERPOINT en PDF",
    excel_to_pdf: "Options de conversion de EXCEL en PDF",
    html_to_pdf: "Options de conversion de HTML en PDF",
    pdf_to_jpg: "Options de conversion de PDF en JPG",
    pdf_to_word: "Options de conversion de PDF en WORD",
    pdf_to_excel: "Options de conversion de PDF en EXCEL",
    pdf_to_pdf_a: "Options de conversion de PDF en PDF/A",
    pdf_to_text: "Options de PDF à texte",
  },
  loader_text: "Veuillez patienter...",
  add_more_button: "Ajouter plus de fichiers",
  action_buttons: {
    merge_pdf: "Fusionner PDF",
    split_pdf: "Diviser PDF",
    compress_pdf: "Compresser PDF",
    pdf_to_powerpoint: "Convertir en PowerPoint",
    jpg_to_pdf: "Convertir en PDF",
    word_to_pdf: "Convertir en PDF",
    powerpoint_to_pdf: "Convertir en PDF",
    excel_to_pdf: "Convertir en PDF",
    html_to_pdf: "Convertir en PDF",
    pdf_to_jpg: "Convertir en JPG",
    pdf_to_word: "Convertir en Word",
    pdf_to_excel: "Convertir en Excel",
    pdf_to_pdf_a: "Convertir en PDF/A",
    pdf_to_text: "Convertir en texte",
    translate_pdf: "Traduire PDF",
  },
  pages: "pages",
  page: "page",
  compress_pdf: [
    {
      title: "Compression recommandée",
      description: "Meilleur équilibre entre la taille et la qualité",
    },
    {
      title: "Compression moins importante",
      description: "Taille de fichier plus petite mais qualité inférieure",
    },
    {
      title: "Compression extrême",
      description:
        "Taille de fichier considérablement plus petite mais qualité bien inférieure",
    },
    {
      title: "Compression personnalisée",
      description: "Choisissez votre propre niveau de compression",
    },
  ],
  merge_pdf: `Utilisez le glisser-déposer pour changer l'ordre des fichiers PDF pour la fusion. Cliquez et maintenez un fichier, déplacez-le à l'emplacement souhaité et relâchez le bouton de la souris.
  Les fichiers PDF sont fusionnés de haut en bas. Pour supprimer un fichier, cliquez sur l'icône de suppression en haut du fichier. Pour faire pivoter une page, cliquez sur l'icône de rotation en haut de la vignette de la page et sélectionnez l'angle de rotation souhaité. Une fois que les fichiers sont dans l'ordre et l'orientation souhaités, cliquez sur le bouton "Fusionner" pour les combiner en un seul fichier PDF.`,
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "Le fichier est vide. Veuillez choisir un fichier valide.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "Le fichier est trop volumineux. Veuillez choisir un fichier plus petit ou utiliser notre outil de compression PDF pour réduire la taille du fichier.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "Le fichier n'est pas d'un type pris en charge.",
    types: {
      PDF: "Veuillez choisir un fichier PDF valide.",
      JPG: "Veuillez choisir un fichier d'image JPEG valide.",
      DOC: "Veuillez choisir un fichier de document Word valide.",
      DOCX: "Veuillez choisir un fichier de document Word valide.",
      XLS: "Veuillez choisir un fichier de feuille de calcul Excel valide.",
      XLSX: "Veuillez choisir un fichier de feuille de calcul Excel valide.",
      PPT: "Veuillez choisir un fichier de présentation PowerPoint valide.",
      PPTX: "Veuillez choisir un fichier de présentation PowerPoint valide.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "Le fichier est corrompu et ne peut pas être traité. Veuillez choisir un fichier valide.",
    code: "ERR_FILE_CORRUPT",
  },
  MISSING_FONTS: {
    message:
      "Le fichier contient des polices manquantes. Veuillez vous assurer que toutes les polices sont intégrées dans le fichier PDF.",
    code: "ERR_MISSING_FONTS",
  },
  INVALID_IMAGE_DATA: {
    message:
      "Le fichier contient des données d'image non valides. Veuillez vous assurer que toutes les images sont correctement formatées.",
    code: "ERR_INVALID_IMAGE_DATA",
  },
  SECURITY_RISK: {
    message:
      "Le fichier contient un risque de sécurité et ne peut pas être traité. Veuillez choisir un fichier valide.",
    code: "ERR_SECURITY_RISK",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "Vous avez dépassé le nombre maximal de fichiers autorisés. Veuillez supprimer certains fichiers et réessayer.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message:
      "Aucun fichier sélectionné. Veuillez sélectionner au moins un fichier.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "Une erreur inconnue s'est produite. Veuillez réessayer plus tard ou contacter le support.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "Une erreur de réseau s'est produite. Veuillez vérifier votre connexion Internet et réessayer.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Veuillez télécharger au moins deux fichiers à fusionner.",
    code: "ERR_UPLOAD_COUNT",
  },
};
