import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewsImg1 from "../../assets/img/newsimg/news-img1.jpg";
import NewsImg2 from "../../assets/img/newsimg/news-img2.jpg";
import NewsImg3 from "../../assets/img/newsimg/news-img3.jpg";
import NewsImg4 from "../../assets/img/newsimg/news-img4.jpg";
import NewsImg5 from "../../assets/img/newsimg/news-img5.jpg";
import NewsImg6 from "../../assets/img/newsimg/news-img6.jpg";
import { Link } from "react-router-dom";

class BlogSection extends React.Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 1250,
          settings: {
            arrows: false,
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: false,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
          },
        },
      ],
    };
    return (
      <>
        <div className="slider2 hover15" id="portfolio_horizontal">
          <Slider {...settings} className="slider2">
            <div className="slider-space">
              <h3 className="date">July 15, 2022</h3>
              <div className="news-img-main">
                <figure>
                  <Link to="news_single">
                    <img
                      className="news-img1 inner-img"
                      src={NewsImg1}
                      alt="news-img1"
                    />
                  </Link>
                </figure>
              </div>
              <h3 className="brands">
                <Link to="news_single">
                  Building brands through customer service
                </Link>
              </h3>
              <p className="vitae">
                Volutpat nulla quis odio vitae augue tellus. Viverra cras
                senectus ac pulvinar tristique bibendum. Diam purus, nisi, at a
                bibendum leo malesuada. Orci, velit, dictumst arcu lacus.
              </p>
              <h4 className="read_more">
                <Link to="news_single">READ MORE</Link>
              </h4>
            </div>

            <div className="slider-space">
              <h3 className="date">July 15, 2022</h3>
              <div className="news-img-main">
                <figure>
                  <Link to="news_single">
                    <img
                      className="news-img1 inner-img"
                      src={NewsImg2}
                      alt="news-img1"
                    />
                  </Link>
                </figure>
              </div>
              <h3 className="brands">
                <Link to="news_single">
                  Building brands through customer service
                </Link>
              </h3>
              <p className="vitae">
                Volutpat nulla quis odio vitae augue tellus. Viverra cras
                senectus ac pulvinar tristique bibendum. Diam purus, nisi, at a
                bibendum leo malesuada. Orci, velit, dictumst arcu lacus.
              </p>
              <h4 className="read_more">
                <Link to="news_single">READ MORE</Link>
              </h4>
            </div>

            <div className="slider-space">
              <h3 className="date">July 15, 2022</h3>
              <div className="news-img-main">
                <figure>
                  <Link to="news_single">
                    <img
                      className="news-img1 inner-img"
                      src={NewsImg3}
                      alt="news-img1"
                    />
                  </Link>
                </figure>
              </div>
              <h3 className="brands">
                <a to="news_single">Building brands through customer service</a>
              </h3>
              <p className="vitae">
                Volutpat nulla quis odio vitae augue tellus. Viverra cras
                senectus ac pulvinar tristique bibendum. Diam purus, nisi, at a
                bibendum leo malesuada. Orci, velit, dictumst arcu lacus.
              </p>
              <h4 className="read_more">
                <Link to="news_single">READ MORE</Link>
              </h4>
            </div>

            <div className="slider-space">
              <h3 className="date">July 15, 2022</h3>
              <div className="news-img-main">
                <figure>
                  <Link to="news_single">
                    <img
                      className="news-img1 inner-img"
                      src={NewsImg4}
                      alt="news-img4"
                    />
                  </Link>
                </figure>
              </div>
              <h3 className="brands">
                <Link to="news_single">
                  Building brands through customer service
                </Link>
              </h3>
              <p className="vitae">
                Volutpat nulla quis odio vitae augue tellus. Viverra cras
                senectus ac pulvinar tristique bibendum. Diam purus, nisi, at a
                bibendum leo malesuada. Orci, velit, dictumst arcu lacus.
              </p>
              <h4 className="read_more">
                <Link to="news_single">READ MORE</Link>
              </h4>
            </div>

            <div className="slider-space">
              <h3 className="date">July 18, 2022</h3>
              <div className="news-img-main">
                <figure>
                  <Link to="news_single">
                    <img
                      className="news-img1 inner-img"
                      src={NewsImg5}
                      alt="news-img5"
                    />
                  </Link>
                </figure>
              </div>
              <h3 className="brands">
                <Link to="news_single">
                  Latest Bootstrap 5 Framework for Front-End
                </Link>
              </h3>
              <p className="vitae">
                Volutpat nulla quis odio vitae augue tellus. Viverra cras
                senectus ac pulvinar tristique bibendum. Diam purus, nisi, at a
                bibendum leo malesuada. Orci, velit, dictumst arcu lacus.
              </p>
              <h4 className="read_more">
                <Link to="news_single">READ MORE</Link>
              </h4>
            </div>

            <div className="slider-space">
              <h3 className="date">July 25, 2022</h3>
              <div className="news-img-main">
                <figure>
                  <Link to="news_single">
                    <img
                      className="news-img1 inner-img"
                      src={NewsImg6}
                      alt="news-img6"
                    />
                  </Link>
                </figure>
              </div>
              <h3 className="brands">
                <Link to="news_single">
                  The Elegant and Awesome Themify Icon Library
                </Link>
              </h3>
              <p className="vitae">
                Volutpat nulla quis odio vitae augue tellus. Viverra cras
                senectus ac pulvinar tristique bibendum. Diam purus, nisi, at a
                bibendum leo malesuada. Orci, velit, dictumst arcu lacus.
              </p>
              <h4 className="read_more">
                <Link to="news_single">READ MORE</Link>
              </h4>
            </div>

            <div className="slider-space">
              <h3 className="date">July 15, 2022</h3>
              <div className="news-img-main">
                <figure>
                  <Link to="news_single">
                    <img
                      className="news-img1 inner-img"
                      src={NewsImg4}
                      alt="news-img4"
                    />
                  </Link>
                </figure>
              </div>
              <h3 className="brands">
                <Link to="news_single">
                  Building brands through customer service
                </Link>
              </h3>
              <p className="vitae">
                Volutpat nulla quis odio vitae augue tellus. Viverra cras
                senectus ac pulvinar tristique bibendum. Diam purus, nisi, at a
                bibendum leo malesuada. Orci, velit, dictumst arcu lacus.
              </p>
              <h4 className="read_more">
                <Link to="news_single">READ MORE</Link>
              </h4>
            </div>

            <div className="slider-space">
              <h3 className="date">July 18, 2022</h3>
              <div className="news-img-main">
                <figure>
                  <Link to="news_single">
                    <img
                      className="news-img1 inner-img"
                      src={NewsImg5}
                      alt="news-img5"
                    />
                  </Link>
                </figure>
              </div>
              <h3 className="brands">
                <Link to="news_single">
                  Latest Bootstrap 5 Framework for Front-End
                </Link>
              </h3>
              <p className="vitae">
                Volutpat nulla quis odio vitae augue tellus. Viverra cras
                senectus ac pulvinar tristique bibendum. Diam purus, nisi, at a
                bibendum leo malesuada. Orci, velit, dictumst arcu lacus.
              </p>
              <h4 className="read_more">
                <Link to="news_single">READ MORE</Link>
              </h4>
            </div>

            <div className="slider-space">
              <h3 className="date">July 25, 2022</h3>
              <div className="news-img-main">
                <figure>
                  <Link to="news_single">
                    <img
                      className="news-img1 inner-img"
                      src={NewsImg6}
                      alt="news-img6"
                    />
                  </Link>
                </figure>
              </div>
              <h3 className="brands">
                <Link to="news_single">
                  The Elegant and Awesome Themify Icon Library
                </Link>
              </h3>
              <p className="vitae">
                Volutpat nulla quis odio vitae augue tellus. Viverra cras
                senectus ac pulvinar tristique bibendum. Diam purus, nisi, at a
                bibendum leo malesuada. Orci, velit, dictumst arcu lacus.
              </p>
              <h4 className="read_more">
                <Link to="news">READ MORE</Link>
              </h4>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
export default BlogSection;
