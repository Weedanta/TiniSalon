"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useNavigation } from "../hooks/use-navigation";
import { NavbarList } from "./Navbar-list";
import { cn } from "@/lib/utils";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { isOpen, toggle, close } = useNavigation();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (latest > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden && !isOpen ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 h-24 flex items-center justify-center font-poppins transition-all duration-300",
          isScrolled || isOpen
            ? "bg-primary-500/80 backdrop-blur-md shadow-md" 
            : "bg-primary-500/20 backdrop-blur-sm"
        )}
      >
        <div className="lg:max-w-7xl w-full flex items-center justify-between px-4 md:px-8 lg:px-4 xl:px-0">
          <Link href="/" className="text-white text-2xl md:text-3xl font-bold group">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              Tini Salon
            </motion.span>
          </Link>

          <NavbarList className="hidden md:flex" />
          
          <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#80ded9] hover:bg-[#6ed0cb] text-[#2d3748] rounded-full px-6 py-3 font-bold border-none md:flex text-base hidden cursor-pointer shadow-lg hover:shadow-xl transition-all"
          >
            Hubungi Kami
          </motion.a>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggle}
            className="md:hidden bg-[#80ded9] p-2 rounded-lg text-[#2d3748] shadow-md z-50 relative"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        <motion.div 
          className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent w-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-24 left-0 right-0 bg-primary-500/95 backdrop-blur-xl z-40 md:hidden shadow-2xl rounded-b-3xl overflow-hidden"
          >
            <div className="flex flex-col items-center gap-8 py-10">
              <NavbarList className="flex-col text-2xl gap-8" onItemClick={close} />
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#80ded9] hover:bg-[#6ed0cb] text-[#2d3748] rounded-full px-12 py-4 text-xl font-semibold border-none shadow-lg"
                onClick={close}
              >
                Hubungi Kami
              </motion.a>
            </div>
            
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
