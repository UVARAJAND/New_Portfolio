"use client";

import React, { useEffect, useState } from "react";

interface SectionBackground {
  id: string;
  bg: string;
}

const SECTIONS: SectionBackground[] = [
  { id: "home", bg: "#050508" },
  { id: "about", bg: "#0A0813" },
  { id: "experience", bg: "#07130F" },
  { id: "skills", bg: "#061018" },
  { id: "system-design", bg: "#08111A" },
  { id: "projects", bg: "#100816" },
  { id: "achievements", bg: "#120C08" },
  { id: "contact", bg: "#090912" },
];

export function BackgroundTransition() {
  const [activeSectionId, setActiveSectionId] = useState<string>("home");

  useEffect(() => {
    // Configure intersection observer to check when sections cross the middle of screen
    const observerOptions = {
      root: null,
      rootMargin: "-45% 0px -45% 0px", // Trigger when the section passes through viewport center
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSectionId(entry.target.id);
        }
      });
    }, observerOptions);

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const activeSection = SECTIONS.find((s) => s.id === activeSectionId) || SECTIONS[0];

  return (
    <>
      {/* Base Transitioning Background */}
      <div
        className="fixed inset-0 -z-50 pointer-events-none transition-colors duration-[1500ms] ease-in-out"
        style={{
          backgroundColor: activeSection.bg,
        }}
      />
      {/* Fixed Global Ambient Glows */}
      <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
        {/* Purple Glow - upper left */}
        <div className="absolute top-[15vh] left-[-15vw] w-[60vw] h-[60vw] max-w-[800px] rounded-full bg-[rgba(124,58,237,0.05)] blur-[120px] mix-blend-screen" />
        {/* Cyan Glow - middle right */}
        <div className="absolute top-[45vh] right-[-15vw] w-[55vw] h-[55vw] max-w-[700px] rounded-full bg-[rgba(6,182,212,0.04)] blur-[120px] mix-blend-screen" />
        {/* Soft Neutral Glow - bottom center */}
        <div className="absolute top-[80vh] left-[25vw] w-[50vw] h-[50vw] max-w-[800px] rounded-full bg-[rgba(255,255,255,0.015)] blur-[150px] mix-blend-screen" />
      </div>
    </>
  );
}
