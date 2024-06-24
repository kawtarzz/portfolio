import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image01 from "../../../assets/img/portfoliosection/rocketMortgage/endzone_sm.jpg";
import Image02 from "../../../assets/img/portfoliosection/rocketMortgage/rocketm_bannerportfolio.png";
import Image03 from "../../../assets/img/portfoliosection/rocketMortgage/hlp.board.kazzou.jpg";


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
          <img className="project_img1" src={Image01} alt="Slide 2"  />
        </div>
        <div>
          <img className="project_img1" src={Image02} alt="Slide 2"  />
        </div>
        <div>
          <img className="project_img1" src={Image03} alt="Slide 3"  />
        </div>
      </Slider>
    );
  }
}

export default ImageSlider;
