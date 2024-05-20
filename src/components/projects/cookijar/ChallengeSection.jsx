import React, {useEffect, useRef} from "react";
import BlackDotSvg from "../../../assets/img/svg/black-dots.svg";
import YellowSquare from "../../../assets/img/svg/yellow-square-frame.svg";
import YellowFrameSvg from "../../../assets/img/svg/traingle-yellow-frame.svg";
import BlackFrameSvg from "../../../assets/img/svg/traingle-black-frame.svg";
import cookiJar1 from "../../../assets/img/portfoliosection/cookijar/cookijar2.png"

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
                      Use the major libraries and/or frameworks that you learned during the course (e.g. React, etc...).
                      </li>
                      <li>
                      Application must support multiple routes to show different views to the user, and the user must be able to navigate to each route/view.
                      </li>
                      <li>
                      Must show your proficiency with following the Single Responsibility Principle by writing modular code, where each module has a single responsibility (e.g. displays a list of things, displays a single thing, manages application state, etc.).
                      </li>
                      <li>
                      You must have a form that allows a user to create a new resource. Form must include a select, radio or checkbox element.
                      </li>
                      <li>
                      Users must be able to delete their own data, and be prevented from deleting other customers' data.
                      </li>
                      <li>
                        Recommended feature: allow users to edit their data. 
                      </li>
                      <li> Implement responsive, flexible layout for the app. </li>
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
                    <img
                      className="challenge-img"
                      src={cookiJar1}
                      height="300"
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