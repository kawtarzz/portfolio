import React from "react";
import MainPageSection from "./ArtDesign/witchesWizards/MainPageSection";
import ChallengeSection from "./ArtDesign/witchesWizards/ChallengeSection"
import SolutionSection from "./ArtDesign/witchesWizards/SolutionSection";
import Marque from "./WebDesign/shoptheblock/MarqueSection";

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
