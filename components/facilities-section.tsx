"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionTitle } from "@/components/ui/section-title"
import { SectionSubtitle } from "@/components/ui/section-subtitle"
import { ParkingSquare, Droplet, Store, Home, Compass } from "lucide-react"

interface Facility {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  details: string
}

export function FacilitiesSection() {
  const facilities: Facility[] = [
    {
      icon: ParkingSquare,
      title: "Area Parkir Kendaraan",
      description: "Tersedia lahan parkir khusus yang cukup luas di area bawah bukit untuk sepeda motor maupun mobil pribadi pengunjung.",
      details: "Kapasitas 100+ motor & 20+ mobil"
    },
    {
      icon: Droplet,
      title: "Toilet Umum Bersih",
      description: "Toilet umum yang bersih dan terawat dengan pasokan air alami yang melimpah demi kenyamanan sanitasi pengunjung.",
      details: "Tersedia di pos pintu masuk & dekat warung"
    },
    {
      icon: Home,
      title: "Gazebo & Gardu Istirahat",
      description: "Pondok kayu sederhana yang tersebar di titik-titik teduh lereng bukit untuk bersantai sembari menikmati panorama alam.",
      details: "Terdapat 5 gazebo beratap rindang"
    },
    {
      icon: Compass,
      title: "Mushola Tempat Ibadah",
      description: "Fasilitas mushola sederhana yang bersih bagi pengunjung yang ingin melaksanakan ibadah shalat dengan tenang.",
      details: "Lengkap dengan alat shalat & tempat wudhu"
    },
    {
      icon: Store,
      title: "Pasar Mbantar Tradisional",
      description: "Pusat kuliner lokal bernuansa tradisional tempo dulu di bawah naungan Pokdarwis, menyajikan jajan pasar khas desa Jatimulyo.",
      details: "Buka berkala dengan aneka kuliner lokal"
    }
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <Section id="fasilitas" className="bg-surface border-y border-textSecondary/5">
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
            Akomodasi
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle>Fasilitas Penunjang Wisata</SectionTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <SectionSubtitle>
              Untuk memastikan kenyamanan Anda selama berkunjung, pengelola Pokdarwis Jatimulyo menyediakan berbagai sarana pendukung.
            </SectionSubtitle>
          </motion.div>
        </div>

        {/* Facilities Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          {facilities.map((facility, idx) => {
            const IconComponent = facility.icon
            // Render the last card (Pasar Mbantar) wider on desktop if odd, or keep it standard grid
            const isFullWidthOnDesktop = idx === facilities.length - 1 && facilities.length % 3 !== 0

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`bg-background border border-textSecondary/5 rounded-xl p-6 md:p-8 flex flex-col justify-between shadow-soft hover:shadow-medium hover:border-primary/10 transition-all duration-300 relative group overflow-hidden ${
                  isFullWidthOnDesktop ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Visual hover top-border highlight */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300" />

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-heading font-extrabold text-textPrimary group-hover:text-primary transition-colors">
                    {facility.title}
                  </h3>

                  <p className="text-sm text-textSecondary font-body leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-textSecondary/5 flex items-center justify-between text-xs text-textSecondary font-body">
                  <span className="font-semibold text-primary bg-primary/5 px-2.5 py-1 rounded">Info Detail:</span>
                  <span className="italic font-medium">{facility.details}</span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}
