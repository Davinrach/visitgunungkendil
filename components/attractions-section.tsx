"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionTitle } from "@/components/ui/section-title"
import { SectionSubtitle } from "@/components/ui/section-subtitle"
import { Mountain, Sun, Compass, Navigation, Store, Footprints } from "lucide-react"

interface Attraction {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  tag: string
  color: string
}

export function AttractionsSection() {
  const attractions: Attraction[] = [
    {
      icon: Navigation,
      title: "Kelokan Sungai Bengawan Solo",
      description: "Dari puncak bukit, saksikan langsung pemandangan aliran Sungai Bengawan Solo yang meliuk dramatis memutari lereng. Keindahan kelokan sungai ini kerap dijuluki lanskap 'Amazon dari Jatimulyo'.",
      tag: "Daya Tarik Utama",
      color: "from-blue-500/10 to-primary/10 border-blue-200 text-blue-700"
    },
    {
      icon: Mountain,
      title: "Pemandangan Gunung Lawu",
      description: "Saat cuaca cerah di ufuk barat, kemegahan puncak Gunung Lawu akan terlihat berdiri kokoh, menciptakan perpaduan panorama pegunungan dan pelayaran sungai yang ikonik.",
      tag: "Visual Spektakuler",
      color: "from-purple-500/10 to-primary/10 border-purple-200 text-purple-700"
    },
    {
      icon: Sun,
      title: "Golden Sunrise & Sunset",
      description: "Nikmati transisi magis fajar menyingsing dengan kabut tebal menyelimuti lembah sungai, serta keindahan semburat lembayung sore hari saat matahari tenggelam di balik perbukitan.",
      tag: "Momen Terbaik",
      color: "from-amber-500/10 to-primary/10 border-amber-200 text-amber-700"
    },
    {
      icon: Compass,
      title: "Geologi Bukit Kapur Alami",
      description: "Temukan keunikan struktur tanah dan batuan kapur (limestone) alami berpori. Karakteristik bebatuan ini satu rangkaian geologis dengan Gua Lowo dan tebing Trangil.",
      tag: "Edukasi Alam",
      color: "from-emerald-500/10 to-primary/10 border-emerald-200 text-emerald-700"
    },
    {
      icon: Store,
      title: "Pasar Tradisional Bantar",
      description: "Rasakan suasana pasar tempo dulu di bawah rindangnya pepohonan bukit. Menghidangkan aneka jajanan tradisional khas Ngawi yang dijajakan langsung oleh warga lokal mengenakan pakaian adat Jawa.",
      tag: "Kuliner & Budaya",
      color: "from-orange-500/10 to-primary/10 border-orange-200 text-orange-700"
    },
    {
      icon: Footprints,
      title: "Jalur Tracking Hutan Jati",
      description: "Bagi pecinta jalan kaki, telusuri rute trekking menantang menyusuri rimbunnya hutan jati Perhutani sepanjang 200 meter dari area parkir utama menuju titik puncak.",
      tag: "Aktivitas Sehat",
      color: "from-lime-500/10 to-primary/10 border-lime-200 text-lime-700"
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  return (
    <Section id="daya-tarik" className="bg-background">
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
            Pesona Wisata
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle>Daya Tarik Unggulan</SectionTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <SectionSubtitle>
              Berbagai keunikan pemandangan dan aktivitas outdoor menarik yang menanti Anda di kawasan ekowisata Gunung Kendil Jatimulyo.
            </SectionSubtitle>
          </motion.div>
        </div>

        {/* Attractions Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {attractions.map((attraction, idx) => {
            const IconComponent = attraction.icon
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                className="bg-surface border border-textSecondary/10 rounded-xl p-6 md:p-8 flex flex-col justify-between shadow-soft hover:shadow-medium hover:border-primary/20 transition-all duration-300 relative group overflow-hidden"
              >
                {/* Visual hover background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Badge & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl border ${attraction.color} flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] md:text-xs font-semibold tracking-wider text-textSecondary uppercase bg-textSecondary/5 px-2.5 py-1 rounded">
                      {attraction.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-extrabold text-textPrimary mb-3 group-hover:text-primary transition-colors">
                    {attraction.title}
                  </h3>
                  <p className="text-sm text-textSecondary font-body leading-relaxed">
                    {attraction.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}
