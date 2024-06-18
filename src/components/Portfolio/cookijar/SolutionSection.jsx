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
            CookiJar meets this challenge by allowing users to define
            their own rewards and point system. Users can create, view,
             edit, and delete tasks, earning points for each completed task. 
             Accumulated points can be redeemed for user-defined rewards. 
             The application ensures a responsive user experience with Bootstrap 
             and flexboxes, and provides error handling for form submissions 
             and deletions. All user data is stored in a JSON server, making 
             each user's experience unique. This project, my first using React, 
             enhanced my understanding of the framework, REST APIs, and fetch calls
              for querying APIs.
            </p>
            <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSiwrIiHRyD7Ay2h-2VzjFJsmgVuYvX0qTrLY_nzDH5dFQxPBH-wBslPT1mxmYaAYT0usC7BZp-yGSP/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" 
            title="cookijar-presentation" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" className="slideshow"></iframe>
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
          
          <div className="next-prev-buttons overflow-hidden">

            <div
              className="project-text-group project-text-group2"
              data-aos="zoom-out-left"
            >
                <div className="red-left">
                <h5 className="d-none">hidden</h5>
                <a href="/projects/normalcoffee">
                  <div className="arrow-pro left"></div>
                </a>
              </div>
              <div className="right-line">
                
                <h4 className="project-text">
                  <a href="/projects/normalcoffee">PREV</a>
                </h4>
              </div>
            </div>

            <div className="project-text-group" data-aos="zoom-out-right">
              <div className="right-line">
                <h5 className="d-none">hidden</h5>
                
                <h4 className="project-text">
                  <a href="/projects/shoptheblock">NEXT</a>
                </h4>
              </div>
              <div className="red">
                <a href="/projects/shoptheblock">
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
