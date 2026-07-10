import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PreFooterCTA from "@/components/landing/PreFooterCTA";
import ConceptionServicesContent from "@/components/services/ConceptionServicesContent";

export const metadata: Metadata = {
  title: "Fertility & Conception Services | Dr. Sulochana's Hospital — Hyderabad",
  description:
    "IVF, IUI, fertility evaluations, preservation, and preconception counselling at Dr. Sulochana's Hospital, Madinaguda, Hyderabad.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-ivory">
        <ConceptionServicesContent />
        <PreFooterCTA />
      </main>
      <Footer />
    </>
  );
}
