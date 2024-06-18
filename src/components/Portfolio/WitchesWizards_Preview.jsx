import React, { useState } from "react";
import MainPageSection from "./witchesWizards/MainPageSection";
import {Link} from "react-router-dom";
import WitchesWizardsImg from "../../assets/img/portfoliosection/witchesWizards/frame03.jpg"

const WitchesWizardsPreview = () => {
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
      <a href="/projects/witcheswizards" id="witcheswizards">
        <button className="project-button">View Project Details</button>
      </a>
     </p>
</div>
    ) : (
      <div className="box-content">
        
        <img className="box-content-img" src={WitchesWizardsImg} alt="witcheswizards" style={{ "width":"400px"}}
        onClick={handleOpen}
        />
        <Link onClick={handleOpen} className="project-title">
          Witches & Wizards
        </Link>
      </div>
    )}
    </>
  );
};
export default WitchesWizardsPreview;
