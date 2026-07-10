"use client";

import Link from "next/link";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { images } from "@/content/images";
import { Phone } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { doctor } from "@/content/doctor";

export default function CTABanner() {
  return (
    <section id="cta" className="about-cta-banner">
      <div className="about-cta-banner-inner">
        <ScrollReveal y={32} duration={0.8}>
          <div className="about-cta-banner-copy">
            <h2 className="about-cta-banner-title">Schedule Your Appointment Online</h2>
            <p className="about-cta-banner-lead">
              Book your visit in minutes. Our team will confirm your appointment and prepare for your
              consultation with {doctor.name} and our specialist team.
            </p>
            <p className="about-cta-banner-body">
              Whether you are planning a family, managing pregnancy, or seeking paediatric care, we are
              here to support you with compassionate, expert care at every step.
            </p>
            <div className="about-cta-banner-actions">
              <Link href="/contact" className="about-cta-banner-btn-primary">
                Book An Appointment
              </Link>
              <a
                href="tel:+919849861089"
                aria-label="Call the clinic at 098498 61089"
                className="about-cta-banner-btn-phone"
              >
                <Phone className="h-5 w-5" strokeWidth={1.458} aria-hidden />
              </a>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal y={40} duration={0.85} delay={0.08}>
          <div className="about-cta-banner-visual">
            <OptimizedImage
              src={images.cta}
              alt="Mother and child smiling together"
              fill
              sizes="(max-width: 1024px) 90vw, 588px"
              className="object-cover object-center"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
