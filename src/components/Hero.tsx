"use client";

import Link from "next/link";
import OptimizedImage from "@/components/ui/OptimizedImage";
import HeroCountUp from "@/components/hero/HeroCountUp";
import { HeroMetricIcon } from "@/components/hero/HeroMetricIcons";
import { heroMetrics } from "@/content/landing";
import { useMessages } from "@/i18n/LanguageProvider";
import { images } from "@/content/images";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { HERO_SPRING, heroFloat, heroSpringItem, heroSpringStagger } from "@/lib/motion";
import { trackBookAppointmentClick } from "@/lib/analytics";
import SplitText from "@/components/animations/SplitText";
import FloatingIllustration from "@/components/landing/FloatingIllustration";
import { LoveFlowBackdrop } from "@/components/landing/LoveFlowDecor";

function HeroBackground() {
  return (
    <div className="premium-hero-bg-layers premium-hero-bg-layers--section" aria-hidden>
      <LoveFlowBackdrop className="premium-hero-love-flow" />
      <div className="hero-bg-scrim hero-bg-scrim--refined" />
      <div className="premium-hero-blob premium-hero-blob-soft" />
    </div>
  );
}

export default function Hero() {
  const { hero: heroCopy, common } = useMessages();
  const metricLabels = [
    common.yearsExperience,
    common.babiesBorn,
    common.patientSatisfaction,
    common.heroTreatments,
  ];
  const reduced = useReducedMotion() ?? false;
  const motionProps = reduced
    ? { initial: false, animate: "show" }
    : { initial: "hidden", animate: "show" };

  return (
    <section aria-label="Hero" className="premium-hero premium-hero--refined relative isolate overflow-x-clip">
      <HeroBackground />

      <div className="hero-shell relative z-10 mx-auto max-w-container">
        <div className="hero-grid">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduced ? { duration: 0 } : { ...HERO_SPRING, delay: 0.12 }}
            className="hero-visual-col hero-visual-col--landing w-full"
          >
            <div className="hero-visual-offset">
            <div className="hero-visual-card">
              <div className="hero-visual-glow" aria-hidden />

              <FloatingIllustration
                src={images.heroAccentMeditation}
                width={112}
                height={112}
                orb
                interactive={false}
                className="hero-float-orb--corner-tr"
                sizes="112px"
                delay={0.45}
                immediate
              />

              <motion.div className="hero-visual-frame">
                <motion.div className="hero-visual-frame-inner" {...heroFloat(reduced)}>
                  <OptimizedImage
                    src={images.heroLocal}
                    alt="Expectant couple sharing a joyful moment — compassionate maternity care at Dr. Sulochana's Hospital"
                    fill
                    priority
                    sizes="(max-width: 640px) 88vw, (max-width: 1024px) 42vw, 478px"
                    className="object-contain object-center"
                    wrapperClassName="absolute inset-0 bg-transparent"
                  />
                </motion.div>
              </motion.div>
            </div>
            </div>
          </motion.div>

          <motion.div
            variants={reduced ? undefined : heroSpringStagger}
            {...motionProps}
            className="hero-copy-col hero-copy-col--landing"
          >
            <motion.p
              variants={reduced ? undefined : heroSpringItem}
              className="hero-trust-pill"
            >
              {heroCopy.trustBadge}
            </motion.p>

            {reduced ? (
              <h1 className="hero-headline hero-headline--minimal hero-headline--landing">
                <span className="hero-headline-row hero-headline-row--1 hero-headline-accent">
                  {heroCopy.headlineLine1}
                </span>
                <span className="hero-headline-row hero-headline-row--2 hero-headline-accent">
                  {heroCopy.headlineLine2}
                </span>
                <span className="hero-headline-row hero-headline-row--3">
                  <span className="hero-headline-accent">{heroCopy.headlineLine3Lead}</span>
                  <span className="hero-headline-continued">{heroCopy.headlineLine3Tail.trimStart()}</span>
                </span>
                <span className="hero-headline-row hero-headline-row--4 hero-headline-continued">
                  {heroCopy.headlineLine4}
                </span>
              </h1>
            ) : (
              <h1 className="hero-headline hero-headline--minimal hero-headline--landing">
                <SplitText
                  tag="span"
                  text={heroCopy.headlineLine1}
                  className="hero-headline-row hero-headline-row--1 hero-headline-accent hero-split-line"
                  textAlign="left"
                  splitType="chars"
                  delay={35}
                  duration={0.65}
                  ease="power3.out"
                  from={{ opacity: 0, y: 36 }}
                  to={{ opacity: 1, y: 0 }}
                  animateOnMount
                  startDelay={0}
                />
                <SplitText
                  tag="span"
                  text={heroCopy.headlineLine2}
                  className="hero-headline-row hero-headline-row--2 hero-headline-accent hero-split-line"
                  textAlign="left"
                  splitType="chars"
                  delay={35}
                  duration={0.65}
                  ease="power3.out"
                  from={{ opacity: 0, y: 36 }}
                  to={{ opacity: 1, y: 0 }}
                  animateOnMount
                  startDelay={0.18}
                />
                <span className="hero-headline-row hero-headline-row--3">
                  <SplitText
                    tag="span"
                    text={heroCopy.headlineLine3Lead}
                    className="hero-headline-accent hero-split-line hero-split-line--inline"
                    textAlign="left"
                    splitType="chars"
                    delay={35}
                    duration={0.65}
                    ease="power3.out"
                    from={{ opacity: 0, y: 36 }}
                    to={{ opacity: 1, y: 0 }}
                    animateOnMount
                    startDelay={0.36}
                  />
                  <SplitText
                    tag="span"
                    text={heroCopy.headlineLine3Tail.trimStart()}
                    className="hero-headline-continued hero-split-line hero-split-line--inline"
                    textAlign="left"
                    splitType="chars"
                    delay={35}
                    duration={0.65}
                    ease="power3.out"
                    from={{ opacity: 0, y: 36 }}
                    to={{ opacity: 1, y: 0 }}
                    animateOnMount
                    startDelay={0.48}
                  />
                </span>
                <SplitText
                  tag="span"
                  text={heroCopy.headlineLine4}
                  className="hero-headline-row hero-headline-row--4 hero-headline-continued hero-split-line"
                  textAlign="left"
                  splitType="chars"
                  delay={35}
                  duration={0.65}
                  ease="power3.out"
                  from={{ opacity: 0, y: 36 }}
                  to={{ opacity: 1, y: 0 }}
                  animateOnMount
                  startDelay={0.62}
                />
              </h1>
            )}

            <motion.p
              variants={reduced ? undefined : heroSpringItem}
              className="hero-lead"
            >
              {heroCopy.subtitle}
            </motion.p>

            <motion.div
              variants={reduced ? undefined : heroSpringItem}
              className="hero-cta-wrap"
            >
              <FloatingIllustration
                src={images.heroAccentIllustration}
                width={77}
                height={77}
                orb
                interactive={false}
                className="hero-float-orb--near-cta"
                sizes="77px"
                delay={0.5}
                immediate
              />

              <div className="hero-cta-stack">
                <Link
                  href="/contact"
                  className="hero-btn-primary hero-btn-primary--minimal hero-btn-primary--figma cursor-pointer"
                  onClick={() =>
                    trackBookAppointmentClick({
                      ctaLocation: "hero_primary",
                      destination: "/contact",
                      sourcePage: "/",
                    })
                  }
                >
                  <Calendar className="hero-btn-icon h-4 w-4 shrink-0" strokeWidth={1.33} aria-hidden />
                  <span className="hero-btn-label">{heroCopy.primaryCta}</span>
                  <ArrowRight className="hero-btn-arrow h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                </Link>
                <Link href="/services" className="hero-btn-outline hero-btn-outline--figma cursor-pointer">
                  <span className="hero-btn-label">{heroCopy.secondaryCta}</span>
                  <ArrowRight className="hero-btn-arrow h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={reduced ? undefined : heroSpringItem}
            className="hero-metrics-card hero-metrics-card--span"
          >
            <div className="hero-metrics-strip">
              {heroMetrics.map((metric, i) => {
                const label = metricLabels[i];
                const isStatic = metric.variant === "static";

                return (
                  <div
                    key={metric.id}
                    className={`hero-metric-item hero-metric-item--${metric.variant}`}
                  >
                    <span className="hero-metric-icon" aria-hidden>
                      <HeroMetricIcon name={metric.icon} />
                    </span>
                    <div className="hero-metric-copy">
                      {isStatic ? (
                        (() => {
                          const parts = label.split(" · ");
                          if (parts.length < 2) {
                            return (
                              <p className="hero-metric-primary hero-metric-primary--static">{label}</p>
                            );
                          }
                          return (
                            <>
                              <p className="hero-metric-primary hero-metric-primary--static">
                                {parts.slice(0, -1).join(" · ")} ·
                              </p>
                              <p className="hero-metric-secondary hero-metric-secondary--static">
                                {parts[parts.length - 1]}
                              </p>
                            </>
                          );
                        })()
                      ) : (
                        <>
                          <p className="hero-metric-primary">
                            <HeroCountUp value={metric.value} suffix={metric.suffix} />
                            {"primarySuffixKey" in metric && metric.primarySuffixKey
                              ? ` ${common.heroMetricPatient}`
                              : null}
                          </p>
                          <p className="hero-metric-secondary">{label}</p>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
