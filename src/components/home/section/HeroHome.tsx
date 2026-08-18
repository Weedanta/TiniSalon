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
        alt="Tini Salon – Salon kecantikan dan kursus profesional di Medan"
        className="hidden md:block md:w-2xl xl:w-4xl h-auto"
        draggable={false}
        priority
        sizes="(min-width: 1280px) 896px, (min-width: 768px) 672px, 100vw"
      />
      <Image
        src={BannerMobile}
        alt="Tini Salon – Salon kecantikan dan kursus profesional di Medan"
        className="md:hidden w-full h-auto"
        draggable={false}
        priority
        sizes="(max-width: 767px) 100vw, 1px"
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
