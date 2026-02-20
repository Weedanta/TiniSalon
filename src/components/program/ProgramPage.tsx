import React from "react";
import HeroSection from "../ui/HeroSection";
import TitleProgram from "@/assets/home/title_program.svg";
import Image from "next/image";

const ProgramPage = () => {
  return (
    <HeroSection className="flex flex-col justify-center items-center gap-6">
      <Image
        src={TitleProgram}
        alt="Title Program"
        className="w-72 md:w-xs xl:w-sm h-auto"
      />
      <div className="lg:w-7/10 md:w-8/10 w-4/5 h-auto py-6 md:py-12 bg-primary-50 rounded-4xl text-gray-700 font-medium px-10 md:px-20 text-center">
        Metode pembelajaran dilaksanakan secara{" "}
        <span className="text-primary-500 font-semibold">offline</span> dengan
        jadwal yang fleksibel. Setiap peserta dapat{" "}
        <span className="text-primary-500 font-semibold">
          menyesuaikan waktu belajar
        </span>{" "}
        sesuai kebutuhan. Baik siswa sekolah, mahasiswa, maupun pekerja,
        semuanya memiliki kesempatan untuk mempelajari keterampilan salon{" "}
        <span className="text-primary-500 font-semibold">
          sesuai kebutuhan{" "}
        </span>{" "}
        masing-masing.
      </div>
    </HeroSection>
  );
};

export default ProgramPage;
