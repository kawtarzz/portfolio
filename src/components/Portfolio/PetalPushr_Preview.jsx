import React, { useState } from "react";
import MainPageSection from "./petalPushr/MainPageSection.jsx";
import { Link } from "react-router-dom";
import Image from "../../assets/img/portfoliosection/petalpushr/Logo_largesun_icon001.png"


const PetalPushrPreview = () => {
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
      <Link to="/projects/petalPushr">
        <button className="project-button">View Project Details</button>
      </Link>

</div>
    ) : (
      <div className="box-content">
        
        <img className="box-content-img" src={Image} alt="petalpushr" style={{ "width":"300px"}}
        onClick={handleOpen}
        />
        <Link onClick={handleOpen} className="project-title">
        PetalPushr
        </Link>
      </div>
    )}
    </>
  );
}

export default PetalPushrPreview;