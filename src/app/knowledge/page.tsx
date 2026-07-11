import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KnowledgePageContent from "@/components/knowledge/KnowledgePageContent";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { pageSeo } from "@/lib/seo/keywords";

export const metadata = buildPageMetadata({
  title: pageSeo.knowledge.title,
  description: pageSeo.knowledge.description,
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
