"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionTitle } from "@/components/ui/section-title"
import { SectionSubtitle } from "@/components/ui/section-subtitle"
import { MapPin, Shield, Calendar, Users, Info } from "lucide-react"

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export function AboutSection() {
  const profileItems = [
    {
      icon: MapPin,
      label: "Lokasi Administratif",
      value: "Dusun Sidodadi, Desa Jatimulyo, Kec. Mantingan, Kab. Ngawi, Jawa Timur",
      color: "text-primary bg-primary/10"
    },
    {
      icon: Info,
      label: "Karakter Geologi",
      value: "Bukit kapur alami (limestone) bagian dari bentang alam Gua Lowo & Trangil",
      color: "text-earth bg-earth/10"
    },
    {
      icon: Shield,
      label: "Status Kawasan",
      value: "Kawasan Hutan Perhutani (Petak 158e, RPH Pandean, BKPH Pandean, KPH Ngawi)",
      color: "text-secondary bg-secondary/10"
    },
    {
      icon: Users,
      label: "Pengelola Wisata",
      value: "Kolaborasi Perhutani KPH Ngawi, LMDH Mulyo Jati, & Pokdarwis Mantingan",
      color: "text-accent bg-accent/10"
    },
    {
      icon: Calendar,
      label: "Tanggal Peresmian",
      value: "20 Maret 2021 (Oleh Bupati Ngawi H. Ony Anwar Harsono, S.T., M.H.)",
      color: "text-primary bg-primary/10"
    }
  ]

  return (
    <Section id="tentang" className="bg-background">
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
            Tentang Destinasi
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle>Mengenal Gunung Kendil</SectionTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <SectionSubtitle>
              Sebuah permata tersembunyi di perbatasan Jawa Timur, memadukan pesona alam perbukitan kapur dan eksotisme aliran Bengawan Solo.
            </SectionSubtitle>
          </motion.div>
        </div>

        {/* Content Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Descriptive Story & Visi */}
          <motion.div 
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-textPrimary leading-tight">
                Keindahan Alam Alami yang Terbentuk dari Sejarah Geologi
              </h3>
              <p className="text-textSecondary font-body leading-relaxed text-base md:text-lg">
                Berbeda dengan perbukitan buatan, Gunung Kendil merupakan bukit kapur alami (limestone) yang terbentuk kokoh di tepian Bengawan Solo. Struktur batuannya memiliki kemiripan geologis dengan Gua Lowo dan perbukitan Trangil di sekitarnya. 
              </p>
              <p className="text-textSecondary font-body leading-relaxed text-base md:text-lg">
                Kawasan ini awalnya merupakan area perbukitan hutan jati yang tenang di bawah pengelolaan Perhutani KPH Ngawi. Melihat potensi keindahan pemandangannya yang langsung menghadap kelokan sungai legendaris Bengawan Solo, masyarakat Dusun Sidodadi secara gotong royong berinisiatif menata kawasan ini menjadi destinasi ekowisata sejak tahun 2019.
              </p>
            </div>

            {/* Visi Wisata Card */}
            <div className="bg-surface border border-primary/10 p-6 md:p-8 rounded-xl shadow-soft relative overflow-hidden group">
              <div className="absolute top-0 left-0 h-full w-1.5 bg-gradient-to-b from-primary to-secondary" />
              <span className="font-accent italic text-4xl text-primary/10 absolute top-4 right-6 select-none group-hover:scale-110 transition-transform duration-300">
                &ldquo;
              </span>
              <h4 className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Visi Pengembangan Wisata</h4>
              <p className="font-accent italic text-lg md:text-xl text-textPrimary leading-relaxed">
                &ldquo;Menjadikan Gunung Kendil sebagai destinasi wisata alam unggulan Desa Jatimulyo yang berkelanjutan, mengangkat kearifan lokal, serta memberikan dampak ekonomi nyata bagi masyarakat melalui pelestarian hutan.&rdquo;
              </p>
              <div className="mt-4 text-xs text-textSecondary font-body flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 bg-accent rounded-full animate-pulse" />
                <span>Sinergi LMDH Mulyo Jati & Pemerintah Desa Jatimulyo</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key facts / profile checklist */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 flex flex-col justify-center bg-surface border border-textSecondary/10 rounded-2xl p-6 md:p-8 shadow-soft relative"
          >
            <h3 className="text-xl font-heading font-bold text-textPrimary mb-6 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Profil Gunung Kendil
            </h3>
            <div className="space-y-6">
              {profileItems.map((item, idx) => {
                const IconComponent = item.icon
                return (
                  <motion.div 
                    key={idx} 
                    variants={cardVariants}
                    className="flex gap-4 group"
                  >
                    <div className={`flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-5.5 h-5.5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xs font-semibold text-textSecondary uppercase tracking-wider">{item.label}</h4>
                      <p className="text-sm font-medium text-textPrimary leading-relaxed">{item.value}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
