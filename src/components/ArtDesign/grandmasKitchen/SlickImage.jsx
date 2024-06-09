import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import grandmasKitchen01 from "../../../assets/img/portfoliosection/grandmasKitchen/Grandmaskitchen.jpg";
import grandmasKitchen02 from "../../../assets/img/portfoliosection/grandmasKitchen/fr01_gmaskitchenv2.jpg";
import grandmasKitchen03 from "../../../assets/img/portfoliosection/grandmasKitchen/fr02_gmaskitchen.jpg";
import grandmasKitchen04 from "../../../assets/img/portfoliosection/grandmasKitchen/fr03_gmaskitchen.jpg";


class SlickImage extends React.Component {
  render() {
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      speed: 1000,
      fade: true,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    
    };

    return (
      <Slider {...settings} className="main_image_slider">
        <div className="project_img1">
          <img src={grandmasKitchen01} alt="Slide 1" />
        </div>
        <div className="project_img1">
          <img src={grandmasKitchen02} alt="Slide 2" />
        </div>
        <div className="project_img1">
          <img src={grandmasKitchen03} alt="Slide 3" />
        </div>
        <div className="project_img1">
          <img src={grandmasKitchen04} alt="Slide 4" />
        </div>

      </Slider>
    );
  }
}

export default SlickImage;


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