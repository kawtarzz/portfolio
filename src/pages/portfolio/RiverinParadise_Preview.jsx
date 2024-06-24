import React, { useState } from "react";
import MainPageSection from "./riverInParadise/MainPageSection"
import Image from "../../assets/img/portfoliosection/rip/IMG_00 (3).jpg"


const RiverinParadisePreview = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }
  return (
    <>
    {open ? (
      <>
          <button className="close-button" onClick={handleClose}>X</button>
          <MainPageSection />
      <a href="/projects/riverinparadise" id="riverinparadise">
        <button className="project-button">View Project Details</button>
      </a>
      </>
    ) : (
        <img className="project-img verticle border" src={Image} alt="riverinparadise"
        onClick={handleOpen}
        />
    )}
    </>
  );
};
export default RiverinParadisePreview;
