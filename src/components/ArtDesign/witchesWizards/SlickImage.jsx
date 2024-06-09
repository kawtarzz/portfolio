import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import witchesWizards01 from "../../../assets/img/portfoliosection/witchesWizards/thumbnails.jpg";
import witchesWizards02 from "../../../assets/img/portfoliosection/witchesWizards/storyboard.jpg";
import witchesWizards03 from "../../../assets/img/portfoliosection/witchesWizards/frame01.jpg";
import witchesWizards04 from "../../../assets/img/portfoliosection/witchesWizards/frame02.jpg";
import witchesWizards05 from "../../../assets/img/portfoliosection/witchesWizards/frame03.jpg";
import witchesWizards06 from "../../../assets/img/portfoliosection/witchesWizards/frame04.v2.jpg";
import witchesWizards07 from "../../../assets/img/portfoliosection/witchesWizards/frame05.jpg";
import witchesWizards08 from "../../../assets/img/portfoliosection/witchesWizards/frame06.jpg";
import witchesWizards09 from "../../../assets/img/portfoliosection/witchesWizards/frame07.jpg";
import witchesWizards10 from "../../../assets/img/portfoliosection/witchesWizards/frame08.jpg";

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
          <img src={witchesWizards01} alt="Slide 1" />
        </div>
        <div className="project_img1">
          <img src={witchesWizards02} alt="Slide 2" />
        </div>
        <div className="project_img1">
          <img src={witchesWizards03} alt="Slide 3" />
        </div>
        <div className="project_img1">
          <img src={witchesWizards04} alt="Slide 3" />
        </div>
        <div className="project_img1">
          <img src={witchesWizards05} alt="Slide 3" />
        </div>
        <div className="project_img1">
          <img src={witchesWizards06} alt="Slide 3" />
        </div>
        <div className="project_img1">
          <img src={witchesWizards07} alt="Slide 3" />
        </div>
        <div className="project_img1">
          <img src={witchesWizards08} alt="Slide 3" />
        </div>
        <div className="project_img1">
          <img src={witchesWizards09} alt="Slide 3" />
        </div>
        <div className="project_img1">
          <img src={witchesWizards10} alt="Slide 3" />
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
