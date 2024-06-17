import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./components/Home";

import AnimCursor from "./components/AnimatedCursor.jsx";
import faArrowUp from "./assets/img/svg/arrow-up-line.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/projects.css";
import "./styles/homeMedia.css";
import "./styles/news_single.css";
import "./styles/news.css";
import "./styles/style.css";
import CookiJar from "./components/CookiJar.jsx";
import ShopTheBlock from "./components/ShopTheBlock.jsx";
import NormalCoffee from "./components/NormalCoffee.jsx";
import CandyCart from "./components/CandyCart.jsx";
import WitchesWizards from "./components/WitchesWizards.jsx"
import MenuSection from "./components/MenuSection.jsx";
import FooterSection from "./components/FooterSection.jsx";
import MinMenuSection from "./components/MinMenuSection.jsx";
import Loader from "./components/home/Loader";
import GrandmasKitchen from "./components/GrandmasKitchen.jsx";
import PortfolioSection from "./components/PortFolioSection.jsx";
import RiverinParadise from "./components/RiverinParadise.jsx";
import PetalPushr from "./components/PetalPushr.jsx";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [loading, setLoading] = useState(true);
  const path = window.location.pathname;

  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    localStorage.setItem("darkmode", newDarkModeState.toString());
  };

  const handleScroll = () => {
    const body = document.body;
    if (body && window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };


  useEffect(() => {
    if (path === "/" || path === "/home") {
      setIsHome(true);
      console.log("home")
    } else {
      setIsHome(false);
      console.log("not home")
    }
  }, [path]);


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    if (typeof document !== "undefined" && document.body) {
      const storedDarkMode = localStorage.getItem("darkmode") === "true";
      setIsDarkMode(storedDarkMode);
      document.body.classList.toggle("dark-mode", storedDarkMode);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined" && document.body) {
      document.body.classList.toggle("dark-mode", isDarkMode);
    }
  }, [isDarkMode]);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  if (loading) {
    return <Loader />;
  }

  return (
    <>

      <div className="App section" id="main-div">
        {
          isHome ? (
            <MenuSection />
          ) : (<MinMenuSection />
          )
        }

        <div className="container">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/cookijar" element={<CookiJar />} />
            <Route path="/projects/shoptheblock" element={<ShopTheBlock />} />
            <Route path="/projects/normalcoffee" element={<NormalCoffee />} />
            <Route path="/projects/candycart" element={<CandyCart />} />
            <Route path="/projects/witcheswizards" element={<WitchesWizards />} />
            <Route path="/projects/grandmasKitchen" element={<GrandmasKitchen />} />
            <Route path="/projects" element={
              <PortfolioSection />} />
            <Route path="/projects/riverinparadise" element={<RiverinParadise />} />
            <Route path="/projects/petalpushr" element={<PetalPushr />} />
          </Routes>
          <AnimCursor />
          <div className="dark-light-main">
            <input
              id="toggle"
              className="toggle"
              type="checkbox"
              aria-checked={isDarkMode}
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
          </div>
          <button
            className="bottom-top-button"
            style={{ display: isVisible ? "block" : "none" }}
            onClick={scrollToTop}
          >
            <img src={faArrowUp} alt="" style={{ fontSize: "22px" }} />
          </button>
          <FooterSection />
        </div>

      </div>
    </>
  );
}

export default App;
