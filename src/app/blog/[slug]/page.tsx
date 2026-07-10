import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticlePageContent from "@/components/content/ArticlePageContent";
import JsonLd from "@/components/seo/JsonLd";
import { getAllArticleSlugs, getArticleBySlug } from "@/content/articles";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { buildArticleSchema, buildFaqSchema, compactSchema } from "@/lib/seo/schema";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return buildPageMetadata({
    title: article.title,
    description: article.description,
    path: `/blog/${article.slug}`,
    ogImage: article.image,
    type: "article",
  });
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const path = `/blog/${article.slug}`;
  const schema = compactSchema([
    buildArticleSchema({
      title: article.title,
      description: article.description,
      path,
      image: article.image,
      publishedAt: article.publishedAt,
      author: article.author,
    }),
    buildFaqSchema(article.faqs),
  ]);

  return (
    <>
      <JsonLd data={schema} />
      <Navbar />
      <main className="article-page-root overflow-x-hidden pb-20 pt-[calc(var(--nav-height)+1rem)]">
        <ArticlePageContent article={article} />
      </main>
      <Footer />
    </>
  );
}
