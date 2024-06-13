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
                ٱلْكَوْثَر 
                </h2>
              
                <p className="unconventional" data-aos="fade-up">
             "....What is Al-Kawthar?" The Prophet replied: "It is a river in Paradise which my Lord has given me. It is whiter than milk and sweeter than honey. There are birds in it whose necks are (long) like carrots." Umar said, "O Messenger of Allah! Verily, they (the birds) will be beautiful."</p>
           <p className="quicksand-subheading">
           River in Paradise is my personal branding project. I wanted to create a brand that represents me and my work. The name River in Paradise comes from the meaning of my name, Kawtar, or ٱلْكَوْثَر , Al-Kawthar. It is the 108th chapter of the Quran. 
           </p>           <p className="quicksand-subheading" style={{"color":"var(--secondary-color)"}}>

                  It also represents the flow of creativity, the beauty of nature, and the search for <i>Paradise</i> in one's art practice and self. The logo is a combination of my initials, K and A, and the colors are inspired by the colors of the ocean and the sky. The brand is meant to be clean, modern, and professional, with a touch of creativity and fun.
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
                  
                </div>
              </div>
            </div>
        
      </>
    );
};
export default ChallengeSection;