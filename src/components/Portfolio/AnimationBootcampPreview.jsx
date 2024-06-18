import React, { useState } from "react";
import MainPageSection from "../WebDesign/cookijar/MainPageSection";
import { Link } from "react-router-dom";
import Image from "../../assets/img/mainpageimg/nairobi_img1.png"


const AnimBootcampPreview = () => {
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
      <Link to="/projects/animationbootcamp">
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
          Animation Bootcamp
        </Link>
      </div>
    )}
    </>
  );
}

export default AnimBootcampPreview;