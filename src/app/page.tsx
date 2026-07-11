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
import { en } from "@/i18n/messages/en";
import {
  buildFaqSchema,
  buildMedicalClinicSchema,
  buildWebSiteSchema,
  compactSchema,
} from "@/lib/seo/schema";

/** Homepage layout aligned to Figma frame 42:11 (vamshi-MATA) */
export default function Page() {
  const schema = compactSchema([
    buildMedicalClinicSchema(),
    buildWebSiteSchema(),
    buildFaqSchema(en.faq.items),
  ]);

  return (
    <>
      <JsonLd data={schema} />
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
