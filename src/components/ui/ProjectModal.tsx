"use client"

import React, { useState } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, X, ChevronRight, ChevronLeft } from "lucide-react"
import { FaGithub, FaLinkedin, FaVideo } from "react-icons/fa6"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { Project } from "@/lib/content"

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [imgIdx, setImgIdx] = useState(0)
  const modalRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
        return
      }

      if (e.key === "Tab") {
        if (!modalRef.current) return
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ) as NodeListOf<HTMLElement>
        
        if (focusableElements.length === 0) return

        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus()
            e.preventDefault()
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus()
            e.preventDefault()
          }
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    
    // Default focus to modal container or first element
    if (modalRef.current) {
      setTimeout(() => {
        const closeBtn = modalRef.current?.querySelector('button')
        closeBtn?.focus()
      }, 50)
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, onClose])

  if (typeof document === "undefined") return null

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (project?.screenshots) {
      setImgIdx((prev) => (prev === project.screenshots.length - 1 ? 0 : prev + 1))
    }
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (project?.screenshots) {
      setImgIdx((prev) => (prev === 0 ? project.screenshots.length - 1 : prev - 1))
    }
  }

  return createPortal(
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-y-auto custom-scrollbar"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          data-lenis-prevent
        >
          {/* Locked scrolling backdrop */}
          <div
            className="fixed inset-0 bg-[#0A0A0F]/80 backdrop-blur-3xl cursor-pointer"
            onClick={onClose}
          />

          {/* Wrapper layout enforcing correct flex positioning */}
          <div className="relative min-h-screen flex items-start justify-center p-4 md:p-8 lg:py-[10vh] pointer-events-none">
            <motion.div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 30 } }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              className="relative z-10 w-full max-w-[1100px] h-max bg-bg-card/80 backdrop-blur-2xl border border-white/10 rounded-[32px] md:rounded-[48px] shadow-[0_40px_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
              tabIndex={-1}
            >
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-4 right-4 md:top-6 md:right-6 w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent-primary z-30 transition-all duration-300"
              >
                <X size={20} />
              </button>

              <div className="w-full p-6 md:p-8 lg:p-10 flex flex-col gap-8 md:gap-10">

                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[24px] md:rounded-[32px] overflow-hidden bg-bg-page border border-white/5 group">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={imgIdx}
                      src={project.screenshots[imgIdx]}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 w-full h-full object-contain"
                    />
                  </AnimatePresence>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent pointer-events-none" />

                  <button
                    onClick={prevImage}
                    aria-label="Previous screenshot"
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 hover:bg-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:opacity-100 focus:translate-x-0"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    aria-label="Next screenshot"
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 hover:bg-accent-primary focus:outline-none focus:ring-2 focus:ring-accent-primary focus:opacity-100 focus:translate-x-0"
                  >
                    <ChevronRight size={24} />
                  </button>

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.screenshots?.map((_: string, idx: number) => (
                      <div
                        key={idx}
                        className={cn(
                          "h-2 rounded-full transition-all duration-300",
                          idx === imgIdx ? "w-8 bg-white" : "w-2 bg-white/30"
                        )}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-8 flex flex-col">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="bg-accent-primary/20 text-accent-hover px-4 py-1.5 rounded-full text-[13px] font-medium tracking-wide">
                        {project.category}
                      </span>
                      <span className="text-muted font-mono text-[13px]">
                        Role: {project.role}
                      </span>
                    </div>

                    <h2 id="modal-title" className="text-[32px] md:text-[48px] font-bold font-display text-white leading-tight mb-6">
                      {project.title}
                    </h2>

                    <p className="text-[16px] md:text-[18px] text-body/90 leading-relaxed font-sans mb-8">
                      {project.description}
                    </p>

                    <h4 className="text-[14px] text-white/50 font-mono tracking-widest uppercase mb-4">Core Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t: string) => (
                        <span
                          key={t}
                          className="bg-white/5 border border-white/10 text-white/80 font-mono text-[13px] px-[16px] py-[8px] rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col gap-4">
                    <div className="p-6 rounded-[24px] bg-white/5 border border-white/10 flex flex-col gap-4 sticky top-0">
                      <h4 className="text-[14px] text-white/50 font-mono tracking-widest uppercase mb-2">Project Links</h4>
                      
                      {project.live && project.live !== "#" && (
                        <Button variant="default" className="w-full justify-between group h-14" asChild>
                          <a href={project.live} target="_blank" rel="noreferrer">
                            View Live Site
                            <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </a>
                        </Button>
                      )}

                      {project.github && project.github !== "#" && (
                        <Button variant="ghost" className="w-full justify-between bg-white/[0.03] border-white/10 hover:bg-white/10 h-14" asChild>
                          <a href={project.github} target="_blank" rel="noreferrer">
                            Source Code
                            <FaGithub size={18} />
                          </a>
                        </Button>
                      )}

                      {project.video && project.video !== "#" && (
                        <Button variant="ghost" className="w-full justify-between bg-white/[0.03] border-white/10 hover:bg-white/10 h-14" asChild>
                          <a href={project.video} target="_blank" rel="noreferrer">
                            Watch Video
                            <FaVideo size={18} />
                          </a>
                        </Button>
                      )}

                      {project.linked && project.linked !== "#" && (
                        <Button variant="ghost" className="w-full justify-between bg-white/[0.03] border-white/10 hover:bg-white/10 h-14" asChild>
                          <a href={project.linked} target="_blank" rel="noreferrer">
                            LinkedIn Post
                            <FaLinkedin size={18} />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
