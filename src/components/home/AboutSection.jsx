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
          <p className="design_text creative_text" data-aos="fade-up">
            Motion/Graphic/Web Design
          </p>
          <div className="row modern-techniques">
            <div className="col-xl-6 p-0" data-aos="fade-right">
              <div className="top-space">
                <h3 className="lobortgs">Full-Stack Designer</h3>

                <p className="designer designer1">
                  Hello, I’m Kawtar! I'm a graphic and motion designer/web developer based in Nashville, Tennessee. I love to create visually engaging and interactive experiences that connect with people and tell a story.
                </p>
                <p className="designer designer2">

                  I have a background in design and web development with a Bachelor of Fine Arts in Film, Video & Animation from the School of the Art Institute of Chicago. Whether it's a website, an animation, or a print piece, I'm always looking for new ways to push the boundaries of design, technology and my own creativity.
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

                        <Link to="mailto:hello@kawtar-azzouzi.com?subject=Hi Kawtar">hello@kawtar-azzouzi.com</Link>
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
