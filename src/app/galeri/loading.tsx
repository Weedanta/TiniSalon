export default function Loading() {
  return (
    <div className="bg-white min-h-screen font-poppins">
      {/* Hero skeleton */}
      <div className="relative flex min-h-screen items-center justify-center bg-grey-100">
        <div className="animate-shimmer w-full h-full absolute inset-0" />
        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="skeleton w-48 h-12 rounded-lg" />
          <div className="skeleton w-64 md:w-80 h-5 rounded-lg" />
        </div>
      </div>

      {/* Gallery masonry skeleton */}
      <div className="flex justify-center px-4 md:px-8 py-16 md:py-20">
        <div className="lg:max-w-6xl w-full">
          <div className="columns-2 md:columns-3 xl:columns-4 gap-3 md:gap-4">
            {[180, 240, 160, 280, 200, 220, 160, 260, 180, 240, 200, 160].map(
              (h, i) => (
                <div key={i} className="mb-3 md:mb-4 break-inside-avoid">
                  <div
                    className="skeleton w-full rounded-xl"
                    style={{ height: `${h}px` }}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
