"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"
import { PrimaryButton } from "@/components/ui/primary-button"

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Sejarah", href: "#sejarah" },
  { label: "Daya Tarik", href: "#daya-tarik" },
  { label: "Galeri", href: "#galeri" },
  { label: "Fasilitas", href: "#fasilitas" },
  { label: "Lokasi", href: "#lokasi" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("beranda")

  // Handle scroll effects (glassmorphism background change)
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll spy to detect active section
  React.useEffect(() => {
    const observers = navItems.map((item) => {
      const id = item.href.substring(1)
      const element = document.getElementById(id)
      if (!element) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id)
            }
          })
        },
        { threshold: 0.5, rootMargin: "-80px 0px -40% 0px" }
      )
      observer.observe(element)
      return { observer, element }
    })

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.element)
        }
      })
    }
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-background/70 backdrop-blur-md shadow-soft py-4 border-textSecondary/10"
          : "bg-transparent py-6"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <a
          href="#beranda"
          onClick={(e) => handleNavClick(e, "#beranda")}
          className="flex items-center space-x-2 text-primary font-heading font-extrabold text-xl md:text-2xl tracking-tight transition-transform hover:scale-105"
        >
          <span className="font-accent italic font-normal text-textPrimary mr-1 text-2xl md:text-3xl">Visit</span>
          Gunung Kendil
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1)
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "relative px-4 py-2 font-body text-sm font-medium transition-colors hover:text-primary",
                  isActive ? "text-primary font-semibold" : "text-textSecondary"
                )}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <PrimaryButton
            onClick={(e) => {
              const el = document.getElementById("daya-tarik")
              if (el) {
                el.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="px-6 py-2.5 text-sm"
          >
            Jelajahi
          </PrimaryButton>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-full hover:bg-textSecondary/5 text-textPrimary transition-colors"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-background/95 backdrop-blur-md border-b border-textSecondary/10 overflow-hidden"
          >
            <Container className="py-6 flex flex-col space-y-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "px-4 py-2 rounded-xl font-body text-base font-medium transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-textSecondary hover:bg-textSecondary/5 hover:text-textPrimary"
                    )}
                  >
                    {item.label}
                  </a>
                )
              })}
              <div className="pt-2 px-4">
                <PrimaryButton
                  onClick={() => {
                    setIsOpen(false)
                    const el = document.getElementById("daya-tarik")
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="w-full justify-center"
                >
                  Jelajahi
                </PrimaryButton>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
