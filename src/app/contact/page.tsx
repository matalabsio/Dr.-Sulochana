import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactPageContent from "@/components/contact/ContactPageContent";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Us | Dr. Sulochana's Hospital — Hyderabad",
  description:
    "Book an IVF, fertility, pregnancy, or gynecology consultation at Dr. Sulochana's Hospital, Madinaguda, Hyderabad. Call, email, or schedule online.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
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
