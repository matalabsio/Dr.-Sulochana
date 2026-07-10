"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

export type AnimatedTestimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

type AnimatedTestimonialsProps = {
  testimonials: AnimatedTestimonial[];
  autoplay?: boolean;
  className?: string;
};

export function AnimatedTestimonials({
  testimonials,
  autoplay = false,
  className = "",
}: AnimatedTestimonialsProps) {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!autoplay || testimonials.length < 2) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, handleNext, testimonials.length]);

  if (!testimonials.length) return null;

  const current = testimonials[active];

  return (
    <div className={`success-stories-slider ${className}`.trim()}>
      <div className="success-stories-grid">
        <div className="success-stories-media">
          <div className="success-stories-media-frame" aria-hidden={false}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${current.src}-${active}`}
                className="success-stories-media-card"
                initial={mounted ? { opacity: 0, scale: 0.96 } : false}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={current.src}
                  alt=""
                  width={640}
                  height={640}
                  draggable={false}
                  className="success-stories-media-img"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="success-stories-copy">
          <motion.div
            key={active}
            initial={mounted ? { y: 12, opacity: 0 } : false}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="success-stories-quote-block"
          >
            <h3 className="success-stories-name">{current.name}</h3>
            <p className="success-stories-meta">{current.designation}</p>
            <p className="success-stories-quote">&ldquo;{current.quote}&rdquo;</p>
          </motion.div>

          <div className="success-stories-nav">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="success-stories-nav-btn group/button"
            >
              <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover/button:-rotate-12" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="success-stories-nav-btn group/button"
            >
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/button:rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
