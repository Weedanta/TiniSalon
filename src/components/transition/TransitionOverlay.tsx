"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePageTransition } from "./TransitionContext";

/* ------------------------------------------------------------------ */
/*  Sparkle particle                                                   */
/* ------------------------------------------------------------------ */
function Sparkle({ delay, x, y, size }: { delay: number; x: number; y: number; size: number }) {
  return (
    <motion.div
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(244,139,198,0.6) 60%, transparent 100%)",
        filter: "blur(0.5px)",
        pointerEvents: "none",
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        scale: [0, 1.2, 1, 0.5],
        y: [0, -25, -50],
      }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Sparkle positions (deterministic)                                  */
/* ------------------------------------------------------------------ */
const SPARKLES = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  x: ((i * 37 + 13) % 90) + 5,
  y: ((i * 53 + 7) % 85) + 5,
  size: 3 + (i % 4) * 1.5,
  delay: 0.02 + i * 0.035,
}));

const STRIP_COUNT = 6;

/* ------------------------------------------------------------------ */
/*  TransitionOverlay                                                  */
/* ------------------------------------------------------------------ */
export function TransitionOverlay() {
  const { state, finishTransition } = usePageTransition();
  const isActive = state === "closing" || state === "opening";

  /* Auto-finish the opening phase */
  useEffect(() => {
    if (state === "opening") {
      const timer = setTimeout(finishTransition, 900);
      return () => clearTimeout(timer);
    }
  }, [state, finishTransition]);

  return (
    <AnimatePresence>
      {isActive && (
        <div className="fixed inset-0 pointer-events-none z-[9999]">

          {/* ===== Solid pink background — prevents any black gaps ===== */}
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, #e60283, #f48bc6)",
              zIndex: 0,
            }}
            initial={{ opacity: state === "closing" ? 0 : 1 }}
            animate={{ opacity: state === "closing" ? 1 : 0 }}
            transition={{
              duration: state === "closing" ? 0.15 : 0.5,
              delay: state === "closing" ? 0 : 0.3,
              ease: "easeInOut",
            }}
          />

          {/* ===== Strips layer 1: Deep pink ===== */}
          {Array.from({ length: STRIP_COUNT }).map((_, i) => (
            <Strip
              key={`deep-${i}`}
              index={i}
              total={STRIP_COUNT}
              color1="#e60283"
              color2="#d10277"
              phase={state}
            />
          ))}

          {/* ===== Strips layer 2: Light pink ===== */}
          {Array.from({ length: STRIP_COUNT }).map((_, i) => (
            <Strip
              key={`light-${i}`}
              index={i}
              total={STRIP_COUNT}
              color1="#f48bc6"
              color2="#ee55ac"
              phase={state}
            />
          ))}

          {/* ===== Sparkles (only during opening phase) ===== */}
          {state === "opening" && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 10 }}>
              {SPARKLES.map((s) => (
                <Sparkle key={s.id} delay={s.delay} x={s.x} y={s.y} size={s.size} />
              ))}
            </div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/*  Single horizontal strip                                            */
/* ------------------------------------------------------------------ */
function Strip({
  index,
  total,
  color1,
  color2,
  phase,
}: {
  index: number;
  total: number;
  color1: string;
  color2: string;
  phase: "closing" | "opening";
}) {
  const stripHeight = 100 / total;
  const yStart = index * stripHeight;
  const staggerDelay = index * 0.05;

  const fromSide = index % 2 === 0 ? -110 : 110;

  /*
   * CLOSING:  strips slide IN from alternating sides → cover the screen
   * OPENING:  strips slide OUT to alternating sides → reveal the page
   */
  const closing = phase === "closing";

  return (
    <motion.div
      style={{
        position: "absolute",
        left: 0,
        top: `${yStart}%`,
        width: "100%",
        height: `${stripHeight + 0.5}%`,
        background: `linear-gradient(135deg, ${color1}, ${color2})`,
        transformOrigin: index % 2 === 0 ? "left center" : "right center",
      }}
      initial={{
        x: closing ? `${fromSide}%` : "0%",
        scaleX: closing ? 0.8 : 1,
      }}
      animate={{
        x: closing ? "0%" : `${fromSide}%`,
        scaleX: closing ? 1 : 0.8,
      }}
      transition={{
        duration: 0.55,
        delay: 0.05 + staggerDelay,
        ease: [0.76, 0, 0.24, 1],
      }}
    />
  );
}
