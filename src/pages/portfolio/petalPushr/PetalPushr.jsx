import React, { useState, useEffect } from "react";
import MainPageSection from "./MainPageSection.jsx";
import Marque from "./MarqueSection.jsx";
import ChallengeSection from "./ChallengeSection.jsx";
import SolutionSection from "./SolutionSection.jsx";

const PetalPushr = () => {
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
export default PetalPushr;
