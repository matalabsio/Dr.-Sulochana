"use client";

import { useMessages } from "@/i18n/LanguageProvider";

type TestimonialMarqueeBannerProps = {
  /** Staged below the fixed navbar and sticks on scroll. */
  floating?: boolean;
};

export default function TestimonialMarqueeBanner({
  floating = false,
}: TestimonialMarqueeBannerProps) {
  const { testimonialMarquee } = useMessages();
  const loopItems = [...testimonialMarquee.items, ...testimonialMarquee.items];

  return (
    <section
      className={`testimonial-marquee${floating ? " testimonial-marquee--floating" : ""}`}
      aria-label={testimonialMarquee.ariaLabel}
    >
      <p className="sr-only">{testimonialMarquee.ariaLabel}</p>

      <div className="testimonial-marquee-viewport">
        <ul className="testimonial-marquee-track" aria-hidden>
          {loopItems.map((text, index) => (
            <li key={`${text}-${index}`} className="testimonial-marquee-item">
              <span className="testimonial-marquee-star" aria-hidden>
                ★
              </span>
              <span className="testimonial-marquee-text">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
