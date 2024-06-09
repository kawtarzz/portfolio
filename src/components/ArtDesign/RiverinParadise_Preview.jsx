import React, { useState } from "react";
import MainPageSection from "./riverInParadise/MainPageSection"
import { Link } from "react-router-dom";
import Image from "../../assets/img/portfoliosection/rip/Asset 12-81.png"

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
        <div className="main-page-space overflow-hidden">
          <button className="close-button" onClick={handleClose}>X</button>
          <MainPageSection />
          <p>
      <Link to="/projects/riverinparadise">
        <button className="project-button">View Project Details</button>
      </Link>
     </p>
</div>
    ) : (
      <div className="box-content">
        
        <img className="box-content-img" src={Image} alt="riverinparadise" style={{ "width":"400px"}}
        onClick={handleOpen}
        />
        <Link onClick={handleOpen} className="project-title">
        River in Paradise
        </Link>
      </div>
    )}
    </>
  );
};
export default RiverinParadisePreview;
