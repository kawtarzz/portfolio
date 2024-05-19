import React, {useEffect, useRef} from "react";
import BlackDotSvg from "../../../assets/img/svg/black-dots.svg";
import YellowSquare from "../../../assets/img/svg/yellow-square-frame.svg";
import YellowFrameSvg from "../../../assets/img/svg/traingle-yellow-frame.svg";
import BlackFrameSvg from "../../../assets/img/svg/traingle-black-frame.svg";
import video1 from "../../../assets/video/video5.mp4"

const ChallengeSection = () =>
{
  const vidRef = useRef();
  useEffect(() => {
    vidRef.current.play();
  }, []);
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
                The challenge was to create an application that allows 
                users to manage tasks and rewards, with a responsive design 
                for various media displays. It required a login and registration
                 page, account-specific resources upon authentication, and 
                 CRUD operations for tasks and rewards.
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
                        {" "}Full CRUD functionality
                       
                      </li>
                      <li>
                        User Authentication with registration & login. Data is user-specific.
                      </li>
                      <li>Responsive Design</li>
                    </ul>
                  </div>
                <p className="integer integer1">
                CookiJar is a productivity tracking application that gamifies task management. Built with React and JSON server, it allows users to assign point values to tasks and earn rewards upon completion. The application features full CRUD functionality, user authentication, and a responsive design.
                </p>
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
                    <video
                      className="challenge-img"
                      src={video1}
                      ref={vidRef}
                      width="600"
                      height="300"
                      loop
                      autoPlay
                      muted
                    />
                    {/* <video autoplay loop muted className="challenge-img">
                      <source src={video1} type="video/mp4" />
                    </video> */}
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