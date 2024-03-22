import React from 'react'
import { ProductsData } from '../data/ProductData'
import { Link } from 'react-router-dom'

function Product() {
  return (
    <div className='mx-4 md:mx-0 mt-4 md:flex md:bg-gray-50 md:p-4'>
      <div className='hidden md:block mx-4 bg-white shadow-md p-4 w-1/5 h-fit'>
        <h2 className=' text-xl font-bold tracking-wider p-2'>Filters</h2>
        <div>
        <hr />
        <div className=' p-2'>
          <h4 className=' lg:font-medium text-sm lg:text-lg tracking-wider'>CATEGORIES</h4>
          <p className=' px-6 lg:font-medium text-sm lg:text-lg tracking-wider'>Mobiles</p>
        </div>
        <hr />
        <div className=' p-2'>
          <h4 className=' font-medium tracking-wider text-sm lg:text-lg'>Price</h4>
          <input type="range" className=' w-full'/>
          <div className=' flex gap-2'>
            <input type="number" className=' border outline-none w-6/12' />
            <p className=' text-sm lg:text-lg tracking-wider'>to</p>
            <input type="number"  className=' border outline-none w-6/12'/>
          </div>
        </div>
        <hr />
        </div>
      </div>
      <div className='bg-white shadow-md md:w-4/5'>
        <div className=' text-center md:text-start p-2'>
            <h1 className=' font-bold tracking-wide '>Showing 1-48 of 48 results</h1>
            <div className=' flex items-center mt-4'>
              <h3 className='hidden lg:block text-sm lg:text-lg md:font-medium tracking-wide'>Sort By</h3>
              <ul className=' grid lg:flex grid-cols-3 px-4 gap-5 md:p-4'>
                <li className=' text-sm font-light cursor-pointer text-amber-700'>Relevance</li>
                <li className=' text-sm font-light cursor-pointer text-amber-700'>Popularity</li>
                <li className=' text-sm font-light cursor-pointer text-amber-700'>Low to High</li>
                <li className=' text-sm font-light cursor-pointer text-amber-700'>High to Low</li>
                <li className=' text-sm font-light cursor-pointer text-amber-700'>Nearest First</li>
              </ul>
            </div>
        </div>
            {
              ProductsData.map((item,index)=>{
                return <>
                      <Link to={`/productdetails/${item.id}`} key={index} className=' grid grid-cols-3 items-start p-4 rounded-md bg-white gap-5 lg:gap-10 lg:mx-4 mt-8'>
                        <div >
                          <img src={item.url}  className=' flex-grow flex-shrink w-28 lg:w-36 hover:scale-110 duration-300' alt="" />
                        </div>
                        <div className=' flex-grow flex-shrink'>
                            <h3 className='text-xs lg:text-lg font-bold'>{item.Product}</h3>
                            <div className=' flex gap-2 items-center mt-1'>
                              <p className=' text-xs bg-green-500 mt-1 text-white font-medium p-1 rounded-md'>{item.rating}</p>
                              <p className=' text-xs mt-1 md:text-md lg:text-sm'>{item.rating} Rating & {item.reviews}</p>
                            </div>
                            <div>
                              <p className=' text-xs mt-1 md:text-md lg:text-sm font-medium'>{item.Descripition}</p>
                              <p className=' text-xs mt-1 md:text-md lg:text-sm font-medium'>{item.Display}</p>
                              <p className=' text-xs mt-1 md:text-md lg:text-sm font-medium hidden md:block'>{item.Camera}</p>
                              <p className=' text-xs mt-1 md:text-md lg:text-sm font-medium hidden md:block'>{item.Proccessor}</p>
                            </div>
                        </div>
                        <div className=' flex-grow flex-shrink'>
                          <h3 className=' text-sm  md:text-lg font-bold'>₹{item.Sellingprice}</h3>
                          <p className=' text-xs mt-1 md:text-sm text-amber-700 font-normal'>Free delivery</p>
                          <p className=' text-xs mt-1 md:text-sm text-amber-700 font-normel'>Upto 10000 off on Exchange No Cost EMI from 24,317/month</p>
                        </div>
                      </Link>
                </>
              })
            }
        </div>
      </div>
    // </div>
  )
}

export default Product
