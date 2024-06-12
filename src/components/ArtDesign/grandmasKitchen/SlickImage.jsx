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
