export type howToType = {
    "@context": string;
    "@type": string;
    name: string;
    description: string;
    step: {
        "@type": string;
        name: string;
        text: string;
        substeps: string[];
    }[];
};


export const howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "How to Split a PDF Online?",
    description: "Easy steps to split a PDF file into multiple documents using our online tool.",
    step: [
        {
            "@type": "HowToStep",
            name: "Step 1",
            text: "Open the Split PDF tool on PDFEquips."
        },
        {
            "@type": "HowToStep",
            name: "Step 2",
            text: "Drag and drop the PDF file or click the 'Select PDF File' button to upload your PDF."
        },
        {
            "@type": "HowToStep",
            name: "Step 3",
            text: "Choose your splitting option: 'Split by Range' or 'Extract Pages'."
        },
        {
            "@type": "HowToStep",
            name: "Step 4",
            text: "Click the 'Split PDF' button to process your file."
        },
        {
            "@type": "HowToStep",
            name: "Step 5",
            text: "Download the split PDF files to your device."
        }
    ]
};


export type _howToSchema = typeof howToSchema;