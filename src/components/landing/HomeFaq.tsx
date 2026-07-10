"use client";

import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import FaqAccordion from "@/components/landing/FaqAccordion";
import { useMessages } from "@/i18n/LanguageProvider";

export default function HomeFaq() {
  const { faq } = useMessages();

  return (
    <section
      id="faq"
      className="conversion-faq faq-section scroll-mt-[var(--nav-height)]"
      aria-labelledby="home-faq-heading"
    >
      <div className="faq-section-inner">
        <ScrollReveal y={24}>
          <header className="faq-section-header">
            <span className="faq-section-eyebrow">
              <HelpCircle className="faq-section-eyebrow-icon" strokeWidth={2} aria-hidden />
              {faq.eyebrow}
            </span>
            <h2 id="home-faq-heading" className="faq-section-title">
              {faq.title}
            </h2>
            <p className="faq-section-lead">{faq.subtitle}</p>
          </header>
        </ScrollReveal>

        <ScrollReveal y={20} className="faq-section-accordion">
          <FaqAccordion items={faq.items} defaultOpen={0} />
        </ScrollReveal>

        <ScrollReveal y={16} className="faq-section-footer">
          <Link href="/contact#faq" className="faq-section-link">
            {faq.viewAll}
            <ArrowRight className="faq-section-link-icon" aria-hidden />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
