import React from 'react';
import '../Carousel/Carousel.module.css'
import Card from '../Card/Card';

const Carousel = ({data }) => {


  return (
   <>
  
   <Card data={data}/>
   </>
  );
};

export default Carousel;