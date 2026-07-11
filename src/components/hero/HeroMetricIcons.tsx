import { Award, Baby, Heart, Microscope } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const METRIC_ICON_CONFIG = {
  achievement: {
    Icon: Award,
    frameClass: "hero-metric-icon-frame hero-metric-icon-frame--achievement",
    iconClass: "hero-metric-icon-svg hero-metric-icon-svg--achievement",
  },
  born: {
    Icon: Baby,
    frameClass: "hero-metric-icon-frame hero-metric-icon-frame--born",
    iconClass: "hero-metric-icon-svg hero-metric-icon-svg--born",
  },
  satisfaction: {
    Icon: Heart,
    frameClass: "hero-metric-icon-frame hero-metric-icon-frame--satisfaction",
    iconClass: "hero-metric-icon-svg hero-metric-icon-svg--satisfaction",
    filled: true,
  },
  ivf: {
    Icon: Microscope,
    frameClass: "hero-metric-icon-frame hero-metric-icon-frame--ivf",
    iconClass: "hero-metric-icon-svg hero-metric-icon-svg--ivf",
  },
} as const satisfies Record<
  string,
  {
    Icon: LucideIcon;
    frameClass: string;
    iconClass: string;
    filled?: boolean;
  }
>;

type MetricIconName = keyof typeof METRIC_ICON_CONFIG;

export function HeroMetricIcon({ name }: { name: string }) {
  const config = METRIC_ICON_CONFIG[name as MetricIconName];
  if (!config) return null;

  const { Icon, frameClass, iconClass } = config;
  const filled = "filled" in config && config.filled;

  return (
    <span className={frameClass}>
      <Icon
        className={iconClass}
        strokeWidth={filled ? 0 : 1.75}
        fill={filled ? "currentColor" : "none"}
        aria-hidden
      />
    </span>
  );
}
