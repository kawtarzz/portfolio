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
      <div>
              <h1 className="quicksand-heading" data-aos="fade-up">
                River in Paradise            </h1>
              <p className="design_text project-second-main-text">
                Branding and Illustration for my personal project, River in Paradise. The project is a series of illustrations and paintings that were available for purchase as prints. Inspired by the beauty of nature, the female figure and the idea of paradise.
              </p>
              <hr />
              <div className="description-container">

                <h6 className="quicksand-subheading">ROLE</h6>
                <p className="quicksand-subheading2"> Illustrator</p>
                <p className="quicksand-subheading2">Graphic Designer</p>
                </div>
              <div className="description-container">

                <h6 className="quicksand-subheading">TECH</h6>
                <li className="quicksand-subheading2">Adobe Illustrator</li>
                <li className="quicksand-subheading2">Adobe Photoshop</li>
                <li className="quicksand-subheading2">Procreate</li>
              </div>
            </div>
    </>
  );
}
export default MainPageSection;
