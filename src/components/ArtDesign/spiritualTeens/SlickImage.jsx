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
          <img className="project_img1" src={Portrait} alt="Slide 1"  />
        </div>
  
     
     
      </Slider>
    );
  }
}

export default ImageSlider;


function NextArrow() {
  return (
    <div>
    <div className="slick-next">
        <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
    </div>
  </div>
  );
}

function PrevArrow() {
  return (
    <div>
        <div className="slick-prev rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
        </div>
      </div>
  );
}