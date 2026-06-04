"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isAnimating, setIsAnimating] = useState(true);

  // We want to reset the animation state when the pathname changes (mount of template)
  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 900); // matches the longest animation duration

    return () => clearTimeout(timer);
  }, [pathname]);

  // SVG Curve Path Definitions (ViewBox 100 100)
  // 1. Initial: Full screen covered, bottom straight
  const pathInitial = "M0 0 L100 0 L100 100 Q50 100 0 100 Z";
  // 2. Mid: Curving upwards in the center (creating a liquid/hair wave pull effect)
  const pathMid = "M0 0 L100 0 L100 100 Q50 35 0 100 Z";
  // 3. Target: Fully retracted to the top
  const pathTarget = "M0 0 L100 0 L100 0 Q50 0 0 0 Z";

  return (
    <>
      <AnimatePresence mode="wait">
        {isAnimating && (
          <div className="fixed inset-0 pointer-events-none z-[9999]">
            {/* Layer 1: Teal Curtain */}
            <motion.svg
              className="absolute inset-0 w-screen h-screen pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              initial="initial"
              animate="animate"
            >
              <defs>
                <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#84e2d9" />
                  <stop offset="100%" stopColor="#35c7c0" />
                </linearGradient>
              </defs>
              <motion.path
                fill="url(#tealGrad)"
                variants={{
                  initial: { d: pathInitial },
                  animate: {
                    d: [pathInitial, pathMid, pathTarget],
                    transition: {
                      duration: 0.8,
                      times: [0, 0.4, 1],
                      ease: [0.76, 0, 0.24, 1],
                    },
                  },
                }}
              />
            </motion.svg>

            {/* Layer 2: Pink Brand Curtain */}
            <motion.svg
              className="absolute inset-0 w-screen h-screen pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              initial="initial"
              animate="animate"
            >
              <defs>
                <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f48bc6" />
                  <stop offset="100%" stopColor="#e60283" />
                </linearGradient>
              </defs>
              <motion.path
                fill="url(#pinkGrad)"
                variants={{
                  initial: { d: pathInitial },
                  animate: {
                    d: [pathInitial, pathMid, pathTarget],
                    transition: {
                      duration: 0.8,
                      delay: 0.08,
                      times: [0, 0.4, 1],
                      ease: [0.76, 0, 0.24, 1],
                    },
                  },
                }}
              />
            </motion.svg>

            {/* Centered Glowing Logo/Text Intro */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  y: [20, 0, -20],
                  scale: [0.9, 1, 1.05],
                }}
                transition={{
                  duration: 0.7,
                  times: [0, 0.35, 0.7, 1],
                  ease: "easeInOut",
                  delay: 0.05,
                }}
                className="flex flex-col items-center justify-center select-none"
              >
                <h1 className="text-white text-4xl md:text-6xl font-poppins font-extrabold tracking-widest drop-shadow-[0_4px_12px_rgba(230,2,131,0.3)]">
                  Tini Salon
                </h1>
                <span className="text-white/80 text-black-signature text-2xl md:text-3xl mt-2 drop-shadow-md">
                  Beauty & School
                </span>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Main Page Content Entrance Animation */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="min-h-screen flex flex-col"
      >
        {children}
      </motion.div>
    </>
  );
}
