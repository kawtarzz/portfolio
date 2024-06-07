import React, { useState, useEffect } from "react";
import headerLogo from "../assets/img/svg/logo.png"
import { Link } from "react-router-dom";

const MenuSection = () => {
  const [isWrapperClass, setIsWrapperClass] = useState(false);
  
    const handleScroll = () => {
      const menuButtons = document.querySelectorAll(".menu-btn");
      const sections = document.querySelectorAll(".active_menus");
    if (sections.length > 0) {
      let len = sections.length;
      while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
      menuButtons.forEach((button) => button.classList.remove("active"));
      menuButtons[len].classList.add("active");
    }
    };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const handleCheckboxChange = () => {
    setIsWrapperClass(!isWrapperClass);
  };

  const handleNavbarItemClick = () => {
    setIsWrapperClass(false);
  };

  
  return (
    <>
      <header className="menu">
        <div className="logo_main">
          <a href="/">
            <img className="logo" src={headerLogo} alt="Kawtar Header Logo" />
          </a>
        </div>
        <nav className="nav_item">
          <ul className="list">
            <li className="menu-btn">
              <a href="/">
                HOME
                <span className="yellow-line"></span>
              </a>
            </li>
            <li className="menu-btn">
              <a href="#about">
                ABOUT
                <span className="yellow-line"></span>
              </a>
            </li>
            <li className="menu-btn">
              <a href="#portfolio">
                PORTFOLIO
                <span className="yellow-line"></span>
              </a>
            </li>
            <li className="menu-btn">
              <a href="#resume">
                RESUME
                <span className="yellow-line"></span>
              </a>
            </li>
           
            <li className="menu-btn">
              <a href="#contact">
                CONTACT
                <span className="yellow-line"></span>
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div
        className={isWrapperClass ? "wrapper wrapper_Class" : "wrapper"}
        id="wrapper"
      >
        <nav className="mobile-nav">
          <input
            className="m-menu__checkbox"
            id="menu"
            type="checkbox"
            onChange={handleCheckboxChange}
          />
          <div className="mobile-hub">
            <label className="m-menu__toggle" for="menu">
              <svg
                className="hub"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="butt"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </label>
            <div className="">
              <a href="/">
                <img className="mobile-view-logo" src={headerLogo} alt="logo" />
              </a>
            </div>
          </div>
          <div className="open-mobile-menu">
            <label className="m-menu__overlay" for="menu"></label>
            <div className="m-menu" id="run">
              <div className="m-menu__header">
                <a href="/">
                  <img
                    className="mobile-view-logo"
                    src={headerLogo}
                    alt="logo"
                  />
                </a>
                <label className="m-menu__toggle close" for="menu">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke-width="2"
                    stroke-linecap="butt"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </label>
              </div>
              <ul className="navbar-collapse">
                <li className="icon-menu sub-icon-menu">
                  <label>
                    <a href="/">HOME</a>
                  </label>
                  <li className="icon-menu">
                    <label>
                      <a href="#about" onClick={handleNavbarItemClick}>
                        ABOUT
                      </a>
                    </label>
                  </li>
                  <li className="icon-menu">
                    <label>
                      <a href="#resume" onClick={handleNavbarItemClick}>
                        RESUME
                      </a>
                    </label>
                  </li>
                  <li className="icon-menu">
                    <label>
                      <a href="#portfolio" onClick={handleNavbarItemClick}>
                        PORTFOLIO
                      </a>
                    </label>
                  </li>
              
                  <li className="icon-menu">
                    <label>
                      <a href="#contact" onClick={handleNavbarItemClick}>
                        CONTACT
                      </a>
                    </label>
                  </li>
                  <li className="menu-contact">
                    <h1 className="share-text-m">SHARE</h1>
                    <p className="share-list-text-m">
                      <Link to="https://www.facebook.com/kawtar.paradise">Fb.</Link>
                    </p>
                    <p className="share-list-text-m">
                      <Link to="https://twitter.com/kawtarazzouzi">Tw.</Link>
                    </p>
                    <p className="share-list-text-m">
                      <Link to="https://www.instagram.com/river.in.paradise">Ins.</Link>
                    </p>
                    <p className="share-list-text-m">
                      <Link to="https://www.linkedin.com/in/kawtara">Li.</Link>
                    </p>
                  </li>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default MenuSection;
