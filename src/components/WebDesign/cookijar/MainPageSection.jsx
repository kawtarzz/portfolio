import React, { useEffect } from "react";
import SlickImage from "./SlickImage";
import MultiplicationSvg1 from "../../../assets/img/svg/black-multipliction.svg";
import MultiplicationSvg2 from "../../../assets/img/svg/yellow-multiplication.svg";
import HalfCircleSvg1 from "../../../assets/img/svg/half-circle-yellow.svg";
import HalfCircleSvg2 from "../../../assets/img/svg/half-circle-black.svg";

const MainPageSection = () => {
  useEffect(() => {
    const parallax = (e) => {
      document.querySelectorAll(".object").forEach((move) => {
        const movingValue = move.getAttribute("data-value");
        const x = (e.clientX * movingValue) / 250;
        const y = (e.clientY * movingValue) / 250;
        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener("mousemove", parallax);

    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);
  return (
    <>
       <div className="row top-img">
        <div className="col-xl-6 col-lg-6 col-md-12 p-0">
            <SlickImage />
          <div className="multiplication-frame-main">
            <img
              className="black-multiplication object"
              data-value="-1"
              src={MultiplicationSvg1}
              alt="black-multipliction"
            />
            <img
              className="yellow-multiplication object"
              data-value="2"
              src={MultiplicationSvg2}
              alt="yellow-multiplication"
            />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 p-0">

        <div className="main-text-box">
          <div className="half-circle-main">
            <img
              className="half-circle-yellow object"
              data-value="-1"
              src={HalfCircleSvg1}
              alt="half-circle-yellow"
            />
            <img
              className="half-circle-black object"
              data-value="2"
              src={HalfCircleSvg2}
              alt="half-circle-black"
            />
          </div>
          <div className="project-page">
            <h2 className="quicksand-subheading2">August 2020</h2>
            <h1 className="quicksand-heading" data-aos="fade-up">
              Animation Bootcamp
            </h1>
            <p className="design_text project-second-main-text">
            CookiJar is a productivity tracking application that transforms task management into a fun and engaging experience through gamification. Developed using React and a JSON server, CookiJar enables users to assign point values to their tasks and earn rewards upon completion. The application supports full CRUD functionality, ensures user authentication, and features a responsive design for seamless use across devices.
            </p>
            <hr />

              
              <div className="description-container">
              <h6 className="quicksand-subheading">TECH STACK</h6>
              <li className="quicksand-subheading2">
               React.js
              </li>
              <li className="quicksand-subheading2">
                JSON server
              </li>
              <li className="quicksand-subheading2">
                Bootstrap
              </li>
              <li className="quicksand-subheading2">
                  HTML5/CSS3
              </li>
              <li className="quicksand-subheading2">
                Javascript
              </li>
            </div>
          </div>
        </div>
      </div>
      </div>
      </>
  );
}

export default MainPageSection;
