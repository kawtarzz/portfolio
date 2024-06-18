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
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
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