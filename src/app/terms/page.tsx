import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalPageBody from "@/components/legal/LegalPageBody";
import { termsContent } from "@/content/legal";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: termsContent.title,
  description: termsContent.description,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden pt-[var(--nav-height)]">
        <LegalPageBody content={termsContent} />
      </main>
      <Footer />
    </>
  );
}
