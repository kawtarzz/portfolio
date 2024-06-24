import React, { useState } from "react";
import MainPageSection from "./shoptheblock/MainPageSection"
import ShoptheBlockImg from "../../assets/img/portfoliosection/shoptheblock/shoptheblock_sq.jpg"

const ShopTheBlockPreview = () => {
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
        <>
          <button className="close-button" onClick={handleClose}>X</button>
          <MainPageSection />
            <a href="/projects/shoptheblock">
              <button className="project-button">View Project Details</button>
            </a>
        </>
      ) : (
          <img className="project-img border horizontal" src={ShoptheBlockImg} alt="shoptheblock"
            onClick={handleOpen} />
      )}
    </>
  );
};

export default ShopTheBlockPreview;
