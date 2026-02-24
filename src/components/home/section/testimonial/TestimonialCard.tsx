"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import icQuote from "@/assets/home/icon/ic_quote.svg";
import type { Testimonial } from "@/components/home/data/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 justify-center my-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.svg
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.08, type: "spring", stiffness: 300 }}
          className={i < rating ? "text-primary-500" : "text-grey-200"}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </motion.svg>
      ))}
    </div>
  );
}

function QuoteIcon() {
  return (
    <div className="w-12 h-12 rounded-full bg-secondary-200 flex items-center justify-center mx-auto mb-2">
      <Image src={icQuote} alt="quote" className="w-full h-full" draggable={false} />
    </div>
  );
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  direction?: number;
}

export function TestimonialCard({
  testimonial,
  direction = 1,
}: TestimonialCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={testimonial.id}
        initial={{ opacity: 0, x: direction * 60 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: direction * -60 }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="bg-white rounded-2xl border border-primary-200 p-6 flex flex-col items-center text-center h-full"
      >
        <QuoteIcon />
        <StarRating rating={testimonial.rating} />
        <p className="text-grey-600 text-sm leading-relaxed flex-1 mt-2">
          {testimonial.review}
        </p>
        <p className="font-bold text-grey-800 mt-6 text-sm">
          {testimonial.name}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}

interface StaticTestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export function StaticTestimonialCard({
  testimonial,
  index,
}: StaticTestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(230,2,131,0.12)" }}
      className="bg-white rounded-2xl border border-primary-200 p-6 flex flex-col items-center text-center h-full cursor-default"
    >
      <QuoteIcon />
      <div className="flex gap-1 justify-center my-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={
              i < testimonial.rating ? "text-primary-500" : "text-grey-200"
            }
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
      <p className="text-grey-600 text-sm leading-relaxed flex-1 mt-2">
        {testimonial.review}
      </p>
      <p className="font-bold text-grey-800 mt-6 text-sm">{testimonial.name}</p>
    </motion.div>
  );
}
