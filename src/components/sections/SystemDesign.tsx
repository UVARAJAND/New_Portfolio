"use client"

import { motion } from "framer-motion"
import { siteContent } from "@/lib/content"

const EASE_OUT_CUBIC_BEZIER: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function SystemDesign() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: EASE_OUT_CUBIC_BEZIER, staggerChildren: 0.15 } },
  }

  return (
    <section className="relative w-full min-h-screen py-[100px] md:py-[150px] scroll-mt-24 overflow-hidden flex flex-col items-center">
      
      {/* Intense Core Glows */}
      <div className="absolute top-[20%] right-[10%] -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] bg-link/10 blur-[150px] pointer-events-none -z-20 rounded-full mix-blend-screen" />
      <div className="absolute top-[80%] left-[10%] -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[700px] bg-accent-primary/10 blur-[150px] pointer-events-none -z-20 rounded-full mix-blend-screen" />

      {/* Layer 2: Infinite Marquee */}
      <div className="absolute top-[20%] left-0 -translate-y-1/2 w-full -z-10 overflow-hidden pointer-events-none opacity-[0.03]">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="text-[18vw] font-black font-display tracking-tighter mx-8 uppercase">
              ARCHITECTURE • 
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="w-full max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col items-center text-center"
      >
        <motion.div variants={sectionVariants} className="mb-20 flex flex-col items-center">
          <h2 className="text-[36px] sm:text-[50px] md:text-[80px] lg:text-[110px] font-black font-display tracking-tighter leading-[0.9] mb-6 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-white to-white">
              SYSTEMS.
            </span>
          </h2>
          <p className="text-[18px] md:text-[22px] font-sans text-white/50 max-w-[600px] leading-relaxed">
            {siteContent.systemDesign.description}
          </p>
        </motion.div>

        <div className="flex flex-col gap-12 w-full max-w-[1000px]">
          {siteContent.systemDesign.designs.map((design, i) => (
            <motion.div key={i} variants={sectionVariants} className="group relative w-full text-left">
              {/* Intense Hover Glow Layer */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent-primary/20 to-link/10 rounded-[48px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
              
              <div className="relative z-10 bg-white/[0.02] backdrop-blur-3xl border border-white/5 group-hover:border-white/20 rounded-[40px] p-8 md:p-12 transition-all duration-500 hover:bg-white/[0.05] shadow-2xl flex flex-col items-start">
                <span className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 font-mono text-[12px] md:text-[14px] text-white/70 tracking-widest uppercase mb-6 group-hover:border-accent-primary/50 group-hover:bg-accent-primary/10 transition-colors">
                  {design.tag}
                </span>

                <h3 className="text-[28px] md:text-[42px] font-display font-black text-white leading-tight mb-6 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all">
                  {design.title}
                </h3>

                <p className="text-[16px] md:text-[20px] font-sans text-white/60 leading-relaxed mb-10 w-full lg:w-[80%]">
                  {design.description}
                </p>

                <div className="mt-auto w-full pt-6 border-t border-white/5 flex flex-wrap items-center gap-2 font-mono text-[13px] md:text-[15px]">
                  <span className="text-white/40 uppercase tracking-wider">Key Decision:</span>
                  <span className="text-accent-primary font-bold pl-2">{design.decisionLabel}</span>
                  <span className="text-white/30 px-2">—</span>
                  <span className="text-link font-medium">{design.decisionValue}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
