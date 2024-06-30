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
    title: "Dividir PDF",
    seoTitle: "Divide PDF en Múltiples Documentos en Línea de Forma Segura",
    description: "Divide un archivo PDF en múltiples documentos.",
    color: "var(--orange)",
    type: ".pdf",
    to: "/split-pdf",
    keywords: "dividir PDF, dividir archivo PDF, separador de PDF, extraer páginas de PDF, herramienta de PDF en línea",
    features: [
      {
        title: "División Precisa de Páginas",
        description: "Divide fácilmente tu PDF en páginas individuales o un rango de páginas, manteniendo la integridad del documento original."
      },
      {
        title: "Rápido y Eficiente",
        description: "Experimenta tiempos de procesamiento rápidos, lo que te permite dividir tus documentos PDF en solo segundos."
      },
      {
        title: "Seguro y Privado",
        description: "Nuestra herramienta garantiza que tus archivos se manejen de manera segura, protegiendo tus datos durante el proceso de división."
      }
    ]
  }
};



export const edit_page: _edit_page = {
  edit_page_titles: {
    split_pdf: "Opciones para dividir PDF",
  },
  loader_text: "Por favor espera...",
  add_more_button: "Agrega más archivos",
  options: {
    split_by_range: "Dividir por rango",
    extract_pages: "Extraer páginas",
    split_by_range_options: {
      range_mode: "Modo de rango:",
      custom_range: "rango personalizado",
      fixed_range: "rango fijo",
      custom_range_options: {
        range: "Rango",
        from: "De",
        to: "Para",
        add_range: "Agregar rango",
        merge: "Fusionar todos los rangos en un archivo PDF.",
      },
      fixed_range_options: {
        split_into: "dividir en el rango de páginas de:",
        alert_info: "Este PDF se dividirá en archivos de",
        pages: "páginas",
        will_be_created: "será creado.",
      },
    },
    extract_pages_options: {
      extract_mode: "Modo de extracción:",
      extract_all: "Extraer todas las páginas",
      select_pages: "Seleccionar páginas",
      selection_alert_content: {
        selection_alert:
          "Cada página seleccionada de este archivo PDF se convertirá en un archivo PDF.",
        will_be_created: "será creado.",
      },
      select_pages_content: {
        pages_to_extract: "Páginas a extraer:",
        merge: "Combinar pdf extraído en un archivo pdf.",
        page_selection_example: "ejemplo: 2,8-32",
      },
    },
  },
  action_buttons: {
    split_pdf: "Dividir PDF",
  },
  select_files_placeholder: "Seleccionar archivos",
  pages: "paginas",
  page: "página",
};

export const tools: _tools = {
  select: "Seleccionar",
  or_drop: "o soltar archivos aquí",
  files: "archivos",
  drop_files: "Arrastra los archivos aquí",
};

export const downloadFile: _downloadFile = {
  titles: {
    "split-pdf": [
      "¡División de archivo PDF exitosa!",
      "¡Los archivos PDF se han dividido!",
    ],
  },
  btnText: {
    "split-pdf": [
      "Descargar archivos PDF divididos",
      "Descargar archivo PDF dividido",
    ],
  },
  backto: {
    "split-pdf": "Volver a dividir PDF",
  },
};

export const footer: _footer = {
  brand: "PDFEquips",
  terms: "términos",
  conditions: "condiciones",
  privacy_policy: "política de privacidad",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "El archivo está vacío. Por favor, elija un archivo válido.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "El archivo es demasiado grande. Por favor, elija un archivo más pequeño o use nuestra herramienta de compresión de PDF para reducir el tamaño del archivo.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "El archivo no es un tipo compatible.",
    types: {
      PDF: "Por favor, elija un archivo PDF válido.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "El archivo estácorrupto y no se puede procesar. Por favor, elija un archivo válido.",
    code: "ERR_FILE_CORRUPT",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "Ha excedido el número máximo de archivos permitidos. Por favor, elimine algunos archivos e intente nuevamente.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message:
      "No se han seleccionado archivos. Por favor, seleccione al menos un archivo.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "Ha ocurrido un error desconocido. Por favor, inténtelo de nuevo más tarde o contacte al soporte.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "Ha ocurrido un error en la red. Por favor, comprueba tu conexión a internet e inténtalo de nuevo.",
    code: "ERR_NETWORK",
  },
};
