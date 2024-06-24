import React, {useState} from "react";
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
    </>

  );
};
export default FormSection;
