export type FaqItem = {
  q: string;
  a: string;
};

export type ArticleContent = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: string;
  image: string;
  body: string[];
  faqs: FaqItem[];
  relatedArticles: string[];
  relatedTreatments: string[];
  relatedVideos: string[];
};

export type VideoContent = {
  slug: string;
  title: string;
  description: string;
  category: string;
  youtubeId: string;
  publishedAt: string;
  author: string;
  image: string;
  summary: string[];
  faqs: FaqItem[];
  relatedArticles: string[];
  relatedTreatments: string[];
  relatedVideos: string[];
};

export type TreatmentSection = {
  title: string;
  body: string;
};

export type TreatmentContent = {
  slug: string;
  title: string;
  description: string;
  category: string;
  heroImage: string;
  sections: TreatmentSection[];
  faqs: FaqItem[];
  relatedArticles: string[];
  relatedTreatments: string[];
  relatedVideos: string[];
};
