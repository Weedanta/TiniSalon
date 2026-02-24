"use client";

import { PROGRAMS } from "@/components/home/data/programs";
import ProgramCard from "@/components/ui/ProgramCard";
import { motion } from "framer-motion";
import React from "react";

const ProgramSection = () => {
  return (
    <section className=" bg-white overflow-hidden py-12 md:py-20 max-w-7xl px-4 md:px-8 lg:px-0 flex flex-col gap-8 md:gap-12">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-primary-500 text-black-signature text-6xl leading-relaxed md:text-5xl xl:text-6xl font-semibold text-center"
      >
        Pilihan Program
      </motion.h2>

      {/* Desktop: 3 kolom, baris terakhir rata tengah */}
      <div className="hidden md:flex md:flex-wrap justify-center gap-6 xl:gap-8 items-stretch">
        {PROGRAMS.map((program, i) => (
          <div
            key={program.id}
            className="flex flex-col w-[calc(33.333%-1rem)]"
          >
            <ProgramCard program={program} index={i} />
          </div>
        ))}
      </div>

      {/* Mobile: single column */}
      <div className="flex flex-col gap-5 md:hidden">
        {PROGRAMS.map((program, i) => (
          <ProgramCard key={program.id} program={program} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ProgramSection;
