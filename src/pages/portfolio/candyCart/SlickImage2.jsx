import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CandyCart1 from "../../../assets/img/portfoliosection/candyCart/001_Abstract_3frames.jpg";
import CandyCart2 from "../../../assets/img/portfoliosection/candyCart/Treatment.jpg";
import CandyCart3 from "../../../assets/img/portfoliosection/candyCart/Deliveryshere_Treatment.jpg";

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
          <img className="project_img1" src={CandyCart1} alt="Slide 1"  />
        </div>
        <div>
          <img className="project_img1" src={CandyCart2} alt="Slide 2"  />
        </div>
        <div>
          <img className="project_img1" src={CandyCart3} alt="Slide 3"  />
        </div>
     
      </Slider>
    );
  }
}

export default ImageSlider;

