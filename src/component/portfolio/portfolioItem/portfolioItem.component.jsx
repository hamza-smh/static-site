import "./portfolioItem.styles.scss";

import {FaLink,FaPlus} from 'react-icons/fa';
import { useState } from "react";
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai';

import { Route,Routes } from "react-router-dom";
import PortfolioDetails from "../portfolioDetails/portfolioDetails.components";


const PortfolioItem = ({data, index}) =>{

    const [zoomed, setZoomed] = useState(false);

    const toggleZoom = () => {
         setZoomed(!zoomed);
    }
    
    const[slide,setSlide]=useState(index);
    
    const next = () => {
        setSlide((slide + 1) % data.length);
        console.log(slide);
    }

    const prev = () => {
        setSlide((slide - 1 + data.length) % data.length);
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

                        <div onClick={prev} ><AiOutlineLeft  className="prev"/></div>
                        
                            <img src={data.displayImage} alt={groupTitle} />
                        
                        < div onClick = {
                                () => {
                                    setSlide(index + 1);
                            }} ><AiOutlineRight className="next" /></div>

                    </div>
      )}
                </a>
        { <Routes>
            <Route index element={<PortfolioDetails />} />
            {/* <Route path = ":category" element={<Category />} /> */}
        </Routes>}



                <a href="/`${groupTitle}`" className="details-link" title="More Details">
                    <i><FaLink /></i>
                </a>
            </div>
        </div>
    )

}
export default PortfolioItem;