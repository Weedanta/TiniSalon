import React from "react";
import ProsSection from "@/components/home/section/ProsSection";

const Pros = () => {
  return (
    <section className="min-h-screen bg-white flex justify-center">
      <div className="flex flex-col lg:max-w-7xl w-full px-8 md:px-8 lg:px-4 xl:px-0 xl:gap-12 md:gap-10 gap-8 xl:mb-40 lg:mb-28 md:mb-20 mb-16">
        <h2 className="mx-auto text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-primary-500 leading-relaxed">
          Mengapa Memilih{" "}
          <span className="mx-2 text-black-signature text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
            <br className="flex md:hidden" />
            Tini Salon Medan
          </span>
          ?
        </h2>
        <p className="text-center text-lg md:text-xl lg:text-2xl xl:text-2xl font-medium text-grey-600">
          Tini Salon Medan berpengalaman 20+ tahun dan dipercaya ribuan
          pelanggan.
        </p>

        <div className="w-full mt-8 md:mt-12">
          <ProsSection />
        </div>
      </div>
    </section>
  );
};

export default Pros;
