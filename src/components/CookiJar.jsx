import React from "react";
import MainPageSection from "./WebDesign/cookijar/MainPageSection";
import Marque from "./WebDesign/cookijar/MarqueSection";
import ChallengeSection from "./WebDesign/cookijar/ChallengeSection";
import SolutionSection from "./WebDesign/cookijar/SolutionSection";


const CookiJar = () => {

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
export default CookiJar;
