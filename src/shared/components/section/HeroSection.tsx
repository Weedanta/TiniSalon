import React from "react";

interface HeroSectionProps {
  children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionProps> = ({ children }) => {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center hero-surface"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-black/10" aria-hidden />
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default HeroSection;
