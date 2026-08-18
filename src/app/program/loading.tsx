export default function Loading() {
  return (
    <div className="bg-white min-h-screen font-poppins">
      {/* Hero skeleton */}
      <div className="relative flex min-h-screen items-center justify-center bg-grey-100">
        <div className="animate-shimmer w-full h-full absolute inset-0" />
        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="skeleton w-72 md:w-80 xl:w-96 h-10 rounded-lg" />
          <div className="skeleton w-56 md:w-64 h-5 rounded-lg" />
        </div>
      </div>

      {/* Program cards skeleton grid */}
      <div className="flex justify-center px-4 md:px-8 py-16 md:py-20">
        <div className="lg:max-w-6xl w-full">
          {/* Section title skeleton */}
          <div className="flex flex-col items-center gap-3 mb-12">
            <div className="skeleton w-48 h-8 rounded-lg" />
            <div className="skeleton w-32 h-4 rounded-lg" />
          </div>

          {/* Cards skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-3xl overflow-hidden shadow-md">
                {/* Card header */}
                <div className="skeleton h-24 rounded-none" />
                {/* Card body */}
                <div className="bg-white p-6 flex flex-col gap-3">
                  <div className="skeleton w-full h-4 rounded" />
                  <div className="skeleton w-3/4 h-4 rounded" />
                  <div className="skeleton w-5/6 h-4 rounded" />
                  <div className="skeleton w-2/3 h-4 rounded" />
                  <div className="mt-4 flex justify-center">
                    <div className="skeleton w-32 h-8 rounded-lg" />
                  </div>
                  <div className="mt-2">
                    <div className="skeleton w-full h-12 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
