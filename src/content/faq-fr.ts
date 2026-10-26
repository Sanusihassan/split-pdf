import type { FaqContent } from "./faq";

export const faq: FaqContent = {
  title: "Questions fréquentes",
  items: {
    "/split-pdf": [
      {
        question: "Comment diviser un PDF en plusieurs fichiers ?",
        answer: "Glissez votre PDF dans la zone ci-dessus, puis choisissez « Diviser par plage » pour découper le document en plages de pages, ou « Extraire les pages » pour séparer certaines pages. Cliquez ensuite sur « Diviser PDF ».",
      },
      {
        question: "Comment extraire seulement certaines pages d'un PDF ?",
        answer: "Choisissez « Extraire les pages », puis « Sélectionner les pages », et indiquez les pages voulues, par exemple 2,8-32. Vous pouvez aussi regrouper les pages extraites dans un seul fichier PDF.",
      },
      {
        question: "Comment couper un PDF en fichiers de même longueur ?",
        answer: "Choisissez « Diviser par plage », puis le mode « plage fixe », et indiquez le nombre de pages par fichier. Le PDF est découpé automatiquement en plusieurs PDF de cette longueur.",
      },
      {
        question: "Mes fichiers sont-ils en sécurité ?",
        answer: "Oui. Vos fichiers sont transférés via une connexion chiffrée (TLS) et supprimés automatiquement de nos serveurs après le traitement.",
      },
    ],
  },
};
