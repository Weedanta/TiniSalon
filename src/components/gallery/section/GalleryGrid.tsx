"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GALLERY_IMAGES } from "@/components/gallery/data/galleryImages";
import Lightbox from "./Lightbox";

export default function GalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = () =>
    setLightboxIndex((prev) =>
      prev !== null
        ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
        : null,
    );

  const goNext = () =>
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null,
    );

  return (
    <section className="bg-white flex justify-center">
      <div className="lg:max-w-6xl w-full px-4 md:px-8 lg:px-4 xl:px-0 py-16 md:py-20 xl:py-28">
        <div className="columns-2 md:columns-3 xl:columns-4 gap-3 md:gap-4">
          {GALLERY_IMAGES.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
              className="mb-3 md:mb-4 break-inside-avoid"
            >
              <button
                onClick={() => openLightbox(index)}
                className="block w-full cursor-pointer group relative overflow-hidden rounded-xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                  draggable={false}
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-xl" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={GALLERY_IMAGES}
          activeIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
        />
      )}
    </section>
  );
}
