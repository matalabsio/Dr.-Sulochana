import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { BRAND_PRIMARY, BRAND_PRIMARY_DEEP } from "@/lib/brand/brandMark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const file = await readFile(join(process.cwd(), "public/brand/logo.png"));
  const logoSrc = `data:image/png;base64,${Buffer.from(file).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(145deg, ${BRAND_PRIMARY} 0%, ${BRAND_PRIMARY_DEEP} 100%)`,
          borderRadius: 36,
          padding: 16,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={148} height={110} alt="" style={{ objectFit: "contain" }} />
      </div>
    ),
    { ...size },
  );
}
