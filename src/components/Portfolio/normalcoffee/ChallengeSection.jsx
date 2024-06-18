import React from "react";
import BlackDotSvg from "../../../assets/img/svg/black-dots.svg";
import YellowSquare from "../../../assets/img/svg/yellow-square-frame.svg";
import YellowFrameSvg from "../../../assets/img/svg/traingle-yellow-frame.svg";
import BlackFrameSvg from "../../../assets/img/svg/traingle-black-frame.svg";
import normalCoffee1 from "../../../assets/img/portfoliosection/normalCoffee/Diversity.f02.jpg"
const ChallengeSection = () =>
{
    return (
      <>
        <div className="all-page-border2">
          <div className="container">
            <div className="challenge-spacer">
              <div className="position-relative">
                <div className="yellow_circle"></div>
                <h2 className="about-text" data-aos="fade-up">
                  Challenge
                </h2>
                <p className="unconventional" data-aos="fade-up">
                The challenge was to design a set of style frames to be animated as a promotional ad for fictional coffee shop, "Normal Coffee & Donuts". The creative brief required an establishing shot that would depict our character and the coffee shop facade. The next would be a close-up with our product. Next we'd have a full shot of the character enjoying their coffee shop treats and the final shot would be a results-driven frame showing the positive in the character's mood and energy. 
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
                  <div className="skill-list">
                    <ul className="skill-list-main">
                      <li>
                        Establishing shot of Character & Business
                      </li>
                      <li> Product shot</li>
                      <li>
                        {" "}Diversity in Character
                       
                      </li>
                      <li>
                        Show emotion in Character
                      </li>
                      <li>
                       Add an action pose to show results
                      </li>
                      <li>Logo Lockup</li>
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

                    <img src={normalCoffee1}
                    className="challenge-img"
                    alt="normalcoffee"
                    width="300"
                    />
                </div>

                </div>
              
                </div>
              </div>
            </div>
          </div>
        
      </>
    );
};
export default ChallengeSection;