"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionTitle } from "@/components/ui/section-title"
import { SectionSubtitle } from "@/components/ui/section-subtitle"
import { Anchor, Users, Compass, ShieldAlert, Sparkles, Mountain, Store } from "lucide-react"

interface TimelineEvent {
  date: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  badge?: string
}

export function HistoryTimeline() {
  const events: TimelineEvent[] = [
    {
      date: "Legenda & Asal-usul",
      title: "Asal Nama 'Gunung Kendil' & Petilasan Purba",
      description: "Nama Gunung Kendil diyakini merujuk pada bentuk bukit atau batuannya yang menyerupai kuali tanah liat (kendil). Di puncak bukit terdapat petilasan bersejarah yang diapit dua pohon Sambi kuno. Secara budaya, cerita mistis dan tradisi persembahan di sekitar petilasan ini diwariskan secara turun-temurun sebagai kearifan lokal untuk melestarikan pohon-pohon tua dari penebangan liar.",
      icon: Mountain,
      badge: "Kearifan Lokal"
    },
    {
      date: "Masa Kerajaan",
      title: "Jalur Transportasi Bengawan Solo & Perahu Kuno",
      description: "Bengawan Solo di kaki bukit Gunung Kendil sejak dahulu kala merupakan jalur pelayaran niaga antarkerajaan. Kawasan landai dekat Donganten ini menjadi titik persinggahan penting, termasuk perahu legendaris Rojomolo Kembar. Prasasti Canggu mencatat daerah ini sebagai titik penyeberangan vital yang menghubungkan kerajaan dengan Sukowati (kini Sragen).",
      icon: Anchor,
      badge: "Nilai Historis"
    },
    {
      date: "Tahun 2019",
      title: "Prakarsa Swadaya Masyarakat Dusun Sidodadi",
      description: "Pemuda Dusun Sidodadi bersama warga Desa Jatimulyo bergotong royong membuka akses jalan setapak sepanjang 200 meter dari area parkir ke puncak bukit. Aksi gotong royong mandiri ini merintis penataan kembali kawasan bukit kapur gundul dan memicu pembentukan Kelompok Sadar Wisata (Pokdarwis GERDASI).",
      icon: Users,
      badge: "Gotong Royong"
    },
    {
      date: "20 Maret 2021",
      title: "Peresmian Resmi Ekowisata Gunung Kendil",
      description: "Destinasi wisata Gunung Kendil secara resmi dibuka oleh Bupati Ngawi Ony Anwar Harsono. Ditandai dengan penanaman pohon simbolis di puncak bukit, Bupati mendorong pengelolaan ekowisata berbasis pelestarian hutan lindung untuk meningkatkan kesejahteraan ekonomi warga desa sekitar hutan secara berkelanjutan.",
      icon: Compass,
      badge: "Peresmian Bupati"
    },
    {
      date: "Tahun 2021 - 2025",
      title: "Rintisan Pasar Rakyat Tri-Mingguan",
      description: "Sebagai embrio kegiatan ekonomi kreatif, Pokdarwis bersama Carik (Sekretaris Desa) Jatimulyo menginisiasi penyelenggaraan pasar berkala setiap tiga minggu sekali di kaki bukit. Sambutan antusias masyarakat menegaskan potensi kuat kawasan ini sebagai pusat pertumbuhan ekonomi baru desa.",
      icon: ShieldAlert,
      badge: "Rintisan UMKM"
    },
    {
      date: "26 April 2026",
      title: "Peresmian Resmi Pasar Tradisional Bantar",
      description: "Kawasan bantaran sungai Bengawan Solo seluas 3.000 m² disulap menjadi Pasar Wisata Bantar. Resmi beroperasi untuk wadah 80-100 UMKM dengan konsep pedagang mengenakan pakaian adat Jawa. Pembangunan didukung penuh oleh Pemkab Ngawi (jogging track, playground, gedung serbaguna) serta wahana rekreasi ATV/mobil listrik oleh BUMDes.",
      icon: Store,
      badge: "Sentra Ekonomi Baru"
    },
    {
      date: "Masa Depan",
      title: "Integrasi Fasilitas Terpadu & Kesejahteraan Desa",
      description: "Pengelola merencanakan perluasan fasilitas berupa toilet memadai, area berkemah (camping ground) di puncak bukit, sistem tata suara terpadu, serta spot swafoto baru. Keberhasilan wisata lintas provinsi ini diproyeksikan memberikan kontribusi langsung bagi Pendapatan Asli Desa (PADes) dan kas RT setempat.",
      icon: Sparkles,
      badge: "Ekowisata Berkelanjutan"
    }
  ]

  return (
    <Section id="sejarah" className="bg-surface border-y border-textSecondary/5">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs md:text-sm font-semibold text-primary tracking-widest uppercase bg-primary/5 px-4 py-1.5 rounded-full mb-4 border border-primary/10"
          >
            Naskah Sejarah
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle>Timeline Perjalanan Sejarah</SectionTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <SectionSubtitle>
              Dari jalur transportasi air masa kerajaan kuno hingga inisiatif pariwisata modern berbasis gotong royong masyarakat.
            </SectionSubtitle>
          </motion.div>
        </div>

        {/* Vertical Timeline Wrapper */}
        <div className="relative max-w-5xl mx-auto py-8">
          {/* Vertical central line (desktop) / left line (mobile) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-secondary/40 to-accent/30 -translate-x-1/2" />

          {/* Timeline Nodes */}
          <div className="space-y-12 md:space-y-20">
            {events.map((event, idx) => {
              const IconComponent = event.icon
              const isEven = idx % 2 === 0

              return (
                <div 
                  key={idx} 
                  className={`relative flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Outer circle dot on the line */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-120px" }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                      className="w-10 h-10 rounded-full border-4 border-surface bg-primary shadow-soft flex items-center justify-center text-white"
                    >
                      <IconComponent className="w-4.5 h-4.5" />
                    </motion.div>
                  </div>

                  {/* Left / Right Card Container */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-120px" }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="bg-background border border-textSecondary/10 rounded-xl p-6 md:p-8 shadow-soft hover:shadow-medium hover:border-primary/20 transition-all duration-300 relative group"
                    >
                      {/* Interactive hover indicator border */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-primary transition-all duration-300 rounded-t-xl" />

                      {/* Header content */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                        <span className="text-xs font-semibold text-primary tracking-widest bg-primary/10 px-3 py-1 rounded-full uppercase">
                          {event.date}
                        </span>
                        {event.badge && (
                          <span className="text-[10px] md:text-xs font-medium text-earth bg-earth/5 px-2 py-0.5 rounded border border-earth/10">
                            {event.badge}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg md:text-xl font-heading font-extrabold text-textPrimary mb-3 group-hover:text-primary transition-colors">
                        {event.title}
                      </h3>

                      <p className="text-sm md:text-base text-textSecondary font-body leading-relaxed">
                        {event.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Dummy spacing element on the other side for grid alignment on desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </Section>
  )
}
