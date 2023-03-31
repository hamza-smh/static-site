import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { productData } from '../../portfolioItem/portfolioItemList';


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
    };
    return(
        <>
        <Slider {...settings}>
            {productData.map((image) => (
              <div key={image.id}>
                <img src={image.displayImage} alt={image.groupTitle} />
                <p>{image.group}</p>
              </div>
            ))}
      </Slider>

        </>
    );
}
export default ImageSwiper;