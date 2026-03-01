import type { Metadata } from "next";
import "../styles/globals.css";
import { Navbar } from "@/components/layout/navbar/components/Navbar";
import { Footer } from "@/components/layout/footer/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Tini Salon – Salon Kecantikan & Kursus Salon Profesional",
    template: "%s | Tini Salon",
  },
  description:
    "Tini Salon – Tempat kursus salon dan kecantikan terbaik di Medan sejak 2003. Kursus salon bersertifikat, siap kerja, sampai mahir, harga terjangkau, bisa dicicil, ada tempat tinggal, wifi gratis. Berlokasi di Pasar Merah Medan.",
  keywords: [
    "Belajar salon di Medan",
    "Kursus salon di Medan",
    "Les salon di Medan",
    "Belajar kecantikan di Medan",
    "Kursus salon murah di Medan",
    "Sekolah Tata Rias di Medan",
    "Kursus Salon Bersertifikat",
    "Kursus Salon Rambut",
    "Kursus Salon gratis tempat tinggal",
    "Kursus Salon Kecantikan",
    "Kursus Salon sampai Mahir",
    "Kursus salon Pasar Merah Medan",
    "Kursus salon terdekat",
    "Kursus salon siap kerja",
    "Biaya kursus salon rambut murah",
    "Salon murah Medan",
    "Salon terbaik di Kota Medan",
    "Kursus Salon di Medan yang bagus",
    "Kursus Tini Salon di Medan",
    "Kursus salon singkat di Medan",
    "Les salon tidak terikat",
    "Kursus salon singkat 3 hari",
    "Les salon terjangkau di Medan",
    "Les salon dapat dicicil",
    "Kursus salon terbaik di Medan",
    "Les salon terlengkap di Medan",
    "Kursus Salon terfavorit di Medan",
    "Rekomendasi salon terdekat",
    "Belajar salon singkat di kota Medan",
    "Kursus salon sampai Profesional di Medan",
    "Sekolah salon ada Paketan",
    "Salon di pasar Merah",
    "Salon Bersertifikat di Medan",
    "Biaya Kursus salon di Medan",
    "Belajar salon terjangkau di Medan",
    "Belajar salon Singkat",
    "Kursus dan Salon di Medan",
    "Kursus salon gratis wifi",
    "Tempat kursus strategis",
    "Belajar salon paling recommended",
    "Sekolah kecantikan di Medan",
    "Belajar salon terlengkap",
    "Guru Berpengalaman",
    "Sekolah salon terpopuler",
    "Sekolah salon tidak terikat waktu",
    "Sekolah salon terpandang",
    "Sekolah salon paling the best",
    "Sekolah salon gampang dimengerti",
    "Kursus Salon sudah berpengalaman",
    "Tempat kursus salon dan salon kecantikan",
    "Tempat Kursus salon nyaman",
    "Kursus Salon terdekat",
    "Tini Salon",
    "salon kecantikan Medan",
    "kursus salon profesional",
    "Rudy Hadisuwarno",
  ],
  metadataBase: new URL("https://tinisalon.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://tinisalon.com",
    siteName: "Tini Salon",
    title: "Tini Salon – Salon Kecantikan & Kursus Salon Profesional",
    description:
      "Layanan salon kecantikan dan kursus salon profesional bersertifikat sejak 2003.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Tini Salon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tini Salon – Salon Kecantikan & Kursus Salon Profesional",
    description:
      "Layanan salon kecantikan dan kursus salon profesional bersertifikat sejak 2003.",
    images: ["/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
