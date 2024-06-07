import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import witchesWizards03 from "../../../assets/img/portfoliosection/witchesWizards/frame01.jpg"
import witchesWizards04 from "../../../assets/img/portfoliosection/witchesWizards/frame02.jpg"
import witchesWizards05 from "../../../assets/img/portfoliosection/witchesWizards/frame03.jpg"


class SlickImage2 extends React.Component {
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
          <img src={witchesWizards03} alt="Slide 1"/>
        </div>
        <div className="project_img1">
          <img src={witchesWizards04} alt="Slide 2" />
        </div>
        <div className="project_img1">
          <img src={witchesWizards05} alt="Slide 3" />
        </div>
        

      </Slider>
    );
  }
}

export default SlickImage2;
