import React from 'react';
import '../Carousel/Carousel.module.css'
import Card from '../Card/Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = ({data }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };

  return (
   <>
    <Slider {...settings}>
  {data.map((ele)=>(
    <Card data={ele}/>
  ))}
   </Slider>
   </>
  );
};

export default Carousel;