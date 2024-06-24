import React, { useState } from "react";
import HalfCircleSvg1 from "../../../assets/img/svg/half-circle-yellow.svg";
import HalfCircleSvg2 from "../../../assets/img/svg/half-circle-black.svg";
import HalfCircleBlack from "../../../assets/img/svg/black-half-circal.svg";
import HalfCircleYellow from "../../../assets/img/svg/yellow-half-circle.svg";
import heartSvg from "../../../assets/img/svg/heart-line.svg";
import heartSvgActive from "../../../assets/img/svg/heart-fill.svg";
import ImageSlider from "./SlickImage2";


const SolutionSection = () => {
  const [likeCount, setLikeCount] = useState(8); // Initial like count
  const [liked, setLiked] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleLikeClick = () => {
    setIsActive((prevIsActive) => !prevIsActive);

    if (!liked) {
      setLikeCount((prevCount) => prevCount + 1);
      setLiked(true);
    } else {
      setLikeCount((prevCount) => prevCount - 1);
      setLiked(false);
    }
  };
  return (
    <>
      <div className="container">
        <div className="solution-spacer">
          <div className="position-relative">
            <div className="yellow_circle"></div>
            <h2 className="about-text" data-aos="fade-up">
              Outcome
            </h2>
            <p className="unconventional" data-aos="fade-up">
              <ul>
                <h3>Client Collaboration & Feedback</h3>
                <li>
                  Collaborated closely with the client to understand her vision and preferences for the website design.
                </li>
                <li>
                  Conducted several rounds of revisions to ensure the final product met the client’s vision and expectations.
                </li>
                <li>
                  We integrated Instagram & Facebook shopping to streamline the purchasing process for customers.
                </li>
                <li>
                  The website successfully showcased her floral arrangements with accurate inventory counts and featured a contact form for custom arrangement inquiries.
                </li>
                <li>
                  The final website was completed with a customized landing page displaying one of the client's favorite glass dome floral pieces.
                </li>
              </ul>
            </p>
            <div className="container" data-aos="fade-up">
              <center>

                <h3>
                  Check out the live site at{" "}
                  <a href="https://www.petalpushr.com">petalpushr.com</a>
                </h3>
                <ImageSlider />
              </center>
            </div>
            <div className="solution-half-circle">
              <img
                className="half-circle-yellow-solution"
                src={HalfCircleSvg1}
                alt="half-circle-yellow"
              />
              <img
                className="half-circle-black-solution"
                src={HalfCircleSvg2}
                alt="half-circle-black"
              />
            </div>
          </div>

          <div
            className="like-button-circle position-relative"
            data-aos="fade-up"
          >
            <div className="large-font">
              <div className="like-increment" data-aos="fade-up">
                <img
                  className={`open_likes ${isActive ? "active" : ""}`}
                  onClick={handleLikeClick}
                  src={isActive ? heartSvgActive : heartSvg}
                  alt={liked ? "Liked" : "Like"}
                />
              </div>
            </div>

            <div className="half2-circle-like">
              <img
                className="black-half-circal-like object"
                data-value="1"
                src={HalfCircleBlack}
                alt="black-half-circal"
              />
              <img
                className="yellow-half-circal-like object"
                data-value="-2"
                src={HalfCircleYellow}
                alt="yellow-half-circle"
              />
            </div>
          </div>
          <div className={`like-increment ${liked ? "liked" : ""}`}>
            <span className="open_likes_count">{likeCount}</span>
            <p className="like-text">{liked ? "Liked" : "Liked"}</p>
          </div>
          {/* <!-- ====================================== Like Button End ===================================== --> */}
          <div className="next-prev-buttons overflow-hidden">

            <div
              className="project-text-group project-text-group2"
              data-aos="zoom-out-left"
            >
              <div className="red-left">
                <h5 className="d-none">hidden</h5>
                <a href="/projects/shoptheblock">
                  <div className="arrow-pro left"></div>
                </a>
              </div>
              <div className="right-line">

                <h4 className="project-text">
                  <a href="/projects/shoptheblock">PREV</a>
                </h4>
              </div>
            </div>

            <div className="project-text-group" data-aos="zoom-out-right">
              <div className="right-line">
                <h5 className="d-none">hidden</h5>

                <h4 className="project-text">
                  <a href="/projects/candycart">NEXT</a>
                </h4>
              </div>
              <div className="red">
                <a href="/projects/candycart">
                  <div className="arrow-pro"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SolutionSection;
