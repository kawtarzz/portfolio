import React, { useState } from "react";
import MainPageSection from "./normalcoffee/MainPageSection";
import { Link } from "react-router-dom";
import NormalCoffeeImg from "../../assets/img/portfoliosection/normalCoffee/diversity.f03.jpg"

const NormalCoffeePreview = () => {
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
      <Link to="/projects/normalcoffee">
        <button className="project-button">View Project Details</button>
      </Link>

     </p>
</div>
    ) : (
      <div className="box-content">
        
        <img className="box-content-img" src={NormalCoffeeImg} alt="NormalCoffee" style={{ "width":"400px"}}
        onClick={handleOpen}
        />
        <Link onClick={handleOpen} className="project-title">
          Normal Coffee
        </Link>
      </div>
    )}
    </>
  );
};
export default NormalCoffeePreview;
