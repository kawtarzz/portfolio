import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import witchesWizardsImg01 from "../../../assets/img/portfoliosection/witchesWizards/frame01.jpg"
import witchesWizardsImg02 from "../../../assets/img/portfoliosection/witchesWizards/frame02.jpg"
import witchesWizardsImg03 from "../../../assets/img/portfoliosection/witchesWizards/frame03.jpg"
import witchesWizardsImg04 from "../../../assets/img/portfoliosection/witchesWizards/frame04.v2.jpg"
import witchesWizardsImg05 from "../../../assets/img/portfoliosection/witchesWizards/frame05.jpg"
import witchesWizardsImg06 from "../../../assets/img/portfoliosection/witchesWizards/frame06.jpg"
import witchesWizardsImg07 from "../../../assets/img/portfoliosection/witchesWizards/frame07.jpg"
import witchesWizardsImg08 from "../../../assets/img/portfoliosection/witchesWizards/frame08.jpg"




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
          <img className="project_img1" src={witchesWizardsImg01} alt="Slide 1" />
        </div>
        <div>
          <img className="project_img1" src={witchesWizardsImg02} alt="Slide 2" />
        </div>
        <div>
          <img className="project_img1" src={witchesWizardsImg03} alt="Slide 3" />
        </div>
        <div>
          <img className="project_img1" src={witchesWizardsImg04} alt="Slide 4" />
        </div>
        <div>
          <img className="project_img1" src={witchesWizardsImg05} alt="Slide 5" />
        </div>
        <div>
          <img className="project_img1" src={witchesWizardsImg06} alt="Slide 6" />
        </div>
        <div>
          <img className="project_img1" src={witchesWizardsImg07} alt="Slide 7" />
        </div>
        <div>
          <img className="project_img1" src={witchesWizardsImg08} alt="Slide 8" />
        </div>
      </Slider>
    );
  }
}

export default ImageSlider;
