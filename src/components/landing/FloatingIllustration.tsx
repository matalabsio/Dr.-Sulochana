"use client";

import { motion, useReducedMotion } from "framer-motion";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { heroFloat } from "@/lib/motion";

type FloatingIllustrationProps = {
  src: string;
  width: number;
  height: number;
  alt?: string;
  className?: string;
  sizes?: string;
  delay?: number;
  interactive?: boolean;
  /** Play entrance on mount (hero) vs when scrolled into view */
  immediate?: boolean;
  /** Circular frame with soft shadow — hero accent orbs */
  orb?: boolean;
};

export default function FloatingIllustration({
  src,
  width,
  height,
  alt = "",
  className = "",
  sizes = "180px",
  delay = 0,
  interactive = true,
  immediate = false,
  orb = false,
}: FloatingIllustrationProps) {
  const reduced = useReducedMotion() ?? false;

  return (
    <motion.div
      className={`landing-float-art${orb ? " hero-float-orb" : ""} ${className}`.trim()}
      initial={reduced ? false : { opacity: 0, y: 14, scale: 0.94 }}
      animate={immediate && !reduced ? { opacity: 1, y: 0, scale: 1 } : undefined}
      whileInView={!immediate && !reduced ? { opacity: 1, y: 0, scale: 1 } : undefined}
      viewport={{ once: true, amount: 0.15 }}
      transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 120, damping: 20, delay }}
      whileHover={
        interactive && !reduced ? { scale: 1.06, rotate: -2, transition: { duration: 0.25 } } : undefined
      }
      aria-hidden={!alt}
    >
      <motion.div
        className={orb ? "hero-float-orb-inner" : undefined}
        {...(orb || reduced ? {} : heroFloat(reduced))}
      >
        <OptimizedImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          transparent
          sizes={sizes}
          className={orb ? "hero-float-orb-img" : "h-auto w-full"}
          wrapperClassName={
            orb ? "hero-float-orb-img-wrap relative h-full w-full bg-transparent" : "relative w-full bg-transparent"
          }
        />
      </motion.div>
    </motion.div>
  );
}
