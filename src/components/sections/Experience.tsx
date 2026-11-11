"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Briefcase, Building2, CalendarDays, ExternalLink, FileText, MapPin } from "lucide-react"
import {
  SiFastapi,
  SiGrafana,
  SiJavascript,
  SiMysql,
  SiN8N,
  SiPrometheus,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si"
import { siteContent } from "@/lib/content"

const EASE_OUT_CUBIC_BEZIER: [number, number, number, number] = [0.16, 1, 0.3, 1]

const TECH_ICONS = {
  n8n: { Icon: SiN8N, color: "#EA4B71" },
  javascript: { Icon: SiJavascript, color: "#F7DF1E" },
  typescript: { Icon: SiTypescript, color: "#3178C6" },
  python: { Icon: SiPython, color: "#3776AB" },
  grafana: { Icon: SiGrafana, color: "#F46800" },
  prometheus: { Icon: SiPrometheus, color: "#E6522C" },
  mysql: { Icon: SiMysql, color: "#4479A1" },
  fastapi: { Icon: SiFastapi, color: "#009688" },
  "react.js": { Icon: SiReact, color: "#61DAFB" },
} as const

function TechPill({ name }: { name: string }) {
  const tech = TECH_ICONS[name.toLowerCase() as keyof typeof TECH_ICONS]
  const TechIcon = tech?.Icon

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[11px] md:text-[12px] uppercase tracking-[0.1em] text-white/55 transition-colors hover:border-white/20 hover:text-white/75">
      {TechIcon && (
        <TechIcon size={13} style={{ color: tech.color }} className="shrink-0" />
      )}
      {name}
    </span>
  )
}

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: EASE_OUT_CUBIC_BEZIER } },
  }

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative w-full min-h-screen py-[100px] md:py-[150px] scroll-mt-24 overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Subtle Emerald Section Tint */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.025),transparent_70%)] pointer-events-none -z-20" />

      {/* Layer 2: Infinite Marquee (softened) */}
      <div className="absolute top-[30%] left-0 -translate-y-1/2 w-full -z-10 overflow-hidden pointer-events-none opacity-[0.01]">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 50, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="text-[18vw] font-black font-display tracking-tighter mx-8 uppercase">
              EXPERIENCE •
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="w-full max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center text-center"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block text-[12px] md:text-[14px] font-mono text-success uppercase tracking-[0.2em] mb-4 bg-white/5 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.02)]">
            {siteContent.experience.sectionTag}
          </span>
        </motion.div>

        <motion.h2
          id="experience-heading"
          variants={itemVariants}
          className="text-[40px] sm:text-[60px] md:text-[90px] lg:text-[120px] font-black font-display text-white mb-6 tracking-tighter leading-[0.9]"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-success via-white to-white">
            EXPERIENCE.
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-[18px] md:text-[22px] font-sans text-white/50 max-w-[640px] leading-relaxed mb-20"
        >
          {siteContent.experience.description}
        </motion.p>

        <div className="relative w-full max-w-[1100px]">
          {/* Timeline rail */}
          <div
            aria-hidden
            className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-success/50 via-white/10 to-transparent md:left-[15px]"
          />

          <ol className="flex flex-col gap-8 md:gap-10">
            {siteContent.experience.items.map((item) => (
              <motion.li
                key={`${item.company}-${item.role}`}
                variants={itemVariants}
                className="relative pl-10 md:pl-14"
              >
                {/* Timeline node */}
                <span
                  aria-hidden
                  className="absolute left-0 top-6 md:top-8 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full border border-success/30 bg-[#0A0A0F] shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                >
                  <span
                    className={`h-2 w-2 rounded-full ${
                      item.current ? "bg-success animate-pulse" : "bg-success/60"
                    }`}
                  />
                </span>

                <article className="group relative w-full text-left">
                  {/* Hover Glow Layer */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-success/15 to-link/5 rounded-[36px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

                  <div className="relative z-10 bg-white/[0.02] backdrop-blur-3xl border border-white/5 group-hover:border-white/20 rounded-[32px] p-6 md:p-8 transition-all duration-500 hover:bg-white/[0.05] shadow-xl">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] ${
                            item.logo ? "h-14 w-28 p-2" : "h-14 w-14 p-3"
                          }`}
                        >
                          {item.logo ? (
                            <Image
                              src={item.logo}
                              alt={`${item.company} logo`}
                              width={112}
                              height={33}
                              unoptimized
                              className="h-auto w-full object-contain"
                            />
                          ) : (
                            <Briefcase size={22} className="text-success/80" />
                          )}
                        </div>

                        <div>
                          <h3 className="text-[22px] md:text-[30px] font-display font-black text-white leading-tight tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all">
                            {item.role}
                          </h3>

                          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] md:text-[12px] uppercase tracking-[0.16em] text-white/40">
                            <span className="inline-flex items-center gap-1.5">
                              <Building2 size={13} className="text-success/80 shrink-0" />
                              {item.company}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <Briefcase size={13} className="text-success/80 shrink-0" />
                              {item.type}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <MapPin size={13} className="text-success/80 shrink-0" />
                              {item.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      <span
                        className={`inline-flex shrink-0 items-center gap-2 self-start rounded-full border px-4 py-2 font-mono text-[11px] md:text-[12px] uppercase tracking-[0.12em] ${
                          item.current
                            ? "border-success/40 bg-success/10 text-success"
                            : "border-white/10 bg-white/5 text-white/50"
                        }`}
                      >
                        <CalendarDays size={13} className="shrink-0" />
                        {item.start} – {item.end}
                      </span>
                    </div>

                    <p className="mt-6 text-[15px] md:text-[17px] leading-relaxed text-white/55 font-sans">
                      {item.summary}
                    </p>

                    <ul className="mt-6 flex flex-col gap-3">
                      {item.highlights.map((highlight, index) => (
                        <li
                          key={`${item.company}-highlight-${index}`}
                          className="flex items-start gap-3 text-[14px] md:text-[15px] leading-relaxed text-white/60 font-sans"
                        >
                          <span
                            aria-hidden
                            className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-success/70"
                          />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {((item.tech && item.tech.length > 0) || item.document) && (
                      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        {item.tech && item.tech.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {item.tech.map((tech) => (
                              <TechPill key={tech} name={tech} />
                            ))}
                          </div>
                        )}

                        {item.document && (
                          <a
                            href={item.document.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-success/30 bg-success/10 px-4 py-2 font-mono text-[11px] md:text-[12px] uppercase tracking-[0.1em] text-success transition-all hover:border-success/50 hover:bg-success/15 hover:text-white"
                          >
                            <FileText size={13} className="shrink-0" />
                            {item.document.label}
                            <ExternalLink size={12} className="shrink-0 opacity-70" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              </motion.li>
            ))}
          </ol>
        </div>
      </motion.div>

      {/* Section Divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
    </section>
  )
}
