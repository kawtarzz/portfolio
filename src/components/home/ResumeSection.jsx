import React, { useRef } from "react";
import BlackYellowSvg from "../../assets/img/resumeimg/black-yellow-circle.jpg";

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
        <div className="all-page-border2 portfolio-bg">
          <div className="services-spacer">
            <h1 className="page-heading quicksand-heading" data-aos="fade-up">
              Resume
            </h1>
          </div>
            <p className="quicksand-subheading creative_text" data-aos="fade-up">
              Professional Experience, Training & Education
            </p>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-6 line p-0">
            <div className="resume-main">
              <h3 className="education-text" data-aos="fade-up">
                Education
              </h3>
              <h4 className="d-none">hidden</h4>
              <h5 className="d-none">hidden</h5>
              <p className="resume-text" data-aos="fade-up">
                With a foundation in design principles and animation production, I hold a Bachelor of Fine Arts from the School of the Art Institute of Chicago. I've furthered this education through courses in motion design and illustration from School of Motion.
                More recently, I completed a Full-Stack Developer Certificate from Nashville Software School, where I honed my skills in React and Dot Net full-stack software and website development.
              </p>
              <div className="left-line">
                <img
                  className="black-yellow-circle"
                  src={BlackYellowSvg}
                  alt="black-yellow-circle"
                />
                <div className="side-space" data-aos="fade-up">
                  <h6 className="resume-ed-text">
                    Full-Stack Developer Certificate
                  </h6>
                  <p className="sub-heading">Nashville Software School</p>
                  <p className="resume-text2">
                    6-month intensive React & Dot Net full-stack software and website development bootcamp.
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
                  <p className="sub-heading">School of the Art Institute of Chicago</p>
                  <p className="resume-text2">
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
                  <p className="sub-heading">School of Motion / 2016 - 2018</p>
                  <p className="resume-text2">
                    Illustrate for Motion
                    Animation BootCamp
                    Character Rigging
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
              <p className="resume-text" data-aos="fade-up">
              Whether crafting engaging motion graphics or developing seamless web applications, I am driven by a passion for innovation and excellence. My multifaceted expertise positions me to tackle complex challenges and contribute to dynamic, cross-functional teams effectively.
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
                        Motion Graphics Designer
                      </h6>
                      <p className="sub-heading">KGV Studios / March 2024 - Present</p>
                    </div>
                  </div>
                  <p className="resume-text2">
                    Conceptualizing art direction, style frames, and executing animations using After Effects. Communicating with clients and design teams to understand design requirements and providing solutions for technical problems.
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
                        Art Director Intern
                      </h6>
                      <p className="sub-heading">Rocket Mortgage / February 2021 - August 2021</p>
                    </div>
                  </div>
                  <p className="resume-text2">
                    Developed & executed concepts with accompanying visual strategy for audience touch points; including social media, video, broadcast, digital, and print communications. Collaborated with Copywriters and Creative Directors for cross-channel campaigns.
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
                      <p className="sub-heading">Lost Girls / November 2019 - February 2021</p>
                    </div>
                  </div>
                  <p className="resume-text2"></p>
                  <p className="resume-text2">
                    Art direction for product photography and garment modeling. Developed & launched an E-Commerce site to maintain revenue-streams throughout the pandemic, tripling sales revenue over time.
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
                data-percentage="85%"
                data-aos="fade-up"
                ref={(element) =>
                  element && progressBarRefs.current.push(element)
                }
              >
                <h4 className="progress-title-holder clearfix">
                  <span className="progress-title">Photoshop/Illustrator</span>
                  <span className="progress-number-wrapper">
                    <span className="progress-number-mark">
                      <span className="percent-bar">85%</span>
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
                  <ul className="skill-list-main" id="design_text">
                    <li>Web/Graphic Design</li>
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
