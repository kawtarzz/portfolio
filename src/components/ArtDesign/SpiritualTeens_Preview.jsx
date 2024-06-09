import React, { useState } from "react";
import MainPageSection from "./spiritualTeens/MainPageSection.jsx"
import { Link } from "react-router-dom";
import SpiritualTeensImg from "../../assets/img/portfoliosection/spiritualTeens/Maamoul-covers-2_0000_Layer-13.png";

const SpiritualTeensPreview = () => {
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
      <Link to="/projects/spiritualteens">
        <button className="project-button">View Project Details</button>
      </Link>
     </p>
</div>
    ) : (
      <div className="box-content">
        
        <img className="box-content-img" src={SpiritualTeensImg} alt="candycart" style={{ "width":"400px"}}
        onClick={handleOpen}
        />
        <Link onClick={handleOpen} className="project-title">
          Spiritual Teens
        </Link>
      </div>
    )}
    </>
  );
};
export default SpiritualTeensPreview;
