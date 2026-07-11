import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalPageBody from "@/components/legal/LegalPageBody";
import { privacyPolicyContent } from "@/content/legal";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildPageMetadata({
  title: privacyPolicyContent.title,
  description: privacyPolicyContent.description,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden pt-[var(--nav-height)]">
        <LegalPageBody content={privacyPolicyContent} />
      </main>
      <Footer />
    </>
  );
}
