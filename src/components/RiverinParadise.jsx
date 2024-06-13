import React from "react";
import MainPageSection from "./ArtDesign/riverInParadise/MainPageSection";
import Marque from "./ArtDesign/riverInParadise/MarqueSection";
import ChallengeSection from "./ArtDesign/riverInParadise/ChallengeSection";
import SolutionSection from "./ArtDesign/riverInParadise/SolutionSection";

const RiverinParadise = () => {
  return (
    <>
      <div className="main-page-space overflow-hidden">
        <MainPageSection />
      </div>
      <section>
        <Marque />
      </section>
      <section className="overflow-hidden">
        <ChallengeSection />
      </section>
      <section className="overflow-hidden">
        <div className="all-page-border2">
          <SolutionSection />
        </div>
      </section>
    </>
  );
};

export default RiverinParadise;
