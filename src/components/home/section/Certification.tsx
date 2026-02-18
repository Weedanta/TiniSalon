"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import imgCertification from "@/assets/home/img_certification.png"

export default function Certification() {
  return (
    <section className="bg-white flex justify-center">
      <div className="lg:max-w-5xl w-full px-8 md:px-8 lg:px-4 xl:px-0 py-16 md:py-20 xl:py-28">
        {/* Title — centered */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-black-signature text-4xl md:text-5xl xl:text-6xl text-primary-500 text-center mb-10 md:mb-14"
        >
          Sertifikasi Program
        </motion.h2>

        {/* Desktop: text left (wider), image right (smaller) */}
        <div className="hidden md:flex items-center gap-10 xl:gap-16">
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-1 text-grey-600 text-sm lg:text-base leading-relaxed"
          >
            Setiap lulusan dari Rudy Hadisuwarno School akan mendapatkan{" "}
            <span className="text-grey-800 font-bold">sertifikasi resmi</span>{" "}
            yang telah diakui secara profesional. Sertifikasi ini menjadi bukti
            kompetensi dan siap mendukung langkah kamu di dunia salon dan
            kecantikan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="shrink-0"
          >
            <Image
              src={imgCertification}
              alt="Sertifikasi Tini Salon"
              width={380}
              height={280}
              className="w-72 lg:w-80 xl:w-96 h-auto rounded-2xl object-cover"
            />
          </motion.div>
        </div>

        {/* Mobile: image top, text bottom */}
        <div className="flex flex-col gap-6 md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={imgCertification}
              alt="Sertifikasi Tini Salon"
              width={520}
              height={390}
              className="w-full h-auto rounded-2xl object-cover"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-grey-600 text-sm leading-relaxed text-justify"
          >
            Setiap lulusan dari Rudy Hadisuwarno School akan mendapatkan{" "}
            <span className="text-grey-800 font-bold">sertifikasi resmi</span>{" "}
            yang telah diakui secara profesional. Sertifikasi ini menjadi bukti
            kompetensi dan siap mendukung langkah kamu di dunia salon dan
            kecantikan.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
