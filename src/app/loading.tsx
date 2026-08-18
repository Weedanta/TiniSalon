export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5 font-poppins bg-white">
      {/* Brand name */}
      <div className="flex flex-col items-center gap-2">
        <span className="text-black-signature text-4xl sm:text-5xl text-primary-500 select-none">
          Tini Salon
        </span>
        <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary-300 to-transparent rounded-full" />
      </div>

      {/* Animated dots */}
      <div className="flex items-center gap-2 mt-2" role="status" aria-label="Memuat halaman">
        <span className="loading-dot" />
        <span className="loading-dot" />
        <span className="loading-dot" />
      </div>

      <p className="text-grey-400 text-xs font-medium tracking-wide uppercase mt-1">
        Memuat...
      </p>
    </div>
  );
}
