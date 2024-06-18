import React, { useState } from "react";
import MainPageSection from "./shoptheblock/MainPageSection";
import { Link } from "react-router-dom";
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
        <div className="main-page-space overflow-hidden">
          <button className="close-button" onClick={handleClose}>X</button>
          <MainPageSection />
          <p>
            <Link to="/projects/shoptheblock">
              <button className="project-button">View Project Details</button>
            </Link>
          </p>
        </div>
      ) : (
        <div className="box-content">

          <img className="box-content-img" src={ShoptheBlockImg} alt="shoptheblock" style={{ "width": "300px" }}
            onClick={handleOpen} />
          <Link onClick={handleOpen} className="project-title">
            Shop the Block
          </Link>
        </div>
      )}
    </>
  );
};

export default ShopTheBlockPreview;
