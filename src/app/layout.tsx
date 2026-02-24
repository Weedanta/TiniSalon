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
    "Tini Salon hadir sejak 2003 menawarkan layanan salon kecantikan, perawatan rambut, perawatan kulit, dan kursus salon profesional bersertifikat Rudy Hadisuwarno School.",
  keywords: [
    "Tini Salon",
    "salon kecantikan",
    "kursus salon",
    "perawatan rambut",
    "perawatan kulit",
    "Rudy Hadisuwarno",
    "salon profesional",
    "sertifikasi salon",
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
