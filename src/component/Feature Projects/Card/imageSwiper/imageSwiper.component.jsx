
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { feature } from '../../featureList.component';
import "./imageSwiper.styles.scss"
import FeatureCard from '../featureCard.component';

const ImageSwiper = () => {
  const [slidesToShow, setSlidesToShow] = useState(1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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

  const handleResize = () => {
    if (window.innerWidth > 1200) {
      setSlidesToShow(3);
    } else if (window.innerWidth > 991) {
      setSlidesToShow(2);
    } else if (window.innerWidth > 768) {
      setSlidesToShow(1);
    } else {
      setSlidesToShow(1);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Slider {...settings}>
      {feature.map((item, index) => (
        <div key={index} className='imageslide-container'>
          <FeatureCard 
            data={item}
            index={index}
            key={index}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSwiper;
