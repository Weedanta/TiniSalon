import type { Metadata } from "next";
import GalleryPage from "@/components/gallery/GalleryPage";

export const metadata: Metadata = {
  title: "Galeri Salon",
  description:
    "Lihat suasana Tini Salon, momen pelatihan, dan hasil karya kami. Salon kecantikan dan kursus salon profesional di Medan sejak 2003.",
  alternates: {
    canonical: "/galeri",
  },
  openGraph: {
    title: "Galeri Salon | Tini Salon",
    description:
      "Galeri foto suasana Tini Salon, pelatihan, dan hasil karya kecantikan profesional.",
    url: "https://tinisalon.com/galeri",
  },
};

export default function Page() {
  return <GalleryPage />;
}
