import fs from "fs"
import path from "path"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { HistoryTimeline } from "@/components/history-timeline"
import { AttractionsSection } from "@/components/attractions-section"
import { GallerySection } from "@/components/gallery-section"
import { FacilitiesSection } from "@/components/facilities-section"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"

// Server-side helper to copy generated assets on page load (Workaround for shell execute issue)
function checkAndCopyAssets() {
  const assetsToCopy = [
    {
      src: "C:\\Users\\davin\\.gemini\\antigravity-ide\\brain\\7b0945ce-8f40-4990-8b8c-1a2283f54cbc\\gallery_drone_1784118416051.png",
      dest: path.join(process.cwd(), "public", "images", "gallery_drone.png")
    },
    {
      src: "C:\\Users\\davin\\.gemini\\antigravity-ide\\brain\\7b0945ce-8f40-4990-8b8c-1a2283f54cbc\\gallery_sunrise_1784118430860.png",
      dest: path.join(process.cwd(), "public", "images", "gallery_sunrise.png")
    },
    {
      src: "C:\\Users\\davin\\.gemini\\antigravity-ide\\brain\\7b0945ce-8f40-4990-8b8c-1a2283f54cbc\\gallery_camping_1784118447447.png",
      dest: path.join(process.cwd(), "public", "images", "gallery_camping.png")
    },
    {
      src: "C:\\Users\\davin\\.gemini\\antigravity-ide\\brain\\7b0945ce-8f40-4990-8b8c-1a2283f54cbc\\gallery_tracking_1784118463111.png",
      dest: path.join(process.cwd(), "public", "images", "gallery_tracking.png")
    },
    {
      src: "C:\\Users\\davin\\.gemini\\antigravity-ide\\brain\\8c74f425-a2fc-44fc-b06b-e83f63694a97\\gallery_pasar_bantar_1784220126660.png",
      dest: path.join(process.cwd(), "public", "images", "gallery_pasar_bantar.png")
    },
    {
      src: "C:\\Users\\davin\\.gemini\\antigravity-ide\\brain\\8c74f425-a2fc-44fc-b06b-e83f63694a97\\gallery_pasar_bantar_2_1784220951018.png",
      dest: path.join(process.cwd(), "public", "images", "gallery_pasar_bantar_2.png")
    },
    {
      src: "C:\\Users\\davin\\.gemini\\antigravity-ide\\brain\\8c74f425-a2fc-44fc-b06b-e83f63694a97\\gallery_pasar_bantar_3_1784220968113.png",
      dest: path.join(process.cwd(), "public", "images", "gallery_pasar_bantar_3.png")
    }
  ]

  assetsToCopy.forEach(({ src, dest }) => {
    try {
      if (fs.existsSync(src)) {
        // Ensure destination directory exists
        const destDir = path.dirname(dest)
        if (!fs.existsSync(destDir)) {
          fs.mkdirSync(destDir, { recursive: true })
        }
        
        // Copy the file
        fs.copyFileSync(src, dest)
        console.log(`[Asset Copier] Successfully copied ${path.basename(src)} to ${dest}`)
      } else {
        console.log(`[Asset Copier] Source asset not found at ${src}`)
      }
    } catch (error) {
      console.error(`[Asset Copier] Error copying asset:`, error)
    }
  })
}

// Execute the asset copy check
checkAndCopyAssets()

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* 1. Hero Section */}
      <HeroSection />
      
      {/* 2. Tentang Section */}
      <AboutSection />

      {/* 3. Sejarah Section */}
      <HistoryTimeline />

      {/* 4. Daya Tarik Section */}
      <AttractionsSection />

      {/* 5. Galeri Section */}
      <GallerySection />

      {/* 6. Fasilitas Section */}
      <FacilitiesSection />

      {/* 7. Lokasi Section */}
      <LocationSection />

      {/* 8. Footer Section */}
      <Footer />
    </main>
  )
}
