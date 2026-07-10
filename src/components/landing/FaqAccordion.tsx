"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FRAMER_EASE } from "@/lib/motion";

type FaqItem = { q: string; a: string };

type FaqAccordionProps = {
  items: FaqItem[];
  /** Index of initially open item; null = all closed */
  defaultOpen?: number | null;
};

export default function FaqAccordion({ items, defaultOpen = null }: FaqAccordionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(defaultOpen);

  return (
    <div className="faq-accordion">
      {items.map((item, i) => (
        <div key={item.q} data-faq-item className="faq-accordion-item">
          <button
            type="button"
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="faq-accordion-trigger"
            aria-expanded={openFaq === i}
          >
            <span>{item.q}</span>
            <motion.span
              animate={{ rotate: openFaq === i ? 45 : 0 }}
              transition={{ duration: 0.25, ease: FRAMER_EASE.smooth }}
              className="faq-accordion-toggle"
              aria-hidden
            >
              +
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {openFaq === i ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: FRAMER_EASE.smooth }}
                className="overflow-hidden"
              >
                <p className="faq-accordion-answer">{item.a}</p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
