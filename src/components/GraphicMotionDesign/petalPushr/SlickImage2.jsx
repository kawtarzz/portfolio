import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image01 from "../../../assets/img/portfoliosection/petalpushr/petalpushr-01.jpg";

class ImageSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      fade: true,
      autoplay: true,
    };

    return (
      <Slider {...settings} className="main_image_slider">
        <div>
          <img src={Image01} alt="Slide 1"  />
        </div>
      </Slider>
    );
  }
}

export default ImageSlider;
