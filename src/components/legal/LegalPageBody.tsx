import Link from "next/link";
import type { LegalPageContent } from "@/content/legal";

type LegalPageBodyProps = {
  content: LegalPageContent;
};

export default function LegalPageBody({ content }: LegalPageBodyProps) {
  return (
    <div className="legal-page mx-auto max-w-container px-4 py-12 sm:px-6 sm:py-16 lg:px-12">
      <header className="legal-page-header mb-10 max-w-3xl">
        <p className="legal-page-updated text-sm font-medium text-ink-subtle">
          Last updated: {content.lastUpdated}
        </p>
        <h1 className="legal-page-title mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {content.title}
        </h1>
        <p className="legal-page-lead mt-4 text-base leading-relaxed text-body sm:text-lg">
          {content.description}
        </p>
      </header>

      <div className="legal-page-sections max-w-3xl space-y-8">
        {content.sections.map((section) => (
          <section key={section.title} className="legal-page-section">
            <h2 className="legal-page-section-title text-xl font-semibold text-ink">{section.title}</h2>
            <div className="mt-3 space-y-3 text-base leading-relaxed text-body">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="legal-page-footer-note mt-12 max-w-3xl text-sm text-ink-subtle">
        Questions?{" "}
        <Link href="/contact" className="font-medium text-primary underline-offset-2 hover:underline">
          Contact our clinic
        </Link>{" "}
        or call{" "}
        <a href="tel:+919849861089" className="font-medium text-primary underline-offset-2 hover:underline">
          098498 61089
        </a>
        .
      </p>
    </div>
  );
}
