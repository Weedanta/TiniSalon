import React from "react";
import HeroHome from "./section/HeroHome";
import History from "./section/History";
import Pros from "./section/Pros";
import Testimonial from "./section/Testimonial";

const HomePage = () => {
  return (
    <div className="bg-white">
      <HeroHome />
      <History />
      <Pros />
      <Testimonial />
    </div>
  );
};

export default HomePage;
