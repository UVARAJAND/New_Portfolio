"use client"

import { useState } from "react"
import { Copy, Check, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { siteContent } from "@/lib/content"

const EASE_OUT_CUBIC_BEZIER: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1, 
      transition: { duration: 1, ease: "easeOut" as const, staggerChildren: 0.15 } 
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: EASE_OUT_CUBIC_BEZIER } },
  }

  const socialHover = {
    hover: { scale: 1.1, y: -5, transition: { type: "spring" as const, stiffness: 400, damping: 10 } }
  }

  const [copied, setCopied] = useState(false)
  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText(siteContent.contact.emailValue)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="relative w-full min-h-screen py-[100px] md:py-[150px] scroll-mt-24 overflow-hidden flex items-center justify-center">

      {/* Layer 1: Intense Core Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] bg-accent-primary/20 blur-[150px] pointer-events-none -z-20 rounded-full mix-blend-screen" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[600px] bg-link/20 blur-[120px] pointer-events-none -z-20 rounded-full mix-blend-screen" />

      {/* Layer 2: Infinite Marquee */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full -z-10 overflow-hidden pointer-events-none opacity-[0.03]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="text-[15vw] font-black font-display tracking-tighter mx-8 uppercase">
              READY TO BUILD • OPEN FOR WORK • 
            </span>
          ))}
        </motion.div>
      </div>

      {/* Layer 3: Main Content */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="w-full max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center"
      >
        {/* Availability Badge */}
        <motion.div 
          variants={childVariants} 
          className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full px-6 py-3 text-[14px] md:text-[16px] font-medium font-sans mb-12 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-success shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
          </span>
          <span className="text-white/80 tracking-wide uppercase">{siteContent.contact.callToAction}</span>
        </motion.div>

        {/* Oversized Typography */}
        <motion.h2 
          variants={childVariants} 
          className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[130px] font-black font-display tracking-tighter leading-[0.9] mb-8"
        >
          <span className="text-white">
            READY TO
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-white to-link">
            BUILD.
          </span>
        </motion.h2>

        <motion.p 
          variants={childVariants} 
          className="text-[18px] md:text-[22px] text-white/50 leading-relaxed font-sans max-w-[600px] mx-auto mb-20"
        >
          {siteContent.contact.description}
        </motion.p>

        {/* Giant Pill CTA (Email) */}
        <motion.div variants={childVariants} className="relative group mb-20 w-full max-w-[800px]">
          {/* Subtle Outer Glow that expands on hover */}
          <div className="absolute -inset-1 bg-gradient-to-r from-accent-primary to-link rounded-full blur-xl opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
          
          <button
            onClick={handleCopy}
            className="relative flex flex-col md:flex-row items-center justify-between w-full bg-[#0a0a0a]/80 backdrop-blur-3xl border border-white/10 group-hover:border-white/30 rounded-full p-4 md:p-6 pl-6 md:pl-10 pr-4 md:pr-6 shadow-2xl transition-all duration-500 hover:bg-white/[0.05] overflow-hidden cursor-pointer"
          >
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0 z-10 w-full text-center md:text-left px-2">
              <span className={`text-[12px] md:text-[14px] font-mono tracking-[0.2em] uppercase mb-1 transition-colors ${copied ? "text-success" : "text-white/40"}`}>
                {copied ? "COPIED TO CLIPBOARD!" : siteContent.contact.emailLabel}
              </span>
              <span className="text-[18px] sm:text-[24px] md:text-[32px] lg:text-[42px] font-bold font-sans text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all w-full flex-wrap break-all md:break-normal">
                {siteContent.contact.emailValue}
              </span>
            </div>
            
            <div className={`hidden md:flex w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 border items-center justify-center shrink-0 transition-all duration-500 z-10 ${copied ? 'border-success/50 bg-success/20 scale-110' : 'border-white/20 group-hover:scale-110 group-hover:bg-accent-primary/20'}`}>
              {copied ? <Check size={32} className="text-success" /> : <Copy size={32} className="text-white" />}
            </div>
          </button>
        </motion.div>

        {/* Floating Asymmetric Elements (Socials & Location) */}
        <motion.div variants={childVariants} className="flex flex-wrap items-center justify-center gap-6 px-4">
          
          {siteContent.contact.location && (
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full px-6 py-4 flex items-center gap-3 hover:bg-white/[0.08] transition-colors">
              <MapPin size={18} className="text-white/50" />
              <span className="text-[14px] md:text-[16px] text-white/70 font-sans tracking-wide">
                {siteContent.contact.location}
              </span>
            </div>
          )}

          {siteContent.contact.socials && siteContent.contact.socials.length > 0 && (
            <div className="flex items-center gap-4">
              <div className="h-4 w-px bg-white/20 mx-2 hidden sm:block" />
              {siteContent.contact.socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover="hover"
                  variants={socialHover}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/10 text-white/70 flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:bg-white/10 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          )}

        </motion.div>

      </motion.div>
    </section>
  )
}
