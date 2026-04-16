"use client"

import { motion } from "framer-motion"
import { siteContent } from "@/lib/content"

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  const LiquidPill = ({ title, highlight = false }: { title: string, highlight?: boolean }) => (
    <div className={`flex items-center justify-center px-6 py-4 md:px-8 md:py-5 border rounded-full backdrop-blur-2xl shadow-2xl hover:scale-110 transition-all duration-500 cursor-default ${highlight ? 'bg-accent-primary/20 border-accent-primary/40 text-white shadow-[0_0_40px_rgba(124,58,237,0.3)] hover:bg-accent-primary/30 z-10 relative' : 'bg-white/[0.03] border-white/10 text-white/70 hover:bg-white/[0.08] hover:text-white hover:border-white/30'}`}>
      <span className={`font-mono text-[14px] md:text-[18px] tracking-widest uppercase ${highlight ? 'font-bold' : 'font-medium'}`}>{title}</span>
    </div>
  )

  return (
    <section id="skills" className="relative w-full min-h-screen py-[100px] md:py-[150px] scroll-mt-24 overflow-hidden flex flex-col items-center justify-center">
      
      {/* Intense Core Glows */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[900px] bg-accent-primary/15 blur-[150px] pointer-events-none -z-20 rounded-full mix-blend-screen" />
      <div className="absolute bottom-[20%] left-[20%] w-[60vw] h-[60vw] max-w-[800px] bg-[#A78BFA]/10 blur-[150px] pointer-events-none -z-20 rounded-full mix-blend-screen" />

      {/* Layer 2: Infinite Marquee */}
      <div className="absolute top-[40%] left-0 -translate-y-1/2 w-full -z-10 overflow-hidden pointer-events-none opacity-[0.03]">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="text-[18vw] font-black font-display tracking-tighter mx-8 uppercase">
              TECH STACK • 
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="w-full max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block text-[12px] md:text-[14px] font-mono text-accent-primary uppercase tracking-[0.2em] mb-4 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.02)]">
             {siteContent.skills.sectionTag}
          </span>
        </motion.div>

        <motion.h3 variants={itemVariants} className="text-[40px] sm:text-[60px] md:text-[90px] lg:text-[120px] font-black font-display text-white mb-6 tracking-tighter leading-[0.9]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-link">
            TECHNICAL<br />ARSENAL.
          </span>
        </motion.h3>

        <motion.p variants={itemVariants} className="text-[18px] md:text-[22px] font-sans text-white/50 max-w-[600px] leading-relaxed mb-24">
          {siteContent.skills.description}
        </motion.p>

        {/* Floating Organic Clusters */}
        <div className="flex flex-col gap-16 md:gap-24 w-full">
          
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-6 md:gap-10">
            <span className="text-[12px] sm:text-[16px] md:text-[20px] font-display font-black text-white/30 uppercase tracking-[0.3em] text-center px-4">Backend Architecture & Databases</span>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full max-w-[1200px]">
              {[
                ...(siteContent.skills.categories.backend || []), 
                ...(siteContent.skills.categories.databases || []), 
                ...(siteContent.skills.categories.orm || [])
              ].map(skill => <LiquidPill key={skill} title={skill} highlight={(siteContent.skills.categories.backend || []).includes(skill)} />)}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center gap-6 md:gap-10">
            <span className="text-[12px] sm:text-[16px] md:text-[20px] font-display font-black text-white/30 uppercase tracking-[0.3em] text-center px-4">Core Languages & Frontend</span>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full max-w-[1200px]">
              {[
                ...(siteContent.skills.categories.languages || []), 
                ...(siteContent.skills.categories.frontend || [])
              ].map(skill => <LiquidPill key={skill} title={skill} />)}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center gap-6 md:gap-10">
            <span className="text-[12px] sm:text-[16px] md:text-[20px] font-display font-black text-white/30 uppercase tracking-[0.3em] text-center px-4">DevOps & Tooling</span>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full max-w-[1000px]">
              {[
                ...(siteContent.skills.categories.devops_tools || []), 
                ...(siteContent.skills.categories.developer_tools || [])
              ].map(skill => <LiquidPill key={skill} title={skill} />)}
            </div>
          </motion.div>

        </div>

      </motion.div>
    </section>
  )
}
