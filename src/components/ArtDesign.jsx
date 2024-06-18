import React from 'react';
import CookiJarPreview from './Portfolio/CookiJar_Preview';
import PetalPushrPreview from './Portfolio/PetalPushr_Preview';
import RiverinParadisePreview from './Portfolio/RiverinParadise_Preview';
import ShopTheBlockPreview from './Portfolio/ShoptheBlock_Preview';
import CandyCartPreview from './Portfolio/CandyCart_Preview';
import WitchesWizardsPreview from './Portfolio/WitchesWizards_Preview';
import NormalCoffeePreview from './Portfolio/NormalCoffee_Preview';
import GrandmasKitchenPreview from './Portfolio/GrandmasKitchen_Preview';
import RocketMortgagePreview from './Portfolio/RocketMortgagePreview';
import SpiritualTeensPreview from './Portfolio/SpiritualTeens_Preview';

const ArtDesign = () => {
    return (
        <>
            <div className="portfolio-box">
                <CookiJarPreview />
                <PetalPushrPreview />
                <RiverinParadisePreview />
                <ShopTheBlockPreview />
                <CandyCartPreview />
                <WitchesWizardsPreview />
                <NormalCoffeePreview />
                <GrandmasKitchenPreview /> 
                <RocketMortgagePreview />
                <SpiritualTeensPreview /> 
            </div>

        </>
    )
}

export default ArtDesign;