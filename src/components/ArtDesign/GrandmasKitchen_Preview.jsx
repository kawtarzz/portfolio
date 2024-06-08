import React, { useState } from "react";
import { Link } from "react-router-dom";
import GrandmasKitchenImg from "../../assets/img/portfoliosection/grandmasKitchen/fr01_gmaskitchenv2.jpg";
import MainPageSection from "./grandmasKitchen/MainPageSection";

const GrandmasKitchenPreview = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

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
      <Link to="/projects/grandmasKitchen">
        <button className="project-button">View Project Details</button>
      </Link>
     </p>
</div>
    ) : (
      <div className="box-content">
        
        <img className="box-content-img" src={GrandmasKitchenImg} alt="grandmasKitchen" style={{ "width":"400px"}}
        onClick={handleOpen}
        />
        <Link onClick={handleOpen} className="project-title">
          Grandma's Kitchen
        </Link>
      </div>
    )}
    </>
  );
};
export default GrandmasKitchenPreview;
