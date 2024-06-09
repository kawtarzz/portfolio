import React, { useState, useEffect } from "react";
import MainPageSection from "./ArtDesign/grandmasKitchen/MainPageSection";
import Marque from "./ArtDesign/grandmasKitchen/MarqueSection";
import ChallengeSection from "./ArtDesign/grandmasKitchen/ChallengeSection";
import SolutionSection from "./ArtDesign/grandmasKitchen/SolutionSection";
import Loader from "./home/Loader";


const GrandmasKitchen = () => {
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
export default GrandmasKitchen;



  
