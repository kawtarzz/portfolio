import React from "react";
import MainPageSection from "./WebDesign/shoptheblock/MainPageSection";
import Marque from "./WebDesign/shoptheblock/MarqueSection";
import ChallengeSection from "./WebDesign/shoptheblock/ChallengeSection";
import SolutionSection from "./WebDesign/shoptheblock/SolutionSection";

const ShopTheBlock = () => {
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

export default ShopTheBlock;
