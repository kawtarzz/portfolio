import React from 'react';
import CookiJarPreview from './CookiJar_Preview';
import PetalPushrPreview from './PetalPushr_Preview';
import RiverinParadisePreview from './RiverinParadise_Preview';
import ShopTheBlockPreview from './ShoptheBlock_Preview';
import CandyCartPreview from './CandyCart_Preview';
import WitchesWizardsPreview from './WitchesWizards_Preview';
import RocketMortgagePreview from './RocketMortgagePreview';

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