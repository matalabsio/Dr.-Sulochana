import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import AboutPageContent from "@/components/about/AboutPageContent";
import JsonLd from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { pageSeo } from "@/lib/seo/keywords";
import { buildMedicalClinicSchema, buildPhysicianSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildPageMetadata({
  title: pageSeo.about.title,
  description: pageSeo.about.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[buildPhysicianSchema(), buildMedicalClinicSchema()]} />
      <Navbar />
      <main className="about-page-main overflow-x-hidden pt-[var(--nav-height)]">
        <AboutPageContent />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
