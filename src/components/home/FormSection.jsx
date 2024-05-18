import React from "react";
import HalfCircleSvg1 from "../../assets/img/svg/half-circle-yellow.svg";
import HalfCircleSvg2 from "../../assets/img/svg/half-circle-black.svg";
import PhoneSvg from "../../assets/img/svg/phone.svg";
import LocationSvg from "../../assets/img/svg/location.svg";
import FbIcon from "../../assets/img/svg/fb-icon.svg";
import TwitIcon from "../../assets/img/svg/twit-icon.svg";
import InstaIcon from "../../assets/img/svg/insta-icon.svg";
import BeIcon from "../../assets/img/svg/be-icon.svg";
import DribbleIcon from "../../assets/img/svg/dribble-icon.svg";
import MultiplicationSvg1 from "../../assets/img/svg/black-multipliction.svg";
import MultiplicationSvg2 from "../../assets/img/svg/yellow-multiplication.svg";
import { Link } from "react-router-dom";


const FormSection = () => {
  return (
    <>
      <div className="col-xl-6 col-lg-6 form-spacer">
        <div className="yellow_circle"></div>
        <div className="half-circle-end">
          <img
            className="half-circle-end-yellow object"
            src={HalfCircleSvg1}
            data-value="-1"
            alt="yellow-multiplication"
          />
          <img
            className="half-circle-end-black object"
            data-value="1"
            src={HalfCircleSvg2}
            alt="black-multiplication"
          />
        </div>
        <h3 className="get-in-touch get-touch" id="send" data-aos="fade-up">
          GET IN TOUCH
        </h3>
        <p className="design_text creative_text touch" data-aos="fade-up">
          Fill out my form below or send me an email <br></br>   <h3 className="email-section" data-aos="fade-up">
            <Link to="mailto:hello@kawtar-azzouzi.com">hello@kawtar-azzouzi.com</Link>
          </h3>
        </p>
        <div className="form-main" onsubmit="sendmail()">
          <div className="form">
            <input type="text" name="name" required autocomplete="off" />
            <label className="label-name">
              <span className="content-name">Name*</span>
            </label>
          </div>
          <div className="form">
            <input type="email" name="name" required autocomplete="off" />
            <label className="label-name">
              <span className="content-name">E-mail*</span>
            </label>
          </div>
          <div className="form">
            <input type="text" name="name" required autocomplete="off" />
            <label className="label-name">
              <span className="content-name">Phone Number</span>
            </label>
          </div>
          <div className="form" id="form2">
            <input type="text" name="name" required autocomplete="off" />
            <label className="label-name">
              <span className="content-name" id="content-name2">
                Message*
              </span>
            </label>
          </div>
          <div className="button-required">
            <button className="send-btn">
              Send Message
              <span className="send-span"></span>
            </button>
            <p className="required">*Marked fields are required to fill.</p>
          </div>
        </div>
      </div>
      <div
        className="col-xl-6 col-lg-6 form-spacer2 active_menus"
        id="active_menus"
      >
        <div className="yellow_circle" id="spacing-circle"></div>
        <h3 className="catch-me" data-aos="fade-up">
          CATCH ME HERE
        </h3>
        <h3 className="d-none">hidden</h3>
        <div className="email-phone" data-aos="fade-up">
    
          <div className="contact-box2">
            <div className="phone-main">
              <img className="location" src={LocationSvg} alt="location" />
              <div className="big-yellow-circle4"></div>
            </div>
            <p className="form-contact">
              <Link to="">Nashville, Tennessee. U.S.A</Link>
            </p>
          </div>
        </div>
        <h4 className="follow-me-text" data-aos="fade-up">
          Follow me
        </h4>
        <div className="social-media-icon" data-aos="fade-up">
          <div className="circle-border">
            <Link to="https://www.facebook.com/kawtar.paradise">
              <img className="social-icons" src={FbIcon} alt="fb-icon" />
            </Link>
          </div>
          <div className="circle-border">
            <Link to="https://twitter.com/kawtarazzouzi">
              <img className="social-icons" src={TwitIcon} alt="twit-icon" />
            </Link>
          </div>
          <div className="circle-border">
            <Link to="https://www.instagram.com/river.in.paradise">
              <img className="social-icons" src={InstaIcon} alt="insta-icon" />
            </Link>
          </div>
          <div className="circle-border">
            <Link to="https://www.behance.net/Kawtar-">
              <img className="social-icons" src={BeIcon} alt="be-icon" />
            </Link>
          </div>
          <div className="circle-border">
            <Link to="https://dribbble.com/kawtar/">
              <img
                className="social-icons"
                src={DribbleIcon}
                alt="dribble-icon"
              />
            </Link>
          </div>
          <div className="multiplication-frame-footer">
            <img
              className="black-multiplication-form object"
              data-value="1"
              src={MultiplicationSvg1}
              alt="black-multiplication"
            />
            <img
              className="yellow-multiplication-form object"
              src={MultiplicationSvg2}
              data-value="-1"
              alt="yellow-multiplication"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default FormSection;
