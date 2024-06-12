import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ripImage1 from "../../../assets/img/portfoliosection/rip/IMG_001.jpg";



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
          <img className="project_img1" src={ripImage1} alt="Slide 1"  />
        </div>
      </Slider>
    );
  }
}

export default ImageSlider;
