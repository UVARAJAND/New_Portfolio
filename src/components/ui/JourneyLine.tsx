"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "framer-motion"

export function JourneyLine() {
  const [points, setPoints] = useState<{ x: number; y: number }[]>([])
  const [activeNodeIndex, setActiveNodeIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const svgRef = useRef<SVGSVGElement>(null)

  // Accessibility check for user motion preferences
  const shouldReduceMotion = useReducedMotion()

  // Measure section midpoint coordinates dynamically with responsive overrides
  useEffect(() => {
    const updateCoordinates = () => {
      if (typeof window === "undefined") return

      const width = window.innerWidth
      const mobileMode = width < 768
      const tabletMode = width >= 768 && width < 1200

      setIsMobile(mobileMode)

      const sectionIds = ["about", "experience", "skills", "system-design", "projects", "achievements", "contact"]
      const coords = sectionIds.map((id) => {
        const el = document.getElementById(id)
        if (!el) return null

        const rect = el.getBoundingClientRect()
        const pageY = rect.top + window.scrollY

        let y = pageY + 120
        let x = rect.left + rect.width / 2 // Center default

        // Try to get vertical center of the specific target milestone elements for perfect alignment
        let targetEl = null
        if (id === "about") {
          targetEl = document.getElementById("about-me-tag")
        } else if (id === "experience") {
          targetEl = document.getElementById("experience-heading")
        } else if (id === "skills") {
          targetEl = document.getElementById("toolkit-tag")
        } else if (id === "system-design") {
          targetEl = document.getElementById("systems-heading")
        } else if (id === "projects") {
          targetEl = document.getElementById("projects-heading")
        } else if (id === "achievements") {
          targetEl = document.getElementById("achievements-heading")
        } else if (id === "contact") {
          targetEl = document.getElementById("contact-email-btn")
        }

        if (targetEl) {
          const targetRect = targetEl.getBoundingClientRect()
          y = targetRect.top + window.scrollY + targetRect.height / 2
          if (id === "contact") {
            x = targetRect.left + targetRect.width / 2
          }
        }

        if (id !== "contact") {
          // Responsive X-coordinate placements (Weaving path)
          if (mobileMode) {
            // Mobile: Fix path on the left margin (24px offset) to prevent content collisions
            x = rect.left + 24
          } else if (tabletMode) {
            // Tablet: Narrower amplitude offsets to prevent grid card collisions
            if (id === "about") {
              x = rect.left + rect.width * 0.18
            } else if (id === "experience") {
              x = rect.left + rect.width * 0.82
            } else if (id === "skills") {
              x = rect.left + rect.width * 0.18
            } else if (id === "system-design") {
              x = rect.left + rect.width * 0.82
            } else if (id === "projects") {
              x = rect.left + rect.width * 0.18
            } else if (id === "achievements") {
              x = rect.left + rect.width * 0.82
            }
          } else {
            // Desktop: Full asymmetrical canvas weaving
            if (id === "about") {
              x = rect.left + Math.max(100, rect.width * 0.12)
            } else if (id === "experience") {
              x = rect.left + Math.min(rect.width - 100, rect.width * 0.88)
            } else if (id === "skills") {
              x = rect.left + Math.max(100, rect.width * 0.12)
            } else if (id === "system-design") {
              x = rect.left + Math.min(rect.width - 100, rect.width * 0.88)
            } else if (id === "projects") {
              x = rect.left + Math.max(100, rect.width * 0.12)
            } else if (id === "achievements") {
              x = rect.left + Math.min(rect.width - 100, rect.width * 0.88)
            }
          }
        }

        return { x, y }
      }).filter(Boolean) as { x: number; y: number }[]

      setPoints(coords)
    }

    updateCoordinates()

    // Setup native ResizeObserver to track layout shifts (e.g. Show More/Less expansion)
    let resizeObserver: ResizeObserver | null = null
    if (typeof window !== "undefined" && "ResizeObserver" in window) {
      const parentContainer = document.getElementById("about")?.parentElement || document.body
      resizeObserver = new ResizeObserver(() => {
        updateCoordinates()
      })
      resizeObserver.observe(parentContainer)
    }

    window.addEventListener("resize", updateCoordinates)

    return () => {
      window.removeEventListener("resize", updateCoordinates)
      if (resizeObserver) {
        resizeObserver.disconnect()
      }
    }
  }, [])

  // Sync active node index based on scroll proximity to midpoints
  useEffect(() => {
    const handleScroll = () => {
      if (points.length === 0) return
      const centerY = window.scrollY + window.innerHeight * 0.45

      let minDistance = Infinity
      let closestIdx = 0
      for (let i = 0; i < points.length; i++) {
        const dist = Math.abs(points[i].y - centerY)
        if (dist < minDistance) {
          minDistance = dist
          closestIdx = i
        }
      }
      setActiveNodeIndex(closestIdx)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [points])

  // Framer Motion scroll hook bound to path lengths
  const { scrollYProgress } = useScroll()
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 35,
    stiffness: 90
  })

  // Transform scroll progress [0.08, 0.95] to path length drawing offset [0, 1]
  const scrollPathLength = useTransform(smoothProgress, [0.08, 0.95], [0, 1])

  // Disable dynamic path drawing animations if user requests reduced motion
  const pathLength = shouldReduceMotion ? 1 : scrollPathLength

  if (points.length === 0 || isMobile) return null

  // Path generator strings for our consolidated hybrid design
  let activePath = ""
  let synapseLeft = ""
  let synapseRight = ""

  // Smooth S-curves (Center trunk)
  activePath = `M ${points[0].x} ${points[0].y}`
  for (let i = 1; i < points.length; i++) {
    const p0 = points[i - 1]
    const p1 = points[i]
    const dy = (p1.y - p0.y) / 2

    if (isMobile) {
      // Mobile: straight vertical timeline track down the left margin
      activePath += ` L ${p1.x} ${p1.y}`
    } else {
      activePath += ` C ${p0.x} ${p0.y + dy}, ${p1.x} ${p1.y - dy}, ${p1.x} ${p1.y}`
    }
  }

  // Draw branching braided curves (synapse left/right loops)
  if (!isMobile) {
    synapseLeft = `M ${points[0].x} ${points[0].y}`
    synapseRight = `M ${points[0].x} ${points[0].y}`
    for (let i = 1; i < points.length; i++) {
      const p0 = points[i - 1]
      const p1 = points[i]
      const dy = (p1.y - p0.y) / 2
      const dx = Math.abs(p1.x - p0.x) || 100
      const split = Math.min(100, dx * 0.7) || 40

      const isOdd = i % 2 === 1
      const leftOffset = isOdd ? -split : split
      const rightOffset = isOdd ? split : -split

      synapseLeft += ` C ${p0.x + leftOffset} ${p0.y + dy}, ${p1.x + leftOffset} ${p1.y - dy}, ${p1.x} ${p1.y}`
      synapseRight += ` C ${p0.x + rightOffset} ${p0.y + dy}, ${p1.x + rightOffset} ${p1.y - dy}, ${p1.x} ${p1.y}`
    }
  }

  // Calculate dynamic line bounding box to set SVG height
  const lastPoint = points[points.length - 1]
  const totalHeight = lastPoint.y + 150

  return (
    <div
      className="absolute inset-0 pointer-events-none -z-30 overflow-hidden"
      style={{
        height: `${totalHeight}px`,
        willChange: 'transform',
      }}
    >
      <svg ref={svgRef} className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Dynamic, multi-stop section-color gradients (Dim background, soft active tracks) */}
          <linearGradient id="section-gradient-dim" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.05" /> {/* About: Violet */}
            <stop offset="17%" stopColor="#10B981" stopOpacity="0.05" /> {/* Experience: Emerald */}
            <stop offset="33%" stopColor="#06B6D4" stopOpacity="0.05" /> {/* Skills: Cyan */}
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.05" /> {/* System Design: Blue */}
            <stop offset="67%" stopColor="#A855F7" stopOpacity="0.05" /> {/* Projects: Purple */}
            <stop offset="83%" stopColor="#F59E0B" stopOpacity="0.05" /> {/* Achievements: Amber */}
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.05" /> {/* Contact: Pink */}
          </linearGradient>

          <linearGradient id="section-gradient-bright" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.45" />
            <stop offset="17%" stopColor="#10B981" stopOpacity="0.5" />
            <stop offset="33%" stopColor="#06B6D4" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.5" />
            <stop offset="67%" stopColor="#A855F7" stopOpacity="0.5" />
            <stop offset="83%" stopColor="#F59E0B" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#EC4899" stopOpacity="0.45" />
          </linearGradient>

          <linearGradient id="bead-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C084FC" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#F472B6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* BACKGROUND BASE CHANNELS (Faint background trail paths) */}
        {activePath && (
          <path d={activePath} stroke="url(#section-gradient-dim)" strokeWidth="1.2" fill="none" />
        )}
        {!isMobile && synapseLeft && synapseRight && (
          <>
            <path d={synapseLeft} stroke="url(#section-gradient-dim)" strokeWidth="0.8" fill="none" />
            <path d={synapseRight} stroke="url(#section-gradient-dim)" strokeWidth="0.8" fill="none" />
          </>
        )}

        {/* ACTIVE DRAWN CHANNELS (Scroll synced path lengths) */}
        {activePath && (
          <motion.path
            d={activePath}
            style={{ pathLength }}
            stroke="url(#section-gradient-bright)"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
        )}
        {!isMobile && synapseLeft && synapseRight && (
          <>
            <motion.path
              d={synapseLeft}
              style={{ pathLength }}
              stroke="url(#section-gradient-bright)"
              strokeWidth="0.8"
              fill="none"
              strokeLinecap="round"
            />
            <motion.path
              d={synapseRight}
              style={{ pathLength }}
              stroke="url(#section-gradient-bright)"
              strokeWidth="0.8"
              fill="none"
              strokeLinecap="round"
            />
          </>
        )}

        {/* DYNAMIC MOVING BEAD (Slow, premium particle flow, disabled on prefers-reduced-motion) */}
        {!shouldReduceMotion && activePath && (
          <motion.path
            d={activePath}
            stroke="url(#bead-gradient)"
            strokeWidth="2.5"
            fill="none"
            strokeDasharray="24 1000"
            animate={{ strokeDashoffset: [1024, 0] }}
            transition={{ duration: 16, ease: "linear", repeat: Infinity }}
          />
        )}

        {/* RENDERING SECTION NODES */}
        {points.map((p, idx) => {
          const isActive = activeNodeIndex === idx
          const isCompleted = idx < activeNodeIndex

          // Responsive node sizing (smaller on mobile)
          const outerRadius = isMobile ? 12 : (isActive ? 16 : 8)
          const innerRadius = isMobile ? (isActive ? 4 : 3) : (isActive ? 6 : 4)

          return (
            <g key={idx} className="cursor-default select-none">
              {/* Node Outer Glow ring */}
              <circle
                cx={p.x}
                cy={p.y}
                r={outerRadius}
                className={`fill-transparent stroke-accent-primary/20 transition-all duration-700 ${isActive && !shouldReduceMotion ? "stroke-accent-primary/40 animate-pulse" : ""
                  }`}
                strokeWidth="1.2"
              />

              {/* Dynamic core pulse */}
              {isActive && !isMobile && !shouldReduceMotion && (
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={24}
                  className="fill-transparent stroke-accent-primary/10 transition-all animate-ping"
                  strokeWidth="0.5"
                  style={{
                    transformOrigin: `${p.x}px ${p.y}px`
                  }}
                />
              )}

              {/* Node Core */}
              <circle
                cx={p.x}
                cy={p.y}
                r={innerRadius}
                className="transition-all duration-500"
                fill={
                  isActive
                    ? "#A78BFA"
                    : isCompleted
                      ? "#7C3AED"
                      : "rgba(255,255,255,0.06)"
                }
                stroke={
                  isActive
                    ? "#FFF"
                    : isCompleted
                      ? "rgba(124,58,237,0.3)"
                      : "rgba(255,255,255,0.12)"
                }
                strokeWidth="1.2"
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}
