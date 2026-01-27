import HeroSection from "@/shared/components/section/HeroSection";
import React from "react";
import Image from "next/image";
import BannerDesktop from "@/shared/assets/home/banner-desktop.png";
import BannerMobile from "@/shared/assets/home/banner-mobile.png";

const HeroHome = () => {
  return (
    <HeroSection>
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
    </HeroSection>
  );
};

export default HeroHome;
