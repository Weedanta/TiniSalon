"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePageTransition } from "./TransitionContext";

interface TransitionLinkProps
  extends Omit<React.ComponentProps<typeof Link>, "onClick"> {
  children: React.ReactNode;
  onClick?: () => void;
}

/**
 * Drop-in replacement for next/link that triggers the
 * close → navigate → open page transition sequence.
 *
 * External links (starting with http) and same-page links
 * behave normally without transition.
 */
export function TransitionLink({ href, onClick, children, ...rest }: TransitionLinkProps) {
  const { navigateTo } = usePageTransition();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = typeof href === "string" ? href : (href as { pathname?: string }).pathname ?? "";

    // Skip transition for external links or same page
    if (target.startsWith("http") || target.startsWith("mailto:") || target === pathname) {
      onClick?.();
      return;
    }

    e.preventDefault();
    onClick?.();
    navigateTo(target);
  };

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
