import React, { useState, useEffect } from "react";
import MenuSection from "../components/projects/witchesWizards/MenuSection";
import MainPageSection from "../components/projects/witchesWizards/MainPageSection";
import headerLogo from "../assets/img/svg/logo.png";
import Marque from "../components/projects/witchesWizards/MarqueSection";
import ChallengeSection from "../components/projects/witchesWizards/ChallengeSection";
import SolutionSection from "../components/projects/witchesWizards/SolutionSection";
import FooterSection from "../components/FooterSection";
import Loader from "../components/home/Loader";
import { Link } from "react-router-dom";

const WitchesWizards = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <header className="menu">
        <div className="logo_main">
          <Link to="/">
            <img className="logo" src={headerLogo} alt="logo" />
          </Link>
        </div>
        <nav className="nav_item">
          <ul className="list">
            <li className="menu-btn">
              <Link to="/">
                HOME
                <span className="yellow-line"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="wrapper" id="wrapper">
        <MenuSection />
      </div>
      <div className="main-page-space overflow-hidden">
        <MainPageSection />
      </div>
      <section>
        <Marque />
      </section>
      <section className="overflow-hidden">
        <ChallengeSection />
      </section>
      <section className="overflow-hidden">
        <div className="all-page-border2">
          <SolutionSection />
        </div>
      </section>
    
      <FooterSection />
    </>
  );
};
export default WitchesWizards;
