import React from 'react';
import CookiJarPreview from './Portfolio/CookiJar_Preview';
import PetalPushrPreview from './Portfolio/PetalPushr_Preview';
import RiverinParadisePreview from './Portfolio/RiverinParadise_Preview';
import ShopTheBlockPreview from './Portfolio/ShoptheBlock_Preview';
import CandyCartPreview from './Portfolio/CandyCart_Preview';
import WitchesWizardsPreview from './Portfolio/WitchesWizards_Preview';
import RocketMortgagePreview from './Portfolio/RocketMortgagePreview';

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
                <RocketMortgagePreview />
            </div>

        </>
    )
}

export default ArtDesign;