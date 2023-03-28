import "./portfolioItem.styles.scss";
import {AiOutlinePlus} from 'react-icons/ai';
import {FaLink,FaPlus} from 'react-icons/fa';
import { useState } from "react";
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai';



const PortfolioItem = ({data, index}) =>{

    const [zoomed, setZoomed] = useState(false);

    const toggleZoom = () => {
         setZoomed(!zoomed);
    }
    const Next =() =>{
        const val = index+1;

    }

    const {displayImage,groupTitle,group} = data;
    return(
        // <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className=" portfolio-item filter-app ">    
            <div className="portfolio-img"><img src={displayImage} className="img-fluid" alt=""/></div>
            <div className="portfolio-info ">
                <h4>{groupTitle}</h4>
                <p>{group}</p>

                {/* <a href="assets/img/portfolio/{`${displayImage}`}.jpg" data-gallery="portfolioGallery"  */}

                <a onClick={toggleZoom} title="App 1"
                    className="portfolio-lightbox preview-link" >
                        <i><FaPlus className="image-zoom"/></i>

                {zoomed && (
                    <div className="zoomed-image" onClick={toggleZoom}>
                        <a ><AiOutlineLeft  className="prev"/></a>
                            <img src={data.displayImage} alt={groupTitle} />
                        <a ><AiOutlineRight className="next" /></a>

                    </div>
      )}
                </a>
                    
                <a href="portfolio-details.html" className="details-link" title="More Details">
                    <i><FaLink /></i></a>
            </div>
        </div>
    )

}
export default PortfolioItem;