import React, { useState } from "react";
import MainPageSection from "./cookijar/MainPageSection";
import CookiJarImg from "../../assets/img/portfoliosection/cookijar/cookijar_sq.jpg"


const CookiJarPreview = () => {
  const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
      console.log("cookijaropen")
    };

    const handleClose = () => {
      setOpen(false);
    };

  return (
    <>
    {open ? (
    <>
        <button className="close-button" onClick={handleClose}>X</button>
      <MainPageSection />
      <a href="/projects/cookijar" id="cookijar">
        <button className="project-button">View Project Details</button>
      </a>
      </>
    ) : (
        <img className="project-img border horizontal" src={CookiJarImg} alt="cookijar"
        onClick={handleOpen}
        />
    )}
    </>
  );
}

export default CookiJarPreview;