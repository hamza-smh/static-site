import React, { Component ,useState,useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { comments } from '../../TestimonialList.component';
import "./imageSwiper.styles.scss"
import TestimonialCard from '../testimonialCard.component';

const ImageSwiper = () => {

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 1000,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    //     pauseOnHover: true,
    //     appendDots: dash => (
    //     <div
    //       style={{
    //         backgroundColor: "red",
    //         borderRadius: "0px",
    //         padding: "0px"
    //       }}
    //     >
    //       <ul style={{ margin: "0px" }}> {dash} </ul>
    //     </div>
    //   ),
    // };



//appendDots: (dots) => (
    //   <div
    //     style={{
    //       backgroundColor: "#ddd",
    //       borderRadius: "10px",
    //       padding: "1px",
    //     }}>
    //     <ul style={{ margin: "0px" }}> {dots} </ul>
    //   </div>
    // ),
    // customPaging: (i) => (
    //   <div
    //     style={{
    //       width: "30px",
    //       color: "blue",
    //       border: "5px blue solid",
    //       height: "1px",
    //     }}>
    //     {i + 1}
    //   </div>
    // ),




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
    // appendDots: dash => (
    //   <div
    //     style={{
    //       backgroundColor: "red",
    //       borderRadius: "0px",
    //       padding: "0px"
    //     }}
    //   >
    //     <ul style={{ margin: "0px" }}> {dash} </ul>
    //   </div>
    // ),
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "0px",
          padding: "0px",
        }}>
        <ul style={{ margin: "10px" }}> 
        {/* {dots} */}
         </ul>
      </div>
    ),

    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "transparent",
          border: "2px #ffffff7a solid",
          height: "1px",
        }}>
        {i + 1}
      </div>
    ),
  };

  const handleResize = () => {
 if (window.innerWidth > 991) {
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