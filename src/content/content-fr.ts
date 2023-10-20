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

export const nav_content = {
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
    "split-pdf": [
      "Fichier PDF divisé avec succès !",
      "Les fichiers PDF ont été divisés !",
    ],
  },
  btnText: {
    "split-pdf": [
      "Télécharger les fichiers PDF divisés",
      "Télécharger le fichier PDF divisé",
    ],
  },
  backto: {
    "split-pdf": "Retour à Diviser PDF",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    split_pdf: "Options de séparation de PDF",
  },
  loader_text: "Veuillez patienter...",
  add_more_button: "Ajouter plus de fichiers",
  options: {
    split_by_range: "Diviser par plage",
    extract_pages: "Extraire les pages",
    split_by_range_options: {
      range_mode: "Mode de plage :",
      custom_range: "plage personnalisée",
      fixed_range: "plage fixe",
      custom_range_options: {
        range: "Plage",
        from: "De",
        to: "À",
        add_range: "Ajouter une plage",
        merge: "Fusionner toutes les plages en un fichier PDF.",
      },
      fixed_range_options: {
        split_into: "divisé en une plage de pages de :",
        alert_info: "Ce PDF sera divisé en fichiers de",
        pages: "pages",
        will_be_created: "sera créé(s).",
      },
    },
    extract_pages_options: {
      extract_mode: "Mode d'extraction :",
      extract_all: "Extraire toutes les pages",
      select_pages: "Sélectionner les pages",
      selection_alert_content: {
        selection_alert:
          "Chaque page sélectionnée de ce fichier PDF sera convertie en un fichier PDF.",
        will_be_created: "sera créé.",
      },
      select_pages_content: {
        pages_to_extract: "Pages à extraire :",
        merge: "Fusionner les PDF extraits en un seul fichier PDF.",
        page_selection_example: "exemple : 2,8-32",
      },
    },
  },
  action_buttons: {
    split_pdf: "Diviser PDF",
  },
  select_files_placeholder: "Sélectionner des fichiers",
  pages: "pages",
  page: "page",
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
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "Le fichier est corrompu et ne peut pas être traité. Veuillez choisir un fichier valide.",
    code: "ERR_FILE_CORRUPT",
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
};
