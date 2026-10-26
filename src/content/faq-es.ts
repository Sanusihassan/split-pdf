import type { FaqContent } from "./faq";

export const faq: FaqContent = {
  title: "Preguntas frecuentes",
  items: {
    "/split-pdf": [
      {
        question: "¿Cómo dividir un PDF en varios archivos?",
        answer: "Arrastra tu PDF a la zona de arriba y elige «Dividir por rango» para separar el documento en rangos de páginas, o «Extraer páginas» para sacar páginas concretas. Después pulsa «Dividir PDF».",
      },
      {
        question: "¿Cómo extraer solo algunas páginas de un PDF?",
        answer: "Elige «Extraer páginas», luego «Seleccionar páginas», e indica las páginas que quieres, por ejemplo 2,8-32. También puedes juntar las páginas extraídas en un solo PDF.",
      },
      {
        question: "¿Cómo separar un PDF en archivos del mismo número de páginas?",
        answer: "Elige «Dividir por rango», luego el modo «rango fijo», e indica cuántas páginas quieres por archivo. El PDF se divide automáticamente en varios archivos de esa longitud.",
      },
      {
        question: "¿Mis archivos están seguros?",
        answer: "Sí. Tus archivos se transfieren mediante una conexión cifrada (TLS) y se eliminan automáticamente de nuestros servidores después del procesamiento.",
      },
    ],
  },
};
