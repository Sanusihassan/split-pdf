import type { adBlockerContentType } from "./content";
import type { edit_page as _edit_page, tool as _tool, tools as _tools, downloadFile as _downloadFile, errors as _ } from "../content";

export const tool: _tool = {
    Split_PDF: {
        title: "Diviser PDF",
        seoTitle: "Divisez PDF en Plusieurs Documents en Ligne en Toute Sécurité",
        description: "Divisez un fichier PDF en plusieurs documents.",
        color: "var(--orange)",
        type: ".pdf",
        to: "/split-pdf",
        keywords: "diviser PDF, diviser fichier PDF, séparateur de PDF, extraire des pages PDF, outil PDF en ligne",
        features: [
            {
                title: "Division Précise des Pages",
                description: "Divisez facilement votre PDF en pages individuelles ou une plage de pages, tout en maintenant l'intégrité de votre document original."
            },
            {
                title: "Rapide et Efficace",
                description: "Profitez de temps de traitement rapides, vous permettant de diviser vos documents PDF en quelques secondes."
            },
            {
                title: "Sécurisé et Privé",
                description: "Notre outil garantit que vos fichiers sont traités en toute sécurité, protégeant vos données pendant le processus de division."
            }
        ]
    }
};

export const edit_page: _edit_page = {
    edit_page_titles: {
        split_pdf: "Options de séparation de PDF"
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
                merge: "Fusionner toutes les plages en un fichier PDF."
            },
            fixed_range_options: {
                split_into: "divisé en une plage de pages de :",
                alert_info: "Ce PDF sera divisé en fichiers de",
                pages: "pages",
                will_be_created: "sera créé(s)."
            }
        },
        extract_pages_options: {
            extract_mode: "Mode d'extraction :",
            extract_all: "Extraire toutes les pages",
            select_pages: "Sélectionner les pages",
            selection_alert_content: {
                selection_alert: "Chaque page sélectionnée de ce fichier PDF sera convertie en un fichier PDF.",
                will_be_created: "sera créé."
            },
            select_pages_content: {
                pages_to_extract: "Pages à extraire :",
                merge: "Fusionner les PDF extraits en un seul fichier PDF.",
                page_selection_example: "exemple : 2,8-32"
            }
        }
    },
    action_buttons: {
        split_pdf: "Diviser PDF"
    },
    select_files_placeholder: "Sélectionner des fichiers",
    pages: "pages",
    page: "page",
    filenameOptions: {
        label: "Nom du fichier de sortie (facultatif)",
        placeholder: "Entrez le nom du fichier",
        helperText: "Ce sera le nom du PDF compressé lors du téléchargement.",
        cta: "Voir les forfaits",
        upgradeNotice: {
            msg: "Les niveaux de 2.0 à 10.0 sont disponibles avec la version premium.",
            cta: "Mettre à niveau maintenant",
        },
    },
    fileCard: {
        page: "page",
        pages: "pages",
        remove_file: "Supprimer le fichier",
        loading: "Chargement...",
    },
};

export const downloadFile: _downloadFile = {
    titles: {
        "split-pdf": [
            "Fichier PDF divisé avec succès !",
            "Les fichiers PDF ont été divisés !"
        ]
    },
    btnText: {
        "split-pdf": [
            "Télécharger les fichiers PDF divisés",
            "Télécharger le fichier PDF divisé"
        ]
    },
    backto: {
        "split-pdf": "Retour à Diviser PDF"
    }
};

// French (fr) - tools
export const tools: _tools = {
    select: "Sélectionner",
    or_drop: "ou déposez les fichiers ici",
    files: "fichiers",
    drop_files: "Glissez les fichiers ici",
};

export const errors: _ = {
    EMPTY_FILE: {
        message: "Le fichier est vide. Veuillez choisir un fichier valide.",
        code: "ERR_EMPTY_FILE",
    },
    FILE_TOO_LARGE: {
        message:
            "Le fichier est trop volumineux. Choisissez un fichier plus petit ou utilisez notre outil compress-pdf pour réduire la taille.",
        code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
    },
    NOT_SUPPORTED_TYPE: {
        message: "Le type de fichier n'est pas pris en charge.",
        types: {
            PDF: "Veuillez choisir un fichier PDF valide.",
            DOC: "Veuillez choisir un document Word valide.",
            DOCX: "Veuillez choisir un document Word valide.",
            XLS: "Veuillez choisir une feuille de calcul Excel valide.",
            XLSX: "Veuillez choisir une feuille de calcul Excel valide.",
            PPT: "Veuillez choisir une présentation PowerPoint valide.",
            PPTX: "Veuillez choisir une présentation PowerPoint valide.",
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
            "Vous avez dépassé le nombre maximum de fichiers autorisés. Supprimez certains fichiers et réessayez.",
        code: "ERR_MAX_FILES_EXCEEDED",
    },
    NO_FILES_SELECTED: {
        message: "Aucun fichier sélectionné. Veuillez en sélectionner au moins un.",
        code: "ERR_NO_FILES_SELECTED",
    },
    UNKNOWN_ERROR: {
        message:
            "Une erreur inconnue s'est produite. Réessayez plus tard ou contactez le support.",
        code: "ERR_UNKNOWN",
    },
    ERR_NETWORK: {
        message:
            "Une erreur réseau s'est produite. Vérifiez votre connexion internet et réessayez.",
        code: "ERR_NETWORK",
    },
    ERR_UPLOAD_COUNT: {
        message: "Veuillez télécharger au moins deux fichiers pour les fusionner.",
        code: "ERR_UPLOAD_COUNT",
    },
    PASSWORD_REQUIRED: {
        message: "Le PDF nécessite un mot de passe.",
        code: "PASSWORD_REQUIRED",
    },
    INCORRECT_PASSWORD: {
        message: "Le mot de passe saisi est incorrect.",
        code: "INCORRECT_PASSWORD",
    },
    MAX_DAILY_USAGE: {
        message:
            "Vous avez atteint votre limite d'utilisation quotidienne. Mettez à jour votre plan pour continuer sans interruption.",
        code: "MAX_DAILY_USAGE",
    },
    MAX_PAGES_EXCEEDED: {
        message: "Le PDF dépasse la limite maximale de 50 pages.",
        code: "ERR_MAX_PAGES_EXCEEDED",
    },
    alerts: {
        // Frontend validation
        maxFiles: "Maximum 15 fichiers. Abonnez-vous pour plus !",
        singleFileSize: "Le fichier doit faire moins de 100 Mo. Passez à la version supérieure pour des fichiers plus gros !",
        perFilePages: "500 pages par fichier. Débloquez plus maintenant !",
        fileSize: "50 Mo par fichier. Passez à la version supérieure pour plus !",
        notPasswordProtected: "Un ou plusieurs fichiers ne sont pas protégés par mot de passe",
        // Backend file validation
        fileNotUploaded: "Aucun fichier téléchargé. Veuillez sélectionner un fichier.",
        fileEmpty: "Le fichier téléchargé est vide. Veuillez sélectionner un fichier valide.",
        fileTooLarge: "Le fichier dépasse 200 Mo. Passez à la version supérieure pour des fichiers plus gros !",
        invalidFileType: "Type de fichier invalide. Veuillez télécharger un format pris en charge.",
        fileCorrupt: "Le fichier semble être corrompu. Veuillez essayer un autre fichier.",
        insufficientUnits: "Unités de conversion insuffisantes. Passez à la version supérieure ou rechargez !",
        // Auth errors
        authRequired: "Veuillez vous connecter pour utiliser les fonctionnalités premium.",
        sessionExpired: "Votre session a expiré. Veuillez vous reconnecter.",
        invalidToken: "Échec de l'authentification. Veuillez vous reconnecter.",
        userNotFound: "Compte introuvable. Veuillez vous reconnecter.",
        authError: "Erreur d'authentification. Veuillez réessayer.",
        serverError: "Erreur du serveur. Veuillez réessayer plus tard.",
        invalidSplitMode: "Mode de fractionnement sélectionné invalide.",
        invalidRangeMode: "Mode de plage sélectionné invalide.",
        invalidExtractMode: "Mode d'extraction sélectionné invalide.",
        noRangesProvided: "Veuillez fournir au moins une plage de pages.",
        noFixedRangeValue: "Veuillez spécifier le nombre de pages par fractionnement.",
        invalidFixedRangeValue: "Nombre de pages invalide. Veuillez entrer un nombre positif.",
        noPagesSelected: "Veuillez sélectionner au moins une page à extraire.",
        invalidPageRange: "Plage de pages invalide. Veuillez vérifier vos numéros de page.",
        invalidPageSelection: "Sélection de pages invalide. Utilisez un format comme '1-3,5,7-10'.",
        rangeOutOfBounds: "La plage de pages dépasse le nombre de pages dans le PDF.",
        pdfTooManyPages: "Le PDF a trop de pages. Veuillez utiliser un document plus petit.",
        splitFailed: "Échec du fractionnement du PDF. Veuillez réessayer.",

    },
};

export const adBlockerContent: adBlockerContentType = {
    title: "Bloqueur de publicités détecté",
    description: "Nous avons remarqué que vous utilisez un bloqueur de publicités. Désactivez-le ou passez à premium pour une expérience sans pubs !",
    reloadPage: "Recharger la page",
    upgradeToPremium: "Passer à Premium"
};