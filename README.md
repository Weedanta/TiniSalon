# 💇‍♀️ Tini Salon – Beauty Salon & Professional Academy Website

[![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23-ff0055?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Turbopack](https://img.shields.io/badge/Bundled_with-Turbopack-000000?style=flat-square&logo=vercel)](https://turbo.build/pack)

Official modern web application for **Tini Salon Medan** — a trusted beauty salon and professional certified beauty training academy established in Medan, Indonesia since 2003.

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Pages & Routing](#-pages--routing)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Design & Optimization](#-design--optimization)
- [Business & Contact Info](#-business--contact-info)

---

## 🌸 Overview

**Tini Salon** has been delivering beauty care and cosmetology education for over two decades. This web platform serves as both a digital storefront for salon services and an interactive prospectus for **Tini Salon School**, enabling prospective students and clients to explore salon history, training programs, certifications, student portfolios, and make direct WhatsApp inquiries.

---

## ✨ Key Features

- **🏠 Comprehensive Landing Page**:
  - Engaging hero section with direct WhatsApp call-to-action (CTA).
  - Salon heritage and journey timeline since 2003.
  - Value proposition highlights (100+ graduates, 1-on-1 mentoring by the salon owner, flexible schedules, installment plans, free dormitory facilities, and official certification).
  - Program showcase and official certification preview.
  - Interactive student and customer testimonials.
  - Operating hours and salon location details.

- **🎓 Academy Program Catalog (`/program`)**:
  - Detailed curriculum breakdown from Package 1 (Basic) to Package 5 (Advanced Bridal & Semi-Permanent Makeup / Microblading).
  - Transparent pricing, course duration, and internship (PKL) details.
  - Direct enrollment consultation integration via WhatsApp.

- **🖼️ Interactive Photo Gallery (`/galeri`)**:
  - Visual showcase of salon facilities, hands-on training sessions, client styling results, and graduation ceremonies.
  - High-performance responsive grid with an interactive modal **Lightbox** image viewer.

- **📱 Mobile-First Experience & Conversion Utilities**:
  - Floating Mobile Quick-Action bar for instant booking and consultation.
  - Responsive navigation with mobile slide-out drawer menu.
  - Smooth page transition overlay powered by React context and Framer Motion.

- **🚀 SEO & Performance Engineered**:
  - Dynamic OpenGraph and Twitter card metadata for social sharing.
  - Auto-generated `sitemap.ts` and `robots.ts` for search engine indexing.
  - Next.js font optimization with Google Fonts (*Poppins*) and custom typography (*Black Signature*).
  - Next-gen image format delivery (WebP / AVIF) with cache tuning via Sharp.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16 (App Router)](https://nextjs.org/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **UI Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) & PostCSS |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) & CSS Keyframes |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Image Processing**| [Sharp](https://sharp.pixelplumbing.com/) & `next/image` |
| **Linting** | [ESLint 9](https://eslint.org/) |

---

## 📁 Project Architecture

```plaintext
tinisalon/
├── public/                     # Static assets (favicons, manifests, OG images)
├── src/
│   ├── app/                    # Next.js App Router pages and metadata
│   │   ├── galeri/             # Gallery page & loading skeleton
│   │   ├── program/            # Programs page & loading skeleton
│   │   ├── layout.tsx          # Root layout with providers, SEO, and global styles
│   │   ├── loading.tsx         # Global loading indicator
│   │   ├── not-found.tsx       # Custom 404 page
│   │   ├── page.tsx            # Home page route
│   │   ├── robots.ts           # Dynamic robots.txt generator
│   │   ├── sitemap.ts          # Dynamic sitemap generator
│   │   └── template.tsx        # Page transition wrapper
│   ├── assets/                 # Brand assets, fonts, icons, and gallery photos
│   │   ├── font/               # Custom local typography (Black Signature)
│   │   ├── gallery/            # Gallery image catalog
│   │   └── home/               # Landing page vector graphics and images
│   ├── components/             # Modular React components
│   │   ├── gallery/            # Gallery grid, hero, and lightbox modal
│   │   ├── home/               # Home sections (Hero, History, Pros, Certs, etc.)
│   │   ├── layout/             # Header, Navbar, Footer, and MobileCTA
│   │   ├── program/            # Program packages catalog & cards
│   │   ├── transition/         # Custom route transition provider & overlay
│   │   └── ui/                 # Reusable UI primitives (Buttons, Cards)
│   ├── lib/                    # Shared utility functions (clsx, tailwind-merge)
│   └── styles/                 # Global styles and Tailwind CSS configuration
├── next.config.ts              # Next.js configuration & image optimization settings
├── package.json                # Project dependencies and npm scripts
├── postcss.config.mjs          # PostCSS configuration
└── tsconfig.json               # TypeScript compiler configuration
```

---

## 🌐 Pages & Routing

| Route | Description |
| :--- | :--- |
| [`/`](file:///src/app/page.tsx) | **Home Page** – Hero banner, history, key benefits, program summary, certification, testimonials, and opening hours. |
| [`/program`](file:///src/app/program/page.tsx) | **Programs & Courses** – In-depth overview of all training tiers, course content, duration, and pricing. |
| [`/galeri`](file:///src/app/galeri/page.tsx) | **Photo Gallery** – Interactive photo collection with full-screen lightbox modal preview. |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.18.0 or newer recommended)
- Package manager: `npm`, `yarn`, `pnpm`, or `bun`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Weedanta/TiniSalon.git
   cd tinisalon
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the Next.js development server with Turbopack on `http://localhost:3000`. |
| `npm run build` | Builds the optimized production application with Turbopack. |
| `npm run start` | Starts the production server after building. |
| `npm run lint` | Runs ESLint to check for code style and syntax issues. |

---

## 🎨 Design & Optimization

- **Color Palette**: Custom primary brand shades tailored around vibrant magenta/pink (`#e60283`), soft tints, and dark accents.
- **Custom Typography**: `Poppins` as primary font family paired with `Black Signature` for luxury aesthetic titles.
- **Performance**: High Lighthouse score optimization, responsive image sizing via `next/image` with AVIF/WebP formats, lazy-loaded components, and lightweight animations.

---

## 📍 Business & Contact Info

- **Name**: Tini Salon Medan
- **Location**: Jl. H. M. Joni No. 84 (In front of IRIAN Supermarket), Simpang Bahagia, Pasar Merah Timur, Kec. Medan Area, Kota Medan, Sumatera Utara 20216
- **Phone / WhatsApp**: [+62 813-7896-5335](https://wa.me/6281378965335)
- **Instagram**: [@tinisalon2003](https://instagram.com/tinisalon2003)
- **TikTok**: [@tini.salon_](https://tiktok.com/@tini.salon_)
- **Facebook**: [Tini Salon](https://www.facebook.com/share/v/1UNm3RnaDS/)

---

## 📄 License

Copyright © 2025 [Tini Salon Medan](https://tinisalon.com). All rights reserved.
