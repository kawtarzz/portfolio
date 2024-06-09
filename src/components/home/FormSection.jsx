import React, {useState} from "react";
import HalfCircleSvg1 from "../../assets/img/svg/half-circle-yellow.svg";
import HalfCircleSvg2 from "../../assets/img/svg/half-circle-black.svg";
import LocationSvg from "../../assets/img/svg/location.svg";
import GitHubSvg from "../../assets/img/svg/github-outline-svgrepo-com.svg";
import InstaIcon from "../../assets/img/svg/insta-icon.svg";
import BeIcon from "../../assets/img/svg/be-icon.svg";
import DribbleIcon from "../../assets/img/svg/dribble-icon.svg";
import FbIcon from "../../assets/img/svg/fb-icon.svg";
import MultiplicationSvg1 from "../../assets/img/svg/black-multipliction.svg";
import MultiplicationSvg2 from "../../assets/img/svg/yellow-multiplication.svg";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';



const FormSection = () => {

  const [templateParams, setTemplateParams] = useState({
    from_name: '',
    email: '',
    subject: '',
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .send('service_ii6ih5p', 'template_fjl9j6l', templateParams, 'oVuhuWy96mVwChvm2')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again or contact me at Kawtaryazzouzi@gmail.com')
        }
      )
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTemplateParams({ ...templateParams, [name]: value });
  };

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
          Say Hello!
        </h3>
        <p className="design_text creative_text touch" data-aos="fade-up">
            I'm currently available for freelance work and open to new opportunities.
         <h3 className="email-section" data-aos="fade-up">
            <Link to="mailto:hello@kawtar-azzouzi.com">hello@kawtar-azzouzi.com</Link>
            </h3>

          </p>
          <div className="form-main">
            <form onSubmit={sendEmail}>
              <ul>
                <li className="form">
                  <input
                    placeholder="Name"
                    type="text"
                    name="from_name"
                    id="from_name"
                    value={templateParams.from_name}
                    onChange={handleInputChange}
                    required
                    />
                </li>
                <li className="form">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    id="email"
                    value={templateParams.email}
                    onChange={handleInputChange}
                    required
                    />
                </li>
                <li className="form">
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    value={templateParams.subject}
                    onChange={handleInputChange}
                    required
                    />
                </li>
                <li className="form">
                  <input
                    placeholder="Hi Kawtar, I'd like to talk about..."
                    name="message"
                    value={templateParams.message}
                    onChange={handleInputChange}
                    required
                    ></input>
                </li>
                <li>
                  <input type="submit" className="send-btn" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      <div
        className="col-xl-6 col-lg-6 form-spacer2 active_menus"
        id="active_menus"
        >
        <div className="yellow_circle" id="spacing-circle"></div>
       <h3 className="get-in-touch get-touch" data-aos="fade-up"> Based in...</h3>
        <div className="email-phone" data-aos="fade-up">
    
    <div className="contact-box2">
      <div className="phone-main">
        <img className="location" src={LocationSvg} alt="location" />
        <div className="big-yellow-circle4"></div>
      </div>
      <p className="form-contact">
        <Link to="">Nashville, Tennessee. U.S.A</Link>
      </p>
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
            <Link to="https://github.com/kawtarzz">
              <img className="social-icons" src={GitHubSvg} alt="gh-icon" />
            </Link>
          </div>
         
          <div className="circle-border">
            <Link to="https://www.behance.net/Kawtar-a">
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
      </div>
    </div>
    </>

  );
};
export default FormSection;
