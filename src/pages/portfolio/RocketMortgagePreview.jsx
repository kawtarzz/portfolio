import React, { useState } from "react";
import MainPageSection from "./rocketMortgage/MainPageSection";
import Image from "../../assets/img/portfoliosection/rocketMortgage/EZ+01.gif"

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
        <>
          <button className="close-button" onClick={handleClose}>X</button>
          <MainPageSection />
          <a href="/projects/rocketmortgage">
            <button className="project-button">View Project Details</button>
          </a>
        </>
      ) : (
        <img className="project-img border verticle" src={Image} alt="rocketmortgage"
          onClick={handleOpen}
        />
      )}
    </>
  );
};
export default RocketMortgagePreview;
