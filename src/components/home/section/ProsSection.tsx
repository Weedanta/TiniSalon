"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROS_DATA } from "@/components/home/data/pros";

const ProsSection = () => {
  return (
    <div className="w-full flex flex-col gap-6 md:gap-8 overflow-hidden">
      {PROS_DATA.map((item, index) => {
        const isOdd = index % 2 === 0;

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: isOdd ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.3,
              type: "spring",
              bounce: 0.4,
            }}
            viewport={{ once: true, margin: "-50px" }}
            className={`
              w-full p-8 md:p-12 hover:shadow-md transition-shadow
              flex flex-col justify-center
              ${
                isOdd
                  ? "items-start text-left bg-gradient-to-r from-white via-primary-50 to-primary-500/20 rounded-r-[60px]"
                  : "items-end text-right bg-gradient-to-l from-white via-primary-50 to-primary-500/20 rounded-l-[60px]"
              }
            `}
          >
            <div className="w-full">
              <h3 className="text-xl md:text-3xl font-bold text-primary-500 mb-2 md:mb-4">
                {item.title}
              </h3>
              <p className="text-grey-600 text-md md:text-2xl leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProsSection;
