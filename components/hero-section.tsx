"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Map, ChevronDown, Mountain, Sun, Store, Camera } from "lucide-react"
import Image from "next/image"
import { PrimaryButton } from "@/components/ui/primary-button"
import { Container } from "@/components/ui/container"

// Variants for sequential animation
const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (customDelay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: customDelay,
      ease: [0.16, 1, 0.3, 1], // Custom smooth cubic bezier easing
    },
  }),
}

const fadeInVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (customDelay: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: customDelay,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export function HeroSection() {
  const handleScrollTo = (id: string) => {
    const nextSection = document.getElementById(id)
    if (nextSection) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = nextSection.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const FloatingCardContent = () => (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-4 md:p-5 rounded-xl shadow-medium w-full md:w-72">
      {/* Mobile: 2x2 compact grid | Desktop: vertical list */}
      <div className="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-3.5">
        <div className="flex items-center gap-2.5">
          <Mountain className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" aria-hidden="true" />
          <span className="text-white text-xs md:text-sm font-semibold tracking-wide leading-tight">View Lawu &amp; Bengawan Solo</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Sun className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" aria-hidden="true" />
          <span className="text-white text-xs md:text-sm font-semibold tracking-wide leading-tight">Spot Sunrise &amp; Sunset</span>
        </div>
        <div className="hidden md:block h-px bg-white/10 w-full col-span-1" />
        <div className="hidden md:block h-px bg-white/10 w-full col-span-1" />
        <div className="flex items-center gap-2.5">
          <Store className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" aria-hidden="true" />
          <span className="text-white text-xs md:text-sm font-semibold tracking-wide leading-tight">Pasar Tradisional Bantar</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Camera className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" aria-hidden="true" />
          <span className="text-white text-xs md:text-sm font-semibold tracking-wide leading-tight">Spot Foto Instagramable</span>
        </div>
      </div>
    </div>
  )

  return (
    <section 
      id="beranda" 
      className="relative h-screen min-h-[700px] w-full flex items-center overflow-hidden bg-black"
      aria-label="Hero Section"
    >
      {/* Background Image with Zoom Animation */}
      <motion.div
        initial={{ scale: 1.12, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.75 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full select-none pointer-events-none"
      >
        <Image
          src="/images/hero_landscape.jpg"
          alt="Pemandangan bukit hijau Gunung Kendil di Ngawi dengan kelokan Bengawan Solo"
          fill
          priority
          unoptimized={true}
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Dark overlay with gradient for contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10" />

      {/* Main Content Area */}
      <Container className="relative z-20 h-full w-full flex flex-col justify-center pt-24 pb-32 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          {/* Left aligned copy */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            {/* 1. Badge */}
            <motion.div
              custom={0.2}
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full text-xs md:text-sm font-body font-medium tracking-wide text-accent flex items-center gap-2 mb-6 shadow-soft"
            >
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>🌿 Wisata Alam Ngawi</span>
            </motion.div>

            {/* 2. Heading */}
            <motion.h1
              custom={0.35}
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight max-w-3xl leading-[1.12] mb-5 text-white text-shadow"
            >
              Gunung Kendil <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-secondary to-accent">
                Negeri di Atas Kelokan Bengawan Solo
              </span>
            </motion.h1>

            {/* 3. Subheading */}
            <motion.p
              custom={0.5}
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              className="text-sm sm:text-base md:text-xl text-white/80 max-w-2xl font-body mb-8 leading-relaxed"
            >
              Nikmati panorama Gunung Lawu dan liukan Sungai Bengawan Solo dari puncak bukit di Desa Jatimulyo, Mantingan, Ngawi.
            </motion.p>

            {/* 4. CTA Buttons */}
            <motion.div
              custom={0.65}
              variants={fadeInUpVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-row items-center gap-3 w-full sm:w-auto"
            >
              <PrimaryButton
                aria-label="Lihat Galeri Foto Gunung Kendil"
                onClick={() => handleScrollTo("galeri")}
                className="w-auto gap-2 px-6 py-3 text-sm sm:px-8 sm:py-3.5 sm:text-base"
              >
                <Map className="w-4 h-4 sm:w-5 sm:h-5" />
                Lihat Galeri
              </PrimaryButton>
            </motion.div>

            {/* Mobile-only Floating Card (Rendered below content on mobile) */}
            <motion.div
              custom={0.8}
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              className="block md:hidden mt-6 w-full"
            >
              <FloatingCardContent />
            </motion.div>
          </div>

          {/* Desktop-only Floating Card (Right Aligned) */}
          <div className="hidden md:flex lg:col-span-4 justify-end items-end h-full">
            <motion.div
              custom={0.8}
              variants={fadeInVariants}
              initial="hidden"
              animate="visible"
              className="absolute bottom-24 right-4 md:right-8 lg:right-16 z-20"
            >
              <FloatingCardContent />
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Scroll Down Indicator */}
      <motion.div
        custom={0.95}
        variants={fadeInVariants}
        initial="hidden"
        animate="visible"
        onClick={() => handleScrollTo("tentang")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer text-white/50 hover:text-white transition-colors"
      >
        <span className="text-xs font-body font-medium tracking-widest uppercase">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/60"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}
