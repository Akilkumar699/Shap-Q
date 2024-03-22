import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LoginModel from './LoginModel'
import Sidebar from './Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import supabase from '../../supabase/supabase'
import { removeUsers } from '../../slices/slices'

export default function Navbar() {

  const data =useSelector((state)=>state.userData.user)

  const [isopen,setIsopen] = useState(false)

  const [sideBar,setSidebar]=useState(true)
  const dispatch =useDispatch()
  
  useEffect(()=>{
    setIsopen(false)
  },[data])

  const handleclick =()=>{
    setSidebar(!sideBar)
  }

  const logout =async()=>{
    const {error} = await supabase.auth.signOut()
        if(!error){
          dispatch(removeUsers())
        }
      }
  

  return (
    <>
    <div className=' flex lg:gap-10 justify-between md:justify-between  lg:justify-around items-center lg:py-5 p-5 shadow-lg sticky top-0 z-20 bg-white'>
      <div className=' md:flex gap-2 lg:gap-10'>
        <h1 className='text-2xl md:text-3xl lg:4xl font-bold text-[#e70071]'>ShapQ</h1>
        <ul className='hidden md:flex md:gap-8 lg:gap-16 items-center'>
        <Link to={'/'}><li className='hidden lg:block text-lg hover:text-pink-500 listfamliy'>Home</li></Link>
        <Link to={'/product'}><li className=' text-lg hover:text-pink-500 listfamliy md:text-md'>Product</li></Link>
        {/* <Link to={'/productdetails'}><li className=' text-lg hover:text-pink-500 listfamliy'>Product Details</li></Link> */}
        {/* <Link to={'/kids'}><li className=' text-lg hover:text-pink-500 listfamliy'>Kids</li></Link>
        <Link to={'/all'}><li className=' text-lg hover:text-pink-500 listfamliy'>All</li></Link> */}
      </ul>
      </div>
      <div className=' flex gap-4 lg:gap-5 items-center'>
        <div className='border lg:p-1 md:py-0 md:px-2  md:flex justify-center items-center gap-2 hidden bg-[#F4F4F4] rounded-lg' >
        <i className="fa-solid fa-magnifying-glass" style={{color: "#000000"}}></i>
        <input type="text" className=' p-1 outline-none w-full bg-[#F4F4F4]' placeholder='Get your things'/>
        </div>
            {data?(<p onClick={logout} className='hidden md:flex text-[#e70071]'>{`You in ShopQ`}</p>):<button className='hidden md:flex bg-[#e70071] p-2 text-sm text-white lg:text-lg font-medium rounded-lg' onClick={()=>setIsopen(true)}>Log in</button>}
            <Link className='hidden md:flex items-center gap-1' to={'/cart'}><i className=" hidden md:flex fa-solid fa-cart-plus text-xl  text-[#e70071]" style={{color: "#000000"}}></i><p>Cart</p></Link>
      </div>
      {sideBar?<div className='lg:hidden'>
        <i className="fa-solid fa-bars text-lg md:hidden cursor-pointer" onClick={handleclick} style={{color: "#000000"}}></i>
      </div>:<></>}
    </div>
        <Sidebar sideBar={sideBar} setSidebar={setSidebar}/>
        <LoginModel isopen={isopen} setIsopen={setIsopen}></LoginModel>
     </>  
  )
}
