import React from "react";
import CookiJarPreview from "./WebDesign/CookiJar_Preview";
import ShopTheBlockPreview from "./WebDesign/ShoptheBlock_Preview";
import PetalPushrPreview from "./GraphicMotionDesign/petalPushrPreview";



const WebDesign = () => {
  return (
      <div className="portfolio-box">
          <CookiJarPreview />
          <ShopTheBlockPreview />
          <PetalPushrPreview />
        </div>
  );
}

export default WebDesign;