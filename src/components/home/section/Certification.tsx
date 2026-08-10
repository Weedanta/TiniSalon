"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import imgCertification from "@/assets/home/img_certification.webp";

export default function Certification() {
  return (
    <section className="bg-white flex justify-center">
      <div className="lg:max-w-5xl w-full px-8 md:px-8 lg:px-4 xl:px-0 py-16 md:py-20 xl:py-28">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-black-signature text-5xl leading-relaxed md:text-5xl xl:text-6xl text-primary-500 text-center mb-10 md:mb-14"
        >
          Sertifikasi &nbsp;Program
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 xl:gap-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-2 md:order-1 flex-1 text-grey-600 text-sm md:text-base lg:text-xl text-justify leading-relaxed"
          >
            Setiap lulusan dari Tini Salon School akan mendapatkan{" "}
            <span className="text-grey-800 font-bold">sertifikasi resmi</span>{" "}
            yang telah diakui secara profesional. Sertifikasi ini menjadi bukti
            kompetensi dan siap mendukung langkah kamu di dunia salon dan
            kecantikan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2 shrink-0 w-full md:w-auto"
          >
            <Image
              src={imgCertification}
              alt="Sertifikasi Tini Salon"
              width={480}
              height={360}
              className="w-full md:w-72 lg:w-80 xl:w-96 h-auto rounded-2xl object-cover"
              draggable={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 320px, 384px"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
