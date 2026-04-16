"use client"

import { motion } from "framer-motion"
import { siteContent } from "@/lib/content"

export function Achievements() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.15 } },
  }

  return (
    <section className="relative w-full py-[100px] md:py-[150px] scroll-mt-24 overflow-hidden flex flex-col items-center">
      
      {/* Intense Core Glows */}
      <div className="absolute top-[50%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[900px] bg-achievement/10 blur-[180px] pointer-events-none -z-20 rounded-full mix-blend-screen" />

      {/* Layer 2: Infinite Marquee */}
      <div className="absolute top-[30%] left-0 -translate-y-1/2 w-full -z-10 overflow-hidden pointer-events-none opacity-[0.03]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 50, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="text-[18vw] font-black font-display tracking-tighter mx-8 uppercase">
              ACHIEVEMENTS • 
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
          <h2 className="text-[32px] sm:text-[46px] md:text-[70px] lg:text-[100px] font-black font-display tracking-tighter leading-[0.9] mb-6 text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-achievement/80 via-white to-white">
              ACHIEVEMENTS.
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6 w-full max-w-[1200px]">
          {siteContent.achievements.items.map((item, i) => (
            <motion.div key={i} variants={sectionVariants} className="group relative w-full text-left">
              <div className="absolute -inset-2 bg-gradient-to-r from-achievement/20 to-transparent rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
              
              <div className="relative z-10 bg-white/[0.02] backdrop-blur-3xl border border-white/5 group-hover:border-white/20 rounded-[32px] md:rounded-full p-4 md:p-6 md:px-10 transition-all duration-500 hover:bg-white/[0.05] shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden">
                
                {/* Visual marker */}
                <div className="hidden md:flex absolute top-0 left-0 h-full w-[4px] bg-gradient-to-b from-transparent via-achievement/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex flex-col gap-2 md:w-[70%] z-10">
                  <h3 className="text-[20px] md:text-[28px] font-display font-black text-white leading-tight tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all">
                    {item.title}
                  </h3>
                  <p className="text-[14px] md:text-[16px] font-sans text-white/50 w-full leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-center gap-4 shrink-0 md:w-[30%] justify-start md:justify-end border-t border-white/10 md:border-none pt-4 md:pt-0 w-full z-10">
                  <div className="w-[12px] h-[12px] rounded-full bg-achievement/20 flex items-center justify-center border border-achievement/50">
                    <div className="w-1.5 h-1.5 rounded-full bg-achievement animate-pulse" />
                  </div>
                  <span className="font-mono text-[13px] md:text-[15px] font-bold text-achievement tracking-widest uppercase">
                    {item.rank}
                  </span>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
