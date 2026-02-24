"use client";

import { motion } from "framer-motion";
import { ProgramPackage } from "@/components/home/data/programs";
import Pricetag from "@/assets/home/icon/ic_pricetags.svg";
import Image from "next/image";

interface ProgramCardProps {
  program: ProgramPackage;
  index?: number;
  /** "primary" = pink header (default, home page)
   *  "secondary" = blue header + blue item bg/bullets (program page) */
  variant?: "primary" | "secondary";
}

export default function ProgramCard({
  program,
  index = 0,
  variant = "primary",
}: ProgramCardProps) {
  const isHighlight = program.highlight;
  const isSecondary = variant === "secondary";

  // ── Header gradient ──
  const headerGradient = isSecondary
    ? isHighlight
      ? "bg-gradient-to-br from-secondary-600 to-secondary-800"
      : "bg-gradient-to-br from-secondary-600 to-secondary-700"
    : isHighlight
      ? "bg-gradient-to-br from-primary-500 to-primary-700"
      : "bg-gradient-to-br from-primary-400 to-primary-600";

  // ── Ring / border ──
  const ringClass = isHighlight
    ? isSecondary
      ? "ring-2 ring-primary-500" // secondary highlight → pink ring
      : "ring-2 ring-secondary-400" // primary highlight   → tosca ring
    : "ring-1 ring-grey-200/60";

  // ── Item list colors ──
  const itemsBg = isSecondary ? "bg-secondary-50" : "bg-primary-50";
  const bulletBg = isSecondary ? "bg-secondary-500" : "bg-primary-500";
  const priceColor = isSecondary ? "text-secondary-500" : "text-primary-500";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`relative flex flex-col h-full rounded-3xl overflow-hidden shadow-xl transition-shadow duration-300 hover:shadow-2xl ${ringClass}`}
    >
      {/* ── Badge — absolute top-right corner ── */}
      {program.badge && (
        <span className="absolute top-3 right-3 z-10 bg-secondary-400 text-grey-500 text-[10px] font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
          {program.badge}
        </span>
      )}

      {/* ── Gradient header band (blue for secondary, pink for primary) ── */}
      <div
        className={`program-card-header px-6 pt-6 pb-5 flex flex-col items-center gap-2 overflow-hidden ${headerGradient}`}
      >
        <h3 className="text-white text-xl md:text-2xl font-semibold text-center leading-tight">
          {program.title}
        </h3>
        <span className="bg-white/20 text-white text-xs font-medium px-4 py-1 rounded-full backdrop-blur-sm">
          {program.subtitle}
        </span>
      </div>

      {/* ── White body ── */}
      <div className="bg-white flex flex-col gap-4 flex-1 h-full">
        {/* Note */}
        <p className="px-6 pt-4 text-xs text-grey-400 text-center italic leading-relaxed">
          {program.note}
        </p>

        {/* Items list — checkmark bullets, bg/bullet color per variant */}
        <div className={`mx-5 rounded-2xl px-5 py-4 flex-1 min-h-0 ${itemsBg}`}>
          <ul className="flex flex-col gap-2">
            {program.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span
                  className={`mt-0.5 shrink-0 flex items-center justify-center w-4 h-4 rounded-full ${bulletBg}`}
                >
                  <svg
                    className="w-2.5 h-2.5 text-white"
                    viewBox="0 0 12 10"
                    fill="none"
                  >
                    <path
                      d="M1 5l3 3 7-7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-grey-700 text-sm leading-snug">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Duration */}
        <p className="px-6 text-xs text-grey-400 italic text-center">
          {program.duration}
        </p>

        {/* Price row */}
        <div className="px-6 flex items-center gap-2 justify-center">
          <Image src={Pricetag} alt="Price" className="h-5 w-5 shrink-0" />
          <span
            className={`font-extrabold text-xl md:text-2xl tracking-tight ${priceColor}`}
          >
            {program.price}
          </span>
        </div>

        {/* CTA button */}
        <div className="px-6 pb-6">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center font-bold rounded-full py-3 px-6 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 text-sm md:text-base bg-secondary-500 hover:bg-secondary-400 text-grey-500"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </motion.div>
  );
}
