import { ImageResponse } from "next/og";
import { BRAND_PRIMARY, BRAND_PRIMARY_DEEP, BrandMark } from "@/lib/brand/brandMark";

type FaviconImageOptions = {
  size: number;
  borderRadius: number;
  markSize: number;
  gradient?: boolean;
  padding?: number;
};

export function createFaviconImage({
  size,
  borderRadius,
  markSize,
  gradient = false,
  padding = 0,
}: FaviconImageOptions) {
  const background = gradient
    ? `linear-gradient(145deg, ${BRAND_PRIMARY} 0%, ${BRAND_PRIMARY_DEEP} 100%)`
    : BRAND_PRIMARY;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background,
          borderRadius,
          padding,
        }}
      >
        <BrandMark size={markSize} />
      </div>
    ),
    { width: size, height: size },
  );
}
