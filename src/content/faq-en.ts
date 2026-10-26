import type { FaqContent } from "./faq";

export const faq: FaqContent = {
  title: "Frequently Asked Questions",
  items: {
    "/split-pdf": [
      {
        question: "How do I split a PDF into several files?",
        answer: "Drag your PDF into the area above and choose «Split by range» to cut it into page ranges, or «Extract Pages» to pull out specific pages. Then click «Split PDF».",
      },
      {
        question: "How do I extract only some pages from a PDF?",
        answer: "Choose «Extract Pages», select the pages you want, for example 2,8-32, and click «Split PDF». You can also combine the extracted pages into one PDF.",
      },
      {
        question: "How do I split a PDF into files with the same number of pages?",
        answer: "Choose «Split by range», then the «fixed range» mode, and enter how many pages each file should have. The PDF is split automatically into files of that length.",
      },
      {
        question: "Are my files safe?",
        answer: "Yes. Your files are transferred over an encrypted (TLS) connection and automatically deleted from our servers after processing.",
      },
    ],
  },
};
