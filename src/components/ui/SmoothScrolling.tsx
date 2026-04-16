"use client";
import React, { useEffect } from 'react';
import Lenis from 'lenis';

export function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    // Initialize Lenis for buttery-smooth liquid scroll
    const lenis = new Lenis({
      lerp: 0.06, // Creates the fluid, lagging "liquid" effect
      wheelMultiplier: 1.0,
      smoothWheel: true,
    });

    let frameId = 0

    function raf(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }
    frameId = requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(frameId)
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
