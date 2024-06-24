import React, { useState } from "react";
import MainPageSection from "./witchesWizards/MainPageSection";
import WitchesWizardsImg from "../../../assets/img/portfoliosection/witchesWizards/frame03.jpg"

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
      <>
        <button className="close-button" onClick={handleClose}>X</button>
      <MainPageSection />
      <a href="/projects/witcheswizards">
        <button className="project-button">View Project Details</button>
      </a>
      </>
    ) : (
        <img className="project-img horizontal border" src={WitchesWizardsImg} alt="witcheswizards" 
        onClick={handleOpen}
        />
    )}
    </>
  );
};
export default WitchesWizardsPreview;
