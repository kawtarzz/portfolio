import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Portrait from "../../../assets/img/portfoliosection/spiritualTeens/004.jpg";
import Image01 from "../../../assets/img/portfoliosection/spiritualTeens/001.png";
import Image02 from "../../../assets/img/portfoliosection/spiritualTeens/PG04-04.jpg";

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
          <img className="project_img1" src={Image01} alt="Slide 1"  />
        </div>
        <div>
          <img className="project_img1" src={Image02} alt="Slide 1"  />
        </div>
  
        <div>
          <img className="project_img1" src={Portrait} alt="Slide 1"  />
        </div>
  
     
     
      </Slider>
    );
  }
}

export default ImageSlider;

