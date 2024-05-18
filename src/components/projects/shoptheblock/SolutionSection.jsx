import React, { useState } from "react";
import HalfCircleSvg1 from "../../assets/img/svg/half-circle-yellow.svg";
import HalfCircleSvg2 from "../../assets/img/svg/half-circle-black.svg";
import HalfCircleBlack from "../../assets/img/svg/black-half-circal.svg";
import HalfCircleYellow from "../../assets/img/svg/yellow-half-circle.svg";
import heartSvg from "../../assets/img/svg/heart-line.svg";
import heartSvgActive from "../../assets/img/svg/heart-fill.svg";


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
            Shop the Block is a full-stack e-commerce site I built as my final 
            project at Nashville Software School. It has full CRUD functionality, 
            allowing users to manage items in their shopping cart and place orders. 
            The app's data structure, designed with DB Diagram, includes multiple 
            one-to-many and many-to-many relationships. User authentication and 
            authorization are handled with Firebase. The tech stack includes React, 
            JavaScript, CSS, HTML, C#, .NET Core, SQL Server, and Bootstrap. 
            This project enhanced my understanding of the React framework, Firebase
             authentication, and using ADO.NET for building a web API and SQL Server for database creation.
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
         
          {/* <!-- ====================================== Like Button ===================================== --> */}
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
              className="colijala-text-group colijala-text-group2"
              data-aos="zoom-out-left"
            >
              <div className="right-line">
                <h3 className="d-none">hidden</h3>
                <h4 className="d-none">hidden</h4>
                <h5 className="d-none">hidden</h5>
                <h6 className="website-text prev-text m-0">
                  <a href="/colijala">PREV</a>
                </h6>
                <h4 className="colijala-text">
                  <a href="/colijala">Moligo</a>
                </h4>
              </div>
              <div className="red">
                <a href="/projects/cookijar">
                  <div className="arrow-pro"></div>
                </a>
              </div>
            </div>
            <div className="colijala-text-group" data-aos="zoom-out-right">
              <div className="right-line">
                <h5 className="d-none">hidden</h5>
                <h6 className="website-text m-0">
                  <a href="/projects/cookijar">NEXT</a>
                </h6>
                <h4 className="colijala-text">
                  <a href="/projects/cookijar">Bolmija</a>
                </h4>
              </div>
              <div className="red">
                <a href="/projects/cookijar">
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
