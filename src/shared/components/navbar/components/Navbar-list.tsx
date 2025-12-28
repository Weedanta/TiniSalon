"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { NAV_ITEMS } from "../data/nav-items"
import { cn } from "@/lib/utils"

interface NavbarListProps {
  className?: string
  itemClassName?: string
  onItemClick?: () => void
}

export function NavbarList({ className, itemClassName, onItemClick }: NavbarListProps) {
  return (
    <motion.ul
      className={cn("flex items-center gap-12", className)}
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.08 },
        },
      }}
    >
      {NAV_ITEMS.map((item) => (
        <motion.li
          key={item.label}
          variants={{
            hidden: { opacity: 0, y: 6 },
            show: { opacity: 1, y: 0 },
          }}
        >
          <Link
            href={item.href}
            onClick={onItemClick}
            className={cn("text-white md:text-xl font-semibold hover:text-white/80 transition-colors", itemClassName)}
          >
            {item.label}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  )
}
