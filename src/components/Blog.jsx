import React, { useState, useEffect } from "react";
import NewsSection from "./Blog/NewSection";
import HalfCircleSvg1 from "../assets/img/svg/half-circle-yellow.svg";
import HalfCircleSvg2 from "../assets/img/svg/half-circle-black.svg";
import FormSection from "./home/FormSection";
import FooterSection from "./FooterSection";
import Loader from "./home/Loader";
import MenuSection from "./Blog/MenuSection";

const Blog = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const parallax = (e) => {
      document.querySelectorAll(".object").forEach((move) => {
        const movingValue = move.getAttribute("data-value");
        const x = (e.clientX * movingValue) / 250;
        const y = (e.clientY * movingValue) / 250;
        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener("mousemove", parallax);

    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);

  // Loader functionality
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <MenuSection />
      <section className="active_menus overflow-hidden" id="blog">
        <div className="all-page-border2">
          <div className="news-spacer">
            <div className="position-relative">
              <div className="yellow_circle"></div>
              <h2
                className="about-text"
                data-aos="fade-up"
                data-aos-container=".scroll-container"
              >
                Blog
              </h2>
              <p className="design_text creative_text" data-aos="fade-up">
                Art, Design, Fashion, Tech, Dogs, what I'm watching lately...
              </p>
              <div class="half-circle-frame half-circle-frame2">
                <img
                  class="half-circle-yellow object"
                  data-value="-1"
                  src={HalfCircleSvg1}
                  alt="half-circle-yellow"
                />
                <img
                  class="half-circle-black object"
                  data-value="2"
                  src={HalfCircleSvg2}
                  alt="half-circle-black"
                />
              </div>
            </div>
            <NewsSection />
          </div>
        </div>
      </section>
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
export default Blog;
