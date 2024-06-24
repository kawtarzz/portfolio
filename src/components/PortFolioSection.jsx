import React from "react";
import ArtDesign from "./ArtDesign";
import GallerySection from "./Portfolio/riverInParadise/Gallery"


const PortfolioSection = () => {


  return (
    <>
      <div className="all-page-border2">
        <div className="spacer">
          <div className="yellow_circle"></div>
          <h2 className="about-text" data-aos="fade-up">
            Portfolio
          </h2>
        </div>
      </div>
      <div className="content_box">
        <ArtDesign />
      </div>
        <div className="spacer">

          <div className="content_box">
            <GallerySection />
          </div>
        </div>

    </>
  );
};
export default PortfolioSection;

