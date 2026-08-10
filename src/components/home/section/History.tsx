import React from "react";
import ImageSalon from "@/assets/home/sejarah.webp";
import PerjalananKamiText from "@/assets/home/Perjalanan-Kami.svg";
import Image from "next/image";

const History = () => {
  return (
    <section className="bg-white flex items-center justify-center">
      <div className="flex flex-col md:flex-row lg:max-w-7xl w-full px-8 md:px-8 lg:px-4 xl:px-0 xl:gap-20 md:gap-16 gap-8 xl:my-40 lg:my-28 md:my-20 my-16">
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-6 md:gap-4">
          <Image
            src={PerjalananKamiText}
            alt="Perjalanan Kami"
            className="w-full h-auto"
            draggable={false}
          />
          <p className="lg:text-2xl md:text-base text-sm text-justify text-black">
            Tini Salon bermula dari ruang kecil yang disewa pada Juli 2002
            dengan perlengkapan seadanya. Enam bulan kerja keras menghidupkan
            kembali salon tersebut dan menjadi langkah awal berdirinya Tini
            Salon pada 16 Januari 2003. Dari layanan tata rias rambut sederhana,
            Tini terus berkembang menambah perawatan kulit, hingga akhirnya
            tumbuh menjadi salon profesional yang pernah memiliki lima cabang
            dan tim ahli di bidangnya.
          </p>
        </div>
        <div className="w-full md:w-7/12 flex justify-center md:justify-end">
          <Image
            src={ImageSalon}
            alt="Salon Tini"
            className="w-3/4 md:w-full h-auto object-cover rounded-2xl md:rounded-4xl shadow-sm"
            draggable={false}
            sizes="(max-width: 768px) 75vw, (max-width: 1280px) 50vw, 600px"
          />
        </div>
      </div>
    </section>
  );
};

export default History;
