import { images } from "@/content/images";

export const testimonialMetricsData = [
  { value: 10000, suffix: "+", display: "10,000+" },
  { value: 4.9, suffix: "", display: "4.9/5" },
  { value: 98, suffix: "%", display: "98%" },
  { value: 20000, suffix: "+", display: "20,000+" },
] as const;

export const featuredStoriesData = [
  {
    image: images.pregnantWomanOrange,
    href: "/testimonials",
  },
  {
    image: images.coupleFloor,
    href: "/testimonials",
  },
  {
    image: images.coupleNewborn,
    href: "/testimonials",
  },
] as const;

export const videoTestimonialsData = [
  { thumbnail: images.pregnantWomanOrange, href: "/testimonials" },
  { thumbnail: images.coupleFloor, href: "/testimonials" },
  { thumbnail: images.coupleNewborn, href: "/testimonials" },
] as const;
