"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** CSS selector for staggered children; omit to animate the root */
  staggerSelector?: string;
  y?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  as?: "div" | "section";
};

/**
 * CSS-only scroll reveal (translate only, opacity always 1).
 * Avoids Framer useAnimate setting inline opacity that dims text after load.
 */
export default function ScrollReveal({
  children,
  className = "",
  staggerSelector,
  y = 24,
  duration = 0.65,
  stagger = 0.08,
  delay = 0,
  as: Tag = "div",
}: ScrollRevealProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = staggerSelector
      ? Array.from(root.querySelectorAll<HTMLElement>(staggerSelector))
      : [root];

    if (!targets.length) return;

    const offsetPx = `${y}px`;
    const durationMs = `${duration * 1000}ms`;
    const delayBaseMs = delay * 1000;
    const staggerMs = stagger * 1000;

    targets.forEach((el, index) => {
      el.classList.add("scroll-reveal");
      el.style.setProperty("--scroll-reveal-y", offsetPx);
      el.style.setProperty("--scroll-reveal-duration", durationMs);
      el.style.setProperty(
        "--scroll-reveal-delay",
        `${delayBaseMs + index * staggerMs}ms`,
      );

      if (prefersReduced) {
        el.classList.add("scroll-reveal-visible");
      }
    });

    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add("scroll-reveal-visible");
          observer.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [staggerSelector, y, duration, stagger, delay]);

  if (Tag === "section") {
    return (
      <section ref={rootRef as React.RefObject<HTMLElement>} className={className}>
        {children}
      </section>
    );
  }

  return (
    <div ref={rootRef} className={className}>
      {children}
    </div>
  );
}
