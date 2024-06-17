import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmailSvg from "../../assets/img/svg/email.svg";
import BlackDotSvg from "../../assets/img/svg/black-dots.svg";
import YellowSquare from "../../assets/img/svg/yellow-square-frame.svg";

const AboutSection = () => {
  const [counted, setCounted] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const counterElement = document.getElementById("counter");
      const countElements = document.querySelectorAll(".count");

      if (counted === 0 && counterElement) {
        const oTop = counterElement.offsetTop - window.innerHeight;

        if (window.scrollY > oTop) {
          countElements.forEach((element) => {
            const countTo = parseInt(element.getAttribute("data-count"));
            const duration = 9000;
            const easing = "swing";

            animateCount(element, countTo, duration, easing);
          });

          setCounted(1);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [counted]);

  const animateCount = (element, countTo, duration, easing) => {
    let start = 0;
    const step = () => {
      const increment = Math.ceil(countTo / (duration / 15));
      start += increment;

      if (start > countTo) {
        element.innerText = countTo;
      } else {
        element.innerText = start;
        requestAnimationFrame(step);
      }
    };

    step();
  };
  return (
    <>
      <div className="all-page-border2">
        <div className="about_top-spacer">
          <div className="yellow_circle yellow_circle_about"></div>
          <h2 className="about-text" data-aos="fade-up">
            ABOUT
          </h2>
          <p className="quicksand-heading creative_text" data-aos="fade-up">
            Visual Arts & Web Development
          </p>
          <div className="row modern-techniques">
            <div className="col-xl-6 p-0" data-aos="fade-right">
              <div className="top-space">
                <h1 className="lato-heading"><i>Nice to meet you!</i></h1>

                <p className="designer designer1">
                I am a first generation Moroccan-American designer based in Nashville, TN. A life-long artist with a restless curiosity, I've always sought to push the boundaries of my creativity through new mediums & technologies. 
                </p>
                <p className="designer designer2">
                I have worked as a designer for over 6 years, specializing in branding, illustration and animation. More recently, I have expanded my skillset to include web development, allowing me to create fully custom websites for my clients. 
                </p>
                <div className="phone-email-icons">
                  <div className="email-icon">
                    <div className="phone-email-svg-main2">
                      <Link to="mailto:hello@kawtar-azzouzi.com">
                        <img
                          className="phone-email-svg"
                          src={EmailSvg}
                          alt="email"
                        />
                      </Link>
                      <div className="email-section">
                        <div className="big-yellow-circle">
                        </div>
                        <p className="email-text">

                        <Link to="mailto:hello@kawtar-azzouzi.com?subject=Hi Kawtar">HELLO@kawtar-azzouzi.com</Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-6  p-0 position-relative image8"
              data-aos="fade-left"
            >
              <div className="dots-main">
                <img
                  className="black-dots object"
                  data-value="1"
                  src={BlackDotSvg}
                  alt="black-dots"
                />
                <img
                  className="yellow-square-frame object"
                  data-value="-2"
                  src={YellowSquare}
                  alt="yellow-square-frame"
                />
              </div>
              <div className="right-space">
                <div className="badge">
                  <ul className="slideshow2">
                    <li>
                      <span className="img-bg-slide">
                        Image 01</span>
                    </li>
                    <li>
                      <span className="img-bg-slide">Image 02</span>
                    </li>
                    <li>
                      <span className="img-bg-slide">Image 03</span>
                    </li>
                    <li>
                      <span className="img-bg-slide">Image 04</span>
                    </li>
                  </ul>
                  <div className="text">
                    <div className="dolly">
                      <div className="digit" id="counter">
                        <h4
                          className="eight-digit count percent"
                          data-count="6"
                        >
                          0
                        </h4>
                      </div>
                      <p className="yer-expi">Years Of Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div />
    </>
  );
};
export default AboutSection;
