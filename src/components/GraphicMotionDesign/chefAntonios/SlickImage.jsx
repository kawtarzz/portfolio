import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChefAntoniosImg1 from "../../../assets/img/portfoliosection/chefAntonios/ca branding 001.jpg";
import ChefAntoniosImg2 from "../../../assets/img/portfoliosection/chefAntonios/ca branding 002.jpg";
import ChefAntoniosImg3 from "../../../assets/img/portfoliosection/chefAntonios/ca branding 003.jpg";
import ChefAntoniosImg4 from "../../../assets/img/portfoliosection/chefAntonios/ca branding 004.jpg";




class ImageSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      fade: true,
      autoplay: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

    return (
      <Slider {...settings} className="main_image_slider">
        <div>
          <img className="project_img1" src={ChefAntoniosImg1} alt="Slide 1"  />
        </div>
        <div>
          <img className="project_img1" src={ChefAntoniosImg2} alt="Slide 2"  />
        </div>
        <div>
          <img className="project_img1" src={ChefAntoniosImg3} alt="Slide 3"  />
        </div>
        <div>
          <img className="project_img1" src={ChefAntoniosImg4} alt="Slide 4"  />
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

function PrevArrow({onClick}) {

  return (
    <div>
        <div className="slick-prev rotate-180" onClick={onClick}>
          <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
        </div>
      </div>
  );
}