import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KnowledgePageContent from "@/components/knowledge/KnowledgePageContent";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Knowledge Centre | Dr. Sulochana's Hospital",
  description:
    "Expert health articles on fertility, pregnancy, women's health, and wellness from Dr. Sulochana Mortha, Hyderabad.",
  path: "/knowledge",
});

export default function KnowledgePage() {
  return (
    <>
      <Navbar />
      <main className="knowledge-page-main overflow-x-hidden pt-[var(--nav-height)]">
        <div className="knowledge-page-content">
          <div className="knowledge-page-inner">
            <KnowledgePageContent />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
