import { _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "¿Cómo dividir un PDF en línea?",
    description: "Pasos fáciles para dividir un archivo PDF en múltiples documentos utilizando nuestra herramienta en línea.",
    step: [
        {
            "@type": "HowToStep",
            name: "Paso 1",
            text: "Abre la herramienta Dividir PDF en PDFEquips."
        },
        {
            "@type": "HowToStep",
            name: "Paso 2",
            text: "Arrastra y suelta el archivo PDF o haz clic en el botón 'Seleccionar archivo PDF' para cargar tu PDF."
        },
        {
            "@type": "HowToStep",
            name: "Paso 3",
            text: "Elige tu opción de división: 'Dividir por rango' o 'Extraer páginas'."
        },
        {
            "@type": "HowToStep",
            name: "Paso 4",
            text: "Haz clic en el botón 'Dividir PDF' para procesar tu archivo."
        },
        {
            "@type": "HowToStep",
            name: "Paso 5",
            text: "Descarga los archivos PDF divididos en tu dispositivo."
        }
    ]
};
