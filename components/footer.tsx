"use client"

import * as React from "react"
import { Container } from "@/components/ui/container"
import { Phone, Mail, Instagram, Facebook, Youtube, Globe } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const id = href.substring(1)
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const socialLinks = [
    { icon: Youtube, href: "https://youtube.com/@mascarik3679?si=QXk751ky3OF-6gzP", label: "YouTube" }
  ]

  const navLinks = [
    { label: "Beranda", href: "#beranda" },
    { label: "Tentang", href: "#tentang" },
    { label: "Sejarah", href: "#sejarah" },
    { label: "Daya Tarik", href: "#daya-tarik" },
    { label: "Galeri", href: "#galeri" },
    { label: "Fasilitas", href: "#fasilitas" },
    { label: "Lokasi", href: "#lokasi" }
  ]

  return (
    <footer className="bg-[#122e15] border-t border-white/5 text-white/80 py-16 font-body">
      <Container className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
        {/* Brand Column */}
        <div className="md:col-span-5 space-y-6">
          <a
            href="#beranda"
            onClick={(e) => handleNavClick(e, "#beranda")}
            className="flex items-center space-x-1 text-white font-heading font-extrabold text-2xl tracking-tight"
          >
            <span className="font-accent italic font-normal text-accent mr-1 text-3xl">Visit</span>
            Gunung Kendil
          </a>
          <p className="text-sm text-white/60 leading-relaxed max-w-sm">
            Destinasi ekowisata perbukitan kapur alami di Desa Jatimulyo, Mantingan, Ngawi. Menyajikan keindahan pemandangan kelokan Sungai Bengawan Solo dan panorama siluet megah Gunung Lawu.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((item, idx) => {
              const IconComponent = item.icon
              return (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-accent hover:border-accent hover:scale-105 transition-all duration-300"
                  aria-label={item.label}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-3 space-y-6">
          <h3 className="text-white font-heading font-bold text-base uppercase tracking-wider">Navigasi Cepat</h3>
          <ul className="space-y-3 text-sm">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-accent text-white/70 hover:translate-x-1 inline-block transition-all duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div className="md:col-span-4 space-y-6">
          <h3 className="text-white font-heading font-bold text-base uppercase tracking-wider">Kontak Pengelola</h3>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white/90">Kelompok Sadar Wisata (Pokdarwis)</p>
                <p className="text-white/60">Kecamatan Mantingan, Ngawi</p>
                <a
                  href="https://wa.me/6283865381608?text=Halo%2C%20Saya%20ingin%20bertanya%20mengenai%20wisata%20Gunung%20Kendil%20Jatimulyo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-accent hover:underline mt-1 transition-all duration-200"
                >
                  +62 838-6538-1608 (Ali Nur Hidayat)
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white/90">Website Resmi Desa</p>
                <a 
                  href="https://www.jatimulyo-ngawi.desa.id" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-accent hover:underline transition-all duration-200"
                >
                  www.jatimulyo-ngawi.desa.id
                </a>
              </div>
            </li>
          </ul>
        </div>
      </Container>

      {/* Underbar Copyright */}
      <div className="border-t border-white/5 mt-16 pt-8">
        <Container className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 text-center md:text-left">
          <div className="space-y-1">
            <p>
              © {currentYear} Desa Wisata Gunung Kendil, Desa Jatimulyo, Kec. Mantingan, Kab. Ngawi. All rights reserved.
            </p>
            <p className="text-white/30 text-[11px]">
              Dibuat dengan 💚 oleh kelompok <span className="text-accent font-medium">KKN 1 UINSA 2026</span> untuk pengembangan ekowisata Desa Jatimulyo.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-white/60 transition-colors">Kebijakan Privasi</a>
          </div>
        </Container>
      </div>
    </footer>
  )
}
