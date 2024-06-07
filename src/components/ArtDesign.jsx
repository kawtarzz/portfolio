import React from 'react';
import CandyCartPreview from './ArtDesign/CandyCart_Preview';
import NormalCoffeePreview from './ArtDesign/NormalCoffee_Preview';
import WitchesWizardsPreview from './ArtDesign/WitchesWizards_Preview';


const ArtDesign = () => {
    return (
        <>
            <div className="portfolio-box">
                <CandyCartPreview />
                <NormalCoffeePreview />
                <WitchesWizardsPreview />
            </div>

        </>
    )
}

export default ArtDesign;