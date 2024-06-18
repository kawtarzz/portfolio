import React from "react";
import BlackDotSvg from "../../../assets/img/svg/black-dots.svg";
import YellowSquare from "../../../assets/img/svg/yellow-square-frame.svg";
import YellowFrameSvg from "../../../assets/img/svg/traingle-yellow-frame.svg";
import BlackFrameSvg from "../../../assets/img/svg/traingle-black-frame.svg";


const ChallengeSection = () =>
{
    return (
      <>
        <div className="all-page-border2">
            <div className="challenge-spacer">
              <div className="position-relative">
                <div className="yellow_circle"></div>
                <h2 className="about-text" data-aos="fade-up">
                 Process
                </h2>
                <p className="unconventional" data-aos="fade-up">
                  This section is under construction. Please check back later.
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
              <div className="row challenge-box">
                <div className="col-xl-6" data-aos="fade-up">
                    <h2 className="quicksand-heading">
                    
                      Skills & tools overview:
                      </h2>
                      <hr />
                  <div className="skill-list">
                    <ul className="skill-list-main">
                    
                      <li>
                       Photoshop for rough composition, print layout designed in InDesign
                         </li>
                      <li>
                       Hand-drawn illustrations, digitally retouched and cleaned in Photoshop. 
                      </li>
                      <li>
                      Printing done by Greko-Printing / Comix Wellspring
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

                </div>

                </div>
              
                </div>
              </div>
            </div>
      </>
    );
};
export default ChallengeSection;