import React from "react";
import HeroProgram from "./section/HeroProgram";
import ProgramSection from "./section/ProgramSection";
const ProgramPage = () => {
  return (
    <div className="bg-white w-full flex flex-col items-center">
      <HeroProgram />
      <ProgramSection />
    </div>
  );
};

export default ProgramPage;
