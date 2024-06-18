import React from "react";
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
                Client Breif
              </h2>
              <p className="unconventional" data-aos="fade-up">
                <h3>
                  <i>
                    Protein shakes that
                    actually taste good.
                  </i>
                </h3>
                <p>
                  Our main goal is to evoke that “satisfied”
                  feeling. But our shakes are important, too.
                  We’d love it if you could show off at least 2-3
                  of our new flavors in this :15s spot.
                  <i>Grandmas Milk & Cookies, Fantastic Flan, Bodacious Baklava, Marvelous Macaron, Delectable Choco-Donut</i>
                  How you showcase them is up to you - in a
                  glass bottle with a twisty straw or maybe in a
                  festive paper cup. We want you to have fun
                  creating this animation because our flavors
                  are meant to be fun.
                </p>

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
                    <h3>
                      Client goals :
                    </h3>
                    <li> Our main goal is to evoke that “satisfied”
                      feeling without use of a script. </li>
                    <li>
                      Show off at least 2-3
                      of our new summer flavors.
                    </li>
                    <li>
                      Create this
                      magical world and pull it all together with clever transitions.
                    </li>
                    <li>
                      Our brand is colorful, adventurous, organic and homemade. We want to see that reflected in the animation.
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