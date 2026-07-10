"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import type { FaqItem } from "@/content/types";

type ContentFaqProps = {
  faqs: readonly FaqItem[];
  title?: string;
  variant?: "default" | "article";
  idPrefix?: string;
};

export default function ContentFaq({
  faqs,
  title = "Frequently Asked Questions",
  variant = "default",
  idPrefix = "faq",
}: ContentFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (faqs.length === 0) return null;

  const isArticle = variant === "article";

  return (
    <section
      id={isArticle ? "article-faq" : undefined}
      className={isArticle ? "article-faq" : "content-faq"}
      aria-labelledby="content-faq-heading"
    >
      <div className={isArticle ? "article-section-head" : undefined}>
        {isArticle ? (
          <span className="article-section-eyebrow">
            <HelpCircle className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
            FAQ
          </span>
        ) : null}
        <h2 id="content-faq-heading" className={isArticle ? "article-section-title" : "content-section-title"}>
          {title}
        </h2>
        {isArticle ? (
          <p className="article-section-desc">
            Clear answers to questions patients often ask about this topic.
          </p>
        ) : null}
      </div>

      <div className={isArticle ? "article-faq-list" : "content-faq-list"}>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const itemId = `${idPrefix}-${index}`;
          return (
            <div
              key={faq.q}
              id={isArticle ? itemId : undefined}
              className={isArticle ? "article-faq-item" : "content-faq-item"}
            >
              <button
                type="button"
                className={isArticle ? "article-faq-trigger" : "content-faq-trigger"}
                aria-expanded={isOpen}
                aria-controls={isArticle ? `${itemId}-answer` : undefined}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className={isArticle ? "article-faq-question" : undefined}>{faq.q}</span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
              {isOpen ? (
                <div
                  id={isArticle ? `${itemId}-answer` : undefined}
                  className={isArticle ? "article-faq-answer" : "content-faq-answer"}
                >
                  {faq.a}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
