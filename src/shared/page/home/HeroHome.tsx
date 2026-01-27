import HeroSection from "@/shared/components/section/HeroSection";
import React from "react";
import Image from "next/image";
import BannerDesktop from "@/shared/assets/home/banner-desktop.png";
import BannerMobile from "@/shared/assets/home/banner-mobile.png";

const HeroHome = () => {
  return (
    <HeroSection className="gap-4">
      <Image
        src={BannerDesktop}
        alt="Banner Desktop"
        className="hidden md:block md:w-2xl xl:w-4xl h-auto"
      />
      <Image
        src={BannerMobile}
        alt="Banner Mobile"
        className="md:hidden w-3xl h-auto"
      />
      <p className="font-medium text-base md:text-xl xl:text-2xl text-center">Salon kecantikan, perawatan diri, dan kursus salon</p>
    </HeroSection>
  );
};

export default HeroHome;
