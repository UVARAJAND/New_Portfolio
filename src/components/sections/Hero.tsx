"use client"

import { ChevronDown, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { siteContent } from "@/lib/content"

const EASE_OUT_CUBIC_BEZIER: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function Hero() {
  const primaryHref = siteContent.hero.cta.primaryHref
  const secondaryHref = siteContent.hero.cta.secondaryHref

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: EASE_OUT_CUBIC_BEZIER } },
  }

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      
      {/* Layer 2: Infinite Marquee (softened) */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full -z-10 overflow-hidden pointer-events-none opacity-[0.01]">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 50, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="text-[18vw] font-black font-display tracking-tighter mx-8 uppercase">
              {siteContent.hero.name} • 
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-[1400px] mx-auto pt-20"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full px-5 py-2 text-[13px] md:text-[14px] font-medium font-sans shadow-[0_0_30px_rgba(255,255,255,0.05)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-primary shadow-[0_0_10px_rgba(124,58,237,0.8)]"></span>
            </span>
            <span className="text-white/80 tracking-widest uppercase font-mono">{siteContent.hero.badge}</span>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-[15vw] md:text-[120px] lg:text-[160px] font-black font-display tracking-tighter leading-[0.8] mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/40">
            {siteContent.hero.name}
          </span>
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="mb-12 flex max-w-[1000px] flex-col items-center gap-3 md:gap-4"
        >
          <span className="text-balance text-[22px] sm:text-[28px] md:text-[30px] lg:text-[36px] font-bold font-sans tracking-[0.04em] md:tracking-[0.08em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-accent-hover via-white to-link leading-tight">
            {siteContent.hero.role}
          </span>
          <span className="text-[11px] sm:text-[13px] md:text-[15px] lg:text-[17px] font-medium font-mono text-white/45 tracking-[0.16em] md:tracking-[0.28em] uppercase">
            {siteContent.hero.specialty}
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-[18px] md:text-[22px] font-sans text-white/50 max-w-[700px] leading-relaxed mb-16"
        >
          {siteContent.hero.valueProp}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 items-center w-full max-w-[600px] justify-center text-center">
        {primaryHref && (
          <a
            href={primaryHref}
            id="hero-cta"
            className="group relative flex items-center justify-center gap-4 w-full sm:w-auto px-8 py-5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:border-accent-primary/50 text-white font-sans font-bold text-[16px] transition-all duration-500 overflow-hidden shadow-2xl hover:bg-white/[0.05]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10 tracking-wider uppercase">{siteContent.hero.cta.primary}</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
        )}
        
        {secondaryHref && secondaryHref !== "#" && (
          <a
            href={secondaryHref}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-5 rounded-full border border-white/10 text-white/60 font-sans font-medium text-[16px] hover:text-white hover:bg-white/5 transition-all duration-300 tracking-wider uppercase"
          >
            {siteContent.hero.cta.secondary}
          </a>
        )}
      </motion.div>

    </motion.div>

    {/* Floating chevron */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      id="hero-chevron"
      className="absolute bottom-10 z-10 flex flex-col items-center gap-2"
    >
        <ChevronDown size={24} className="text-white/30 animate-bounce" />
      </motion.div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
    </section>
  )
}
