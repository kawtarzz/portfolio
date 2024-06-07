import React, { useState, useEffect } from "react";
import MainPageSection from "./ArtDesign/normalcoffee/MainPageSection";
import Marque from "./ArtDesign/normalcoffee/MarqueSection";
import ChallengeSection from "./ArtDesign/normalcoffee/ChallengeSection";
import SolutionSection from "./ArtDesign/normalcoffee/SolutionSection";
import Loader from "./home/Loader";

const NormalCoffee = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  if (loading) {
    return <Loader />;
  }
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
export default NormalCoffee;
