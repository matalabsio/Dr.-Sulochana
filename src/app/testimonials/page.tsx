import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialMarqueeBanner from "@/components/landing/TestimonialMarqueeBanner";
import TestimonialsFull from "@/components/testimonials/TestimonialsFull";

export const metadata = {
  title: "Patient Success Stories | Dr. Sulochana's Hospital",
  description:
    "Real stories from families who found hope through expert fertility care, advanced treatments, and compassionate support in Hyderabad.",
};

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
