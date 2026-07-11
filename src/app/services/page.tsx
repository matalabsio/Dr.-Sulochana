import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreFooterCTA from "@/components/landing/PreFooterCTA";
import ConceptionServicesContent from "@/components/services/ConceptionServicesContent";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { pageSeo } from "@/lib/seo/keywords";

export const metadata: Metadata = buildPageMetadata({
  title: pageSeo.services.title,
  description: pageSeo.services.description,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-ivory">
        <ConceptionServicesContent />
      </main>
      <PreFooterCTA />
      <Footer />
    </>
  );
}
