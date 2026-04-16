"use client"

import React, { useState, useEffect } from "react"
import { ExternalLink } from "lucide-react"
import { FaGithub, FaLinkedin, FaVideo } from "react-icons/fa6"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectModal } from "@/components/ui/ProjectModal"
import { siteContent, type Project } from "@/lib/content"

const EASE_OUT_CUBIC_BEZIER: [number, number, number, number] = [0.16, 1, 0.3, 1]

export function Projects() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [selectedProject])

  const sectionVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: EASE_OUT_CUBIC_BEZIER } },
  }

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: EASE_OUT_CUBIC_BEZIER, delay: index * 0.15 }}
      className="h-full relative group cursor-pointer w-full"
      onClick={() => setSelectedProject(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          setSelectedProject(project)
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Open project details for ${project.title}`}
    >
      {/* Intense Hover Glow Layer */}
      <div className="absolute -inset-4 bg-gradient-to-r from-accent-primary/30 to-link/20 rounded-[48px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />

      {/* Floating Pill Container */}
      <div className="relative z-10 flex flex-col h-full overflow-hidden bg-white/[0.02] backdrop-blur-3xl border border-white/5 group-hover:border-white/20 rounded-[40px] p-4 transition-all duration-500 ease-out shadow-xl hover:bg-white/[0.05]">

        {/* Thumbnail Preview */}
        <div className="w-full h-[240px] md:h-[280px] relative overflow-hidden bg-white/5 rounded-[32px] shrink-0 mb-6 group-hover:border-white/10 transition-colors duration-500">
          <Image
            src={project.screenshots[0]}
            alt={project.title}
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
            unoptimized={project.screenshots[0].includes("placehold.co")}
            className="object-cover object-center group-hover:scale-[1.05] transition-all duration-700 ease-out"
          />

          <div className="absolute top-5 left-5 bg-black/40 backdrop-blur-xl border border-white/10 text-white font-mono font-medium text-[11px] px-4 py-2 rounded-full z-10 tracking-widest uppercase">
             {project.category}
          </div>
        </div>

        {/* Dense Typography Focus */}
        <div className="px-4 pb-4 flex flex-col flex-grow text-center items-center">
          <h3 className="font-display font-black text-[24px] md:text-[32px] text-white leading-[1.1] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-500 mb-4 tracking-tight">
            {project.title}
          </h3>

          <p className="font-mono text-[11px] md:text-[13px] text-white/30 uppercase tracking-[0.2em] mb-8 group-hover:text-accent-primary/80 transition-colors">
            {project.role}
          </p>

          {/* Quick Links Row isolated gracefully */}
          <div className="flex gap-4 shrink-0 mt-auto justify-center">
            {project.github && project.github !== "#" && (
              <a href={project.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white/50 flex flex-col items-center justify-center hover:bg-white/10 hover:text-white hover:border-white/30 hover:scale-110 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto shadow-sm">
                <FaGithub size={20} />
              </a>
            )}
            {project.live && project.live !== "#" && (
              <a href={project.live} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white/50 flex flex-col items-center justify-center hover:bg-white/10 hover:text-white hover:border-white/30 hover:scale-110 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto shadow-sm">
                <ExternalLink size={20} />
              </a>
            )}
            {project.video && project.video !== "#" && (
              <a href={project.video} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white/50 flex flex-col items-center justify-center hover:bg-white/10 hover:text-white hover:border-white/30 hover:scale-110 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto shadow-sm">
                <FaVideo size={20} />
              </a>
            )}
            {project.linked && project.linked !== "#" && (
              <a href={project.linked} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white/50 flex flex-col items-center justify-center hover:bg-white/10 hover:text-white hover:border-white/30 hover:scale-110 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto shadow-sm">
                <FaLinkedin size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <>
      <section id="projects" className="relative w-full min-h-screen py-[100px] md:py-[150px] scroll-mt-24 overflow-hidden flex flex-col items-center">
        
        {/* Layer 1: Intense Core Glows */}
        <div className="absolute top-[20%] left-[80%] -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] bg-accent-primary/10 blur-[150px] pointer-events-none -z-20 rounded-full mix-blend-screen" />
        <div className="absolute top-[80%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[700px] bg-link/10 blur-[150px] pointer-events-none -z-20 rounded-full mix-blend-screen" />

        {/* Layer 2: Infinite Marquee */}
        <div className="absolute top-[20%] left-0 -translate-y-1/2 w-full -z-10 overflow-hidden pointer-events-none opacity-[0.03]">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 55, ease: "linear", repeat: Infinity }}
            className="flex whitespace-nowrap"
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="text-[18vw] font-black font-display tracking-tighter mx-8 uppercase">
                WORKS • 
              </span>
            ))}
          </motion.div>
        </div>

        <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={sectionVariants} 
            className="mb-20 flex flex-col items-center"
          >
            <h2 className="text-[46px] sm:text-[60px] md:text-[90px] lg:text-[120px] font-black font-display tracking-tighter leading-[0.9] mb-6 text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-white to-white">
                WORKS.
              </span>
            </h2>
            <p className="text-[18px] md:text-[22px] font-sans text-white/50 max-w-[600px] leading-relaxed">
               {siteContent.projects.description}
            </p>
          </motion.div>

          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full">
               {siteContent.projects.featured.map((project, i) => (
                <ProjectCard key={`feat-${i}`} project={project} index={i} />
              ))}
            </div>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.8, ease: EASE_OUT_CUBIC_BEZIER }}
                className="w-full overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 pb-4 w-full pt-16">
                  {siteContent.projects.hidden.map((project, i) => (
                    <ProjectCard key={`hid-${i}`} project={project} index={i} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={sectionVariants}
            className="flex justify-center mt-[80px]"
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group relative flex items-center justify-center gap-4 px-10 py-6 rounded-full bg-white/5 backdrop-blur-3xl border border-white/20 hover:border-accent-primary/50 text-white font-sans font-bold text-[14px] md:text-[16px] transition-all duration-500 shadow-2xl hover:bg-white/[0.08]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-transparent opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-500 pointer-events-none" />
              <span className="relative z-10 tracking-[0.2em] uppercase">
                {isExpanded ? "SHOW LESS" : "EXPLORE ALL WORKS"}
              </span>
            </button>
          </motion.div>
        </div>

      </section>

      <ProjectModal
        key={selectedProject?.title || "project-modal"}
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  )
}
