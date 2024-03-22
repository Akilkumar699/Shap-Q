import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductsData } from '../data/ProductData'
import { FaShoppingCart } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";
import { FaTag } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addCart } from '../slices/cardSlice';

export default function ProductDetails() {
  const [data , setData]=useState({})
  const dispatch =useDispatch()
  console.log(data)
  const { id } = useParams()



  useEffect(()=>{
    const product = ProductsData.find((item)=>{
      return item.id.toString() === id;
    })
    setData(product)
    console.log(product)
  },[id])

  const addtoCard =()=>{
    dispatch(addCart(data))
  }
  return (
    <div className=' flex flex-col items-center lg:items-start lg:grid grid-cols-2 mt-8'>
      <div className=' flex gap-20'>
        <div className='flex flex-col gap-5 mx-4'>
            <img src={data.url} className=' w-10 hover:border-2 p-2' alt="" />
            <img src={data.url} className=' w-10 hover:border-2 p-2' alt="" />
            <img src={data.url} className=' w-10 hover:border-2 p-2' alt="" />
            <img src={data.url} className=' w-10 hover:border-2 p-2' alt="" />
            <img src={data.url} className=' w-10 hover:border-2 p-2' alt="" />
        </div>
        <div className=' flex flex-col justify-center items-center lg:justify-start lg:mt-2'>
            <img src={data.url} alt="" />
        <div className=' mt-8 flex items-center justify-center gap-5'>
          <div className=' bg-[#FF9F00] flex items-center justify-center gap-2 p-2'>
            <FaShoppingCart className=' text-white  text-xs lg:text-lg'/>
            <button className=' text-white text-xs lg:text-lg font-medium' onClick={addtoCard}>ADD TO CARD</button>
          </div>
          <div className='bg-[#FB641B] flex items-center justify-center gap-2 p-2'>
            <MdElectricBolt className=' text-white text-xs lg:text-lg'/>
            <button className=' text-white font-medium text-xs lg:text-lg' >BUY NOW</button>
          </div>
        </div>
        </div>

      </div>
      <div className=' p-5 lg:p-0'>
        <div className=' mt-8 lg:mt-0'>
          <h3 className=' font-bold mb-2 tracking-wider text-sm lg:text:lg'>{data.Product}</h3>
          <span className=' bg-green-500 w-fit rounded-md px-2 py-1 text-sm text-white font-medium my-2'>{data.rating}</span>
          <span className='  font-light text-amber-700 my-2 ml-2 text-sm'>{data.reviews} Ratings & Reviews</span>
          <div className=' my-2'>
            <h1 className='font-bold text-xl'>₹{data.Sellingprice}</h1>
            <p className=' font-light text-sm'>+ ₹69 Secured Packing Fee</p>
          </div>
        </div>
        <div className=' mt-4'>
          <h4 className=' font-bold tracking-wider'>Avaliable Offers</h4>
          <div className=' flex items-center mt-2 ml-2'>
            <FaTag className=' text-green-600' />
            <p className=' ml-2 font-bold text-sm'>Bank Offers</p>
            <p className=' ml-2 font-light text-sm'>5% Cashback on Flipkart Axis Bank CardT&C</p>
          </div>
          <div className=' flex items-center mt-2 ml-2'>
            <FaTag className=' text-green-600' />
            <p className=' ml-2 font-bold text-sm'>Partner Offers</p>
            <p className=' ml-2 font-light text-sm'>Purchase now & get a surprice cashback coupon for january/Fabuary</p>
          </div>
          <div className=' flex items-center mt-2 ml-2'>
            <FaTag className=' text-green-600' />
            <p className=' ml-2 font-bold text-sm'>Partner Offers</p>
            <p className=' ml-2 font-light text-sm'>Sign up for Flipkart Pay Later and get Flipkart Gift worth up to ₹500</p>
          </div>
          <div className=' flex items-center mt-2 ml-2'>
            <HiAcademicCap className=' text-green-600' />
            <p className=' ml-2 font-bold text-sm'>EMI Starting</p>
            <p className=' ml-2 font-light text-sm'>from ₹832/month view plans</p>
          </div>
        </div>
        <div className=' mt-8'>
          <h5 className='font-bold mt-4 tracking-wider text-gray-400'>Color</h5>
          <div className=' flex justify-center gap-10 my-4'>
            <img src={data.url} className=' w-24 h-40 hover:scale-105 duration-200' alt="" />
            <img src={data.url} className=' w-24 h-40  hover:scale-105 duration-240' alt="" />
            <img src={data.url} className=' w-24 h-40  hover:scale-105 duration-240' alt="" />
          </div>
          <div className=' flex mt-8 gap-5'>
            <h5 className=' font-bold tracking-wider text-gray-400'>Highlights</h5>
            <div>
              <li className=' font-light text-sm'>{data.Descripition}</li>
              <li className=' font-light text-sm'>{data.Display}</li>
              <li className=' font-light text-sm'>{data.Camera}</li>
              <li className=' font-light text-sm'>{data.Proccessor}</li>
              <li className=' font-light text-sm'>{data.Battery}</li>
            </div>
          </div>
          <div className=' mt-4'>
            <p className=' font-bold'>Ratings & Reviews</p>
            <div className=' flex gap-5 mt-4'>
            <div>
              <div className=' flex items-center justify-center gap-2'>
                <p className=' text-center font-bold'>{data.rating}</p><FaStar/>
              </div>
              <div className=' flex flex-col'>
                <small className=' text-medium text-amber-700'>{data.rating} Ratings &</small><small className=' text-medium text-amber-700 text-center'>   {data.reviews} Reviews</small>
              </div>
            </div>
            <div>
              <div className=' flex  items-center gap-2'><p>5</p><FaStar className=' text-green-600'/><FaStar className=' text-green-600'/><FaStar className=' text-green-600'/><FaStar className=' text-green-600'/></div>
              <div className=' flex  items-center gap-2'>4<FaStar className=' text-green-600'/><FaStar className=' text-green-600'/><FaStar className=' text-green-600'/></div>
              <div className=' flex  items-center gap-2'>3<FaStar className=' text-yellow-600'/><FaStar className=' text-yellow-600'/><FaStar className=' text-yellow-600'/></div>
              <div className=' flex  items-center gap-2'>2<FaStar className=' text-yellow-600'/><FaStar className=' text-yellow-600'/></div>
              <div className=' flex  items-center gap-2'>1<FaStar className=' text-red-600'/></div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
