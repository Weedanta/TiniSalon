"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/components/home/data/testimonials";
import {
  TestimonialCard,
  StaticTestimonialCard,
} from "./testimonial/TestimonialCard";
import { TestimonialNav } from "./testimonial/TestimonialNav";

const CARDS_PER_PAGE = 3;

function SectionHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-primary-500 leading-snug mb-4">
        Cerita di Balik Senyum Mereka
      </h2>
      <p className="text-sm md:text-base text-grey-600 leading-relaxed">
        Dengarkan kisah mereka yang tumbuh bersama kami, berawal dari rasa ingin
        tahu, lalu menemukan passion, percaya diri, dan karier di dunia
        kecantikan.
      </p>
    </motion.div>
  );
}

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const totalPages = Math.ceil(TESTIMONIALS.length / CARDS_PER_PAGE);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
    );
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handleDesktopPrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const handleDesktopNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % totalPages);
  };

  const desktopPage = activeIndex % totalPages;
  const visibleCards = TESTIMONIALS.slice(
    desktopPage * CARDS_PER_PAGE,
    desktopPage * CARDS_PER_PAGE + CARDS_PER_PAGE,
  );

  return (
    <section className="bg-primary-50 flex justify-center overflow-hidden">
      <div className="lg:max-w-7xl w-full px-8 md:px-8 lg:px-4 xl:px-0 py-16 md:py-20 xl:py-28">
        {/* Desktop layout */}
        <div className="hidden md:flex gap-10 xl:gap-16 items-center">
          {/* Left: title + description + nav */}
          <div className="w-64 xl:w-80 shrink-0 flex flex-col gap-6">
            <SectionHeader />
            <TestimonialNav
              onPrev={handleDesktopPrev}
              onNext={handleDesktopNext}
            />
          </div>

          {/* Right: 3 animated cards */}
          <motion.div
            key={desktopPage}
            initial={{ opacity: 0, x: direction * 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="flex-1 grid grid-cols-3 gap-4 xl:gap-6"
          >
            {visibleCards.map((t, i) => (
              <StaticTestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </motion.div>
        </div>

        {/* Mobile layout: single card carousel */}
        <div className="flex flex-col gap-6 md:hidden">
          <SectionHeader />
          <TestimonialCard
            testimonial={TESTIMONIALS[activeIndex]}
            direction={direction}
          />
          <div className="flex justify-center">
            <TestimonialNav onPrev={handlePrev} onNext={handleNext} />
          </div>
        </div>
      </div>
    </section>
  );
}
