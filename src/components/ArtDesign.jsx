import React from 'react';
import CandyCartPreview from './ArtDesign/CandyCart_Preview';
import NormalCoffeePreview from './ArtDesign/NormalCoffee_Preview';
import WitchesWizardsPreview from './ArtDesign/WitchesWizards_Preview';
import GrandmasKitchenPreview from './ArtDesign/GrandmasKitchen_Preview';
import RiverinParadisePreview from './ArtDesign/RiverinParadise_Preview';
import CookiJarPreview from "./WebDesign/CookiJar_Preview";
import ShopTheBlockPreview from "./WebDesign/ShoptheBlock_Preview";
import PetalPushrPreview from "./GraphicMotionDesign/petalPushrPreview";
import RocketMortgagePreview from "./GraphicMotionDesign/RocketMortagePreview";



const ArtDesign = () => {
    return (
        <>
                <div className="portfolio-box">
            <CookiJarPreview />
          <ShopTheBlockPreview />
          <PetalPushrPreview />
            <RocketMortgagePreview />
                <CandyCartPreview />
                <NormalCoffeePreview />
                <WitchesWizardsPreview />
                <RiverinParadisePreview />
                <GrandmasKitchenPreview />
            </div>

        </>
    )
}

export default ArtDesign;