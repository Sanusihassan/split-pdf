import type { edit_page as _edit_page, tool as _tool, tools as _tools, downloadFile as _downloadFile, errors as _errors } from "../content";
import type { adBlockerContentType } from "./content";

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
    split_pdf: "Opciones para dividir PDF"
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
        merge: "Fusionar todos los rangos en un archivo PDF."
      },
      fixed_range_options: {
        split_into: "dividir en el rango de páginas de:",
        alert_info: "Este PDF se dividirá en archivos de",
        pages: "páginas",
        will_be_created: "será creado."
      }
    },
    extract_pages_options: {
      extract_mode: "Modo de extracción:",
      extract_all: "Extraer todas las páginas",
      select_pages: "Seleccionar páginas",
      selection_alert_content: {
        selection_alert: "Cada página seleccionada de este archivo PDF se convertirá en un archivo PDF.",
        will_be_created: "será creado."
      },
      select_pages_content: {
        pages_to_extract: "Páginas a extraer:",
        merge: "Combinar pdf extraído en un archivo pdf.",
        page_selection_example: "ejemplo: 2,8-32"
      }
    }
  },
  action_buttons: {
    split_pdf: "Dividir PDF"
  },
  select_files_placeholder: "Seleccionar archivos",
  pages: "paginas",
  page: "página",
  filenameOptions: {
    label: "Nombre del archivo de salida (opcional)",
    placeholder: "Ingrese el nombre del archivo",
    helperText: "Este será el nombre del PDF comprimido al descargarlo.",
    cta: "Ver planes",
    upgradeNotice: {
      msg: "Los niveles del 2.0 al 10.0 están disponibles con la versión premium.",
      cta: "Actualizar ahora",
    },
  },
  fileCard: {
    page: "página",
    pages: "páginas",
    remove_file: "Eliminar archivo",
    loading: "Cargando...",
    warning: "⚠️ No se seleccionaron páginas. Haz clic en las páginas para seleccionarlas."
  },
};

export const downloadFile: _downloadFile = {
  titles: {
    "split-pdf": [
      "¡División de archivo PDF exitosa!",
      "¡Los archivos PDF se han dividido!"
    ]
  },
  btnText: {
    "split-pdf": [
      "Descargar archivos PDF divididos",
      "Descargar archivo PDF dividido"
    ]
  },
  backto: {
    "split-pdf": "Volver a dividir PDF"
  }
};

export const tools: _tools = {
  select: "Seleccionar",
  or_drop: "o suelta archivos aquí",
  files: "archivos",
  drop_files: "Arrastra archivos aquí",
};



// Spanish (es) – copy into errors.es.ts
export const errors: _errors = {
  EMPTY_FILE: {
    message: "El archivo está vacío. Por favor elige un archivo válido.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "El archivo es demasiado grande. Elige un archivo más pequeño o usa nuestra herramienta compress-pdf para reducir el tamaño.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "El tipo de archivo no es compatible.",
    types: {
      PDF: "Por favor elige un archivo PDF válido.",
      DOC: "Por favor elige un documento Word válido.",
      DOCX: "Por favor elige un documento Word válido.",
      XLS: "Por favor elige una hoja de cálculo Excel válida.",
      XLSX: "Por favor elige una hoja de cálculo Excel válida.",
      PPT: "Por favor elige una presentación PowerPoint válida.",
      PPTX: "Por favor elige una presentación PowerPoint válida.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "El archivo está corrupto y no se puede procesar. Elige un archivo válido.",
    code: "ERR_FILE_CORRUPT",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "Has excedido el número máximo de archivos permitidos. Elimina algunos archivos e inténtalo de nuevo.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "No se seleccionaron archivos. Selecciona al menos uno.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "Ocurrió un error desconocido. Inténtalo de nuevo más tarde o contacta con soporte.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "Ocurrió un error de red. Verifica tu conexión a internet e inténtalo de nuevo.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Por favor sube al menos dos archivos para combinarlos.",
    code: "ERR_UPLOAD_COUNT",
  },
  PASSWORD_REQUIRED: {
    message: "El PDF requiere contraseña.",
    code: "PASSWORD_REQUIRED",
  },
  INCORRECT_PASSWORD: {
    message: "La contraseña ingresada es incorrecta.",
    code: "INCORRECT_PASSWORD",
  },
  MAX_DAILY_USAGE: {
    message:
      "Has alcanzado tu límite diario de uso. Actualiza tu plan para continuar sin interrupciones.",
    code: "MAX_DAILY_USAGE",
  },
  MAX_PAGES_EXCEEDED: {
    message: "El PDF supera el límite máximo de 50 páginas.",
    code: "ERR_MAX_PAGES_EXCEEDED",
  },
  alerts: {
    // Frontend validation
    maxFiles: "Máximo 15 archivos. ¡Suscríbete para más!",
    singleFileSize: "El archivo debe ser menor de 100 MB. ¡Actualiza para subir archivos más grandes!",
    perFilePages: "500 páginas por archivo. ¡Desbloquea más ahora!",
    fileSize: "50 MB por archivo. ¡Actualiza para más!",
    notPasswordProtected: "Uno o más archivos no están protegidos con contraseña",
    // Backend file validation
    fileNotUploaded: "No se subió ningún archivo. Por favor selecciona un archivo.",
    fileEmpty: "El archivo subido está vacío. Por favor selecciona un archivo válido.",
    fileTooLarge: "El archivo excede 200 MB. ¡Actualiza para archivos más grandes!",
    invalidFileType: "Tipo de archivo inválido. Por favor sube un formato compatible.",
    fileCorrupt: "El archivo parece estar dañado. Por favor intenta con otro archivo.",
    insufficientUnits: "Unidades de conversión insuficientes. ¡Actualiza o recarga!",
    // Auth errors
    authRequired: "Por favor inicia sesión para usar funciones premium.",
    sessionExpired: "Tu sesión ha expirado. Por favor inicia sesión nuevamente.",
    invalidToken: "Autenticación fallida. Por favor inicia sesión nuevamente.",
    userNotFound: "Cuenta no encontrada. Por favor inicia sesión nuevamente.",
    authError: "Error de autenticación. Por favor intenta de nuevo.",
    serverError: "Error del servidor. Por favor intenta más tarde.",
    invalidSplitMode: "Modo de división seleccionado inválido.",
    invalidRangeMode: "Modo de rango seleccionado inválido.",
    invalidExtractMode: "Modo de extracción seleccionado inválido.",
    noRangesProvided: "Por favor, proporcione al menos un rango de páginas.",
    noFixedRangeValue: "Por favor, especifique el número de páginas por división.",
    invalidFixedRangeValue: "Número de páginas inválido. Por favor, ingrese un número positivo.",
    noPagesSelected: "Por favor, seleccione al menos una página para extraer.",
    invalidPageRange: "Rango de páginas inválido. Por favor, verifique sus números de página.",
    invalidPageSelection: "Selección de páginas inválida. Use formato como '1-3,5,7-10'.",
    rangeOutOfBounds: "El rango de páginas excede el número de páginas en el PDF.",
    pdfTooManyPages: "El PDF tiene demasiadas páginas. Por favor, use un documento más pequeño.",
    splitFailed: "Falló la división del PDF. Por favor, intente nuevamente.",
  },
};

export const adBlockerContent: adBlockerContentType = {
  title: "Bloqueador de anuncios detectado",
  description: "Notamos que usas un bloqueador de anuncios. Desactívalo o actualiza a premium para una experiencia sin anuncios.",
  reloadPage: "Recargar página",
  upgradeToPremium: "Actualizar a Premium"
};