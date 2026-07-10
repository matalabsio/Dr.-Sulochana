import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MeetSpecialists from "@/components/landing/MeetSpecialists";
import PreFooterCTA from "@/components/landing/PreFooterCTA";

export const metadata: Metadata = {
  title: "Meet Our Fertility Specialists | Dr. Sulochana's Hospital — Hyderabad",
  description:
    "Meet Dr. M. Sulochana and our fertility team — experienced OBGYN, IVF, and reproductive medicine specialists at Madinaguda, Hyderabad.",
};

export default function SpecialistsPage() {
  return (
    <>
      <Navbar />
      <main className="site-main relative z-[1] overflow-x-hidden bg-ivory">
        <MeetSpecialists variant="page" />
        <PreFooterCTA />
      </main>
      <Footer />
    </>
  );
}
