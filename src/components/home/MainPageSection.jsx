import React, { useEffect } from "react";
import MultiplicationSvg1 from "../../assets/img/svg/black-multipliction.svg";
import { Link } from "react-router-dom";
import { JobTitle } from "./JobTitle";


export default function MainPageSection() {
  const myName = (
    <>
    <div className="hello-box">
      <span className="single-text hello-text">K</span>
      <span className="single-text hello-text">A</span>
      <span className="single-text hello-text">W</span>
      <span className="single-text hello-text">T</span>
      <span className="single-text hello-text">A</span>
      <span className="single-text hello-text">R</span>
      <br />
      <span className="single-text hello-text">A</span>
      <span className="single-text hello-text">Z</span>
      <span className="single-text hello-text">Z</span>
      <span className="single-text hello-text">O</span>
      <span className="single-text hello-text">U</span>
      <span className="single-text hello-text">Z</span>
      <span className="single-text hello-text">I</span>
    </div>
    </>  
  );

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
        <div className="main-page">
            <img
              className="black-multiplication object hello-box"
              data-value="-10"
              src={MultiplicationSvg1}
              alt="black-multipliction"
            />
          <div className="hello-box">
         
        <h2 className="hello-text lato-light">
          Hello, my name is 
          </h2>
          <br></br>
              {myName}.        
                <JobTitle />
          </div>
          </div>

      <div className="main_page_bottom_text">
        <div className="mouse">
          <Link to="#about">
            <div className="container_mouse mouse-img">
              <span className="mouse-btn">
                <span className="mouse-scroll"></span>
              </span>
            </div>
          </Link>
        </div>
        </div>
    </>
  );
};
