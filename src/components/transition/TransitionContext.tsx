"use client";

import React, { createContext, useContext, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";

type TransitionState = "idle" | "closing" | "opening";

interface TransitionContextType {
  state: TransitionState;
  navigateTo: (href: string) => void;
  startOpening: () => void;
  finishTransition: () => void;
}

const TransitionContext = createContext<TransitionContextType>({
  state: "idle",
  navigateTo: () => {},
  startOpening: () => {},
  finishTransition: () => {},
});

export function usePageTransition() {
  return useContext(TransitionContext);
}

/* Duration for the closing animation (ms) */
const CLOSE_DURATION = 600;

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<TransitionState>("opening");
  const router = useRouter();
  const isNavigating = useRef(false);

  const navigateTo = useCallback(
    (href: string) => {
      if (isNavigating.current) return;
      isNavigating.current = true;

      // Phase 1: close the curtain
      setState("closing");

      // After close animation completes, navigate
      setTimeout(() => {
        router.push(href);

        // Phase 2: the new page will mount and trigger "opening"
        // We set opening here so it's ready when the new template mounts
        setState("opening");
        isNavigating.current = false;
      }, CLOSE_DURATION);
    },
    [router],
  );

  const startOpening = useCallback(() => {
    setState("opening");
  }, []);

  const finishTransition = useCallback(() => {
    setState("idle");
  }, []);

  return (
    <TransitionContext.Provider value={{ state, navigateTo, startOpening, finishTransition }}>
      {children}
    </TransitionContext.Provider>
  );
}
