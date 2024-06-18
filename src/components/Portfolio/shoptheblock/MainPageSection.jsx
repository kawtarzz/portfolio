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
              <h2 className="quicksand-subheading2">August 2021</h2>
              <h1 className="quicksand-heading" data-aos="fade-up">
                Shop the Block
              </h1>
              <p className="design_text project-second-main-text">
              ShopTheBlock is a full-stack e-commerce platform designed to empower local artists and makers by providing a dedicated space to connect with and sell directly to their community. Born out of frustrations with existing marketplaces that are marketed as small-business-friendly, I developed ShopTheBlock as my capstone project at the Nashville Software School's Software Development bootcamp. The client-side of the application was built with React, JavaScript & HTML, styled with Bootstrap and vanilla CSS. The server-side utilized SQLServer as its database with a Web API developed with ASP.NET Core / C#. Web API testing was performed in Swagger & PostMan. 
              </p>
            <hr />

              <div className="description-container">
                <h6 className="quicksand-subheading">TECH STACK</h6>
                <li className="quicksand-subheading2">React.JS</li>
                <li className="quicksand-subheading2">HTML/CSS</li>
                <li className="quicksand-subheading2">ASP.NET Core / C#</li>
                <li className="quicksand-subheading2">SQL</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MainPageSection;
