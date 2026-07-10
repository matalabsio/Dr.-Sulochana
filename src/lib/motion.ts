/** Shared easing — smooth, minimal ease-out */
export const EASE_SMOOTH = [0.22, 1, 0.36, 1] as const;

export const FRAMER_EASE = {
  smooth: EASE_SMOOTH,
};

/** Scroll / section reveal defaults — subtle lift */
export const REVEAL_DEFAULTS = {
  y: 24,
  duration: 0.65,
  stagger: 0.08,
} as const;

export function revealTransition(duration: number = REVEAL_DEFAULTS.duration) {
  return {
    duration,
    ease: EASE_SMOOTH,
  };
}

/** Premium hero entrance */
export const HERO_EASE = EASE_SMOOTH;

export const heroStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const heroItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: HERO_EASE },
  },
};

export const heroFloat = (reduced: boolean) =>
  reduced
    ? {}
    : {
        animate: { y: [0, -8, 0] },
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
      };

export const HERO_SPRING = { type: "spring" as const, stiffness: 110, damping: 24 };

export const heroSpringItem = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: HERO_SPRING,
  },
};

export const heroSpringStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
};

/** In-view viewport — consistent across scroll reveals */
export const REVEAL_VIEWPORT = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -8% 0px" as const,
};
