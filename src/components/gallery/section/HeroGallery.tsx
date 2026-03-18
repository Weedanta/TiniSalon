import HeroSection from "@/components/ui/HeroSection";
import { GALLERY_CONTENT } from "@/components/gallery/data/galleryImages";

export default function HeroGallery() {
  const { heroTitle, heroDescription } = GALLERY_CONTENT;

  return (
    <HeroSection className="flex flex-col justify-center items-center gap-6">
      <h1 className="text-black-signature text-6xl md:text-7xl xl:text-8xl text-white leading-relaxed drop-shadow-lg">
        {heroTitle}
      </h1>
      <div className="lg:w-7/10 md:w-8/10 w-4/5 h-auto py-6 md:py-12 bg-primary-50 rounded-4xl text-gray-700 font-medium px-10 md:px-20 text-center">
        {heroDescription}
      </div>
    </HeroSection>
  );
}
