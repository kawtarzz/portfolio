import React, { useState, useEffect } from "react";
import HalfCircleBlack from "../assets/img/svg/black-half-circal.svg";
import FormSection from "./home/FormSection";
import FooterSection from "./FooterSection";
import Loader from "./home/Loader";
import heartSvg from "../assets/img/svg/heart-line.svg";
import heartSvgActive from "../assets/img/svg/heart-fill.svg";
import MenuSection from "./Blog/MenuSection";
import { Link } from "react-router-dom";
import HalfCircleYellow from "../assets/img/svg/yellow-half-circle.svg";
import SimoneImg from "../assets/img/simone-img.png";
import HalfCircleSvg1 from "../assets/img/svg/half-circle-yellow.svg";
import HalfCircleSvg2 from "../assets/img/svg/half-circle-black.svg";
import MultiplicationSvg1 from "../assets/img/svg/black-multipliction.svg";
import MultiplicationSvg2 from "../assets/img/svg/yellow-multiplication.svg";
import BlackCircle from "../assets/img/svg/black-circle.svg";
import YellowCircle from "../assets/img/svg/yellow-circle.svg";
import BlackDotSvg from "../assets/img/svg/black-dots.svg";
import YellowSquare from "../assets/img/svg/yellow-square-frame.svg";
import NewsSingleImg from "../assets/img/news-single-img.png";
import QuoteSvg from "../assets/img/svg/qotes-svg.svg";
import YellowFrameSvg from "../assets/img/svg/traingle-yellow-frame.svg";
import BlackFrameSvg from "../assets/img/svg/traingle-black-frame.svg";

const NewsSingle = () => {
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    const parallax = (e) => {
      document.querySelectorAll(".object").forEach((move) => {
        const movingValue = move.getAttribute("data-value");
        const x = (e.clientX * movingValue) / 250;
        const y = (e.clientY * movingValue) / 250;
        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener("mousemove", parallax);

    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <MenuSection />
      <div class="singal-top-space container overflow-hidden">
   
        <div class="half-circle-frame2 half-circle-frame3">
          <img
            class="half-circle-yellow object"
            data-value="-1"
            src={HalfCircleSvg1}
            alt="half-circle-yellow"
          />
          <img
            class="half-circle-black object"
            data-value="2"
            src={HalfCircleSvg2}
            alt="half-circle-black"
          />
        </div>

        <p class="news-main-text">Blog</p>
        <h1 class="bootstrap" data-aos="fade-up">
          Latest Bootstrap 5 Framework for Front-End
        </h1>
        <p class="average" data-aos="fade-up">
          Today most people get on average 4 to 6 hours of exercise every day,
          and make sure that everything they put in their mouths is not filled
          with sugars or preservatives, but they pay no attention to their
          mental health, no vacations, not even the occasional long weekend. All
          of this for hopes of one day getting that big promotion.
        </p>
        <div class="main_img">
          <div class="small-multiplication">
            <img
              class="black-multiplication  object"
              data-value="-1"
              src={MultiplicationSvg1}
              alt="black-multipliction"
            />
            <img
              class="yellow-multiplication object"
              data-value="2"
              src={MultiplicationSvg2}
              alt="yellow-multiplication"
            />
          </div>
          <img
            class="news-single-img"
            src={NewsSingleImg}
            alt="news-single-img"
          />
          <div class="circle-frame2">
            <img class="black-circle" src={BlackCircle} alt="black-circle" />
            <img class="yellow-circle" src={YellowCircle} alt="yellow-circle" />
          </div>
        </div>
        <div class="share-list2" data-aos="fade-up">
          <div class="dots-square3">
            <img
              class="black-dots4 object"
              data-value="-1"
              src={BlackDotSvg}
              alt="black-dots"
            />
            <img
              class="black-dots-frame4 object"
              data-value="2"
              src={YellowSquare}
              alt="yellow-square-frame"
            />
          </div>
          <h2 class="d-none">hidden</h2>
          <h3 class="d-none">hidden</h3>
          <h4 class="d-none">hidden</h4>
          <h5 class="d-none">hidden</h5>
          <h6 class="share-text">SHARE</h6>
          <p class="share-list-text">
            <Link to="https://www.facebook.com/kawtar.paradise">Fb.</Link>
          </p>
          <p class="share-list-text">
            <Link to="https://twitter.com/kawtarazzouzi">Tw.</Link>
          </p>
          <p class="share-list-text">
            <Link to="https://www.instagram.com/river.in.paradise">Ins.</Link>
          </p>
          <p class="share-list-text">
            <Link to="https://www.linkedin.com/in/kawtara">Li.</Link>
          </p>
        </div>
        <p class="volutpat2" data-aos="fade-up">
          Vestibulum, euismod sit duis ultrices adipiscing. Donec massa,
          volutpat maecenas ipsum, pellentesque ac enim. Interdum condimentum
          sit lectus porta sem tincidunt. Morbi congue tristique nunc magna.
          Lacus, egestas massa purus tellus viverra viverra neque est. Ut
          quisque mollis et id lectus.
        </p>
      </div>

      <section class="overflow-hidden">
        <div class="all-page-border2">
          <div class="qote-bg">
            <div class="qote-space container">
              <div class="qote-head" data-aos="fade-up">
                <div class="qote-svg-main">
                  <img class="qote-svg" src={QuoteSvg} alt="qotes-svg" />
                </div>
              </div>
              <p class="better" data-aos="fade-up">
                If you've got an idea, start today. There's no better time than
                now to get going. That doesn't mean quit your job.
              </p>
              <h6 class="lewis-bass" data-aos="fade-up">
                Lewis bass
              </h6>
            </div>
          </div>
        </div>
      </section>

      <section class="overflow-hidden">
        <div class="all-page-border2">
          <div class="spce-top container">
            <div class="row p-0">
              <div class="col-xl-6 text-section" data-aos="fade-up">
                <p class="tortor tortor1">
                  Turpis tortor non, integer volutpat. Turpis feugiat leo erat
                  tortor viverra tortor viverra aliquam.Feugiat non, dolor nec
                  porta faucibus. Faucibus proin sed id hac mattis. Ut cursus ut
                  mauris lacus, aliquam platea lobortis pharetra feugiat.
                  Posuere vulputate ornare sed ultrices pulvinar nulla.
                  Adipiscing sagittis eu urna, aliquam vitae maecenas. Donec
                  eget posuere egestas in sed vel. Porta eros, in posuere erat.
                  Amet, urna, malesuada congue lobortis. Non tempus convallis in
                  suspendisse. Enim nec quisque urna, venenatis viverra semper.
                  Lacus dui ultrices feugiat cursus suspendisse fermentum, ac
                  senectus.
                </p>
                <p class="tortor">
                  Pellentesque et, ornare purus quisque tortor, massa quis. Ut
                  cursus nisi orci, at. Magnis molestie at feugiat eleifend
                  aliquam, et habitasse sapien. Ultricies ac velit adipiscing
                  nunc fusce. Leo vestibulum et pharetra, diam ante eleifend
                  felis, platea. Orci aliquet arcu,at in at sapien laoreet.
                  Adipiscing elementum fermentum sit ut tellus. A, volutpat ut
                  massa egestas vestibulum condimentum. Leo, convallis tristique
                  facilisis elementum, ac adipiscing. Elementum tellus montes,
                  sollicitudin nunc est a id eget. Volutpat.
                </p>
                <div class="skill-list_news">
                  <ul class="skill-list-main">
                    <li>
                      {" "}
                      Develop easy-to-find and easy-to-navigate mobile friendly
                      website
                    </li>
                    <li>
                      Showcase each type of content: interactive books, animated
                      stories and picture books, audio stories. Create an
                      experience people want to share with others
                    </li>
                    <li>Persuade to download app and subscribe</li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-6 p-0 position-relative">
                <div class="traingle-frame4">
                  <img
                    class="traingle-yellow-news object"
                    data-value="1"
                    src={YellowFrameSvg}
                    alt="traingle-yellow-frame"
                  />
                  <img
                    class="traingle-black-news object"
                    data-value="-2"
                    src={BlackFrameSvg}
                    alt="traingle-black-frame"
                  />
                </div>
                <div class="simone-img-main">
                  <img class="simone-img" src={SimoneImg} alt="simone-img" />
                </div>
                <div class="small-half-circle">
                  <img
                    class="circle_news_yellow object"
                    data-value="1"
                    src={HalfCircleSvg1}
                    alt="half-circle-yellow"
                  />
                  <img
                    class="circle_news_black object"
                    data-value="-2"
                    src={HalfCircleSvg2}
                    alt="half-circle-black"
                  />
                </div>
              </div>
            </div>
            {/* <!-- ====================================== Like Button ===================================== --> */}
            <div
              class="like-button-circle position-relative"
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
              <div class="half2-circle-like">
                <img
                  class="black-half-circal-like object"
                  data-value="-1"
                  src={HalfCircleBlack}
                  alt="black-half-circal"
                />
                <img
                  class="yellow-half-circal-like object"
                  data-value="2"
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
            <div class="nextprev">
              <div class="nextprev-section" data-aos="zoom-out-left">
                <h6 class="text-prev">
                  <Link to="/blog">PREV</Link>
                </h6>
                <h3 class="build">
                  <Link to="/blog">
                    Building brands through customer service
                  </Link>
                </h3>
              </div>
              <div class="nextprev-section nextprev-section2">
                <h4 class="d-none">hidden</h4>
                <h5 class="d-none">hidden</h5>
                <h6 class="text-prev" data-aos="zoom-out-right">
                  <Link to="/blog">NEXT</Link>
                </h6>
                <h3 class=" build" data-aos="zoom-out-right">
                  <Link to="/blog">
                    The Elegant and Awesome Themify Icon Library
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      <section id="contact">
        <div className="all-page-border2">
          <div className="row">
            <FormSection />
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
};
export default NewsSingle;
