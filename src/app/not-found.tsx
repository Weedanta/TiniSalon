import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 text-center font-poppins relative overflow-hidden bg-white">
      {/* Decorative background blurs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[28rem] sm:h-[28rem] bg-primary-100/60 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-56 h-56 sm:w-72 sm:h-72 bg-secondary-200/40 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/6 w-40 h-40 bg-primary-50/80 rounded-full blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center">
        {/* Floating scissors icon */}
        <div className="animate-float-slow mb-4" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-14 h-14 sm:w-16 sm:h-16 text-primary-300 animate-scissor"
          >
            <circle cx="6" cy="6" r="3" />
            <path d="M8.12 8.12 12 12" />
            <path d="M20 4 8.12 15.88" />
            <circle cx="6" cy="18" r="3" />
            <path d="M14.8 14.8 20 20" />
            <path d="M8.12 8.12 12 12" />
          </svg>
        </div>

        

        {/* 404 number with gradient */}
        <h1
          className="text-8xl sm:text-9xl font-extrabold tracking-tight select-none animate-fade-in-up bg-gradient-to-br from-primary-400 via-primary-500 to-primary-700 bg-clip-text text-transparent"
          style={{ animationDelay: "0.1s" }}
        >
          404
        </h1>

        {/* Subtitle */}
        <h2
          className="text-2xl sm:text-3xl font-bold text-grey-800 mt-2 mb-3 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Halaman Tidak Ditemukan
        </h2>

        {/* Description */}
        <p
          className="text-grey-400 text-sm sm:text-base mb-8 max-w-md animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Maaf, halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
          Coba kembali ke beranda atau jelajahi halaman lainnya.
        </p>

        {/* Action buttons */}
        <div
          className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-secondary-500 hover:bg-secondary-400 text-grey-500 font-semibold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base cursor-pointer"
          >
            Kembali ke Beranda
          </Link>
          <Link
            href="/program"
            className="inline-flex items-center justify-center bg-white border-2 border-primary-200 hover:border-primary-400 text-primary-500 font-semibold px-8 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 text-sm sm:text-base cursor-pointer"
          >
            Lihat Program
          </Link>
        </div>
      </div>
    </main>
  );
}
