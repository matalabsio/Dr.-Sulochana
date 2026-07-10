"use client";

import Link from "next/link";
import OptimizedImage from "@/components/ui/OptimizedImage";
import HeroCountUp from "@/components/hero/HeroCountUp";
import { heroMetrics } from "@/content/landing";
import { useMessages } from "@/i18n/LanguageProvider";
import { images } from "@/content/images";
import { motion, useReducedMotion } from "framer-motion";
import { Calendar } from "lucide-react";
import { HERO_SPRING, heroFloat, heroSpringItem, heroSpringStagger } from "@/lib/motion";
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

const metricLabelKeys = [
  "yearsExperience",
  "familiesServed",
  "patientSatisfaction",
  "coreSpecialties",
] as const;

export default function Hero() {
  const { hero: heroCopy, common } = useMessages();
  const metricLabels = [
    common.yearsExperience,
    common.familiesServed,
    common.patientSatisfaction,
    common.coreSpecialties,
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
                    sizes="(max-width: 640px) 88vw, (max-width: 1024px) 42vw, 399px"
                    className="object-contain object-center"
                    wrapperClassName="absolute inset-0 bg-transparent"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={reduced ? undefined : heroSpringStagger}
            {...motionProps}
            className="hero-copy-col hero-copy-col--landing flex w-full min-w-0 flex-col"
          >
            <motion.p
              variants={reduced ? undefined : heroSpringItem}
              className="hero-trust-pill mx-auto sm:mx-0"
            >
              {heroCopy.trustBadge}
            </motion.p>

            <motion.h1
              variants={reduced ? undefined : heroSpringItem}
              className="hero-headline hero-headline--minimal mt-3 text-center sm:mt-5 sm:text-left"
            >
              {heroCopy.headline}
            </motion.h1>

            <motion.p
              variants={reduced ? undefined : heroSpringItem}
              className="hero-lead mt-3 text-center sm:mt-5 sm:text-left"
            >
              {heroCopy.subtitle}
            </motion.p>

            <motion.div
              variants={reduced ? undefined : heroSpringItem}
              className="hero-cta-wrap relative mt-5 sm:mt-7"
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
                <Link href="/contact" className="hero-btn-primary hero-btn-primary--minimal cursor-pointer">
                  <Calendar className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
                  {heroCopy.primaryCta}
                </Link>
                <Link href="/services" className="hero-btn-outline cursor-pointer">
                  {heroCopy.secondaryCta}
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={reduced ? undefined : heroSpringItem}
              className="hero-metrics-minimal hero-metrics-minimal--refined hero-metrics-row mt-5 sm:mt-8"
            >
              {heroMetrics.slice(0, 3).map((metric, i) => (
                <div key={metricLabelKeys[i]} className="hero-metric-minimal">
                  <div className="hero-metric-minimal-inner">
                    <p className="hero-metric-minimal-value">
                      <HeroCountUp value={metric.value} suffix={metric.suffix} />
                    </p>
                    <p className="hero-metric-minimal-label">{metricLabels[i]}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
