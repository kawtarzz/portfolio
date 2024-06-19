import { Gallery } from "react-grid-gallery";
import ripImage2 from "../../../assets/img/portfoliosection/rip/IMG_00 (14).jpg";
import ripImage3 from "../../../assets/img/portfoliosection/rip/IMG_00 (2).jpg";
import ripImage4 from "../../../assets/img/portfoliosection/rip/IMG_00 (3).jpg";
import ripImage6 from "../../../assets/img/portfoliosection/rip/IMG_00 (5).jpg";
import ripImage7 from "../../../assets/img/portfoliosection/rip/IMG_00 (6).jpg";
import ripImage8 from "../../../assets/img/portfoliosection/rip/IMG_00 (7).jpg";
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
        
    },
    {
        src: ripImage6,
        thumbnail: ripImage6,
        thumbnailWidth: 800,
        thumbnailHeight: 530,
        isSelected: false,
        
    },
    {
        src: ripImage8,
        thumbnail: ripImage8,
        thumbnailWidth: 800,
        thumbnailHeight: 530,
        isSelected: false,
        
    },
    {
        src: ripImage4,
        thumbnail: ripImage4,
        thumbnailWidth: 800,
        thumbnailHeight: 530,
        isSelected: false,
        
    },
    {
        src: ripImage2,
        thumbnail: ripImage2,
        thumbnailWidth: 800,
        thumbnailHeight: 522,
        isSelected: false,
    },
    {
        src: ripImage11,
        thumbnail: ripImage11,
        thumbnailWidth: 800,
        thumbnailHeight: 530,
        isSelected: false,

    },
    {
        src: ripImage9,
        thumbnail: ripImage9,
        thumbnailWidth: 800,
        thumbnailHeight: 530,
        isSelected: false,

    },
    {
        src: ripImage14,
        thumbnail: ripImage14,
        thumbnailWidth: 800,
        thumbnailHeight: 530,
        isSelected: false,

    }
];

const GallerySection = ({ rowHeight }) => {
    return (
        <div className="gallery-container">

            <Gallery images={images}
                enableImageSelection={false}
                enableLightbox={true}
                margin={0}
                backdropClosesModal={true}
                rowHeight={rowHeight}
                currentImageWillChange={true}
            />
        </div>
    )
}

export default GallerySection;