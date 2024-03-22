import React from 'react'


export default function Catagories({ImgSrc , CategoryName , Brand}) {
  return (

    <div className=' border-1-grey border flex flex-col items-center justify-between py-4 bg-white h-[250px]'>
      <div>
        <img src={ImgSrc} style={{maxWidth:'100px', maxHeight:"100px"}} className=' hover:scale-110 duration-1000 mt-4' alt="" />
      </div>
      <div className=' text-center mt-4'>
      <p className=' hover:text-yellow-500 font-medium'>
        {CategoryName}
      </p>
        <button className=' bg-[#e70071] text-white py-1 px-2 rounded-md mt-2'>Shop Now!</button>
        <p className=' mt-2 text-sm'>{Brand}</p>
        </div>
    </div>
  )
}
