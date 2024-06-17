import React, { useState } from "react";
import WebDesign from "./WebDesign";
import GraphicMotionDesign from "./GraphicMotion";
import ArtDesign from "./ArtDesign";


const TabContent = ({ active, children }) => {
  return <div className={active ? "content active" : "content"}>{children}</div>;
};


const Tab = ({ active, onClick, children }) => {
  return (
    <button className={active ? "tab_btn active" : "tab_btn"} onClick={onClick}>
      {children}
    </button>
  );
};


const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="all-page-border2">
        <div className="portfolio-bg">
          <div className="spacer">
            <div className="yellow_circle"></div>
            <h2 className="about-text" data-aos="fade-up">
              Portfolio
            </h2>
            <h3 className="d-none">hidden</h3>
            <div className="tab_box" data-aos="fade-up">
              <Tab active={activeTab === 0} onClick={() => handleTabClick(0)}>
                All
              </Tab>
              <Tab active={activeTab === 1} onClick={() => handleTabClick(1)}>
                Illustration
              </Tab>
              <Tab active={activeTab === 2} onClick={() => handleTabClick(2)}>
                Graphic & Web Design
              </Tab>
             
            </div>
      </div>
          </div>
        </div>
      <div className="content_box">

        <TabContent active={activeTab === 0}>
          <ArtDesign />
          <GraphicMotionDesign />
          <WebDesign />
        </TabContent>

        <TabContent active={activeTab === 1}>
          <ArtDesign />
        </TabContent>

        <TabContent active={activeTab === 2}>
          <WebDesign />
          <GraphicMotionDesign />
        </TabContent>
      </div>

    </>
  );
};
export default PortfolioSection;

