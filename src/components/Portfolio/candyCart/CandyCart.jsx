import React, { useState, useEffect } from "react";
import MainPageSection from "./MainPageSection";
import Marque from "./MarqueSection";
import ChallengeSection from "./ChallengeSection";
import SolutionSection from "./SolutionSection";
import Loader from "../../home/Loader";

const CandyCart = () => {
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
export default CandyCart;
