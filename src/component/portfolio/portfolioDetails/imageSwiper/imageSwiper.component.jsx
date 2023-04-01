import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { productData } from '../../portfolioItem/portfolioItemList';
import "./imageSwiper.styles.scss"

const ImageSwiper = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        appendDots: dots => (
        <div
          style={{
            backgroundColor: "#ddd",
            borderRadius: "10px",
            padding: "10px"
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
    };
    return(
        <>
        <Slider {...settings}>
            {productData.map((image) => (
              <div key={image.id} className='imageslide-container'>
                <img src={image.displayImage} alt={image.groupTitle}
                  className='imageslide' />
                {/* <p>{image.group}</p> */}
                
              </div>
            ))}
      </Slider>

        </>
    );
}
export default ImageSwiper;