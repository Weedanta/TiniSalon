import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";
import React from "react";

export const metadata: Metadata = {
  title: "Tini Salon – Salon Kecantikan & Kursus Salon Profesional",
  description:
    "Tini Salon hadir sejak 2003 menawarkan layanan salon kecantikan, perawatan rambut, perawatan kulit, dan kursus salon profesional bersertifikat Rudy Hadisuwarno School.",
  alternates: {
    canonical: "/",
  },
};

const page = () => {
  return <HomePage />;
};

export default page;
