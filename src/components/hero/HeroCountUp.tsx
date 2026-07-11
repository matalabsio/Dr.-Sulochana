"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type HeroCountUpProps = {
  value: number;
  suffix?: string;
  display?: string;
  duration?: number;
  className?: string;
};

function formatCount(n: number, suffix: string): string {
  if (suffix === "%") return `${Math.round(n)}%`;
  if (n >= 1000) return `${Math.round(n).toLocaleString("en-IN")}${suffix}`;
  return `${Math.round(n)}${suffix}`;
}

export default function HeroCountUp({
  value,
  suffix = "",
  display,
  duration = 1.1,
  className = "",
}: HeroCountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion() ?? false;
  const staticText = display ?? formatCount(value, suffix);
  const [text, setText] = useState(staticText);

  useEffect(() => {
    if (display || reduced || !inView) {
      setText(staticText);
      return;
    }

    let start: number | null = null;
    let frame: number;

    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setText(formatCount(value * eased, suffix));
      if (progress < 1) frame = requestAnimationFrame(step);
      else setText(formatCount(value, suffix));
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [display, duration, inView, reduced, staticText, suffix, value]);

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  );
}
