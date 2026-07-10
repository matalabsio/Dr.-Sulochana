"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type LoveFlowDividerProps = {
  /** Mirror zigzag direction for alternating sections */
  flip?: boolean;
  tone?: "primary" | "blush" | "ivory";
};

const ZIGZAG_LTR =
  "M 40 36 L 160 18 L 280 36 L 400 18 L 520 36 L 640 18 L 760 36 L 880 18 L 1000 36 L 1120 18 L 1240 36 L 1360 18";

const ZIGZAG_RTL =
  "M 40 18 L 160 36 L 280 18 L 400 36 L 520 18 L 640 36 L 760 18 L 880 36 L 1000 18 L 1120 36 L 1240 18 L 1360 36";

const HEART_POINTS = [
  { cx: 160, cy: 18 },
  { cx: 400, cy: 18 },
  { cx: 640, cy: 18 },
  { cx: 880, cy: 18 },
  { cx: 1120, cy: 18 },
] as const;

const HEART_POINTS_FLIP = [
  { cx: 160, cy: 36 },
  { cx: 400, cy: 36 },
  { cx: 640, cy: 36 },
  { cx: 880, cy: 36 },
  { cx: 1120, cy: 36 },
] as const;

function HeartIcon({
  cx,
  cy,
  className,
  scale = 1,
}: {
  cx: number;
  cy: number;
  className?: string;
  scale?: number;
}) {
  return (
    <g transform={`translate(${cx}, ${cy})`}>
      <g className={className} transform={`scale(${scale}) translate(-8, -8)`}>
        <path
          d="M8 14.5 6.9 13.5C3.2 10.2 1 8.3 1 5.8 1 3.7 2.7 2 4.8 2c1.2 0 2.3.5 3.2 1.4.9-.9 2-1.4 3.2-1.4 2.1 0 3.8 1.7 3.8 3.8 0 2.5-2.2 4.4-5.9 7.7L8 14.5z"
          fill="currentColor"
        />
      </g>
    </g>
  );
}

export function LoveFlowDivider({ flip = false, tone = "primary" }: LoveFlowDividerProps) {
  const reduced = usePrefersReducedMotion();
  const path = flip ? ZIGZAG_RTL : ZIGZAG_LTR;
  const hearts = flip ? HEART_POINTS_FLIP : HEART_POINTS;

  return (
    <div
      className={`love-flow-divider love-flow-divider--${tone}${flip ? " love-flow-divider--flip" : ""}`}
      aria-hidden
    >
      <svg className="love-flow-divider-svg" viewBox="0 0 1400 64" preserveAspectRatio="xMidYMid meet">
        <defs>
          <marker
            id={`love-flow-arrow-${flip ? "rtl" : "ltr"}-${tone}`}
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto"
          >
            <path d="M0 1 L8 5 L0 9 Z" fill="currentColor" />
          </marker>
          <linearGradient id={`love-flow-grad-${tone}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
            <stop offset="35%" stopColor="currentColor" stopOpacity="0.55" />
            <stop offset="65%" stopColor="currentColor" stopOpacity="0.55" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.15" />
          </linearGradient>
        </defs>

        <path
          className={`love-flow-path${reduced ? " love-flow-path--static" : ""}`}
          d={path}
          fill="none"
          stroke={`url(#love-flow-grad-${tone})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          markerEnd={`url(#love-flow-arrow-${flip ? "rtl" : "ltr"}-${tone})`}
        />

        {hearts.map((point, i) => (
          <HeartIcon
            key={`${point.cx}-${point.cy}`}
            cx={point.cx}
            cy={point.cy}
            scale={2.25}
            className={`love-flow-heart love-flow-heart--${i + 1}${reduced ? " love-flow-heart--static" : ""}`}
          />
        ))}
      </svg>
    </div>
  );
}

/** Corner / inline zigzag accent with hearts */
export function LoveFlowAccent({
  className = "",
  orientation = "horizontal",
}: {
  className?: string;
  orientation?: "horizontal" | "vertical";
}) {
  const reduced = usePrefersReducedMotion();

  if (orientation === "vertical") {
    return (
      <svg
        className={`love-flow-accent love-flow-accent--vertical ${className}`.trim()}
        viewBox="0 0 48 320"
        aria-hidden
      >
        <path
          className={`love-flow-path${reduced ? " love-flow-path--static" : ""}`}
          d="M 24 8 L 8 64 L 24 120 L 8 176 L 24 232 L 8 288 L 24 312"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          markerEnd="url(#love-flow-accent-arrow-v)"
        />
        <defs>
          <marker id="love-flow-accent-arrow-v" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto">
            <path d="M0 1 L8 5 L0 9 Z" fill="currentColor" />
          </marker>
        </defs>
        <HeartIcon cx={24} cy={120} scale={1.75} className={`love-flow-heart${reduced ? " love-flow-heart--static" : ""}`} />
        <HeartIcon cx={24} cy={232} scale={1.75} className={`love-flow-heart love-flow-heart--2${reduced ? " love-flow-heart--static" : ""}`} />
      </svg>
    );
  }

  return (
    <svg
      className={`love-flow-accent ${className}`.trim()}
      viewBox="0 0 320 48"
      aria-hidden
    >
      <defs>
        <marker id="love-flow-accent-arrow-h" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto">
          <path d="M0 1 L8 5 L0 9 Z" fill="currentColor" />
        </marker>
      </defs>
      <path
        className={`love-flow-path${reduced ? " love-flow-path--static" : ""}`}
        d="M 8 24 L 64 8 L 120 24 L 176 8 L 232 24 L 288 8 L 312 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        markerEnd="url(#love-flow-accent-arrow-h)"
      />
      <HeartIcon cx={120} cy={24} scale={1.75} className={`love-flow-heart${reduced ? " love-flow-heart--static" : ""}`} />
      <HeartIcon cx={232} cy={24} scale={1.75} className={`love-flow-heart love-flow-heart--2${reduced ? " love-flow-heart--static" : ""}`} />
    </svg>
  );
}

/** Soft floating hearts for hero / section backgrounds */
export function LoveFlowBackdrop({ className = "" }: { className?: string }) {
  const reduced = usePrefersReducedMotion();

  return (
    <div className={`love-flow-backdrop ${className}`.trim()} aria-hidden>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className={`love-flow-backdrop-heart love-flow-backdrop-heart--${n}${reduced ? " love-flow-backdrop-heart--static" : ""}`}
        >
          <svg viewBox="0 0 16 16" className="h-full w-full">
            <path
              d="M8 14.5 6.9 13.5C3.2 10.2 1 8.3 1 5.8 1 3.7 2.7 2 4.8 2c1.2 0 2.3.5 3.2 1.4.9-.9 2-1.4 3.2-1.4 2.1 0 3.8 1.7 3.8 3.8 0 2.5-2.2 4.4-5.9 7.7L8 14.5z"
              fill="currentColor"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}

const PAGE_HEART_COUNT = { default: 5, dense: 9 } as const;

/** Extra floating hearts for full-width treatment / landing sections */
export function LoveFlowFloatingHearts({
  className = "",
  density = "default",
}: {
  className?: string;
  density?: keyof typeof PAGE_HEART_COUNT;
}) {
  const reduced = usePrefersReducedMotion();
  const count = PAGE_HEART_COUNT[density];

  return (
    <div
      className={`love-flow-page-hearts love-flow-page-hearts--${density} ${className}`.trim()}
      aria-hidden
    >
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className={`love-flow-page-heart love-flow-page-heart--${i + 1}${reduced ? " love-flow-page-heart--static" : ""}`}
        >
          <svg viewBox="0 0 16 16" className="h-full w-full">
            <path
              d="M8 14.5 6.9 13.5C3.2 10.2 1 8.3 1 5.8 1 3.7 2.7 2 4.8 2c1.2 0 2.3.5 3.2 1.4.9-.9 2-1.4 3.2-1.4 2.1 0 3.8 1.7 3.8 3.8 0 2.5-2.2 4.4-5.9 7.7L8 14.5z"
              fill="currentColor"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}
