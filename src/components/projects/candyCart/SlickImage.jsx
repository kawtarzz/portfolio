import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




class ImageSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      fade: true,
      autoplay: true,
      arrows: true,
    };

    return (
      <Slider {...settings} className="main_image_slider">
     
      </Slider>
    );
  }
}

export default ImageSlider;
