import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { comments } from '../../TestimonialList.component';
import "./imageSwiper.styles.scss"
import TestimonialCard from '../testimonialCard.component';

const ImageSwiper = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        appendDots: dash => (
        <div
          style={{
            backgroundColor: "red",
            borderRadius: "0px",
            padding: "0px"
          }}
        >
          <ul style={{ margin: "0px" }}> {dash} </ul>
        </div>
      ),
    };
    return(
        <>
        <Slider {...settings}>
            {comments.map((item,index) => (
              <div key={index} className='imageslide-container'>
                <TestimonialCard 
                  data = {item}
                  index= {index}
                  key = {index}/>
              </div>
            ))}
      </Slider>

        </>
    );
}
export default ImageSwiper;