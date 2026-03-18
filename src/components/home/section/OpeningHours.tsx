"use client";

import { motion } from "framer-motion";
import {
  OPENING_HOURS,
  SECTION_CONTENT,
  getTodayIndex,
} from "@/components/home/data/openingHours";
import { ScheduleCard } from "./openingHours/ScheduleCard";

export default function OpeningHours() {
  const todayIndex = getTodayIndex();
  const { title, description } = SECTION_CONTENT;

  return (
    <section className="bg-white flex justify-center">
      <div className="lg:max-w-5xl w-full px-8 md:px-8 lg:px-4 xl:px-0 py-16 md:py-20 xl:py-28">
        <div className="hidden md:flex items-stretch gap-10 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex flex-col justify-center gap-6"
          >
            <h2 className="text-black-signature text-5xl xl:text-6xl text-primary-500 leading-relaxed">
              {title}
            </h2>
            <p className="text-grey-600 text-base lg:text-xl leading-relaxed">
              {description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-80 xl:w-96 shrink-0"
          >
            <ScheduleCard hours={OPENING_HOURS} todayIndex={todayIndex} />
          </motion.div>
        </div>

        <div className="flex flex-col gap-6 md:hidden">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-3"
          >
            <h2 className="text-black-signature text-4xl text-primary-500 text-center leading-relaxed">
              {title}
            </h2>
            <p className="text-grey-600 text-sm leading-relaxed text-center">
              {description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ScheduleCard
              hours={OPENING_HOURS}
              todayIndex={todayIndex}
              compact
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
