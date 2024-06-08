import React from 'react';
import NewProject from './GraphicMotionDesign/RocketMortagePreview';
import RocketMortgagePreview from './GraphicMotionDesign/RocketMortagePreview';
import ChefAntoniosPreview from './GraphicMotionDesign/chefAntoniosPreview';
import PetalPushrPreview from './GraphicMotionDesign/petalPushrPreview';


const GraphicMotionDesign = () => {

    return (
        <>
        <div className="portfolio-box">
            <RocketMortgagePreview />
            <ChefAntoniosPreview />
            <PetalPushrPreview />

            </div></>
    )
   
}

export default GraphicMotionDesign;