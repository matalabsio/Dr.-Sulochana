import Link from "next/link";
import { ArrowRight } from "lucide-react";

type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  align?: "center" | "left";
  tone?: "default" | "on-dark";
  className?: string;
};

export default function SectionHeading({
  title,
  eyebrow,
  viewAllHref,
  viewAllLabel = "View All",
  align = "center",
  tone = "default",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";
  const isOnDark = tone === "on-dark";
  const eyebrowClass = isOnDark
    ? "mb-2 font-ui text-xs font-semibold uppercase tracking-[0.14em] text-on-primary/75"
    : "mb-2 font-ui text-xs font-semibold uppercase tracking-[0.14em] text-primary";
  const titleClass = isOnDark
    ? "section-heading-title font-heading text-on-primary"
    : "section-heading-title font-heading text-ink";

  return (
    <div
      className={`mb-10 flex flex-col gap-4 sm:mb-12 md:flex-row md:items-end md:justify-between ${
        viewAllHref ? "" : alignClass
      } ${className}`}
    >
      <div className={viewAllHref ? "" : alignClass}>
        {eyebrow ? <p className={eyebrowClass}>{eyebrow}</p> : null}
        <h2 className={titleClass}>{title}</h2>
      </div>
      {viewAllHref ? (
        <Link
          href={viewAllHref}
          className="inline-flex shrink-0 cursor-pointer items-center gap-1.5 self-start font-ui text-sm font-semibold text-primary transition-colors duration-200 hover:text-secondary md:self-auto"
        >
          {viewAllLabel}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      ) : null}
    </div>
  );
}
