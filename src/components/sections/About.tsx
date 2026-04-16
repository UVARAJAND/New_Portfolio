"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { siteContent } from "@/lib/content"

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section id="about" className="relative w-full min-h-screen py-[100px] md:py-[150px] scroll-mt-24 overflow-hidden flex flex-col items-center justify-center">

      {/* Layer 1: Core Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] bg-accent-primary/10 blur-[150px] pointer-events-none -z-20 rounded-full mix-blend-screen" />
      <div className="absolute top-[60%] left-[30%] -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[700px] bg-link/10 blur-[150px] pointer-events-none -z-20 rounded-full mix-blend-screen" />

      {/* Layer 2: Infinite Marquee */}
      <div className="absolute top-[30%] left-0 -translate-y-1/2 w-full -z-10 overflow-hidden pointer-events-none opacity-[0.03]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 45, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="text-[18vw] font-black font-display tracking-tighter mx-8 uppercase">
              ABOUT ME • 
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="w-full max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block text-[12px] md:text-[14px] font-mono text-accent-primary uppercase tracking-[0.2em] mb-4 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.02)]">
            {siteContent.about.sectionTag}
          </span>
        </motion.div>

        <motion.h3 variants={itemVariants} className="text-[36px] sm:text-[50px] md:text-[80px] lg:text-[110px] font-black font-display text-white mb-10 tracking-tighter leading-[0.9]">
          {siteContent.about.heading.split(' ').map((word, i) => (
            <span key={i} className={i % 2 !== 0 ? "text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-link" : ""}>
              {word}{" "}
            </span>
          ))}
        </motion.h3>

        {/* Central Core: Image & Floating Stats */}
        <motion.div variants={itemVariants} className="relative w-full max-w-[800px] flex justify-center mb-20">
          
          <div className="w-[280px] h-[340px] md:w-[320px] md:h-[420px] relative flex justify-center items-center">
            {/* Background Offset Panels */}
            <div className="absolute inset-0 bg-accent-primary/20 transform rotate-[6deg] rounded-[32px] md:rounded-[40px] border border-accent-primary/30 z-0 opacity-70 group-hover:rotate-[8deg] transition-transform duration-500" />
            <div className="absolute inset-0 bg-link/20 transform -rotate-[4deg] rounded-[32px] md:rounded-[40px] border border-link/30 z-0 opacity-70 group-hover:-rotate-[6deg] transition-transform duration-500" />
            
            {/* Main Photo Container */}
            <div className="absolute inset-0 bg-[#111] rounded-[32px] md:rounded-[40px] border border-white/20 shadow-[-10px_20px_60px_rgba(0,0,0,0.5)] overflow-hidden group z-10 hover:-translate-y-2 transition-transform duration-500">
              <Image
                src={siteContent.about.profileImage}
                alt={siteContent.hero.name}
                fill
                sizes="(max-width: 768px) 280px, 320px"
                className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.05] group-hover:brightness-110 opacity-90"
              />
            </div>
          </div>

          {/* Floating Stat Orbs */}
          <div className="absolute -top-[20px] left-[5%] md:left-[15%] w-[110px] h-[110px] md:w-[130px] md:h-[130px] bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-full flex flex-col items-center justify-center z-20 shadow-2xl hover:scale-110 hover:border-accent-primary/50 transition-all duration-500 hover:bg-white/[0.05] animate-blob-float-1 p-2">
            <span className="text-[28px] md:text-[36px] font-black font-display text-white mb-[-4px]">{siteContent.about.stats.stat1.value}</span>
            <span className="text-[10px] font-mono text-accent-primary tracking-widest uppercase text-center break-words leading-tight">{siteContent.about.stats.stat1.label}</span>
          </div>

          <div className="absolute top-[40%] md:top-[30%] -right-[5%] md:right-[5%] w-[120px] h-[120px] md:w-[140px] md:h-[140px] bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-full flex flex-col items-center justify-center z-20 shadow-2xl hover:scale-110 hover:border-link/50 transition-all duration-500 hover:bg-white/[0.05] animate-blob-float-2 p-2">
            <span className="text-[32px] md:text-[42px] font-black font-display text-white mb-[-4px]">{siteContent.about.stats.stat2.value}</span>
            <span className="text-[10px] md:text-[12px] font-mono text-link tracking-widest uppercase text-center break-words leading-tight">{siteContent.about.stats.stat2.label}</span>
          </div>

          <div className="absolute -bottom-[10%] left-[10%] md:left-[30%] w-[100px] h-[100px] md:w-[120px] md:h-[120px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex flex-col items-center justify-center z-20 shadow-2xl hover:scale-110 hover:border-success/50 transition-all duration-500 hover:bg-success/10 animate-blob-float-3 p-2">
            <span className="text-[26px] md:text-[32px] font-black font-display text-success mb-[-4px]">{siteContent.about.stats.stat3.value}</span>
            <span className="text-[10px] font-mono text-white/50 tracking-widest uppercase text-center break-words leading-tight">{siteContent.about.stats.stat3.label}</span>
          </div>

        </motion.div>

        {/* Fluid Text Content */}
        <motion.div variants={itemVariants} className="flex flex-col gap-6 text-[18px] md:text-[22px] font-sans text-white/50 leading-relaxed max-w-[800px] text-center mb-16">
          {siteContent.about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>

        {/* Quick Facts Row */}
        <motion.div variants={itemVariants} className="w-full max-w-[1000px] flex flex-wrap justify-center gap-4 md:gap-8">
          {siteContent.about.facts.map((fact) => (
            <div key={fact.label} className="flex flex-col items-center px-6 py-4 bg-white/[0.03] backdrop-blur-xl border border-white/5 rounded-[32px] min-w-[200px]">
              <span className="text-[12px] font-mono text-white/40 tracking-[0.2em] uppercase mb-2">{fact.label}</span>
              <span className="text-[16px] md:text-[18px] font-sans font-bold text-white/90">{fact.value}</span>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  )
}
