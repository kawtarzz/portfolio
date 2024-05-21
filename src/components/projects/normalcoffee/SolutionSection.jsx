import React, { useState } from "react";
import HalfCircleSvg1 from "../../../assets/img/svg/half-circle-yellow.svg";
import HalfCircleSvg2 from "../../../assets/img/svg/half-circle-black.svg";
import HalfCircleBlack from "../../../assets/img/svg/black-half-circal.svg";
import HalfCircleYellow from "../../../assets/img/svg/yellow-half-circle.svg";
import heartSvg from "../../../assets/img/svg/heart-line.svg";
import heartSvgActive from "../../../assets/img/svg/heart-fill.svg";


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
              Solution
            </h2>
            <p className="unconventional" data-aos="fade-up">
           The client wanted to show the diversity of their client base. The initial style frames included a male figure and the re-design framed a female minority as our protagonist. The re-design also allowed for diversifying the character poses, as the client was able to extend their budget for a character animator. The action pose brought more emotion and life to the character and communicated the character's newfound energy. 
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
              className="colijala-text-group colijala-text-group2"
              data-aos="zoom-out-left"
            >
              <div className="right-line">
                <h3 className="d-none">hidden</h3>
                <h4 className="d-none">hidden</h4>
                <h5 className="d-none">hidden</h5>
                <h6 className="website-text prev-text m-0">
                  <a href="/cookijar">PREV</a>
                </h6>
                <h4 className="colijala-text">
                  <a href="/projects/shoptheblock">ShopTheBlcok</a>
                </h4>
              </div>
              <div className="red">
                <a href="/projects/shoptheblock">
                  <div className="arrow-pro"></div>
                </a>
              </div>
            </div>
            <div className="colijala-text-group" data-aos="zoom-out-right">
              <div className="right-line">
                <h5 className="d-none">hidden</h5>
                <h6 className="website-text m-0">
                  <a href="/projects/candycart">NEXT</a>
                </h6>
                <h4 className="colijala-text">
                  <a href="/projects/candycart">candyCart</a>
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
