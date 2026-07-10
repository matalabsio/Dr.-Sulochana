import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TestimonialMarqueeBanner from "@/components/landing/TestimonialMarqueeBanner";
import TrustStorySection from "@/components/landing/TrustStorySection";
import WhyChooseUs from "@/components/WhyChooseUs";
import SpecializedSolutions from "@/components/landing/SpecializedSolutions";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Knowledge from "@/components/Knowledge";
import HomeFaq from "@/components/landing/HomeFaq";
import PreFooterCTA from "@/components/landing/PreFooterCTA";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { buildMedicalClinicSchema } from "@/lib/seo/schema";

/** Homepage layout aligned to Figma frame 42:11 (vamshi-MATA) */
export default function Page() {
  return (
    <>
      <JsonLd data={buildMedicalClinicSchema()} />
      <Navbar />
      <TestimonialMarqueeBanner floating />
      <main className="site-main relative z-[1]">
        <Hero />
        <TrustStorySection />
        <WhyChooseUs />
        <SpecializedSolutions />
        <HowItWorks />
        <Testimonials />
        <div className="hidden md:block">
          <Knowledge />
        </div>
        <HomeFaq />
        <PreFooterCTA />
      </main>
      <Footer />
    </>
  );
}
