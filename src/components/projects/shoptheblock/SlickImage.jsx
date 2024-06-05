import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopBlock1 from "../../../assets/img/portfoliosection/shoptheblock/app2.jpg";

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
        <div>
          <img className="project_img1" src={ShopBlock1} alt="Slide 2" style={{ maxWidth: "300px" }} />
        </div>
        <div>
          <img className="project_img1" src={ShopBlock1} alt="Slide 3" style={{ maxWidth: "300px" }} />
        </div>
      </Slider>
    );
  }
}

export default ImageSlider;
