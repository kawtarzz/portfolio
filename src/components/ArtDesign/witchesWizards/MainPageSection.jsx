import React, { useEffect } from "react";
import MultiplicationSvg1 from "../../../assets/img/svg/black-multipliction.svg";
import MultiplicationSvg2 from "../../../assets/img/svg/yellow-multiplication.svg";
import HalfCircleSvg1 from "../../../assets/img/svg/half-circle-yellow.svg";
import HalfCircleSvg2 from "../../../assets/img/svg/half-circle-black.svg";
import SlickImage2 from "./SlickImage2";

const MainPageSection = () => {

    const parallax = (e) => {
      document.querySelectorAll(".object").forEach((move) => {
        const movingValue = move.getAttribute("data-value");
        const x = (e.clientX * movingValue) / 250;
        const y = (e.clientY * movingValue) / 250;
        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };
  useEffect(() => {
    document.addEventListener("mousemove", parallax);
    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);
  
  return (
    <>
       <div className="row top-img">
        <div className="col-xl-6 col-lg-6 col-md-12 p-0">
            <SlickImage2 />
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
            <h2 className="hello_text date">January 2021</h2>
            <h1 className="project_text project-main-text" data-aos="fade-up">
            Witches & Wizards
            </h1>
            <p className="design_text project-second-main-text">
            Style frames for a :30 second animated campaign promoting a magical wizard-themed summer camp for adults!          
            <div className="share-list">

              <h6 className="share-text">Role:</h6>
              <li className="share-list-text">Art Director</li> 
              <li className="share-list-text">Illustrator</li> 
                <h6 className="share-text">Technology:</h6>
                <li className="share-list-text">Photoshop</li> 
              </div>

            </p>
            </div>
    
          </div>
        </div>
      </div>
    </>
  );
};
export default MainPageSection;
