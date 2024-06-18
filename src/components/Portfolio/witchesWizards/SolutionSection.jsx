import React, { useState } from "react";
import HalfCircleSvg1 from "../../../assets/img/svg/half-circle-yellow.svg";
import HalfCircleSvg2 from "../../../assets/img/svg/half-circle-black.svg";
import HalfCircleBlack from "../../../assets/img/svg/black-half-circal.svg";
import HalfCircleYellow from "../../../assets/img/svg/yellow-half-circle.svg";
import heartSvg from "../../../assets/img/svg/heart-line.svg";
import heartSvgActive from "../../../assets/img/svg/heart-fill.svg";
import ImageSlider from "./SlickImage";

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
                  <ImageSlider />
            <div className="yellow_circle"></div>
            <h2 className="about-text" data-aos="fade-up">
              Solution
            </h2>
            <p className="unconventional" data-aos="fade-up">
             In the process of creating these style frames, I felt that I had found a distinct character style that was simple enough to replicate with enough detail to emote and convey messages without over complicating the figures. I had a ton of fun creating this project and still feel its some of my best storyboard / style framing work. I had some challenges illustrating the fire beneath the cauldron and finding the balance between simple and detailed, but I'm very happy with how the work turned out. Stay tuned for an animated version! 
            </p>
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
                <a href="/projects/cookijar">
                  <div className="arrow-pro left"></div>
                </a>
              </div>
              <div className="right-line">

                <h4 className="project-text">
                  <a href="/projects/cookijar">PREV</a>
                </h4>
              </div>
            </div>

            <div className="project-text-group" data-aos="zoom-out-right">
              <div className="right-line">
                <h5 className="d-none">hidden</h5>

                <h4 className="project-text">
                  <a href="/projects/witcheswizards">NEXT</a>
                </h4>
              </div>
              <div className="red">
                <a href="/projects/witcheswizards">
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
