import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ripImage1 from "../../../assets/img/portfoliosection/rip/IMG_001.jpg";
import ripImage2 from "../../../assets/img/portfoliosection/rip/IMG_00 (1).jpg";
import ripImage3 from "../../../assets/img/portfoliosection/rip/IMG_00 (2).jpg";
import ripImage4 from "../../../assets/img/portfoliosection/rip/IMG_00 (3).jpg";



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
        <div>
          <img className="project_img1" src={ripImage2} alt="Slide 1"  />
        </div>
        <div>
          <img className="project_img1" src={ripImage3} alt="Slide 1"  />
        </div>
        <div>
          <img className="project_img1" src={ripImage4} alt="Slide 1"  />
        </div>
       
      </Slider>
    );
  }
}

export default ImageSlider;
