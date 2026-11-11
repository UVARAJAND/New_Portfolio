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
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: EASE_OUT_CUBIC_BEZIER } },
  }

  const socialHover = {
    hover: { scale: 1.1, y: -4, transition: { type: "spring" as const, stiffness: 400, damping: 10 } }
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

      {/* Subtle Pink Section Tint */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.02),transparent_70%)] pointer-events-none -z-20" />

      {/* Layer 2: Infinite Marquee (softened) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full -z-10 overflow-hidden pointer-events-none opacity-[0.005]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 45, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="text-[15vw] font-black font-display tracking-tighter mx-8 uppercase">
              READY TO BUILD • OPEN FOR WORK •
            </span>
          ))}
        </motion.div>
      </div>

      {/* Layer 3: Main Grid Content */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="w-full max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch justify-between"
      >
        {/* LEFT COLUMN: Header & Info Roll */}
        <motion.div variants={childVariants} className="flex-1 flex flex-col justify-center text-left lg:max-w-[480px]">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full px-5 py-2.5 text-[13px] font-medium font-sans mb-8 w-max shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
            </span>
            <span className="text-white/80 tracking-widest uppercase font-mono text-[11px]">{siteContent.contact.callToAction}</span>
          </div>

          {/* Heading */}
          <h2 className="text-[44px] sm:text-[56px] md:text-[64px] font-black font-display tracking-tighter leading-[0.95] mb-6 text-white uppercase">
            Let&apos;s build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-white to-link">
              great things
            </span><br />
            together.
          </h2>

          {/* Description */}
          <p className="text-[16px] md:text-[18px] text-white/50 leading-relaxed font-sans mb-10">
            {siteContent.contact.description}
          </p>

          {/* Location & Status Info box */}
          {siteContent.contact.location && (
            <div className="flex flex-col gap-3 p-5 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-xl text-left relative overflow-hidden group">
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-success/10 blur-xl rounded-full pointer-events-none" />
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <MapPin size={16} className="text-accent-primary" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-white/40 uppercase block tracking-wider">CURRENT BASE</span>
                  <span className="text-[14px] text-white/80 font-sans font-bold">{siteContent.contact.location}</span>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* RIGHT COLUMN: Interactive Control Center Dashboard */}
        <motion.div
          variants={childVariants}
          className="flex-[1.2] w-full flex flex-col justify-center relative"
        >
          {/* Main Glass Panel */}
          <div className="relative w-full bg-[#0A0A0F]/60 border border-white/5 backdrop-blur-2xl rounded-[32px] p-6 sm:p-8 md:p-10 shadow-2xl flex flex-col gap-8 overflow-hidden">
            {/* Ambient Background Blur on Card */}
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-accent-primary/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-link/10 blur-[80px] rounded-full pointer-events-none" />

            {/* Corner Decorative Brackets */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/10 rounded-tl-2xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 rounded-tr-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/10 rounded-bl-2xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/10 rounded-br-2xl pointer-events-none" />

            {/* Grid for Email & Resume */}
            <div className="flex flex-col sm:flex-row items-stretch gap-6 w-full">
              {/* Left Action: Email */}
              <div className="flex-1 flex flex-col justify-between p-6 bg-white/[0.01] border border-white/5 rounded-2xl backdrop-blur-xl relative group min-h-[220px]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none rounded-2xl" />
                <div className="text-left z-10 flex flex-col h-full justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-accent-primary uppercase tracking-widest block">{"// DIRECT INQUIRY"}</span>
                    <h4 className="text-[18px] font-bold text-white mt-1 mb-1">Copy Email</h4>
                    <p className="text-[12px] text-white/40 font-sans leading-normal">Fastest way to get in touch for projects or career offers.</p>
                  </div>
                  <button
                    onClick={handleCopy}
                    id="contact-email-btn"
                    className={`relative group cursor-pointer w-full py-2.5 px-4 mt-4 rounded-lg border transition-all duration-300 ${copied
                      ? "border-success/50 text-success bg-success/5 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
                      : "border-white/15 text-white bg-white/5 hover:border-accent-primary/50 hover:bg-white/[0.08]"
                      }`}
                  >
                    {/* Glow transition layer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/10 via-link/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="relative z-10 flex items-center justify-center gap-2">
                      {copied ? <Check size={14} className="text-success shrink-0" /> : <Copy size={14} className="text-white/60 shrink-0" />}
                      <span className="text-[13px] sm:text-[14px] font-sans font-semibold tracking-wide truncate">
                        {copied ? "Copied Email!" : siteContent.contact.emailValue}
                      </span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Right Action: Resume */}
              {siteContent.contact.resumeHref && (
                <a
                  href={siteContent.contact.resumeHref}
                  target="_blank"
                  rel="noreferrer"
                  id="contact-resume-btn"
                  className="flex-1 flex flex-col p-6 bg-white/[0.01] border border-white/5 rounded-2xl backdrop-blur-xl relative group overflow-hidden min-h-[220px] hover:border-accent-primary/50 transition-all duration-500 cursor-pointer"
                >
                  {/* Simulated Document lines */}
                  <div className="absolute inset-0 p-6 opacity-10 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none flex flex-col gap-1.5">
                    <div className="flex justify-between items-center border-b border-white/20 pb-1.5 mb-1.5">
                      <span className="text-[7px] font-mono font-bold text-white uppercase tracking-wider">Uvarajan D</span>
                      <span className="text-[7px] font-mono text-white/50">B.Tech CSE</span>
                    </div>
                    <div className="h-1 bg-white/40 rounded w-3/4" />
                    <div className="h-0.5 bg-white/20 rounded w-5/6" />
                    <div className="h-0.5 bg-white/20 rounded w-1/2" />
                    <div className="h-1 bg-white/40 rounded w-2/3 mt-1" />
                    <div className="h-0.5 bg-white/20 rounded w-11/12" />
                  </div>

                  {/* Glow transition layer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/15 via-link/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="z-10 flex flex-col h-full justify-between items-start text-left">
                    <div>
                      <span className="text-[10px] font-mono text-link uppercase tracking-widest block">{"// ATTACHMENTS"}</span>
                      <h4 className="text-[18px] font-bold text-white mt-1 mb-1">Resume / CV</h4>
                      <p className="text-[12px] text-white/40 font-sans leading-normal">Review experience, skills, research papers and project accomplishments.</p>
                    </div>

                    <div className="w-full mt-6 py-3.5 rounded-full border border-white/10 text-white bg-white/5 hover:bg-white/[0.08] hover:border-accent-primary/50 text-center font-sans font-bold text-[13px] flex items-center justify-center gap-2 group-hover:bg-accent-primary/95 group-hover:border-accent-primary group-hover:text-white transition-all duration-300">
                      <span>View Resume</span>
                      <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </a>
              )}
            </div>

            {/* Socials Divider Row */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none my-2" />

            {/* Socials Row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full px-2">
              <span className="text-[11px] font-mono text-white/30 uppercase tracking-widest block">{"// SOCIAL NETWORK"}</span>
              <div className="flex items-center gap-4">
                {siteContent.contact.socials && siteContent.contact.socials.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover="hover"
                    variants={socialHover}
                    className="w-12 h-12 rounded-full bg-white/[0.02] border border-white/5 text-white/50 flex items-center justify-center hover:bg-white/10 hover:text-white hover:border-white/20 transition-all cursor-pointer shadow-lg"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}
