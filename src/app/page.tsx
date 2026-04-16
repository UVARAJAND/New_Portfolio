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
import { motion } from "framer-motion"

export default function Home() {
  return (
    <>
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col pb-[120px]"
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
