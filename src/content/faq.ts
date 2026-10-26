// FAQ entries per language and route. Languages without entries render no
// FAQ section.
import { faq as fr } from "./faq-fr";

export type FaqEntry = { question: string; answer: string };
export type FaqContent = { title: string; items: Record<string, FaqEntry[]> };

export const faqs: Record<string, FaqContent> = { fr };
