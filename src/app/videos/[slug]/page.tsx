import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoPageContent from "@/components/content/VideoPageContent";
import JsonLd from "@/components/seo/JsonLd";
import { getAllVideoSlugs, getVideoBySlug } from "@/content/videos";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildFaqSchema, buildVideoSchema, compactSchema } from "@/lib/seo/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllVideoSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const video = getVideoBySlug(slug);
  if (!video) return {};

  return buildPageMetadata({
    title: video.title,
    description: video.description,
    path: `/videos/${video.slug}`,
    ogImage: video.image,
  });
}

export default async function VideoPage({ params }: PageProps) {
  const { slug } = await params;
  const video = getVideoBySlug(slug);
  if (!video) notFound();

  const path = `/videos/${video.slug}`;
  const schema = compactSchema([
    buildVideoSchema({
      title: video.title,
      description: video.description,
      path,
      youtubeId: video.youtubeId,
      publishedAt: video.publishedAt,
    }),
    buildFaqSchema(video.faqs),
  ]);

  return (
    <>
      <JsonLd data={schema} />
      <Navbar />
      <main className="overflow-x-hidden bg-white pb-20 pt-[calc(var(--nav-height)+1.5rem)]">
        <VideoPageContent video={video} />
      </main>
      <Footer />
    </>
  );
}
