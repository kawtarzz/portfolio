import React, { useState } from "react";
import MainPageSection from "./cookijar/MainPageSection";
import { Link } from "react-router-dom";
import CookiJarImg from "../../assets/img/portfoliosection/cookijar/cookijar_sq.jpg"


const CookiJarPreview = () => {
  const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

  return (
    <>
    {open ? (
    
    <div className="main-page-space overflow-hidden">
        <button className="close-button" onClick={handleClose}>X</button>
      <MainPageSection />
     <p> 
      <Link to="/projects/cookijar">
        <button className="project-button">View Project Details</button>
      </Link>

     </p>
</div>
    ) : (
      <div className="box-content">
        
        <img className="box-content-img" src={CookiJarImg} alt="cookijar" style={{ "width":"300px"}}
        onClick={handleOpen}
        />
        <Link onClick={handleOpen} className="project-title">
          CookiJar
        </Link>
      </div>
    )}
    </>
  );
}

export default CookiJarPreview;