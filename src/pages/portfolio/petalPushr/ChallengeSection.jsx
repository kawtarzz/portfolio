import React from "react";
import BlackDotSvg from "../../../assets/img/svg/black-dots.svg";
import YellowSquare from "../../../assets/img/svg/yellow-square-frame.svg";
import YellowFrameSvg from "../../../assets/img/svg/traingle-yellow-frame.svg";
import BlackFrameSvg from "../../../assets/img/svg/traingle-black-frame.svg";
import Image01 from "../../../assets/img/portfoliosection/petalpushr/banner_transBG_000.png";
import Image02 from "../../../assets/img/portfoliosection/petalpushr/petalpushrhomepg.png";


const ChallengeSection = () => {
  return (
    <>
      <div className="all-page-border2">
        <div className="container">
          <div className="challenge-spacer">
            <div className="position-relative">
              <div className="yellow_circle"></div>
              <h2 className="about-text" data-aos="fade-up">
                Project Overview:
              </h2>
              <h2 className="client" data-aos="fade-up">
                <i>
                  petalpushr
                </i>
              </h2>
              <p className="unconventional" data-aos="fade-up">
                The objective of this project was to create a visually appealing and user-friendly e-commerce website for an independent botanical and floral arrangement designer based in Chicago. The website aimed to showcase her unique floral designs, streamline the purchasing process for customers, and enhance her online presence.
              </p>
              <div className="challenge-dots-square">
                <img
                  className="challenge-black-dots"
                  src={BlackDotSvg}
                  alt="black-dots"
                />
                <img
                  className="challenge-squre-frame"
                  src={YellowSquare}
                  alt="yellow-square-frame"
                />
              </div>
            </div>
            <h2 className="quicksand-heading">
              Key Deliverables:
            </h2>
            <div className="row challenge-box">
              <div className="col-xl-6" data-aos="fade-up">
                <div className="skill-list">
                  <ul className="skill-list-main">
                    <h3>Brand Development & Website Design</h3>
                    <li>
                      Utilized Shopify as the e-commerce platform, leveraging a template to create the foundation of the website.
                    </li>
                    <li>
                      Customized the template with CSS to better align with the designer’s unique style and branding.
                    </li>
                    <li>
                      Edited high-quality photos of the floral arrangements to highlight their beauty and intricacy.
                    </li>
                    <li>
                      Listed inventory with detailed descriptions and pricing, categorized by types of arrangements and occasions.
                    </li>
                    <li>
                      Implemented SEO strategies to improve the website’s search engine ranking and visibility.
                    </li>
                    <li>
                      Integrated social media platforms to increase brand awareness and drive traffic to the website.
                    </li>
                    <li>
                      Designed a minimal logo that encapsulates the client’s aesthetic without detracting from the intricate floral design work.
                    </li>
                    <li>
                      Created cohesive graphic branding assets including color schemes, typography, and imagery to maintain brand consistency across the website.
                    </li>
                  </ul>
                </div>

                <div className="challenge-traingle-frame">
                  <img
                    className="ch-traingle-yellow-frame"
                    src={YellowFrameSvg}
                    alt="traingle-yellow-frame"
                  />
                  <img
                    className="ch-traingle-black-frame"
                    src={BlackFrameSvg}
                    alt="traingle-black-frame"
                  />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="challenge-img-main">
                  <img src={Image01} alt="petalpushr" className="project-img" />
                </div>
                <img src={Image02} alt="petalpushr" className="project-img" />


              </div>

            </div>
          </div>
        </div>
      </div>

    </>
  );
};
export default ChallengeSection;