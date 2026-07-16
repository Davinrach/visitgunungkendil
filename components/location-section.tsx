"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionTitle } from "@/components/ui/section-title"
import { SectionSubtitle } from "@/components/ui/section-subtitle"
import { MapPin, Navigation, HelpCircle, CheckCircle } from "lucide-react"

export function LocationSection() {
  const tips = [
    "Gunakan alas kaki yang nyaman untuk trekking menanjak sepanjang 200 meter.",
    "Datanglah di pagi hari (sebelum pukul 06:00) untuk menikmati kabut pagi & sunrise.",
    "Bila berniat melakukan camping, hubungi pengelola Pokdarwis/LMDH terlebih dahulu.",
    "Kawasan ini merupakan kawasan hutan lindung Perhutani, mohon tidak membuang sampah sembarangan."
  ]

  // Embedded map of Jatimulyo area, Mantingan
  const mapIframeUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15815.137841198533!2d111.13944400000002!3d-7.328889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79fa83f80c65df%3A0xe21147a4ba7ff04f!2sJatimulyo%2C%20Mantingan%2C%20Ngawi%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"

  return (
    <Section id="lokasi" className="bg-surface border-t border-textSecondary/5">
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
            Peta Navigasi
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle>Lokasi & Akses Rute</SectionTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <SectionSubtitle>
              Temukan jalan termudah menuju bukit pariwisata Gunung Kendil Jatimulyo. Peta interaktif dan tips perjalanan tersedia di bawah ini.
            </SectionSubtitle>
          </motion.div>
        </div>

        {/* Content Body Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 h-96 md:h-[480px] rounded-2xl overflow-hidden border-2 border-primary/15 shadow-medium relative group"
          >
            <iframe
              src={mapIframeUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Gunung Kendil Jatimulyo Mantingan"
              className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
            />
            {/* Elegant overlay badge */}
            <div className="absolute bottom-4 left-4 bg-surface/90 backdrop-blur-md border border-textSecondary/15 px-4 py-2 rounded-xl text-xs font-semibold text-textPrimary flex items-center gap-2 shadow-soft">
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
              <span>Desa Jatimulyo, Mantingan, Ngawi</span>
            </div>
          </motion.div>

          {/* Right Column: Direction Card & Tips */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            {/* Rute & Alamat Card */}
            <div className="bg-background border border-textSecondary/10 rounded-xl p-6 md:p-8 space-y-6 shadow-soft">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-5.5 h-5.5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-textSecondary uppercase tracking-wider">Alamat Destinasi</h4>
                  <p className="text-sm font-medium text-textPrimary leading-relaxed">
                    Dusun Sidodadi, Desa Jatimulyo, Kecamatan Mantingan, Kabupaten Ngawi, Provinsi Jawa Timur, Kode Pos 63261.
                  </p>
                </div>
              </div>

              <div className="h-px bg-textSecondary/10 w-full" />

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                  <Navigation className="w-5.5 h-5.5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-semibold text-textSecondary uppercase tracking-wider">Rute & Aksesibilitas</h4>
                  <p className="text-sm font-medium text-textPrimary leading-relaxed">
                    Melalui jalur Jl. Mantingan - Pandean. Berjarak sekitar 3 km ke arah utara dari perempatan pasar Mantingan (sekitar area Pondok Modern Gontor Putri Kampus 2). Jalanan dapat diakses motor maupun mobil.
                  </p>
                </div>
              </div>
            </div>

            {/* Travel Tips Card */}
            <div className="bg-surface border border-primary/10 rounded-xl p-6 md:p-8 space-y-5 shadow-soft relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
              
              <h3 className="text-base font-heading font-extrabold text-textPrimary flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-primary" />
                Panduan & Tips Berkunjung
              </h3>

              <ul className="space-y-3.5">
                {tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4.5 h-4.5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-xs md:text-sm text-textSecondary font-body leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
