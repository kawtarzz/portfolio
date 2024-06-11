import React, { useEffect } from "react";
import MultiplicationSvg1 from "../../../assets/img/svg/black-multipliction.svg";
import MultiplicationSvg2 from "../../../assets/img/svg/yellow-multiplication.svg";
import HalfCircleSvg1 from "../../../assets/img/svg/half-circle-yellow.svg";
import HalfCircleSvg2 from "../../../assets/img/svg/half-circle-black.svg";
import SlickImage from "./SlickImage";


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
              <h2 className="hello_text date">August 2021</h2>
              <h1 className="project_text project-main-text" data-aos="fade-up">
                Shop the Block
              </h1>
              <p className="design_text project-second-main-text">
              ShopTheBlock is a comprehensive e-commerce platform designed to empower local artists and makers by providing a dedicated space to connect with and sell directly to their community. Inspired by personal experiences and feedback from fellow small business owners, the idea was born out of frustrations with existing marketplaces like Etsy. Many users, including myself, faced challenges with high fees and the lack of localized search options. Recognizing the demand for a fairer, community-focused marketplace, I developed ShopTheBlock as my capstone project at the Nashville Software School's Software Development bootcamp. This platform aims to offer lower fees and a robust localized search feature, fostering a supportive environment for local talent to thrive.
              </p>
              <div className="share-list">
                <h6 className="share-text">Technology Stack:</h6>

                <li className="share-list-text">React.JS</li>
                <li className="share-list-text">.NET / C#</li>
                <li className="share-list-text">SQL</li>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
export default MainPageSection;
