import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Catagories from '../CatagorieBanner/Catagories';
import { Link } from "react-router-dom";
import { MdArrowBackIos ,  MdArrowForwardIos } from "react-icons/md";
import { proDucts } from '../../data/data';

const Next =(props)=>{
  const {className , onClick}=props;
  return(
    <div>
        <MdArrowBackIos className={className} onClick={onClick} style={{color:'black' , fontSize:25 , fontWeight: 900}}/>
    </div>
  )
}

const Prev =(props)=>{
const {className , onClick}=props;
return(
  <div>
    <MdArrowForwardIos className={className} onClick={onClick} style={{color:'black' , fontSize:25 , fontWeight: 900}}/>
  </div>
)
}

export default function Product({ Data }) {

    var settings = {
        dots: false,
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <Prev />,
        nextArrow: <Next />
    
      };
  return (
    <div>
      {/* <div className=' w-full h-40' style={{background:`url(${BgImg}) no-repeat 0px bottom`}}>
            <p>{Tittle}</p>
            <button className=' bg-[#e70071] py-1 px-2 text-white font-medium'>View All</button>
      </div> */}
      <div className='hidden m-10 lg:flex flex-col justify-evenly'>
        <Slider  {...settings}>
            {
                Data.map((item,index)=>{
                    return <Link key={index} to={'/product'}>
                        <Catagories
                            ImgSrc={item.ImgSrc}
                            CategoryName={item.CategoryName}
                            Brand={item.Brand}
                        />
                    </Link>
                })
            }
        </Slider>
      </div>
      <h2 className='  lg:font-bold tracking-wider font-medium mt-4'>Catagories</h2>
      <div className=' mt-4 lg:hidden flex flex-col md:grid grid-cols-2 gap-5'>
        {/* <h2 className=' font-bold'>Catagories</h2> */}

        {
          proDucts.map((item,index)=>{            
              return <Link to={'/product'} key={index} className=' flex  bg-white p-4'>
                <img src={item.ImgSrc} alt='' style={{width:'50px', height:'50px' }} />
                <div className=' ml-10'>
                  <p className=' text-sm md:text-md lg:text-lg font-medium'>{item.CategoryName}</p>
                  <p className=' text-sm'>{item.Brand}</p>
                </div>
              </Link>
          })
        }
      </div>
    </div>
  )
}
