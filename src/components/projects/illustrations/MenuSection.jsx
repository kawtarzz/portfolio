import React, { useEffect, useState } from "react";
import headerLogo from "../../../assets/img/svg/logo.png";
import { Link } from "react-router-dom";

const MenuSection = () => {
 

  const handleScroll = () => {
    const menuButtons = document.querySelectorAll(".menu-btn");
    const sections = document.querySelectorAll(".active_menus");
    let len = sections.length;
    if (len > 0) {
    while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
    menuButtons.forEach((button) => button.classList.remove("active"));
    menuButtons[len].classList.add("active");
   } };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isWrapperClass, setIsWrapperClass] = useState(false);

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
          <Link to="/">
            <img className="logo" src={headerLogo} alt="logo" />
          </Link>
        </div>
        <nav className="nav_item">
          <ul className="list">
            <li className="menu-btn">
              <Link to="#home">
                HOME
                <span className="yellow-line"></span>
              </Link>
            </li>
            <li className="menu-contact">
              <h1 className="share-text-m">SHARE</h1>
              <p className="share-list-text-m">
                <Link to="https://www.facebook.com/">Fb.</Link>
              </p>
              <p className="share-list-text-m">
                <Link to="https://twitter.com/">Tw.</Link>
              </p>
              <p className="share-list-text-m">
                <Link to="https://www.instagram.com/">Ins.</Link>
              </p>
              <p className="share-list-text-m">
                <Link to="https://www.linkedin.com">Li.</Link>
              </p>
            </li>
            <li className="menu-btn">
              <Link to="#contact">
                CONTACT
                <span className="yellow-line"></span>
              </Link>
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
              <Link to="/">
                <img className="mobile-view-logo" src={headerLogo} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="open-mobile-menu">
            <label className="m-menu__overlay" for="menu"></label>
            <div className="m-menu" id="run">
              <div className="m-menu__header">
                <Link to="/">
                  <img
                    className="mobile-view-logo"
                    src={headerLogo}
                    alt="logo"
                  />
                </Link>
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
                    <Link to="/" onClick={handleNavbarItemClick}>
                      HOME
                    </Link>
                  </label>
                </li>
                <li className="menu-contact">
                  <h1 className="share-text-m">SHARE</h1>
                  <p className="share-list-text-m">
                    <Link to="https://www.facebook.com/">Fb.</Link>
                  </p>
                  <p className="share-list-text-m">
                    <Link to="https://twitter.com/">Tw.</Link>
                  </p>
                  <p className="share-list-text-m">
                    <Link to="https://www.instagram.com/">Ins.</Link>
                  </p>
                  <p className="share-list-text-m">
                    <Link to="https://www.linkedin.com">Li.</Link>
                  </p>
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
