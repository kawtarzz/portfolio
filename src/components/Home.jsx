import React, { useEffect, useState } from "react";
import MenuSection from "./home/MenuSection";
import AboutSection from "./home/AboutSection";
import MainPageSection from "./home/MainPageSection";
import ServicesSection from "./home/ServicesSection";
import ResumeSection from "./home/ResumeSection";
import PortFolioSection from "./home/PortFolioSection";
import SvgIcon from "../assets/img/svg/traingle-btn.svg";
import FormSection from "./home/FormSection";
import FooterSection from "./FooterSection";
import Loader from "./home/Loader";
import VideoModal from "./VideoModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  if (loading) {
    return <Loader />;
  }


  return (
    <>
        <div class="container">
          <MenuSection />
          <div className="all-page-border active_menus">
            <MainPageSection />
          </div>
          <section className="active_menus overflow-hidden" id="about">
            <AboutSection />
          </section>
            <div className="shapes-bg all-page-border2 overflow-hidden">
              <div className="video-section-text-main container">
                <h1 className="video-section-text" data-aos="fade-up">
                View Motion Design Reel 
                </h1>
                <div>
                  <div className="video-btn-main" data-aos="fade-up">
                    <button
                      id="play-video"
                      className="video-play-button pulse"
                      onClick={openModal}
                    >
                      <img class="triangle-img" src={SvgIcon} alt="triangle" />
                    </button>

                    <VideoModal isOpen={isModalOpen} onClose={closeModal} />
                  </div>
                </div>
              </div>
          </div>
          <section className="overflow-hidden">
            <ServicesSection />
          </section>
          <section className="active_menus overflow-hidden" id="resume">
            <div className="all-page-border2 resume-bg">

                <div className="servies-spacer">
                  <h2 className="about-text" data-aos="fade-up">
                    Resume
                  </h2>
                  <p className="design_text creative_text" data-aos="fade-up">
                    Professional Experience, Training & Education
                  </p>
                </div>
            </div>
            <ResumeSection />
          </section>
          <section className="active_menus overflow-hidden" id="portfolio">
            <PortFolioSection />
          </section>
         
          <section id="contact">
            <div className="all-page-border2">
              <div className="row">
                <FormSection />
              </div>
            </div>
          </section>
          <FooterSection />
        </div>
    </>
  );
};
export default Home;
