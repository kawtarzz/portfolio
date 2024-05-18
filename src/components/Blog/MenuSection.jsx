import React, { useEffect, useState } from "react";
import headerLogo from "../../assets/img/svg/logo.png"
import { Link } from "react-router-dom";

const MenuSection = () =>
{
useEffect(() => {
  const handleScroll = () => {
    const menuButtons = document.querySelectorAll(".menu-btn");
    const sections = document.querySelectorAll(".active_menus");
    let len = sections.length;
    while (len-- && window.scrollY + 97 < sections[len].offsetTop) {}
    menuButtons.forEach((button) => button.classList.remove("active"));
    if (menuButtons[len]) {
      menuButtons[len].classList.add("active");
    }
  };

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
      <header class="menu">
        <div class="logo_main">
          <Link to="/">
            <img class="logo" src={headerLogo} alt="logo" />
          </Link>
        </div>
        <nav class="nav_item">
          <ul class="list">
            <li class="menu-btn">
              <Link to="/">
                HOME
                <span class="yellow-line"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div
        className={isWrapperClass ? "wrapper wrapper_Class" : "wrapper"}
        id="wrapper"
      >
        <nav class="mobile-nav">
          <input
            className="m-menu__checkbox"
            id="menu"
            type="checkbox"
            onChange={handleCheckboxChange}
          />
          <div class="mobile-hub">
            <label class="m-menu__toggle" for="menu">
              <svg
                class="hub"
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
            <div class="">
              <Link to="/">
                <img class="mobile-view-logo" src={headerLogo} alt="logo" />
              </Link>
            </div>
          </div>
          <label class="m-menu__overlay" for="menu"></label>
          <div class="m-menu">
            <div class="m-menu__header">
              <Link to="/">
                <img class="mobile-view-logo" src={headerLogo} alt="logo" />
              </Link>
              <label class="m-menu__toggle" for="menu">
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
            <ul>
              <li class="icon-menu sub-icon-menu">
                <label>
                  <Link to="/" onClick={handleNavbarItemClick}>
                    HOME
                  </Link>
                </label>
              </li>
              <li class="menu-contact">
                <h1 class="share-text-m">SHARE</h1>
                <p class="share-list-text-m">
                  <Link to="https://www.facebook.com/kawtar.paradise">Fb.</Link>
                </p>
                <p class="share-list-text-m">
                  <Link to="https://twitter.com/kawtarazzouzi">Tw.</Link>
                </p>
                <p class="share-list-text-m">
                  <Link to="https://www.instagram.com/river.in.paradise">Ins.</Link>
                </p>
                <p class="share-list-text-m">
                  <Link to="https://www.linkedin.com/in/kawtara">Li.</Link>
                </p>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
export default MenuSection;