import HeroSection from "@/components/ui/HeroSection";
import React from "react";
import Image from "next/image";
import BannerDesktop from "@/assets/home/banner-desktop.webp";
import BannerMobile from "@/assets/home/banner-mobile.webp";
import { Button } from "@/components/ui/button";

const HeroHome = () => {
  return (
    <HeroSection className="gap-4 items-center">
      <Image
        src={BannerDesktop}
        alt="Banner Desktop"
        className="hidden md:block md:w-2xl xl:w-4xl h-auto"
        draggable={false}
      />
      <Image
        src={BannerMobile}
        alt="Banner Mobile"
        className="md:hidden w-full h-auto"
        draggable={false}
      />
      <p className="font-medium text-sm sm:text-base md:text-xl xl:text-xl text-center">
        Salon kecantikan, perawatan diri, dan kursus salon
      </p>
      <Button
        variant={"default"}
        href={"https://maps.app.goo.gl/Zga7aTay3P3KnvwK8"}
        className="text-center mt-5 font-bold "
      >
        LIHAT SALON
      </Button>
    </HeroSection>
  );
};

export default HeroHome;
