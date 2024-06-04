import React, {useEffect, useRef} from "react";
import BlackDotSvg from "../../../assets/img/svg/black-dots.svg";
import YellowSquare from "../../../assets/img/svg/yellow-square-frame.svg";
import YellowFrameSvg from "../../../assets/img/svg/traingle-yellow-frame.svg";
import BlackFrameSvg from "../../../assets/img/svg/traingle-black-frame.svg";
import video1 from "../../../assets/video/shoptheblock_1.mp4"


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
                <div className="challenge-description" data-aos="fade-up">
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
                </div>
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
                      Design an Entity Relationship Diagram with at least one many to many relationship.
                      </li>
                      <li>
                      A user-related data scheme. This means that different people can authenticate with your application, and the resources that are created must be assigned to individual users.
                      </li>
                      <li>Must use major libraries and/or frameworks (e.g. React, etc...)</li>
                      <li>
                     Demonstrate proficiency with Single Responsibility Principle through modular code practices.
                      </li>
                      <li> Must include at least one form that allows users to create a new resource. The form must include a select, radio or checkbox element.</li>
                      <li> Full CRUD functionality: users can create, read, update and delete resources.</li>
                      <li> Implement flexible responsive layout</li>
                    </ul>
                  </div>
                  <div className="integer integer1">
                  <p>
                  A comprehensive Full-Stack E-Commerce platform offering personalized user account privileges. Upon registration, users gain the ability to browse and shop by specific categories or utilize a search function to find desired items. The platform features a user-friendly shopping cart where items can be added and stored as users continue to browse. A seamless checkout process culminates in an order confirmation, enhancing the overall shopping experience.
                  </p>
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
                
                    <video
                      src={video1}
                      ref={vidRef}
                      width="600"
                      height="600"
                      loop
                      autoPlay
                      muted
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