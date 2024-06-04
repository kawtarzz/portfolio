import React, { useState } from "react";
import { Link } from "react-router-dom";

const Tab = ({ active, onClick, children }) => {
  return (
    <button className={active ? "tab_btn active" : "tab_btn"} onClick={onClick}>
      {children}
    </button>
  );
};

const TabContent = ({ active, children }) => {
  return <div className={active ? "content active" : "content"}>{children}</div>;
};

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      {/* ... */}
      <div className="tab_box" data-aos="fade-up">
        <Tab active={activeTab === 0} onClick={() => handleTabClick(0)}>
          All
        </Tab>
        <Tab active={activeTab === 1} onClick={() => handleTabClick(1)}>
          App/Web Design
        </Tab>
        <Tab active={activeTab === 2} onClick={() => handleTabClick(2)}>
          Motion Graphics
        </Tab>
        <Tab active={activeTab === 3} onClick={() => handleTabClick(3)}>
          Illustration/Graphic Design
        </Tab>
      </div>
      {/* ... */}
      <div className="content_box overflow-hidden">
        <TabContent active={activeTab === 0}>
          {/* Tab content for All */}
          {/* ... */}
        </TabContent>
        <TabContent active={activeTab === 1}>
          {/* Tab content for App/Web Design */}
          {/* ... */}
        </TabContent>
        <TabContent active={activeTab === 2}>
          {/* Tab content for Motion Graphics */}
          {/* ... */}
        </TabContent>
        <TabContent active={activeTab === 3}>
          {/* Tab content for Illustration/Graphic Design */}
          {/* ... */}
        </TabContent>
      </div>
      {/* ... */}
    </>
  );
};

export default PortfolioSection;
