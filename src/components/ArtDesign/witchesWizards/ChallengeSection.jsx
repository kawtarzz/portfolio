import React from "react";
import BlackDotSvg from "../../../assets/img/svg/black-dots.svg";
import YellowSquare from "../../../assets/img/svg/yellow-square-frame.svg";
import YellowFrameSvg from "../../../assets/img/svg/traingle-yellow-frame.svg";
import BlackFrameSvg from "../../../assets/img/svg/traingle-black-frame.svg";
import witchesWizardsImg from "../../../assets/img/portfoliosection/witchesWizards/frame08.jpg";

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
                Every year, Camp Cloakwood hosts the Annual Wizards
                and Witches Mountain Retreat. It’s a place for tortured
                souls and fantastical beings to gather in a safe space
                and learn to hone their supernatural skills. In reality, this
                is a fun overnight camp environment in which adults
                can indulge in their most exciting childhood fantasies.
                Camp counselors teach the dark arts of spell book
                binding, broom maintenance and more.

                With a provided script, you are tasked with created 6-8 styleframes in 16:9 format.

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
                      Client goals for this project:
                    </h3>
                    <li> Create style frames and assets in preparation
                      for an animated video that would be used to promote a witch & wizard themed summer camp for adults.</li>
                    <li>
                      Set the concept & style that evokes an eerie, yet lighthearted mood. Feel free to include some mischief, but the overall ton should be fun and avoid sinister undertones.
                    </li>
                    <li>
                      The age range for the target audience is 25-40.
                    </li>
                    <ul>
                      <h3>
                        Personal goals for this project:
                      </h3>
                      <li>
                        Play with perspective and create a sense of depth in the illustrations.
                      </li>
                      <li>
                        Experiment with color and lighting to create a magical atmosphere.
                      </li>
                      <li>
                        Create fluid & strong transitions that provide the animator with a clear direction.
                      </li>
                      <li>
                        Simplify the design to make it easy to animate and avoid small details that could be lost in the animation.
                      </li>
                    </ul>
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
              <img src={witchesWizardsImg} alt="Witches & Wizards" style={{maxWidth:"700px", display:"flex"}} />
            </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChallengeSection;