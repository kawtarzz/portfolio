import { Gallery } from "react-grid-gallery";
import ripImage2 from "../../../assets/img/portfoliosection/rip/IMG_00 (14).jpg";
import ripImage3 from "../../../assets/img/portfoliosection/rip/IMG_00 (2).jpg";
import ripImage4 from "../../../assets/img/portfoliosection/rip/IMG_00 (3).jpg";
import ripImage6 from "../../../assets/img/portfoliosection/rip/IMG_00 (5).jpg";
import ripImage9 from "../../../assets/img/portfoliosection/rip/IMG_00 (8).jpg";
import ripImage11 from "../../../assets/img/portfoliosection/rip/IMG_00 (10).jpg";
import ripImage14 from "../../../assets/img/portfoliosection/rip/IMG_00 (13).jpg";



const images = [
    {
        src: ripImage3,
        thumbnail: ripImage3,
        thumbnailWidth: 800,
        thumbnailHeight: 530,
        isSelected: false,
        className:"gallery-image"
        
    },
    {
        src: ripImage6,
        thumbnail: ripImage6,
        thumbnailWidth: 800,
        thumbnailHeight: 530,
        isSelected: false,
        className:"gallery-image"
        
    },
    {
        src: ripImage4,
        thumbnail: ripImage4,
        thumbnailWidth: 800,
        thumbnailHeight: 530,
        isSelected: false,
        className:"gallery-image"
        
    },
    {
        src: ripImage2,
        thumbnail: ripImage2,
        thumbnailWidth: 800,
        thumbnailHeight: 530,
        isSelected: false,
        className:"gallery-image"

    },
    {
        src: ripImage11,
        thumbnail: ripImage11,
        thumbnailWidth: 800,
        thumbnailHeight: 530,
        isSelected: false,
        className:"gallery-image"
        
    },
    {
        src: ripImage9,
        thumbnail: ripImage9,
        thumbnailWidth: 800,
        thumbnailHeight: 530,
        isSelected: false,
        className:"gallery-image"

    },
    {
        src: ripImage14,
        thumbnail: ripImage14,
        thumbnailWidth: 800,
        thumbnailHeight: 530,
        isSelected: false,
        className:"gallery-image"

    }
];

const GallerySection = ({ rowHeight }) => {
    return (

            <Gallery images={images}
                enableImageSelection={false}
                enableLightbox={true}
                backdropClosesModal={true}
                rowHeight={rowHeight}
                currentImageWillChange={true}
            />

    )
}

export default GallerySection;