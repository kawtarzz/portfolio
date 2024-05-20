import React, { useState, useEffect } from "react";
import MenuSection from "./projects/normalcoffee/MenuSection";
import MainPageSection from "./projects/normalcoffee/MainPageSection";
import headerLogo from "../assets/img/svg/logo.png";
import Marque from "./projects/normalcoffee/MarqueSection";
import ChallengeSection from "./projects/normalcoffee/ChallengeSection";
import SolutionSection from "./projects/normalcoffee/SolutionSection";
import ServicesSection from "./home/ServicesSection";
import FormSection from "./home/FormSection";
import FooterSection from "./FooterSection";
import Loader from "./home/Loader";
import { Link } from "react-router-dom";

const NormalCoffee = () => {
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
      <ServicesSection />
     
      <section id="contact">
        <div className="all-page-border2">
          <div className="row">
            <FormSection />
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
};
export default NormalCoffee;
