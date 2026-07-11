"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import { landingWhyChoose } from "@/content/landing";
import { useMessages } from "@/i18n/LanguageProvider";

export default function WhyChooseUs() {
  const { whyChoose } = useMessages();

  return (
    <section
      id="why-choose-us"
      className="why-choose-section relative scroll-mt-[var(--nav-height)]"
    >
      <div className="why-choose-inner">
        <ScrollReveal y={28}>
          <header className="why-choose-header">
            <p className="why-choose-eyebrow">{whyChoose.eyebrow}</p>
            <h2 className="why-choose-title">{whyChoose.title}</h2>
          </header>
        </ScrollReveal>

        <ScrollReveal staggerSelector="[data-feature]" stagger={0.08} y={28}>
          <div className="why-choose-grid">
            {landingWhyChoose.map(({ icon: Icon }, i) => {
              const item = whyChoose.items[i];
              if (!item) return null;
              return (
                <article key={item.title} data-feature className="why-choose-card">
                  <span className="why-choose-card-icon" aria-hidden>
                    <Icon className="h-7 w-7" strokeWidth={1.75} />
                  </span>
                  <div className="why-choose-card-body">
                    <h3 className="why-choose-card-title">{item.title}</h3>
                    <p className="why-choose-card-desc">{item.desc}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
