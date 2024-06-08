import React, { useState } from "react";
import AboutSection from "./home/AboutSection";
import MainPageSection from "./home/MainPageSection";
import ServicesSection from "./home/ServicesSection";
import ResumeSection from "./home/ResumeSection";
import PortFolioSection from "./PortFolioSection";
import SvgIcon from "../assets/img/svg/traingle-btn.svg";
import FormSection from "./home/FormSection";
import VideoModal from "./VideoModal";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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
      <section className="active_menus overflow-hidden" id="portfolio">
        <PortFolioSection />
      </section>
      <section className="active_menus overflow-hidden" id="resume">
        <ResumeSection />
      </section>
      <section id="contact">
        <div className="all-page-border2">
          <div className="row">
            <FormSection />
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
