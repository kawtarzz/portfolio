import React, { useState } from "react";
import MainPageSection from "../GraphicMotionDesign/chefAntonios/MainPageSection";
import { Link } from "react-router-dom";
import Image from "../../assets/img/portfoliosection/chefAntonios/chefAnt_Logo.jpg";

const ChefAntoniosPreview = () => {
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
      <Link to="/projects/chefantonios">
        <button className="project-button">View Project Details</button>
      </Link>

     </p>
</div>
    ) : (
      <div className="box-content">
        
        <img className="box-content-img" src={Image} alt="cookijar" style={{ "width":"300px"}}
        onClick={handleOpen}
        />
        <Link onClick={handleOpen} className="project-title">
          Chef Antonio's
        </Link>
      </div>
    )}
    </>
  );
}

export default ChefAntoniosPreview;