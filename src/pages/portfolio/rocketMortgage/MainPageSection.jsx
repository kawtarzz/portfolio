import React, { useEffect } from "react";



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
              <h1 className="quicksand-heading" data-aos="fade-up">
                Rocket Mortgage
              </h1>
              <p className="design_text project-second-main-text">
                I had the opportunity to contribute to various marketing campaigns for Rocket Mortgage, including their partnership with NCAA Football and PGA Tour.
              </p>
              <hr />
              <div className="description-container">

                <h6 className="quicksand-subheading">ROLE</h6>
                <li className="quicksand-subheading2">Art Director</li>
                <li className="quicksand-subheading2">Illustrator</li>
              </div>
              <div className="description-container">

                <h6 className="quicksand-subheading">TECH</h6>
                <li className="quicksand-subheading2">Adobe Photoshop</li>
                <li className="quicksand-subheading2">Adobe Illustrator</li>
                <li className="quicksand-subheading2"> After Effects</li>

              </div>
            </div>
    </>
  );
}
export default MainPageSection;
