"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useNavigation } from "../hooks/use-navigation";
import { NavbarList } from "./Navbar-list";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { isOpen, toggle, close } = useNavigation();

  return (
    <nav className="bg-primary-500 h-20 flex items-center justify-center sticky top-0 z-50 px-4 md:px-8 lg:px-0 shadow-md font-poppins">
      <div className="lg:w-7xl md:w-6xl w-full flex items-center justify-between ">
        {/* Logo */}
        <Link
          href="/"
          className="text-white text-2xl md:text-3xl font-bold tracking-tight"
        >
          Tini Salon
        </Link>

        <NavbarList className="hidden md:flex" />
        <a className="bg-[#80ded9] hover:bg-[#6ed0cb] text-[#2d3748] rounded-full px-6 py-3 font-bold border-none md:flex text-base hidden">
          Hubungi Kami
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={toggle}
          className="md:hidden bg-[#80ded9] p-2 rounded-lg text-[#2d3748]"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-[#d81b60] z-40 md:hidden transition-transform duration-300 ease-in-out flex flex-col items-center justify-center gap-8",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <NavbarList className="flex-col text-2xl gap-8" onItemClick={close} />
        <a
          className="bg-[#80ded9] hover:bg-[#6ed0cb] text-[#2d3748] rounded-full px-10 py-6 text-xl font-semibold border-none"
          onClick={close}
        >
          Hubungi Kami
        </a>
      </div>
    </nav>
  );
}
