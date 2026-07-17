"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionTitle } from "@/components/ui/section-title"
import { SectionSubtitle } from "@/components/ui/section-subtitle"
import { X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react"

interface GalleryItem {
  id: number
  images: string[]
  alt: string
  title: string
  category: string
}

export function GallerySection() {
  const [selectedItem, setSelectedItem] = React.useState<GalleryItem | null>(null)
  const [activeImageIndex, setActiveImageIndex] = React.useState<number>(0)

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      images: ["/images/gallery_drone.png"],
      alt: "Pemandangan aerial kelokan Sungai Bengawan Solo yang mengitari bukit hijau Gunung Kendil",
      title: "Kelokan Bengawan Solo (Drone View)",
      category: "Bentang Alam"
    },
    {
      id: 2,
      images: ["/images/gallery_sunrise.png"],
      alt: "Matahari terbit keemasan menyinari lembah berkabut di puncak Gunung Kendil",
      title: "Fajar Keemasan (Golden Sunrise)",
      category: "Matahari Terbit"
    },
    {
      id: 3,
      images: [
        "/images/pasar bantar/WhatsApp Image 2026-07-17 at 7.25.17 PM.jpeg",
        "/images/pasar bantar/WhatsApp Image 2026-07-17 at 7.25.18 PM.jpeg",
        "/images/pasar bantar/WhatsApp Image 2026-07-17 at 7.25.18 PM (1).jpeg",
        "/images/pasar bantar/WhatsApp Image 2026-07-17 at 7.25.18 PM (2).jpeg",
        "/images/pasar bantar/WhatsApp Image 2026-07-17 at 7.25.19 PM.jpeg"
      ],
      alt: "Suasana pasar tradisional tempo dulu di bawah kerindangan pepohonan Gunung Kendil",
      title: "Pasar Tradisional Bantar",
      category: "Kuliner & Budaya"
    },
    {
      id: 4,
      images: ["/images/jalur pohon jati/WhatsApp Image 2026-07-17 at 7.25.15 PM.jpeg"],
      alt: "Jalur setapak trekking rimbun pepohonan jati menuju puncak Gunung Kendil",
      title: "Jalur Hutan Jati (Trekking Path)",
      category: "Petualangan"
    },
    {
      id: 5,
      images: [
        "/images/peresmian gunung kendil/WhatsApp Image 2026-07-17 at 7.25.11 PM.jpeg",
        "/images/peresmian gunung kendil/WhatsApp Image 2026-07-17 at 7.25.12 PM.jpeg",
        "/images/peresmian gunung kendil/WhatsApp Image 2026-07-17 at 7.25.12 PM (1).jpeg",
        "/images/peresmian gunung kendil/WhatsApp Image 2026-07-17 at 7.25.12 PM (2).jpeg"
      ],
      alt: "Dokumentasi acara peresmian ekowisata Gunung Kendil oleh Bupati Ngawi, ditandai dengan penanaman pohon simbolis di puncak bukit.",
      title: "Peresmian Gunung Kendil",
      category: "Sejarah & Dokumentasi"
    },
    {
      id: 6,
      images: [
        "/images/sumpah pemuda/WhatsApp Image 2026-07-17 at 7.25.13 PM.jpeg",
        "/images/sumpah pemuda/WhatsApp Image 2026-07-17 at 7.25.13 PM (1).jpeg",
        "/images/sumpah pemuda/WhatsApp Image 2026-07-17 at 7.25.13 PM (2).jpeg",
        "/images/sumpah pemuda/WhatsApp Image 2026-07-17 at 7.25.14 PM.jpeg",
        "/images/sumpah pemuda/WhatsApp Image 2026-07-17 at 7.25.14 PM (1).jpeg"
      ],
      alt: "Dokumentasi peringatan Hari Sumpah Pemuda di puncak Gunung Kendil bersama pemuda desa dan masyarakat.",
      title: "Peringatan Sumpah Pemuda",
      category: "Sejarah & Dokumentasi"
    },
    {
      id: 7,
      images: ["/images/atv/WhatsApp Image 2026-07-17 at 7.25.14 PM.jpeg"],
      alt: "Petualangan seru mengendarai ATV menjelajahi jalur menantang di kawasan ekowisata Gunung Kendil.",
      title: "Wahana ATV & Mobil Listrik",
      category: "Aktivitas"
    }
  ]

  const handleOpenItem = (item: GalleryItem) => {
    setSelectedItem(item)
    setActiveImageIndex(0)
  }

  const handlePrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (selectedItem && selectedItem.images.length > 1) {
      setActiveImageIndex((prevIndex) => 
        (prevIndex - 1 + selectedItem.images.length) % selectedItem.images.length
      )
    }
  }

  const handleNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation()
    if (selectedItem && selectedItem.images.length > 1) {
      setActiveImageIndex((prevIndex) => 
        (prevIndex + 1) % selectedItem.images.length
      )
    }
  }

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedItem(null)
      if (e.key === "ArrowLeft") handlePrevImage()
      if (e.key === "ArrowRight") handleNextImage()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedItem])

  return (
    <Section id="galeri" className="bg-background">
      <Container>
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs md:text-sm font-semibold text-primary tracking-widest uppercase bg-primary/5 px-4 py-1.5 rounded-full mb-4 border border-primary/10"
          >
            Dokumentasi Visual
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle>Galeri Foto Gunung Kendil</SectionTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <SectionSubtitle>
              Intip keindahan visual panorama alam, trek penjelajahan, dan kehangatan pasar tradisional tempo dulu yang ditangkap di lokasi wisata.
            </SectionSubtitle>
          </motion.div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: item.id * 0.1 }}
              onClick={() => handleOpenItem(item)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-soft border border-textSecondary/5 bg-surface"
            >
              {/* Image component */}
              <Image
                src={item.images[0]}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                unoptimized={true}
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300 z-10" />

              {/* Multiple Images Indicator Badge */}
              {item.images.length > 1 && (
                <div className="absolute top-4 left-4 z-20 bg-black/40 backdrop-blur-md border border-white/20 px-2.5 py-1 rounded-full text-white text-[10px] font-semibold tracking-wider uppercase flex items-center gap-1.5 shadow-soft select-none">
                  <span>📷</span>
                  <span>{item.images.length} Foto</span>
                </div>
              )}

              {/* Text Hover Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex flex-col justify-end text-white h-1/2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] md:text-xs font-semibold tracking-wider text-accent uppercase mb-1">
                  {item.category}
                </span>
                <h3 className="text-base md:text-lg font-heading font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-white/70 line-clamp-2 font-body font-normal opacity-0 group-hover:opacity-100 transition-opacity duration-350 delay-100">
                  {item.alt}
                </p>
              </div>

              {/* Center Magnify Icon on hover */}
              <div className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-2.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-4.5 h-4.5" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm cursor-zoom-out"
            >
              {/* Prev Button */}
              {selectedItem.images.length > 1 && (
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/25 hover:scale-105 transition-all cursor-pointer flex items-center justify-center"
                  aria-label="Foto sebelumnya"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {/* Next Button */}
              {selectedItem.images.length > 1 && (
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/25 hover:scale-105 transition-all cursor-pointer flex items-center justify-center"
                  aria-label="Foto berikutnya"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}

              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/25 transition-colors cursor-pointer"
                aria-label="Tutup foto"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Lightbox Content Container */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 220 }}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking card
                className="relative max-w-4xl w-full bg-surface border border-textSecondary/10 rounded-2xl overflow-hidden shadow-medium cursor-default flex flex-col md:flex-row items-stretch"
              >
                {/* Visual Area */}
                <div className="relative h-64 sm:h-96 md:h-[500px] w-full md:w-3/5 bg-black flex items-center justify-center">
                  <Image
                    src={selectedItem.images[activeImageIndex]}
                    alt={`${selectedItem.title} - Foto ${activeImageIndex + 1}`}
                    fill
                    className="object-contain"
                    unoptimized={true}
                  />

                  {/* Indicators / Dots overlay at the bottom of the image area */}
                  {selectedItem.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2 bg-black/45 backdrop-blur-sm px-3 py-1.5 rounded-full select-none">
                      {selectedItem.images.map((_, dotIdx) => (
                        <button
                          key={dotIdx}
                          onClick={(e) => {
                            e.stopPropagation()
                            setActiveImageIndex(dotIdx)
                          }}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            activeImageIndex === dotIdx 
                              ? "bg-white w-4" 
                              : "bg-white/50 hover:bg-white/80"
                          }`}
                          aria-label={`Lihat foto ${dotIdx + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Description Area */}
                <div className="p-6 md:p-8 flex flex-col justify-between w-full md:w-2/5 bg-surface">
                  <div className="space-y-4">
                    <span className="text-xs font-semibold tracking-widest text-primary uppercase bg-primary/10 px-3 py-1 rounded-full inline-block">
                      {selectedItem.category}
                    </span>
                    <h3 className="text-2xl font-heading font-extrabold text-textPrimary">
                      {selectedItem.title}
                    </h3>
                    <div className="h-px bg-textSecondary/10 w-full" />
                    <p className="text-sm md:text-base text-textSecondary font-body leading-relaxed">
                      {selectedItem.alt}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  )
}
