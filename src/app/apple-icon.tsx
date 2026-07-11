import { createFaviconImage } from "@/lib/brand/faviconImage";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return createFaviconImage({
    size: 180,
    borderRadius: 36,
    markSize: 120,
    gradient: true,
    padding: 16,
  });
}
