#!/usr/bin/env node
/**
 * Generates favicon + PWA icons from public/brand/fav.png (mother–child mark).
 * Run: npm run generate-favicons
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import toIco from "to-ico";

/** Match site --figma-astronaut / --brand-primary */
const BRAND_PRIMARY = "#2C2F7E";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const brandDir = join(root, "public/brand");
const favPath = join(brandDir, "fav.png");

/** White silhouette of fav.png, contained in a square with transparent padding */
async function whiteMarkPng(markBox) {
  const resized = await sharp(favPath)
    .ensureAlpha()
    .resize(markBox, markBox, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .toColourspace("srgb")
    .raw()
    .toBuffer({ resolveWithObject: true });

  const out = Buffer.alloc(resized.data.length);
  for (let i = 0; i < resized.data.length; i += 4) {
    const a = resized.data[i + 3];
    if (a < 15) {
      out[i] = 0;
      out[i + 1] = 0;
      out[i + 2] = 0;
      out[i + 3] = 0;
      continue;
    }
    out[i] = 255;
    out[i + 1] = 255;
    out[i + 2] = 255;
    out[i + 3] = a;
  }

  return sharp(out, {
    raw: { width: resized.info.width, height: resized.info.height, channels: 4 },
  })
    .png()
    .toBuffer();
}

/** Square icon: brand tile + white mark centered */
async function renderSquareIcon(size, { radius = 0, paddingRatio = 0.18 } = {}) {
  const padding = Math.round(size * paddingRatio);
  const markBox = Math.max(8, size - padding * 2);
  const markPng = await whiteMarkPng(markBox);

  let pipeline = sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: BRAND_PRIMARY,
    },
  }).composite([{ input: markPng, gravity: "centre" }]);

  if (radius > 0) {
    const r = Math.min(radius, Math.floor(size / 2));
    const svg = Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
        <rect width="${size}" height="${size}" rx="${r}" ry="${r}" fill="#fff"/>
      </svg>`,
    );
    pipeline = sharp(await pipeline.png().toBuffer()).composite([
      { input: svg, blend: "dest-in" },
    ]);
  }

  return pipeline.png().toBuffer();
}

const brandTargets = [
  { file: "icon-32.png", size: 32, radius: 6, paddingRatio: 0.1 },
  { file: "icon-192.png", size: 192, radius: 36, paddingRatio: 0.16 },
  { file: "icon-512.png", size: 512, radius: 0, paddingRatio: 0.16 }, // full square for Google / schema logo
  { file: "apple-touch-icon.png", size: 180, radius: 36, paddingRatio: 0.16 },
];

for (const { file, size, radius, paddingRatio } of brandTargets) {
  const buf = await renderSquareIcon(size, { radius, paddingRatio });
  writeFileSync(join(brandDir, file), buf);
  console.log(`→ public/brand/${file}`);
}

const rootTargets = [
  { file: "favicon-32x32.png", size: 32, radius: 6, paddingRatio: 0.1 },
  { file: "apple-touch-icon.png", size: 180, radius: 36, paddingRatio: 0.16 },
  { file: "android-chrome-192x192.png", size: 192, radius: 36, paddingRatio: 0.16 },
  { file: "android-chrome-512x512.png", size: 512, radius: 0, paddingRatio: 0.16 },
];

for (const { file, size, radius, paddingRatio } of rootTargets) {
  const buf = await renderSquareIcon(size, { radius, paddingRatio });
  writeFileSync(join(root, "public", file), buf);
  console.log(`→ public/${file}`);
}

const png16 = await renderSquareIcon(16, { radius: 3, paddingRatio: 0.08 });
const png32 = await renderSquareIcon(32, { radius: 6, paddingRatio: 0.1 });
const png48 = await renderSquareIcon(48, { radius: 10, paddingRatio: 0.12 });
writeFileSync(join(root, "public/favicon.ico"), await toIco([png16, png32, png48]));
console.log("→ public/favicon.ico");
