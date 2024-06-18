import React, { useState } from "react";
import MainPageSection from "./candyCart/MainPageSection"
import { Link } from "react-router-dom";
import CandyCartImg from "../../assets/img/portfoliosection/candyCart/fr1_v2_dedliveryshere.jpg"

const CandyCartPreview = () => {
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
        <div className="main-page-space overflow-hidden project-img">
          <button className="close-button" onClick={handleClose}>X</button>
          <MainPageSection />
          <p>
      <Link to="/projects/candycart">
        <button className="project-button">View Project Details</button>
      </Link>
     </p>
</div>
    ) : (
      <div className="box-content">
        
        <img className="box-content-img" src={CandyCartImg} alt="candycart" style={{ "width":"400px"}}
        onClick={handleOpen}
        />
        <Link onClick={handleOpen} className="project-title">
          Candy Cart
        </Link>
      </div>
    )}
    </>
  );
};
export default CandyCartPreview;
