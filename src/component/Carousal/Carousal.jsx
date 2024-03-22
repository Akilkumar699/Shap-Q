import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";


export default function Carousal({catagory}) {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (

    <Slider  {...settings}>
      {
        catagory.map((item,index)=>{
            return <div className=' outline-none' key={index} >
                <img src={item.image} alt="" />
            </div>
        })
      }
    </Slider>

  )
}
