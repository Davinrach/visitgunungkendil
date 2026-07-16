import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

const destDir = path.join(process.cwd(), "public", "images");

// Auto-copy generated hero image from system brain cache to public directory on dev start
const sourcePath = "C:\\Users\\davin\\.gemini\\antigravity-ide\\brain\\0bc83ad8-a15e-498f-be8f-5030556dc2d8\\media__1783769591988.jpg";
const destPath = path.join(destDir, "hero_landscape.jpg");

// Auto-copy generated Pasar Bantar gallery image on dev start
const bantarSourcePath = "C:\\Users\\davin\\.gemini\\antigravity-ide\\brain\\8c74f425-a2fc-44fc-b06b-e83f63694a97\\gallery_pasar_bantar_1784220126660.png";
const bantarDestPath = path.join(destDir, "gallery_pasar_bantar.png");

try {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log("▲ [Visit Gunung Kendil] New landscape hero image successfully copied to public assets.");
  }
  if (fs.existsSync(bantarSourcePath)) {
    fs.copyFileSync(bantarSourcePath, bantarDestPath);
    console.log("▲ [Visit Gunung Kendil] Pasar Bantar image successfully copied to public assets.");
  }
} catch (err) {
  console.error("▲ [Visit Gunung Kendil] Failed to auto-copy assets:", err);
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
