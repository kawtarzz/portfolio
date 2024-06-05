import React, { useState } from "react";
import SlickImage from "./SlickImage";
import BlackDotSvg from "../../../assets/img/svg/black-dots.svg";
import YellowSquare from "../../../assets/img/svg/yellow-square-frame.svg";
import YellowFrameSvg from "../../../assets/img/svg/traingle-yellow-frame.svg";
import BlackFrameSvg from "../../../assets/img/svg/traingle-black-frame.svg";
import ImageSlider from "./SlickImage";

const ChallengeSection = () => {


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
              The challenge was to create style frames and assets in preparation for an animated campaign that would be used to promote a witch & wizard themed summer camp for adults. The client wanted to see a variety of characters and scenes that would be used to create the animated advertisement. The client provided a script that outlined the key points that needed to be included in the animation. The client also provided a logo that needed to be included in the animation. The client wanted the animation to be fun and engaging, and to appeal to adults who are interested in magic and fantasy.
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
                    Design style frames that entice viewers with magical interests!
                  </li>
                  <li>Using the provided script, create the visual narrative that best interprets the material. </li>
                  <li>
                    Show the offerings of the summer camp with emotive characters.
                  </li>
                  <li>
                    Design within brand guidelines.
                  </li>
                  <li>Create a Logo lock-up to close the animation.</li>
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
                 <div className="main_image_slider">
                  <ImageSlider />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChallengeSection;