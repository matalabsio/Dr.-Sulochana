import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocationPageContent from "@/components/location/LocationPageContent";
import JsonLd from "@/components/seo/JsonLd";
import { locationPage } from "@/content/locationPage";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { pageSeo } from "@/lib/seo/keywords";
import { buildFaqSchema, buildMedicalClinicSchema, compactSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildPageMetadata({
  title: pageSeo.location.title,
  description: pageSeo.location.description,
  path: "/madinaguda-hyderabad",
});

export default function MadinagudaLocationPage() {
  const schema = compactSchema([
    buildMedicalClinicSchema({ pagePath: "/madinaguda-hyderabad" }),
    buildFaqSchema(locationPage.faq.items),
  ]);

  return (
    <>
      <JsonLd data={schema} />
      <Navbar />
      <main className="contact-page-main overflow-x-hidden pt-[var(--nav-height)]">
        <div className="contact-page-content">
          <div className="contact-page-inner">
            <LocationPageContent />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
