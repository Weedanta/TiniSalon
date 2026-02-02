"use client"

import { useState } from "react"
import type { NavigationState } from "../types"

export function useNavigation(): NavigationState {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen((prev) => !prev)
  const close = () => setIsOpen(false)

  return {
    isOpen,
    toggle,
    close,
  }
}
