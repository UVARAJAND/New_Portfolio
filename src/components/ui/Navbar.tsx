"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { siteContent } from "@/lib/content"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("Home")

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return
    element.scrollIntoView({ behavior: "smooth", block: "start" })
    setActiveSection(id.charAt(0).toUpperCase() + id.slice(1))
    setIsOpen(false)
  }

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting)
        if (visibleEntry?.target.id) {
          const sectionName = visibleEntry.target.id.charAt(0).toUpperCase() + visibleEntry.target.id.slice(1)
          setActiveSection(sectionName)
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -75% 0px",
        threshold: 0,
      }
    )

    siteContent.navbar.links.forEach((link) => {
      const element = document.getElementById(link.toLowerCase())
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isScrolled ? 0 : -100, opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeOut" as const }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between bg-black/20 border border-white/5 backdrop-blur-3xl rounded-[100px] p-2 pr-4 shadow-[0_20px_80px_rgba(124,58,237,0.25)] w-max max-w-[90vw] transition-all duration-500 overflow-hidden group/nav"
      >
        {/* Liquid internal glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 via-link/10 to-transparent opacity-0 group-hover/nav:opacity-100 blur-[20px] pointer-events-none transition-opacity duration-700" />

        <Link href="#home" className="relative z-10 text-[18px] font-black font-display tracking-tight mr-6 md:mr-8 ml-4 flex items-center gap-2">
          {/* A tiny glowing orb next to logo */}
          <span className="w-2 h-2 rounded-full bg-accent-primary shadow-[0_0_12px_rgba(124,58,237,0.8)] animate-pulse" />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60">
            {siteContent.navbar.logo}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2 mr-6 relative z-10">
          {siteContent.navbar.links.map((link) => {
            const isActive = activeSection === link
            return (
              <Link
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.toLowerCase())
                }}
                className={`relative px-5 py-2 text-[14px] font-medium font-sans transition-colors group/link rounded-[32px] overflow-hidden ${
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                <span className="relative z-10">{link}</span>
                {/* Liquid Drop Hover Background */}
                <div 
                  className={`absolute inset-0 bg-white/10 transition-all duration-300 rounded-[32px] blur-[2px] ${
                    isActive ? "opacity-100 scale-100" : "opacity-0 scale-50 group-hover/link:opacity-100 group-hover/link:scale-100"
                  }`} 
                />
              </Link>
            )
          })}
        </nav>

        <div className="hidden md:flex items-center relative z-10">
          <button
            onClick={() => scrollToSection((siteContent.navbar.ctaHref || "#contact").replace("#", ""))}
            className="px-[24px] py-[10px] rounded-[32px] bg-accent-primary/80 text-white font-sans font-medium text-[14px] backdrop-blur-md border border-accent-primary hover:bg-accent-primary hover:scale-[1.03] transition-all shadow-[0_0_24px_rgba(124,58,237,0.5)]"
          >
            {siteContent.navbar.cta}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white/80 flex items-center ml-2 mr-2 hover:text-white transition-colors relative z-10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
          animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          className="fixed inset-0 z-40 bg-[#0A0A0F]/80 flex flex-col items-center justify-center gap-8 md:hidden"
        >
          {/* Background mobile blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <div className="absolute top-[20%] left-[-10%] w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] bg-accent-primary/20 blur-[80px] rounded-full animate-blob-float-1" />
            <div className="absolute bottom-[20%] right-[-10%] w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] bg-link/20 blur-[80px] rounded-full animate-blob-float-2" />
          </div>

          <nav className="flex flex-col items-center gap-6 relative z-10">
            {siteContent.navbar.links.map((link) => (
              <Link
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[28px] font-bold font-display text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 transition-all hover:scale-110"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.toLowerCase())
                }}
              >
                {link}
              </Link>
            ))}
          </nav>
          <button 
            className="mt-6 px-[32px] py-[16px] rounded-[40px] bg-accent-primary border border-accent-primary/50 text-white font-sans font-medium text-[16px] shadow-[0_0_32px_rgba(124,58,237,0.6)] relative z-10 transition-transform active:scale-95"
            onClick={() => scrollToSection((siteContent.navbar.ctaHref || "#contact").replace("#", ""))}
          >
            {siteContent.navbar.cta}
          </button>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  )
}
