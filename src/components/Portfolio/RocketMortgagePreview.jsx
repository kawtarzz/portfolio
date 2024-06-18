import React, { useState } from "react";
import MainPageSection from "./rocketMortgage/MainPageSection";
import { Link } from "react-router-dom";
import Image from "../../assets/img/portfoliosection/rocketMortgage/rocketm_bannerportfolio.png"

const RocketMortgagePreview = () => {
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
      <a href="/projects/rocketmortgage" id="rocketmortgage">
        <button className="project-button">View Project Details</button>
      </a>
     </p>
</div>
    ) : (
      <div className="box-content">
        
        <img className="box-content-img" src={Image} alt="rocketmortgage" style={{ "width":"400px"}}
        onClick={handleOpen}
        />
        <Link onClick={handleOpen} className="project-title">
          Rocket Mortgage
        </Link>
      </div>
    )}
    </>
  );
};
export default RocketMortgagePreview;
