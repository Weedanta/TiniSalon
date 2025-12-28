"use client"

import Link from "next/link"
import { NAV_ITEMS } from "../data/nav-items"
import { cn } from "@/lib/utils"

interface NavbarListProps {
  className?: string
  itemClassName?: string
  onItemClick?: () => void
}

export function NavbarList({ className, itemClassName, onItemClick }: NavbarListProps) {
  return (
    <ul className={cn("flex items-center gap-12", className)}>
      {NAV_ITEMS.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            onClick={onItemClick}
            className={cn("text-white md:text-xl font-semibold hover:text-white/80 transition-colors", itemClassName)}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
