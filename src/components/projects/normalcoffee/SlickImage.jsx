import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NormalCoffeeImg01 from "../../../assets/img/normalCoffee/Diversity.f01.jpg"
import NormalCoffeeImg02 from "../../../assets/img/normalCoffee/Diversity.f02.jpg"
import NormalCoffeeImg03 from "../../../assets/img/normalCoffee/diversity.f03.jpg"
import NormalCoffeeImg04 from "../../../assets/img/normalCoffee/Diversity.f04.jpg"
import NormalCoffeeImg05 from "../../../assets/img/normalCoffee/diversity.f05.jpg"

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
          <img className="project_img1" src={NormalCoffeeImg01} alt="Slide 1" />
        </div>
        <div>
          <img className="project_img1" src={NormalCoffeeImg02} alt="Slide 2" />
        </div>
        <div>
          <img className="project_img1" src={NormalCoffeeImg03} alt="Slide 3" />
        </div>
        <div>
          <img className="project_img1" src={NormalCoffeeImg04} alt="Slide 3" />
        </div>
        <div>
          <img className="project_img1" src={NormalCoffeeImg05} alt="Slide 3" />
        </div>
      </Slider>
    );
  }
}

export default ColijalaImageSlider;
