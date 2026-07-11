import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MeetSpecialists from "@/components/landing/MeetSpecialists";
import PreFooterCTA from "@/components/landing/PreFooterCTA";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { pageSeo } from "@/lib/seo/keywords";

export const metadata: Metadata = buildPageMetadata({
  title: pageSeo.specialists.title,
  description: pageSeo.specialists.description,
  path: "/specialists",
});

export default function SpecialistsPage() {
  return (
    <>
      <Navbar />
      <main className="site-main relative z-[1] overflow-x-hidden bg-ivory">
        <MeetSpecialists variant="page" />
      </main>
      <PreFooterCTA />
      <Footer />
    </>
  );
}
