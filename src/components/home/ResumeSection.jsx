import React, { useRef } from "react";
import BlackYellowSvg from "../../assets/img/resumeimg/black-yellow-circle.jpg";
import EnvatoIcon from "../../assets/img/svg/envato-icon.svg";
import AppleIcon from "../../assets/img/svg/apple-icon.svg";
import TwitterIcon from "../../assets/img/svg/twitter-icon.svg";
import ResumeProfileImg from "../../assets/img/resumeimg/resume-img.jpg";
import YellowFrameSvg from "../../assets/img/svg/traingle-yellow-frame.svg";
import BlackFrameSvg from "../../assets/img/svg/traingle-black-frame.svg";
import HalfCircleBlack from "../../assets/img/svg/black-half-circal.svg";
import HalfCircleYellow from "../../assets/img/svg/yellow-half-circle.svg";
import ProgressScroll from "./ProgressScroll";
import RevealOnScroll from "./RevealOnScroll";

const ResumeSection = () => {
  const progressBarRefs = useRef([]);

  return (
    <>
      <div className="all-page-border2">
        <div className="row">
          <div className="col-xl-6 col-lg-6 line p-0">
            <div className="resume-main">
              <h3 className="education-text" data-aos="fade-up">
                Education
              </h3>
              <h4 className="d-none">hidden</h4>
              <h5 className="d-none">hidden</h5>
              <p className="dignissim-text" data-aos="fade-up">
                I'm always looking to expand my skillset and consider myself a lifelong student. 
              </p>
              <div className="left-line">
                <img
                  className="black-yellow-circle"
                  src={BlackYellowSvg}
                  alt="black-yellow-circle"
                />
                <div className="side-space" data-aos="fade-up">
                  <h6 className="resume-ed-text">
                    Full-Stack Developer Certificiate
                  </h6>
                  <p className="sity">Nashville Software School</p>
                  <p className="nibh">
                    6 month intensive React & Dot Net full-stack software and website development bootcamp. 
                  </p>
                </div>
              </div>
              <div className="left-line">
                <img
                  className="black-yellow-circle"
                  src={BlackYellowSvg}
                  alt="black-yellow-circle"
                />
                <div className="side-space" data-aos="fade-up">
                  <h6 className="resume-ed-text">
                    Bachelor of Fine Arts
                  </h6>
                  <p className="sity">School of the Art Institute of Chicago</p>
                  <p className="nibh">
                    Film, Video, New Media & Animation. 
                    Dean's List & Goldman Sachs Scholarship Recipient.
                  </p>
                </div>
              </div>
              <div className="left-line">
                <img
                  className="black-yellow-circle"
                  src={BlackYellowSvg}
                  alt="black-yellow-circle"
                />
                <div className="side-space" data-aos="fade-up">
                  <h6 className="resume-ed-text">
                   Motion Design & Illustration
                  </h6>
                  <p className="sity">School of Motion / 2016 - 2018</p>
                  <p className="nibh">
                    Illustrate for Motion.
                    Animation BootCamp.
                    Character Rigging.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 p-0">
            <div className="resume-main">
              <h3 className="education-text" data-aos="fade-up">
                Experience
              </h3>
              <h4 className="d-none">hidden</h4>
              <h5 className="d-none">hidden</h5>
              <p className="dignissim-text" data-aos="fade-up">
                I'm always open to discuss opportunities where creative problem solving and team collaboration are at work. 
              </p>
              <div className="left-line">
                <img
                  className="black-yellow-circle"
                  src={BlackYellowSvg}
                  alt="black-yellow-circle"
                />
                <div className="side-space" data-aos="fade-up">
                  <div className="icons-set">
                    <div>
                      <h6 className="resume-ed-text">
                        Motion Designer
                      </h6>
                      <p className="sity">Freelance / 2020 - Current</p>
                    </div>
                    <img
                      className="envato-icon"
                      src={EnvatoIcon}
                      alt="envato-icon"
                    />
                  </div>
                  <p className="nibh">
                   Working in After Effects and Adobe creative suite to bring life and motion into promotional marketing.
                  </p>
                </div>
              </div>
              <div className="left-line">
                <img
                  className="black-yellow-circle"
                  src={BlackYellowSvg}
                  alt="black-yellow-circle"
                />
                <div className="side-space" data-aos="fade-up">
                  <div className="icons-set">
                    <div>
                      <h6 className="resume-ed-text">
                        Full-Stack Developer
                      </h6>
                      <p className="sity">Apprenticeship / Nashville Software School / February 2023 -  August 2023</p>
                    </div>
                    <img
                      className="apple-icon"
                      src={AppleIcon}
                      alt="apple-icon"
                    />
                  </div>
                  <p className="nibh">
                    Remote collaborative full-stack software development. 
                    Focused in dot net / C# development on the back-end and React.js, Javascript, HTML3, CSS5 on the front-end. 
                  </p>
                </div>
              </div>
              <div className="left-line">
                <img
                  className="black-yellow-circle"
                  src={BlackYellowSvg}
                  alt="black-yellow-circle"
                />
                <div className="side-space" data-aos="fade-up">
                  <div className="icons-set">
                    <div>
                      <h6 className="resume-ed-text">
                        Digital Media Manager
                      </h6>
                      <p className="sity">Lost Girls / 2019 - 2021</p>
                    </div>
                    <img
                      className="twitter-icon"
                      src={TwitterIcon}
                      alt="twitter-icon"
                    />
                  </div>
                  <p className="nibh">
                    E-Commerce website development with maintenance and customer service support. Increased retail sales x3 through online sales and instagram shopping management. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="all-page-border2 reveal progressbar">
        <div className="spacer">
          <div className="row">
            <div className="col-xl-4 col-lg-12 p-0">
              <div className="left-side-space" data-aos="fade-up">
                <div className="resume-img-main">
                  <img
                    className="resume-img"
                    src={ResumeProfileImg}
                    alt="resume-img"
                  />
                </div>
                
              </div>
            
              
            </div>
            <div className="col-xl-4 col-lg-6 position-relative">
              <h4 className="imagine" data-aos="fade-up">
              Design & Tech Skills
              </h4>
              <p className="visually-text" data-aos="fade-up">
              </p>
              <div
                className="progress-bar reveal"
                data-percentage="70%"
                data-aos="fade-up"
                ref={(element) =>
                  element && progressBarRefs.current.push(element)
                }
              >
                <h4 className="progress-title-holder">
                  <span className="progress-title">React/HTML/CSS</span>
                  <span className="progress-number-wrapper">
                    <span className="progress-number-mark">
                      <span className="percent-bar">70%</span>
                      <span className="down-arrow"></span>
                    </span>
                  </span>
                </h4>
                <div className="progress-content-outter">
                  <div className="progress-content"></div>
                </div>
              </div>
              <ProgressScroll />
              <RevealOnScroll />
             
              <div
                className="progress-bar"
                data-percentage="80%"
                data-aos="fade-up"
                ref={(element) =>
                  element && progressBarRefs.current.push(element)
                }
              >
                <h4 className="progress-title-holder clearfix">
                  <span className="progress-title">After Effects</span>
                  <span className="progress-number-wrapper">
                    <span className="progress-number-mark">
                      <span className="percent-bar">80%</span>
                      <span className="down-arrow"></span>
                    </span>
                  </span>
                </h4>
                <div className="progress-content-outter">
                  <div className="progress-content"></div>
                </div>
              </div>
              <ProgressScroll />
              <RevealOnScroll />
              <div
                className="progress-bar"
                data-percentage="70%"
                data-aos="fade-up"
                ref={(element) =>
                  element && progressBarRefs.current.push(element)
                }
              >
                <h4 className="progress-title-holder clearfix">
                  <span className="progress-title">Photoshop/Illustrator</span>
                  <span className="progress-number-wrapper">
                    <span className="progress-number-mark">
                      <span className="percent-bar">80%</span>
                      <span className="down-arrow"></span>
                    </span>
                  </span>
                </h4>
                <div className="progress-content-outter">
                  <div className="progress-content"></div>
                </div>
              </div>
              <ProgressScroll />
              <RevealOnScroll />
              <div className="half2-cricle">
                <img
                  className="black-half-circal object"
                  data-value="1"
                  src={HalfCircleBlack}
                  alt="half-circle-black"
                />
                <img
                  className="yellow-half-circle object"
                  data-value="-2"
                  src={HalfCircleYellow}
                  alt="half-circle-yellow"
                />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 p-0 position-relative know-lan">
              <div>
                <h4 className="knowledge-text" data-aos="fade-up">
                  Knowledge
                </h4>
                <div className="skill-list skill-list2" data-aos="fade-up">
                  <ul className="skill-list-main">
                    <li className="">Web/Graphic Design</li>
                    <li>React Development</li>
                    <li>Brand & Corporate Identity</li>
                    <li>Custom Website Development</li>
                    <li>Motion Graphics</li>
                  </ul>
                  <div className="traingle-frame">
                    <img
                      className="traingle-yellow-frame object"
                      data-value="-2"
                      src={YellowFrameSvg}
                      alt="traingle-yellow-frame"
                    />
                    <img
                      className="traingle-balck-frame object"
                      data-value="1"
                      src={BlackFrameSvg}
                      alt="traingle-balck-frame"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="knowledge-text" data-aos="fade-up">
                  Languages
                </h4>
                <div className="skill-list skill-list3" data-aos="fade-up">
                  <ul className="skill-list-main">
                    <li>English</li>
                    <li>Arabic</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ResumeSection;
