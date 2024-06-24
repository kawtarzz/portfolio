import React from "react";
import MainPageSection from "./MainPageSection";
import ChallengeSection from "./ChallengeSection"
import SolutionSection from "./SolutionSection";
import Marque from "./MarqueSection";

const WitchesWizards = () => {

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
export default WitchesWizards;
