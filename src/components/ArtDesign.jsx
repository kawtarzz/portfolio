import React from 'react';
import CandyCartPreview from './ArtDesign/CandyCart_Preview';
import NormalCoffeePreview from './ArtDesign/NormalCoffee_Preview';
import WitchesWizardsPreview from './ArtDesign/WitchesWizards_Preview';
import GrandmasKitchenPreview from './ArtDesign/GrandmasKitchen_Preview';
import SpiritualTeensPreview from './ArtDesign/SpiritualTeens_Preview';
import RiverinParadisePreview from './ArtDesign/RiverinParadise_Preview';


const ArtDesign = () => {
    return (
        <>
            <div className="portfolio-box">
                <CandyCartPreview />
                <NormalCoffeePreview />
                <WitchesWizardsPreview />
                <GrandmasKitchenPreview />
                <SpiritualTeensPreview />
                <RiverinParadisePreview />
            </div>

        </>
    )
}

export default ArtDesign;