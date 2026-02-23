"use client";

import { motion } from "framer-motion";
import { PROGRAMS } from "@/components/home/data/programs";
import ProgramCard from "@/components/ui/ProgramCard";

export default function ProgramSection() {
  return (
    <section className="program-surface overflow-hidden mt-28 max-w-7xl mx-4 md:mx-8 lg:mx-4 xl:mx-auto rounded-4xl">
      {/* Semi-transparent overlay for readability over the wallpaper */}
      <div className="bg-primary-500/70 py-10 md:py-12 xl:py-16 flex justify-center">
        <div className="lg:max-w-5xl w-full px-6 md:px-8 lg:px-4 xl:px-0 flex flex-col gap-5 md:gap-10">
          {/* Section Title */}
          <motion.h2    
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white text-xl md:text-4xl xl:text-5xl font-semibold text-center"
          >
            Pilih Program Belajarmu
          </motion.h2>

          {/* Desktop: 2-column grid, last card centered if odd */}
          <div className="hidden md:grid md:grid-cols-2 gap-6 xl:gap-8">
            {PROGRAMS.map((program, i) => {
              const isLastOdd =
                PROGRAMS.length % 2 !== 0 && i === PROGRAMS.length - 1;
              return (
                <div
                  key={program.id}
                  className={isLastOdd ? "col-span-2 w-1/2 mx-auto" : undefined}
                >
                  <ProgramCard program={program} index={i} />
                </div>
              );
            })}
          </div>

          {/* Mobile: single column */}
          <div className="flex flex-col gap-5 md:hidden">
            {PROGRAMS.map((program, i) => (
              <ProgramCard key={program.id} program={program} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
