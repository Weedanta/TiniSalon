import icInstagram from "@/assets/home/icon/ic_instagram.svg";
import icTiktok from "@/assets/home/icon/ic_tiktok.svg";
import type { StaticImageData } from "next/image";

export const FOOTER_BRAND = {
  name: "Tini Salon Medan",
  hours: ["Senin - Sabtu : 08.00 - 22.00 WIB", "Minggu : 10.00 - 22.00 WIB"],
};

export const FOOTER_CONTACT = {
  phone: "+62 813 7060 0131",
  address:
    "JL HM. Joni No.84, Teladan Tim., Kec. Medan Area, Kota Medan, Sumatera Utara 20216",
};

export const FOOTER_SOCIALS: {
  label: string;
  href: string;
  icon: StaticImageData;
  alt: string;
}[] = [
  {
    label: "@tinisalon2003",
    href: "https://instagram.com/tinisalon2003",
    icon: icInstagram,
    alt: "Instagram",
  },
  {
    label: "@tini.salon_",
    href: "https://tiktok.com/@tini.salon_",
    icon: icTiktok,
    alt: "TikTok",
  },
];

export const FOOTER_COPYRIGHT =
  "© Copyrights 2025 Tini Salon Medan. All rights reserved";
