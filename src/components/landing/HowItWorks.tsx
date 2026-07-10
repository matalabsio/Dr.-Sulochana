"use client";

import { useEffect, useRef } from "react";
import { Sparkles } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { journeySection as journeyBase } from "@/content/landing";
import { useMessages } from "@/i18n/LanguageProvider";

/** Horizontal wave connecting four steps (desktop) */
const WAVE_PATH_DESKTOP =
  "M 0 48 C 120 12 200 84 320 48 S 520 12 640 48 S 840 84 960 48 L 1000 48";

const WAVE_SOFT = "rgba(110, 63, 115, 0.12)";
const WAVE_LINE = "#6D3FA9";
const HEART_BG = "#FFF9F7";
const HEART_FILL = "#C9787A";

export default function HowItWorks() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { journey } = useMessages();
  const { badge, title, subtitle } = journey;
  const steps = journeyBase.steps.map((step, i) => ({
    ...step,
    title: journey.steps[i]?.title ?? step.title,
    desc: journey.steps[i]?.desc ?? step.desc,
  }));

  useEffect(() => {
    const root = timelineRef.current;
    if (!root) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      root.classList.add("journey-timeline--ready");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        root.classList.add("journey-timeline--ready");
        observer.disconnect();
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      className="journey-wavy-section scroll-mt-[var(--nav-height)]"
      aria-labelledby="journey-heading"
    >
      <div className="journey-wavy-bg" aria-hidden>
        <svg className="journey-wavy-bg-top" viewBox="0 0 1440 48" preserveAspectRatio="none">
          <path
            fill="currentColor"
            d="M0,24 C360,48 720,0 1080,24 1440,8 L1440,48 L0,48 Z"
          />
        </svg>
      </div>

      <div className="journey-wavy-inner relative z-10">
        <div className="journey-wavy-panel relative overflow-visible">
          <ScrollReveal y={24} duration={0.7}>
            <header className="journey-header">
              <span className="journey-eyebrow">
                <Sparkles className="h-3 w-3 opacity-60" strokeWidth={2} aria-hidden />
                {badge}
              </span>
              <h2 id="journey-heading" className="journey-title">
                {title}
              </h2>
              <p className="journey-lead">{subtitle}</p>
            </header>
          </ScrollReveal>

          <div ref={timelineRef} className="journey-timeline mt-8 sm:mt-12">
            <ScrollReveal
              staggerSelector="[data-journey-step]"
              stagger={0.12}
              y={32}
              duration={0.7}
            >
              {/* Desktop — horizontal wavy timeline */}
              <div className="journey-wave-desktop hidden md:block">
                <div className="journey-wave-svg-track" aria-hidden>
                  <svg viewBox="0 0 1000 96" preserveAspectRatio="none" className="h-full w-full">
                    <path
                      className="journey-wave-path-bg"
                      d={WAVE_PATH_DESKTOP}
                      fill="none"
                      stroke={WAVE_SOFT}
                      strokeWidth="9.9"
                      strokeLinecap="round"
                    />
                    <path
                      className="journey-wave-path-main"
                      d={WAVE_PATH_DESKTOP}
                      fill="none"
                      stroke={WAVE_LINE}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {[
                      { cx: 250, cy: 58.4 },
                      { cx: 500, cy: 21.5 },
                      { cx: 750, cy: 72 },
                    ].map((point, i) => (
                      <g
                        key={point.cx}
                        className={`journey-love-heart journey-love-heart--${i + 1}`}
                        transform={`translate(${point.cx - 8}, ${point.cy - 8})`}
                      >
                        <circle cx="8" cy="8" r="10" fill={HEART_BG} opacity="0.95" />
                        <path
                          d="M8 14.5 6.9 13.5C3.2 10.2 1 8.3 1 5.8 1 3.7 2.7 2 4.8 2c1.2 0 2.3.5 3.2 1.4.9-.9 2-1.4 3.2-1.4 2.1 0 3.8 1.7 3.8 3.8 0 2.5-2.2 4.4-5.9 7.7L8 14.5z"
                          fill={HEART_FILL}
                          transform="scale(0.55) translate(5 4)"
                        />
                      </g>
                    ))}
                  </svg>
                </div>

                <div className="journey-wave-desktop-grid">
                  {steps.map(({ step, title: stepTitle, desc, icon: Icon }, index) => (
                    <article
                      key={step}
                      data-journey-step
                      className={`journey-wave-item journey-wave-item--step-${step}`}
                    >
                      <div className="journey-wave-node">
                        <span className="journey-wave-node-ring" aria-hidden />
                        <span className="journey-wave-node-core">{step}</span>
                        <span className="journey-wave-node-icon">
                          <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                        </span>
                      </div>
                      <div className="journey-wave-card">
                        <h3 className="journey-wave-card-title">{stepTitle}</h3>
                        <p className="journey-wave-card-desc">{desc}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Mobile — vertical step timeline */}
              <ol className="journey-steps-mobile md:hidden" aria-label={title}>
                {steps.map(({ step, title: stepTitle, desc, icon: Icon }, index) => (
                  <li key={step} data-journey-step className="journey-steps-mobile-item">
                    <div className="journey-steps-mobile-track" aria-hidden>
                      <span className="journey-steps-mobile-num">{step}</span>
                      {index < steps.length - 1 ? (
                        <span className="journey-steps-mobile-line" />
                      ) : null}
                    </div>
                    <article className="journey-steps-mobile-card">
                      <div className="journey-steps-mobile-card-head">
                        <span className="journey-steps-mobile-icon">
                          <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                        </span>
                        <h3 className="journey-steps-mobile-card-title">{stepTitle}</h3>
                      </div>
                      <p className="journey-steps-mobile-card-desc">{desc}</p>
                    </article>
                  </li>
                ))}
              </ol>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
