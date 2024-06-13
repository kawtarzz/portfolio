import React from "react";
import BlackDotSvg from "../../../assets/img/svg/black-dots.svg";
import YellowSquare from "../../../assets/img/svg/yellow-square-frame.svg";
import YellowFrameSvg from "../../../assets/img/svg/traingle-yellow-frame.svg";
import BlackFrameSvg from "../../../assets/img/svg/traingle-black-frame.svg";
import SlickImage2 from "./SlickImage2"


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
                "Create style frames for an animated video promoting a new app for a mobile service called CandyCart. CandyCart is a fun new start-up that delivers home movie snack needs to your door within an hour. Imagine GrubHub, but filled with all of the delicious movie-sized candies and fresh, oozy, cheesy nachos that you could ever want. With their app launching in a month, they wanted to build the hype with a :20-30 second pre-roll ad."
                </p>
                <p>
                  I wanted to provide the client with a few storyboard and art direction options to choose from-A more literal interpretation of the script and a more abstract, playful option. Both showed the app's functionality and the fun, lighthearted nature of the brand.
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
                      <li>Keeping in mind the branding, the style must remain professional & clean to represent the brand and app's reliability and seamless services. </li>
                      <li>
                        Create a literal and abstract storyboard interpretation of the script for the client to choose from.
                      </li>
                      <li>
                      Show the app functionality. 
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
                  <SlickImage2 />
                
              
                </div>
              </div>
            </div>
          </div>
        
      </>
    );
};
export default ChallengeSection;