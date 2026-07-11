import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialMarqueeBanner from "@/components/landing/TestimonialMarqueeBanner";
import TestimonialsFull from "@/components/testimonials/TestimonialsFull";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { pageSeo } from "@/lib/seo/keywords";

export const metadata: Metadata = buildPageMetadata({
  title: pageSeo.testimonials.title,
  description: pageSeo.testimonials.description,
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main className="testimonials-page-main overflow-x-hidden pt-[var(--nav-height)]">
        <TestimonialMarqueeBanner floating />
        <div className="testimonials-page-content">
          <div className="testimonials-page-inner">
            <TestimonialsFull />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
