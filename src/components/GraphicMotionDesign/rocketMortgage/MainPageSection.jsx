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
        <div className="col-xl-6 col-lg-6 col-md-12">
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
            Rocket Mortgage
            </h1>
            <p className="design_text project-second-main-text">
              A series of art direction and illustrations for Rocket Mortgage's social media campaign. The designs were used in the company's collaborative campaign with the NCAA football season in 2021. The concepts were created to be used in various social media platforms, including Instagram, Twitter, and Facebook, as well as in print and digital ads. All work was created during my time as an Art Director intern at Rocket Mortgage.
            </p>
            
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
export default MainPageSection;
