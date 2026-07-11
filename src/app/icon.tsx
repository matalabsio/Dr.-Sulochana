import { createFaviconImage } from "@/lib/brand/faviconImage";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return createFaviconImage({
    size: 32,
    borderRadius: 7,
    markSize: 24,
  });
}
