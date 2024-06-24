import React, { useEffect } from "react";

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
      <div className="project-page">
        <h1 data-aos="fade-up">
          Shop the Block
        </h1>
        <p className="design_text project-second-main-text">
          ShopTheBlock is a full-stack e-commerce platform designed to empower local artists and makers by providing a dedicated space to connect with and sell directly to their community. The platform is built with React.JS, ASP.NET Core, and SQL.
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
    </>
  );
};
export default MainPageSection;
