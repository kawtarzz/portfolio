import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CandyCart1 from "../../../assets/img/portfoliosection/candyCart/fr1_v2_dedliveryshere.jpg";
import CandyCart2 from "../../../assets/img/portfoliosection/candyCart/fr2_v2_deliveryshere.jpg";
import CandyCart3 from "../../../assets/img/portfoliosection/candyCart/fr3_v2_deliveryshere.jpg";
import CandyCart4 from "../../../assets/img/portfoliosection/candyCart/fr3_v3_deliveryshere.jpg";



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
          <img className="project_img1" src={CandyCart1} alt="Slide 1"  />
        </div>
        <div>
          <img className="project_img1" src={CandyCart2} alt="Slide 2"  />
        </div>
        <div>
          <img className="project_img1" src={CandyCart3} alt="Slide 3"  />
        </div>
        <div>
          <img className="project_img1" src={CandyCart4} alt="Slide 4"  />
        </div>

     
      </Slider>
    );
  }
}

export default ImageSlider;

