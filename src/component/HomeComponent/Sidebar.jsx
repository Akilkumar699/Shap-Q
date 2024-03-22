import React from 'react'
import { Link } from 'react-router-dom'
export default function Sidebar({sideBar,setSidebar}) {
  return (
    <div className={sideBar?'md:hidden bg-[#e70071] duration-1000 overflow-hidden fixed overflow-y-auto -right-1/2 top-0 h-screen w-2/4 z-20':'md:hidden bg-[#e70071] absolute top-0 h-screen w-2/4 z-20 right-0 duration-1000'}>
            <p className=' text-right text-white p-5 text-xl font-bold cursor-pointer' onClick={()=>setSidebar(true)}>x</p>
            <ul className='flex flex-col gap-10 p-10 z-20 text-white'>
            <Link to={'/'}><li className=' text-lg hover:text-black listfamliy'>Home</li></Link>
            <Link to={'/product'}><li className=' text-lg hover:text-black listfamliy'>Product</li></Link>
            <Link className='flex items-center gap-1' to={'/cart'}><i className=" text-white fa-solid fa-cart-plus text-lg " ></i><p className=' text-lg hover:text-black listfamliy'>Cart</p></Link>
            {/* <Link to={'/women'}><li className=' text-lg hover:text-black listfamliy'>Women</li></Link>
            <Link to={'/kids'}><li className=' text-lg hover:text-black listfamliy'>Kids</li></Link>
            <Link to={'/all'}><li className=' text-lg hover:text-black listfamliy'>All</li></Link> */}
          </ul>
        </div>
  )
}
