"use client";

import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";
import OptimizedImage from "@/components/ui/OptimizedImage";
import SectionHeading from "@/components/ui/SectionHeading";
import { getSpecialistImage, landingSpecialists, specialistsPage } from "@/content/landing";

type MeetSpecialistsProps = {
  variant?: "section" | "page";
};

export default function MeetSpecialists({ variant = "section" }: MeetSpecialistsProps) {
  const isPage = variant === "page";
  const { title, subtitle } = specialistsPage;

  return (
    <section
      id={isPage ? undefined : "meet-specialists"}
      className={`bg-ivory px-4 sm:px-6 md:px-10 lg:px-12 ${
        isPage
          ? "scroll-mt-[var(--nav-height)] pb-16 pt-[calc(var(--nav-height)+2rem)] md:pb-24 md:pt-[calc(var(--nav-height)+3rem)]"
          : "py-16 md:py-24"
      }`}
      aria-labelledby={isPage ? "specialists-heading" : undefined}
    >
      <div className="mx-auto max-w-container">
        <ScrollReveal y={28}>
          <header className={isPage ? "mb-10 text-center sm:mb-12" : "mb-0"}>
            {isPage ? (
              <>
                <p className="conversion-eyebrow mx-auto">{specialistsPage.eyebrow}</p>
                <h1 id="specialists-heading" className="conversion-title">
                  {title}
                </h1>
                <p className="conversion-lead mx-auto max-w-2xl">{subtitle}</p>
              </>
            ) : (
              <SectionHeading title={title} align="center" />
            )}
          </header>
        </ScrollReveal>

        <ScrollReveal staggerSelector="[data-specialist]" stagger={0.1} y={36}>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            {landingSpecialists.map(({ name, specialty, imageKey, isPlaceholder }) => (
              <Link
                key={imageKey}
                href="/about"
                data-specialist
                className="landing-card group flex cursor-pointer flex-col overflow-hidden bg-white"
              >
                <div className="arch-photo-bg relative aspect-[3/4] w-full">
                  <div className="arch-image-frame relative mx-auto mt-4 aspect-[3/4] w-[88%]">
                    <OptimizedImage
                      src={getSpecialistImage(imageKey)}
                      alt={isPlaceholder ? `Placeholder — ${specialty}` : name}
                      fill
                      sizes="(max-width: 768px) 45vw, 220px"
                      className="object-contain object-center"
                    />
                  </div>
                </div>
                <div className="px-4 pb-5 pt-3 text-center">
                  <h2 className="font-heading text-base font-semibold text-ink group-hover:text-primary sm:text-lg">
                    {name}
                  </h2>
                  <p className="mt-1 font-sans text-xs text-body sm:text-sm">{specialty}</p>
                  {isPlaceholder ? (
                    <span className="mt-2 block font-sans text-[10px] uppercase tracking-wide text-body/50">
                      Photo coming soon
                    </span>
                  ) : null}
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
