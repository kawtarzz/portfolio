import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NairobiImg1 from "../../assets/img/mainpageimg/nairobi_img1.png";
import NairobiImg2 from "../../assets/img/mainpageimg/nairobi_img2.png";

class MainImageSlider extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 1000,
      fade: true,
      autoplay: true,
      arrows: true,
    };

    return (
      <Slider {...settings} className="main_image_slider">
        <div>
          <img className="nairobi_img1" src={NairobiImg1} alt="Slide 1" />
        </div>
        <div>
          <img className="nairobi_img1" src={NairobiImg2} alt="Slide 2" />
        </div>
      </Slider>
    );
  }
}

export default MainImageSlider;
