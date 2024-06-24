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
      <div className="row top-img" id="candycart">
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
            <h2 className="quicksand-subheading2">January 2021</h2>
            <h1 className="quicksand-heading" data-aos="fade-up">
            Candy Cart
            </h1>
            <p className="design_text project-second-main-text">
              Brand identity & illustration for a Motion Graphics video promoting a new mobile delivery service called, Candy Cart! I was responsible for developing the storyboard based on a provided script, art direction, and illustrated style frames. The project was a great opportunity for me to showcase my skills as an illustrator for motion graphics projects.
            </p>
            <hr />

            <div className="description-container">
              <h6 className="quicksand-subheading">ROLE</h6>
              <li className="quicksand-subheading2">
                Art Director
              </li>
              <li className="quicksand-subheading2">
                Illustrator
              </li>
              </div>

              <div className="description-container">

              <h6 className="quicksand-subheading">TECH</h6>
              <li className="quicksand-subheading2">
              Adobe Photoshop
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
