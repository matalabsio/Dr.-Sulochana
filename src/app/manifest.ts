import type { MetadataRoute } from "next";
import { assetPaths } from "@/content/images";
import { siteConfig } from "@/lib/seo/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#F8F8FC",
    theme_color: "#2C2F7E",
    icons: [
      {
        src: assetPaths.brand.favicon,
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: assetPaths.brand.icon192,
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: assetPaths.brand.icon512,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: assetPaths.brand.icon512,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
