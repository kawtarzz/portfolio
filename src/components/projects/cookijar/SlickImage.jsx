import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CookiJar1 from "../../../assets/img/portfoliosection/app1.jpg";

class ColijalaImageSlider extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 1000,
      fade: true,
      autoplay: true,
      arrows: false,
    };

    return (
      <Slider {...settings} className="main_image_slider">
        <div>
          <img className="nairobi_img1" src={CookiJar1} alt="Slide 1" />
        </div>
        <div>
          <img className="nairobi_img1" src={CookiJar1} alt="Slide 3" />
        </div>
      </Slider>
    );
  }
}

export default ColijalaImageSlider;
