"use client";

import { motion } from "framer-motion";
import { ProgramPackage } from "@/components/home/data/programs";
import Pricetag from "@/assets/home/icon/ic_pricetags.svg";
import Image from "next/image";

interface ProgramCardProps {
  program: ProgramPackage;
  index?: number;
}

export default function ProgramCard({ program, index = 0 }: ProgramCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white rounded-3xl flex flex-col gap-3 shadow-lg overflow-hidden"
    >
      {/* Card Header */}
      <div className="pt-6 px-6">
        <h3 className="text-center text-lg font-semibold text-grey-800">
          {program.title}
        </h3>
      </div>

      {/* Items List */}
      <div className="mx-6 flex-1 bg-primary-50 px-8 py-6 rounded-2xl">
        <ol className="flex flex-col gap-1 text-grey-600 text-sm md:text-base list-none">
          {program.items.map((item, i) => (
            <li key={i}>
              {i + 1}. {item}
            </li>
          ))}
        </ol>
      </div>

      {/* Duration */}
      <p className="px-6 text-xs md:text-sm text-grey-400 italic text-center">
        {program.duration}
      </p>

      {/* Price */}
      <div className="px-6 flex items-center gap-2 mx-auto">
        <Image src={Pricetag} alt="Price" className="h-4 w-4" />
        <span className="text-primary-500 font-bold text-base md:text-lg decoration-dotted decoration-primary-300">
          {program.price}
        </span>
      </div>

      {/* CTA Button */}
      <div className="px-6 pb-6">
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-secondary-500 hover:bg-secondary-600 active:bg-secondary-800 text-black font-semibold rounded-full py-2.5 px-6 transition-colors duration-200"
        >
          Hubungi Kami
        </a>
      </div>
    </motion.div>
  );
}
