import React, { useState } from "react";
import AboutSection from "./home/AboutSection";
import MainPageSection from "./home/MainPageSection";
import ResumeSection from "./home/ResumeSection";
import PortFolioSection from "./PortFolioSection";
import SvgIcon from "../assets/img/svg/traingle-btn.svg";
import FormSection from "./home/FormSection";
import VideoModal from "./VideoModal";
import GallerySection from "./Portfolio/riverInParadise/Gallery";

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

      <section className="gallery-section">
        <div className="spacer all-page-border2">
          <div className="yellow_circle"></div>
        <GallerySection rowHeight={350}/>
        </div>

      </section>
      <section className="active_menus overflow-hidden" id="portfolio">
        <PortFolioSection />
      </section>
      <div className="all-page-border2 overflow-hidden">
        <div className="video-section-text-main container">
              <div className="video-rectangle">
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
                <img className="triangle-img" src={SvgIcon} alt="triangle" />
              </button>
              <VideoModal isOpen={isModalOpen} onClose={closeModal} />
                </div>
            </div>
          </div>
        </div>
      </div>
      <section className="active_menus overflow-hidden" id="about">
        <AboutSection />
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
      </div>
    </>
  );
};
export default Home;
