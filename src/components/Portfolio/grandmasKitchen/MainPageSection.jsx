import React, { useEffect } from "react";
import MultiplicationSvg1 from "../../../assets/img/svg/black-multipliction.svg";
import MultiplicationSvg2 from "../../../assets/img/svg/yellow-multiplication.svg";
import HalfCircleSvg1 from "../../../assets/img/svg/half-circle-yellow.svg";
import HalfCircleSvg2 from "../../../assets/img/svg/half-circle-black.svg";
import GrandmasKitchenImg from "../../../assets/img/portfoliosection/grandmasKitchen/fr02_gmaskitchen.jpg";


const MainPageSection = () => {

  const parallax = (e) => {
    document.querySelectorAll(".object").forEach((move) => {
      const movingValue = move.getAttribute("data-value");
      const x = (e.clientX * movingValue) / 250;
      const y = (e.clientY * movingValue) / 250;
      move.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  };
  useEffect(() => {
    document.addEventListener("mousemove", parallax);
    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);

  return (
    <>
      <div className="row top-img" id="grandmaskitchen">
        <div className="col-xl-6 col-lg-6 col-md-12 p-0">
          <img className="project_img1" src={GrandmasKitchenImg} alt="grandmasKitchen" style={{ maxWidth: "600px" }} />
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
              <h1 className="quicksand-heading" data-aos="fade-up">
                Grandma's Kitchen
              </h1>
              <h4>
                <i>
                  Protein shakes that
                  actually taste good.
                </i>
              </h4>
              <p className="design_text project-second-main-text">
                Illustration and art direction for a fictional protein shake company. The client brief states: "This summer,
                Grandma’s Kitchen is releasing five new flavors of
                our award-winning protein shake.
                We could think of no better way to release the
                news than through a 15 second animation. Our
                goal is to express the sense of extreme satisfaction
                to our viewers - that feeling you get when you just
                had the best meal of your life"
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

              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};
export default MainPageSection;
