import React, { useState } from "react";
import MainPageSection from "./petalPushr/MainPageSection.jsx";
import Image from "../../assets/img/portfoliosection/petalpushr/petalpushrhomepg.png";


const PetalPushrPreview = () => {
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
        <>
          <button className="close-button" onClick={handleClose}>X</button>
          <MainPageSection />
          <a href="/projects/petalPushr">
            <button className="project-button">View Project Details</button>
          </a>
        </>
      ) : (
        <img className="project-img border horizontal" src={Image} alt="petalpushr" style={{ "width": "300px" }}
          onClick={handleOpen}
        />
      )}
    </>
  );
}

export default PetalPushrPreview;