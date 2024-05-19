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
                To build a full-stack application with user authentication, 
                full CRUD functionality, and an SQL database. The application
                 should have a login and registration page, allowing users to 
                 create, read, update, and delete resources. It should support
                  form-based resource creation and updates, querying options 
                  from the database using input selectors 
                  (radio, drop-down, check-box), and deleting resources. The 
                  application should be responsive, following the Single 
                  Responsibility principle and emphasizing modular code.
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
                        {" "}
                        Develop easy-to-find and easy-to-navigate mobile
                        friendly website
                      </li>
                      <li>
                        Showcase each type of content: interactive books,
                        animated stories and picture books, audio stories.
                        Create an experience people want to share with others
                      </li>
                      <li>Persuade to download app and subscribe</li>
                    </ul>
                  </div>
                  <p className="integer integer1">
                  A comprehensive Full-Stack E-Commerce platform offering personalized user account privileges. Upon registration, users gain the ability to browse and shop by specific categories or utilize a search function to find desired items. The platform features a user-friendly shopping cart where items can be added and stored as users continue to browse. A seamless checkout process culminates in an order confirmation, enhancing the overall shopping experience.
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