import React from "react";
import BlackDotSvg from "../../../assets/img/svg/black-dots.svg";
import YellowSquare from "../../../assets/img/svg/yellow-square-frame.svg";
import YellowFrameSvg from "../../../assets/img/svg/traingle-yellow-frame.svg";
import BlackFrameSvg from "../../../assets/img/svg/traingle-black-frame.svg";
import candyCart1 from "../../../assets/img/portfoliosection/candyCart/Deliveryshere_Treatment.jpg"


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
                Create style frames for an animated video promoting a new app for a mobile service called CandyCart. CandyCart is a fun new start-up that delivers home movie snack needs to your door within an hour. Imagine GrubHub, but filled with all of the delicious movie-sized candies and fresh, oozy, cheesy nachos that you could ever want. With their app launching in a month, they wanted to build the hype with a :20-30 second pre-roll ad. 
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
                        Design style frames that illustrate the brand: playful, fun & lighthearted. 
                      </li>
                      <li>Keeping in mind the branding, the style must remain professional & clean to keep customer trust. </li>
                      <li>
                        Present a few options for the style frames. A literal translation of the given script and a more abstract interpretation. 
                      </li>
                      <li>
                       Create a story that shows the app functionality. 
                      </li>
                      <li>Design within the branding</li>
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

                    <img src={candyCart1}
                    className="project-img1"
                    alt="candycart"
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