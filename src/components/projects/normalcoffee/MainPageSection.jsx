import React, { useEffect } from "react";
import SlickImage from "./SlickImage";
import MultiplicationSvg1 from "../../../assets/img/svg/black-multipliction.svg";
import MultiplicationSvg2 from "../../../assets/img/svg/yellow-multiplication.svg";
import HalfCircleSvg1 from "../../../assets/img/svg/half-circle-yellow.svg";
import HalfCircleSvg2 from "../../../assets/img/svg/half-circle-black.svg";


const MainPageSection = () => {
  // circle and multiplication moving functionality
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
            <h2 className="hello_text date">10 June 2022</h2>
            <h3 className="project_text project-main-text" data-aos="fade-up">
              normal coffee & donuts
            </h3>
            <p className="design_text project-second-main-text">
            Style frames for a :15 second ad campaign for a (fictional) boutique coffee and donut shop. The ask required a mid body shot, a close up shot of the characters hand holding the product, a full body shot and a frame featuring the logo. We were also given the option to add an action shot post logo lockup.
            </p>
            <div className="share-list">
              <h2 className="d-none">hidden</h2>
              <h3 className="d-none">hidden</h3>
              <h4 className="d-none">hidden</h4>
              <h5 className="d-none">hidden</h5>
              <h6 className="share-text">ROLE</h6>
              <p className="share-list-text">
                Art Director
              </p>
              <p className="share-list-text">
                Illustrator
              </p>

              <h6 className="share-text">TECH STACK</h6>
              <p className="share-list-text">
              Adobe Photoshop
              </p>
              
            </div>
          </div>
        </div>
      </div>
      </div>

      
    </>
  );
};
export default MainPageSection;
