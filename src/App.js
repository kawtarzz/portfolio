import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./components/Home";

import AnimCursor from "./components/AnimatedCursor.jsx";
import faArrowUp from "./assets/img/svg/arrow-up-line.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "./styles/colijala.css";
import "./styles/homeMedia.css";
import "./styles/news_single.css";
import "./styles/news.css";
import "./styles/style.css";
import CookiJar from "./components/CookiJar.jsx";
import ShopTheBlock from "./components/ShopTheBlock.jsx";
import NormalCoffee from "./components/NormalCoffee.jsx";


function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Animate on scroll
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      const body = document.body;
      if (body && window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const toggleDarkMode = () => {
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    localStorage.setItem("darkmode", newDarkModeState.toString());
  };

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

  return (
    <>
    <div className="App section" id="main-div">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/cookijar" element={<CookiJar />} />
        <Route path="/projects/shoptheblock" element={<ShopTheBlock />} />
        <Route path="/projects/normalcoffee" element={<NormalCoffee />} />


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
    </div>
        </>
  );
}

export default App;
