import React from "react";
import Icon1 from "../../assets/img/svg/pc-icon.svg"
import Icon2 from "../../assets/img/svg/light-iocn.svg"
import Icon3 from "../../assets/img/svg/marketing-iocn.svg";
import BlackCircle from "../../assets/img/svg/black-circle.svg"
import YellowCircle from "../../assets/img/svg/yellow-circle.svg";


const ServicesSection = () => {
  return (
    <>
      <div className="all-page-border2">
        <div className="servies-spacer">
          <div className="position-relative">
            <div className="yellow_circle"></div>
            <h2 className="about-text" data-aos="fade-up">
              Services
            </h2>
            <p className="design_text creative_text" data-aos="fade-up">
            Let's make your visual communication dreams come true!
            </p>
            <div className="circle-frame">
              <img
                className="black-circle"
                src={BlackCircle}
                alt="black-circle"
              />
              <img
                className="yellow-circle"
                src={YellowCircle}
                alt="yellow-circle"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 p-0" data-aos="zoom-in">
              <div className="box1 box1-responsive">
                <div className="dev-iocns">
                  <img
                    className="pc-icon"
                    src={Icon1}
                    alt="pc-icon"
                  />
                  <div className="big-yellow-circle-services"></div>
                </div>
                <h3 className="developement-text">Developement</h3>
                <p className="odio-text">
                  Need a new custom website or need help making your
                   current one more current? Let's talk!
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 p-0" data-aos="zoom-in">
              <div className="box1 box1-responsive">
                <div className="dev-iocns">
                  <img
                    className="light-icon"
                    src={Icon2}
                    alt="light-iocn"
                  />
                  <div className="big-yellow-circle-services"></div>
                </div>
                <h3 className="developement-text">Design</h3>
                <p className="odio-text">
                  From Graphic Design, Branding to Motion Design. Let's solve your visual communication needs, together. 
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 p-0" data-aos="zoom-in">
              <div className="box1" id="box3-top-space">
                <div className="dev-iocns">
                  <img
                    className="marketing-icon"
                    src={Icon3}
                    alt="marketing-icon"
                  />
                  <div className="big-yellow-circle-services2"></div>
                </div>
                <h3 className="developement-text developement-text2">Marketing</h3>
                <p className="odio-text">
                  S.E.O optimization, web accessibility, email marketing and social media is a lot to manage. I can help!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServicesSection;
