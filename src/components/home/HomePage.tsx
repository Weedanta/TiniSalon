import React from "react";
import HeroHome from "./section/HeroHome";
import History from "./section/History";
import Pros from "./section/Pros";
import Testimonial from "./section/Testimonial";
import Certification from "./section/Certification";

const HomePage = () => {
  return (
    <div className="bg-white">
      <HeroHome />
      <History />
      <Pros />
      <Certification />
      <Testimonial />
    </div>
  );
};

export default HomePage;
