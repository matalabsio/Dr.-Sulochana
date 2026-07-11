import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPageContent from "@/components/contact/ContactPageContent";
import JsonLd from "@/components/seo/JsonLd";
import { contactPage } from "@/content/contact";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { pageSeo } from "@/lib/seo/keywords";
import { buildFaqSchema, buildMedicalClinicSchema, compactSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildPageMetadata({
  title: pageSeo.contact.title,
  description: pageSeo.contact.description,
  path: "/contact",
});

export default function ContactPage() {
  const schema = compactSchema([
    buildMedicalClinicSchema(),
    buildFaqSchema(contactPage.faq.items),
  ]);

  return (
    <>
      <JsonLd data={schema} />
      <Navbar />
      <main className="contact-page-main overflow-x-hidden pt-[var(--nav-height)]">
        <div className="contact-page-content">
          <div className="contact-page-inner">
            <Suspense fallback={null}>
              <ContactPageContent />
            </Suspense>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
