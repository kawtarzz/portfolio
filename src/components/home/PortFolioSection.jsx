import React, { useState } from "react";
import ShopBlock1 from "../../assets/img/portfoliosection/shoptheblock/shoptheblock_sq.jpg";
import CookiJar1 from "../../assets/img/portfoliosection/cookijar/cookijar_sq.jpg";
import NormalCoffee1 from "../../assets/img/normalCoffee/Logo_Sq.jpg"
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
                          src={CookiJar1}
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
                      <Link to="/projects/shoptheblock">
                        <img
                          className="colijala-img"
                          src={ShopBlock1}
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
                    <Link to="/projects/shoptheblock">Website</Link>
                  </h4>
                  <h5 className="colijala-text">
                    <Link to="/projects/shoptheblock">Shop the Block</Link>
                  </h5>
                </div>
                <div className="red">
                  <Link to="/projects/shoptheblock">
                    <div className="arrow-pro"></div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 p-0 center-line">
              <div className="bottom-line">
                <div className="hover01 column">
                  <figure>
                    <Link to="/projects/normalcoffee">
                      <img
                        className="colijala-img"
                        src={NormalCoffee1}
                        alt="bolmija"
                      />
                    </Link>
                  </figure>
                </div>
              </div>
              <div className="colijala-text-group" style={{ border: "none" }}>
                <div className="right-line">
                  <h4 className="website-text">
                    <Link to="/projects/normalcoffee">Design / Illustration</Link>
                  </h4>
                  <h5 className="colijala-text">
                    <Link to="/projects/normalcoffee">Normal Coffee</Link>
                  </h5>
                </div>
                <div className="red">
                  <Link to="/projects/normalcoffee">
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
                    <Link to="/projects/shoptheblock">
                      <img
                        className="colijala-img"
                        src={ShopBlock1}
                        alt="colijala"
                      />
                    </Link>
                  </figure>
                </div>
              </div>
              <div className="colijala-text-group">
                <div className="right-line">
                  <h4 className="website-text">
                    <Link to="/projects/shoptheblock">Website</Link>
                  </h4>
                  <h5 className="colijala-text">
                    <Link to="/projects/shoptheblock">ShoptheBlock</Link>
                  </h5>
                </div>
                <div className="red">
                  <Link to="/projects/shoptheblock">
                    <div className="arrow-pro"></div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 p-0 center-line">
              <div className="bottom-line">
                <div className="hover01 column">
                  <figure>
                    <Link to="/projects/shoptheblock">
                      <img className="colijala-img" src={ShopBlock1} alt="moligo" />
                    </Link>
                  </figure>
                </div>
              </div>
              <div className="colijala-text-group">
                <div className="right-line">
                  <h4 className="website-text">
                    <Link to="/projects/shoptheblock">Website</Link>
                  </h4>
                  <h5 className="colijala-text">
                    <Link to="/projects/shoptheblock">Shop the Block</Link>
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
                        src={CookiJar1}
                        alt="bolmija"
                      />
                    </Link>
                  </figure>
                </div>
              </div>
              <div className="colijala-text-group">
                <div className="right-line">
                  <h4 className="website-text">
                    <Link to="/projects/normalcoffee">Design / Illustration</Link>
                  </h4>
                  <h5 className="colijala-text">
                    <Link to="/projects/normalcoffee">Normal Coffee</Link>
                  </h5>
                </div>
                <div className="red">
                  <Link to="/projects/normalcoffee">
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
                    <Link to="/projects/normalcoffee">
                      <img className="colijala-img" src={ShopBlock1} alt="app1" />
                    </Link>
                  </figure>
                </div>
              </div>
              <div className="colijala-text-group">
                <div className="right-line">
                  <h4 className="website-text">
                    <Link to="/projects/normalcoffee">Website</Link>
                  </h4>
                  <h5 className="colijala-text">
                    <Link to="/projects/normalcoffee">project </Link>
                  </h5>
                </div>
                <div className="red">
                  <Link to="/projects/normalcoffee">
                    <div className="arrow-pro"></div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 p-0 center-line">
              <div className="bottom-line">
                <div className="hover01 column">
                  <figure>
                    <Link to="/projects/normalcoffee">
                      <img className="colijala-img" src={ShopBlock1} alt="app2" />
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
                    <Link to="/projects/cookijar">Project 1</Link>
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
                      <img className="colijala-img" src={CookiJar1} alt="app3" />
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
                    <Link to="/projects/cookijar">project 2</Link>
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
                        src={CookiJar1}
                        alt="design1"
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
                    <Link to="/projects/cookijar">CookiJar</Link>
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
                        src={CookiJar1}
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
                    <Link to="/projects/cookijar">project</Link>
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
                        src={CookiJar1}
                        alt="design2"
                      />
                    </Link>
                  </figure>
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
