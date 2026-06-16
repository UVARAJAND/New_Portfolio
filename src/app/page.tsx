"use client"

import { Navbar } from "@/components/ui/Navbar"
import { Footer } from "@/components/ui/Footer"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Skills } from "@/components/sections/Skills"
import { SystemDesign } from "@/components/sections/SystemDesign"
import { Projects } from "@/components/sections/Projects"
import { Achievements } from "@/components/sections/Achievements"
import { Contact } from "@/components/sections/Contact"
import { BackgroundTransition } from "@/components/ui/BackgroundTransition"
import { JourneyLine } from "@/components/ui/JourneyLine"
import { motion } from "framer-motion"

const EASE_PAGE_FADE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export default function Home() {
  return (
    <>
      <BackgroundTransition />
      <JourneyLine />
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE_PAGE_FADE }}
        className="relative w-full flex flex-col pb-[120px] z-10"
      >
        <Hero />
        <About />
        <Skills />
        <SystemDesign />
        <Projects />
        <Achievements />
        <Contact />
      </motion.main>
      <Footer />
    </>
  )
}
