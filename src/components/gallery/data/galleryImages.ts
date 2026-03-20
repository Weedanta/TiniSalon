import Menu from "@/assets/gallery/Tini Salon Medan.jpg";
import salon from "@/assets/gallery/salon.webp";
import salon1 from "@/assets/gallery/salon1.webp";
import salon2 from "@/assets/gallery/salon2.webp";
import salon3 from "@/assets/gallery/salon3.webp";
import salon4 from "@/assets/gallery/salon4.webp";
import salon5 from "@/assets/gallery/salon5.webp";
import salon6 from "@/assets/gallery/salon6.webp";
import salon7 from "@/assets/gallery/salon7.webp";
import salon8 from "@/assets/gallery/salon8.webp";
import salon9 from "@/assets/gallery/salon9.webp";
import salon10 from "@/assets/gallery/salon10.webp";
import salon11 from "@/assets/gallery/salon11.webp";
import salon12 from "@/assets/gallery/salon12.webp";
import salon13 from "@/assets/gallery/salon13.webp";
import salon14 from "@/assets/gallery/salon14.webp";
import salon15 from "@/assets/gallery/salon15.webp";
import salon16 from "@/assets/gallery/salon16.webp";
import salon17 from "@/assets/gallery/salon17.webp";
import salon18 from "@/assets/gallery/salon18.webp";
import salon19 from "@/assets/gallery/salon19.webp";
import salon20 from "@/assets/gallery/salon20.webp";
import salon21 from "@/assets/gallery/salon21.webp";
import salon22 from "@/assets/gallery/salon22.webp";
import type { StaticImageData } from "next/image";

export interface GalleryImage {
  id: number;
  src: StaticImageData;
  alt: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: 0, src: Menu, alt: "Tini Salon" },
  { id: 1, src: salon, alt: "Tini Salon" },
  { id: 2, src: salon1, alt: "Tini Salon" },
  { id: 3, src: salon2, alt: "Tini Salon" },
  { id: 4, src: salon3, alt: "Tini Salon" },
  { id: 5, src: salon4, alt: "Tini Salon" },
  { id: 6, src: salon5, alt: "Tini Salon" },
  { id: 7, src: salon6, alt: "Tini Salon" },
  { id: 8, src: salon7, alt: "Tini Salon" },
  { id: 9, src: salon8, alt: "Tini Salon" },
  { id: 10, src: salon9, alt: "Tini Salon" },
  { id: 11, src: salon10, alt: "Tini Salon" },
  { id: 12, src: salon11, alt: "Tini Salon" },
  { id: 13, src: salon12, alt: "Tini Salon" },
  { id: 14, src: salon13, alt: "Tini Salon" },
  { id: 15, src: salon14, alt: "Tini Salon" },
  { id: 16, src: salon15, alt: "Tini Salon" },
  { id: 17, src: salon16, alt: "Tini Salon" },
  { id: 18, src: salon17, alt: "Tini Salon" },
  { id: 19, src: salon18, alt: "Tini Salon" },
  { id: 20, src: salon19, alt: "Tini Salon" },
  { id: 21, src: salon20, alt: "Tini Salon" },
  { id: 22, src: salon21, alt: "Tini Salon" },
  { id: 23, src: salon22, alt: "Tini Salon" },
];

export const GALLERY_CONTENT = {
  heroTitle: "Galeri Kami",
  heroDescription:
    "Lihat suasana Tini Salon, momen pelatihan, dan hasil karya kami yang telah dipercaya sejak 2003.",
};
