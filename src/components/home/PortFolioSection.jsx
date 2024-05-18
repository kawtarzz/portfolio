import React, { useState } from "react";
import ColiJalaImg from "../../assets/img/portfoliosection/colijala.jpg";
import BolMija from "../../assets/img/portfoliosection/bolmija.jpg";
import Moligo from "../../assets/img/portfoliosection/moligo.jpg";
import WebsiteImg2 from "../../assets/img/portfoliosection/website-img2.jpg";
import WebsiteImg3 from "../../assets/img/portfoliosection/website-img3.jpg";
import App1Img from "../../assets/img/portfoliosection/app1.jpg";
import App2Img from "../../assets/img/portfoliosection/app2.jpg";
import App3Img from "../../assets/img/portfoliosection/app3.jpg";
import Design1Img from "../../assets/img/portfoliosection/design1.jpg";
import Design2Img from "../../assets/img/portfoliosection/design2.jpg";
import { Link } from "react-router-dom";

const PortFolioSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="all-page-border2">
        <div className="portfolio-bg">
          <div className="spacer">
            <div className="yellow_circle"></div>
            <h2 className="about-text" data-aos="fade-up">
              Portfolio
            </h2>
            <h3 className="d-none">hidden</h3>
       
            <div className="tab_box" data-aos="fade-up">
              <button
                className={activeTab === 0 ? "tab_btn active" : "tab_btn"}
                onClick={() => handleTabClick(0)}
              >
                All
              </button>
              <button
                className={activeTab === 1 ? "tab_btn active" : "tab_btn"}
                onClick={() => handleTabClick(1)}
              >
                website
              </button>
              <button
                className={activeTab === 2 ? "tab_btn active" : "tab_btn"}
                onClick={() => handleTabClick(2)}
              >
                app
              </button>
              <button
                className={activeTab === 3 ? "tab_btn active" : "tab_btn"}
                onClick={() => handleTabClick(3)}
              >
                design
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="content_box overflow-hidden">
        <div className={activeTab === 0 ? "content active" : "content"}>
          <div className="row m-0">
            <div className="col-xl-4 col-lg-4 col-md-6 p-0 center-line">
              <div className="bottom-line">
                <div className="hover01 column">
                  <div>
                    <figure>
                      <Link to="/projects/cookijar">
                        <img
                          className="colijala-img"
                          src={ColiJalaImg}
                          alt="cookijar"
                        />
                      </Link>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="colijala-text-group" style={{ border: "none" }}>
                <div className="right-line">
                  <h4 className="website-text">
                    <Link to="/projects/cookijar">Website</Link>
                  </h4>
                  <h5 className="colijala-text">
                    <Link to="/projects/cookijar">cookijar</Link>
                  </h5>
                </div>
                <div className="red">
                  <Link to="/projects/cookijar">
                    <div className="arrow-pro"></div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 p-0 center-line">
              <div className="bottom-line">
                <div className="hover01 column">
                  <div>
                    <figure>
                      <Link to="/projects/cookijar">
                        <img
                          className="colijala-img"
                          src={BolMija}
                          alt="moligo"
                        />
                      </Link>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="colijala-text-group" style={{ border: "none" }}>
                <div className="right-line">
                  <h4 className="website-text">
                    <Link to="/projects/cookijar">App</Link>
                  </h4>
                  <h5 className="colijala-text">
                    <Link to="/projects/cookijar">Moligo</Link>
                  </h5>
                </div>
                <div className="red">
                  <Link to="/projects/cookijar">
                    <div className="arrow-pro"></div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 p-0 center-line">
              <div className="bottom-line">
                <div className="hover01 column">
                  <figure>
                    <Link to="/projects/cookijar">
                      <img
                        className="colijala-img"
                        src={Moligo}
                        alt="bolmija"
                      />
                    </Link>
                  </figure>
                </div>
              </div>
              <div className="colijala-text-group" style={{ border: "none" }}>
                <div className="right-line">
                  <h4 className="website-text">
                    <Link to="/projects/cookijar">Design</Link>
                  </h4>
                  <h5 className="colijala-text">
                    <Link to="/projects/cookijar">Bolmija</Link>
                  </h5>
                </div>
                <div className="red">
                  <Link to="/projects/cookijar">
                    <div className="arrow-pro"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content_box overflow-hidden">
        <div className={activeTab === 1 ? "content active" : "content"}>
          <div className="row m-0">
            <div className="col-xl-4 col-lg-4 col-md-6 p-0 center-line">
              <div className="bottom-line">
                <div className="hover01 column">
                  <figure>
                    <Link to="/projects/cookijar">
                      <img
                        className="colijala-img"
                        src={WebsiteImg2}
                        alt="colijala"
                      />
                    </Link>
                  </figure>
                </div>
              </div>
              <div className="colijala-text-group">
                <div className="right-line">
                  <h4 className="website-text">
                    <Link to="/projects/cookijar">Website</Link>
                  </h4>
                  <h5 className="colijala-text">
                    <Link to="/projects/cookijar">Colijala</Link>
                  </h5>
                </div>
                <div className="red">
                  <Link to="/projects/cookijar">
                    <div className="arrow-pro"></div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 p-0 center-line">
              <div className="bottom-line">
                <div className="hover01 column">
                  <figure>
                    <Link to="/projects/cookijar">
                      <img className="colijala-img" src={Moligo} alt="moligo" />
                    </Link>
                  </figure>
                </div>
              </div>
              <div className="colijala-text-group">
                <div className="right-line">
                  <h4 className="website-text">
                    <Link to="/projects/cookijar">App</Link>
                  </h4>
                  <h5 className="colijala-text">
                    <Link to="/projects/cookijar">Moligo</Link>
                  </h5>
                </div>
                <div className="red">
                  <Link to="/projects/cookijar">
                    <div className="arrow-pro"></div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 p-0 center-line">
              <div className="bottom-line">
                <div className="hover01 column">
                  <figure>
                    <Link to="/projects/cookijar">
                      <img
                        className="colijala-img"
                        src={WebsiteImg3}
                        alt="bolmija"
                      />
                    </Link>
                  </figure>
                </div>
              </div>
              <div className="colijala-text-group">
                <div className="right-line">
                  <h4 className="website-text">
                    <Link to="/projects/cookijar">Design</Link>
                  </h4>
                  <h5 className="colijala-text">
                    <Link to="/projects/cookijar">Bolmija</Link>
                  </h5>
                </div>
                <div className="red">
                  <Link to="/projects/cookijar">
                    <div className="arrow-pro"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content_box overflow-hidden">
        <div className={activeTab === 2 ? "content active" : "content"}>
          <div className="row m-0">
            <div className="col-xl-4 col-lg-4 col-md-6 p-0 center-line">
              <div className="bottom-line">
                <div className="hover01 column">
                  <figure>
                    <Link to="/projects/cookijar">
                      <img className="colijala-img" src={App1Img} alt="app1" />
                    </Link>
                  </figure>
                </div>
              </div>
              <div className="colijala-text-group">
                <div className="right-line">
                  <h4 className="website-text">
                    <Link to="/projects/cookijar">Website</Link>
                  </h4>
                  <h5 className="colijala-text">
                    <Link to="/projects/cookijar">Colijala</Link>
                  </h5>
                </div>
                <div className="red">
                  <Link to="/projects/cookijar">
                    <div className="arrow-pro"></div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 p-0 center-line">
              <div className="bottom-line">
                <div className="hover01 column">
                  <figure>
                    <Link to="/projects/cookijar">
                      <img className="colijala-img" src={App2Img} alt="app2" />
                    </Link>
                  </figure>
                </div>
              </div>
              <div className="colijala-text-group">
                <div className="right-line">
                  <h4 className="website-text">
                    <Link to="/projects/cookijar">App</Link>
                  </h4>
                  <h5 className="colijala-text">
                    <Link to="/projects/cookijar">Moligo</Link>
                  </h5>
                </div>
                <div className="red">
                  <Link to="/projects/cookijar">
                    <div className="arrow-pro"></div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 p-0 center-line">
              <div className="bottom-line">
                <div className="hover01 column">
                  <figure>
                    <Link to="/projects/cookijar">
                      <img className="colijala-img" src={App3Img} alt="app3" />
                    </Link>
                  </figure>
                </div>
              </div>
              <div className="colijala-text-group">
                <div className="right-line">
                  <h4 className="website-text">
                    <Link to="/projects/cookijar">Design</Link>
                  </h4>
                  <h5 className="colijala-text">
                    <Link to="/projects/cookijar">Bolmija</Link>
                  </h5>
                </div>
                <div className="red">
                  <Link to="/projects/cookijar">
                    <div className="arrow-pro"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content_box overflow-hidden">
        <div className={activeTab === 3 ? "content active" : "content"}>
          <div className="row m-0">
            <div className="col-xl-4 col-lg-4 col-md-6 p-0 center-line">
              <div className="bottom-line">
                <div className="hover01 column">
                  <figure>
                    <Link to="/projects/cookijar">
                      <img
                        className="colijala-img"
                        src={Design1Img}
                        alt="design1"
                      />
                    </Link>
                  </figure>
                </div>
              </div>
              <div className="colijala-text-group">
                <div className="right-line">
                  <h4 className="website-text">
                    <Link to="/projects/cookijar">Website</Link>
                  </h4>
                  <h5 className="colijala-text">
                    <Link to="/projects/cookijar">Colijala</Link>
                  </h5>
                </div>
                <div className="red">
                  <Link to="/projects/cookijar">
                    <div className="arrow-pro"></div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 p-0 center-line">
              <div className="bottom-line">
                <div className="hover01 column">
                  <figure>
                    <Link to="/projects/cookijar">
                      <img
                        className="colijala-img"
                        src={BolMija}
                        alt="bolmija"
                      />
                    </Link>
                  </figure>
                </div>
              </div>
              <div className="colijala-text-group">
                <div className="right-line">
                  <h4 className="website-text">
                    <Link to="/projects/cookijar">App</Link>
                  </h4>
                  <h5 className="colijala-text">
                    <Link to="/projects/cookijar">Moligo</Link>
                  </h5>
                </div>
                <div className="red">
                  <Link to="/projects/cookijar">
                    <div className="arrow-pro"></div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 p-0 center-line">
              <div className="bottom-line">
                <div className="hover01 column">
                  <figure>
                    <Link to="/projects/cookijar">
                      <img
                        className="colijala-img"
                        src={Design2Img}
                        alt="design2"
                      />
                    </Link>
                  </figure>
                </div>
              </div>
              <div className="colijala-text-group">
                <div className="right-line">
                  <h4 className="website-text">
                    <Link to="/projects/cookijar">Design</Link>
                  </h4>
                  <h5 className="colijala-text">
                    <Link to="/projects/cookijar">Bolmija</Link>
                  </h5>
                </div>
                <div className="red">
                  <Link to="/projects/cookijar">
                    <div className="arrow-pro"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PortFolioSection;
