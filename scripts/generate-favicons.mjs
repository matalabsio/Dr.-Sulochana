#!/usr/bin/env node
/**
 * Generates PWA + legacy favicon PNG/ICO assets from public/brand/favicon.svg
 * Run: npm run generate-favicons
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import toIco from "to-ico";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const svgPath = join(root, "public/brand/favicon.svg");
const brandDir = join(root, "public/brand");
const svg = readFileSync(svgPath);

const pngTargets = [
  { file: "icon-192.png", size: 192 },
  { file: "icon-512.png", size: 512 },
  { file: "apple-touch-icon.png", size: 180 },
  { file: "icon-32.png", size: 32 },
];

for (const { file, size } of pngTargets) {
  const out = join(brandDir, file);
  await sharp(svg).resize(size, size).png().toFile(out);
  console.log(`→ public/brand/${file}`);
}

const png16 = await sharp(svg).resize(16, 16).png().toBuffer();
const png32 = await sharp(svg).resize(32, 32).png().toBuffer();
const ico = await toIco([png16, png32]);
writeFileSync(join(root, "public/favicon.ico"), ico);
console.log("→ public/favicon.ico");
