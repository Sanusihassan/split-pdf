// FAQ entries per language and route. Languages without entries render no
// FAQ section.
import { faq as en } from "./faq-en";
import { faq as fr } from "./faq-fr";
import { faq as es } from "./faq-es";
import { faq as ar } from "./faq-ar";

export type FaqEntry = { question: string; answer: string };
export type FaqContent = { title: string; items: Record<string, FaqEntry[]> };

export const faqs: Record<string, FaqContent> = { en, fr, es, ar };
