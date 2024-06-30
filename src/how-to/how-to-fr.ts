import { _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "Comment diviser un PDF en ligne?",
    description: "Étapes faciles pour diviser un fichier PDF en plusieurs documents à l'aide de notre outil en ligne.",
    step: [
        {
            "@type": "HowToStep",
            name: "Étape 1",
            text: "Ouvrez l'outil Diviser PDF sur PDFEquips."
        },
        {
            "@type": "HowToStep",
            name: "Étape 2",
            text: "Glissez et déposez le fichier PDF ou cliquez sur le bouton 'Sélectionner le fichier PDF' pour télécharger votre PDF."
        },
        {
            "@type": "HowToStep",
            name: "Étape 3",
            text: "Choisissez votre option de division : 'Diviser par plage' ou 'Extraire des pages'."
        },
        {
            "@type": "HowToStep",
            name: "Étape 4",
            text: "Cliquez sur le bouton 'Diviser PDF' pour traiter votre fichier."
        },
        {
            "@type": "HowToStep",
            name: "Étape 5",
            text: "Téléchargez les fichiers PDF divisés sur votre appareil."
        }
    ]
};
