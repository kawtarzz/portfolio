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
          CookiJar
        </h1>
        <p className="design_text project-second-main-text">
          CookiJar is a to-do list application that rewards points with each task completion. The user can then redeem their points for self-defined rewards.  Developed using React and a JSON server & styled with Bootstrap. The application supports full CRUD functionality, ensures user authentication, and features a responsive design for seamless use across devices.
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
    </>
  );
}

export default MainPageSection;
