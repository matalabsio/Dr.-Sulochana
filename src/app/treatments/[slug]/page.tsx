import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TreatmentPageContent from "@/components/content/TreatmentPageContent";
import FertilityTreatmentPageContent from "@/components/content/FertilityTreatmentPageContent";
import TestimonialMarqueeBanner from "@/components/landing/TestimonialMarqueeBanner";
import JsonLd from "@/components/seo/JsonLd";
import { getAllTreatmentSlugs, getTreatmentBySlug } from "@/content/treatments";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildFaqSchema, buildMedicalWebPageSchema, compactSchema } from "@/lib/seo/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllTreatmentSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) return {};

  return buildPageMetadata({
    title: treatment.title,
    description: treatment.description,
    path: `/treatments/${treatment.slug}`,
    ogImage: treatment.heroImage,
  });
}

export default async function TreatmentPage({ params }: PageProps) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);
  if (!treatment) notFound();

  const path = `/treatments/${treatment.slug}`;
  const schema = compactSchema([
    buildMedicalWebPageSchema({
      title: treatment.title,
      description: treatment.description,
      path,
    }),
    buildFaqSchema(treatment.faqs),
  ]);

  const isFertilityTreatment = treatment.slug === "fertility-treatment";

  return (
    <>
      <JsonLd data={schema} />
      <Navbar />
      {isFertilityTreatment ? <TestimonialMarqueeBanner floating /> : null}
      <main
        className={
          isFertilityTreatment
            ? "fertility-treatment-main overflow-x-hidden pb-20"
            : "overflow-x-hidden bg-white pb-20 pt-[calc(var(--nav-height)+1.5rem)]"
        }
      >
        {isFertilityTreatment ? (
          <FertilityTreatmentPageContent treatment={treatment} />
        ) : (
          <TreatmentPageContent treatment={treatment} />
        )}
      </main>
      <Footer />
    </>
  );
}
