import "./portfolioItem.styles.scss";

import {FaLink,FaPlus} from 'react-icons/fa';
import { useState } from "react";
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai';

import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { productData } from "./portfolioItemList";
import ImageSwiper from "../portfolioDetails/imageSwiper/imageSwiper.component";

const PortfolioItem = ({data, index}) =>{

     
    const [zoomed, setZoomed] = useState(false);

    const toggleZoom = () => {
         setZoomed(!zoomed);
    }
    const {displayImage,groupTitle,group,id} = data;

    const [slide ,setSlide] = useState(id)
    
    const next = () =>{
        setSlide(id+1);
        console.log(slide)
    }
    

    
    return(
        // <div className="col-lg-4 col-md-6 portfolio-item filter-app">
        <div className=" portfolio-item filter-app ">    
            <div className="portfolio-img"><img src={displayImage} className="img-fluid" alt=""/></div>
            <div className="portfolio-info ">
                <h4>{groupTitle}</h4>
                <p>{group}</p>

                {/* <a href="assets/img/portfolio/{`${displayImage}`}.jpg" data-gallery="portfolioGallery"  */}

                <a onClick={toggleZoom} title="App 1"
                    className=" preview-link" >
                        <i><FaPlus className="image-zoom"/></i>

                {zoomed && (
                    <div className="zoomed-image" onClick={toggleZoom}>

                        <div><AiOutlineLeft  className="prev"/></div>
                  
                     <img src={data.displayImage} alt={data.groupTitle} key={data.id}
                            index={id}/>
                        
                        <div onClick={next}><AiOutlineRight className="next" /></div>

                    </div>
      )}
                </a>

                
                <a href="/product-details" className="details-link" title="More Details">
                    <i><FaLink className="detail-link"/></i>
                </a>
            </div>
        </div>
    )

}
export default PortfolioItem;