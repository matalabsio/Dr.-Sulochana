import ContentCTA from "@/components/content/ContentCTA";
import ContentFaq from "@/components/content/ContentFaq";
import RelatedContent from "@/components/content/RelatedContent";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import OptimizedImage from "@/components/ui/OptimizedImage";
import type { TreatmentContent } from "@/content/types";

type TreatmentPageContentProps = {
  treatment: TreatmentContent;
};

export default function TreatmentPageContent({ treatment }: TreatmentPageContentProps) {
  const sourcePage = `/treatments/${treatment.slug}`;

  return (
    <article className="content-page content-page--treatment">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-12">
        <Breadcrumbs
          className="mb-4"
          items={[
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: treatment.title, path: sourcePage },
          ]}
        />

        <header className="content-hero">
          <div className="content-hero-copy">
            <span className="content-eyebrow">{treatment.category}</span>
            <h1 className="content-title">{treatment.title}</h1>
            <p className="content-description">{treatment.description}</p>
          </div>
          <div className="content-hero-media">
            <OptimizedImage
              src={treatment.heroImage}
              alt={treatment.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 640px"
              className="object-contain"
            />
          </div>
        </header>

        <div className="content-sections">
          {treatment.sections.map((section) => (
            <section key={section.title} className="content-section-block">
              <h2 className="content-section-title">{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>

        <ContentFaq faqs={treatment.faqs} />
        <RelatedContent
          relatedArticles={treatment.relatedArticles}
          relatedTreatments={treatment.relatedTreatments}
          relatedVideos={treatment.relatedVideos}
        />
        <ContentCTA
          sourcePage={sourcePage}
          title="Book Your Consultation Today"
          subtitle="Schedule an appointment for expert care at Dr. Sulochana's Hospital, Madinaguda."
        />
      </div>
    </article>
  );
}
