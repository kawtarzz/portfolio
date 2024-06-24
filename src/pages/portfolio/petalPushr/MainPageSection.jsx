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
          PetalPushr
        </h1>
        <p className="design_text project-second-main-text">
          Branding & web design for a boutique
          botanical and floral arrangement designer based in Chicago.
        </p>
        <hr />
        <div className="description-container">

          <h6 className="quicksand-subheading">ROLE</h6>
          <li className="quicksand-subheading2">Graphic Designer</li>
          <li className="quicksand-subheading2">Brand Development</li>
          <li className="quicksand-subheading2">Web Developer</li>
        </div>
        <div className="description-container">
          <h6 className="quicksand-subheading">TECH</h6>
          <li className="quicksand-subheading2">Shopify</li>
          <li className="quicksand-subheading2">HTML/CSS</li>
          <li className="quicksand-subheading2">Adobe Illustrator</li>
          <li className="quicksand-subheading2">Adobe Photoshop</li>

        </div>
      </div>

    </>
  );
}
export default MainPageSection;
