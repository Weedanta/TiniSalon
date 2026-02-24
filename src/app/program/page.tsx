import type { Metadata } from "next";
import ProgramPage from "@/components/program/ProgramPage";

export const metadata: Metadata = {
  title: "Program Kursus Salon",
  description:
    "Ikuti kursus salon profesional di Tini Salon dan dapatkan sertifikasi resmi dari Rudy Hadisuwarno School. Tersedia berbagai paket program untuk pemula hingga tingkat lanjut.",
  alternates: {
    canonical: "/program",
  },
  openGraph: {
    title: "Program Kursus Salon | Tini Salon",
    description:
      "Kursus salon profesional bersertifikat Rudy Hadisuwarno School. Mulai karier impianmu bersama Tini Salon.",
    url: "https://tinisalon.com/program",
  },
};

const page = () => {
  return <ProgramPage />;
};

export default page;
