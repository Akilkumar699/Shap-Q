import React, { useState } from 'react'
import { RiCloseFill } from "react-icons/ri";
import supabase from '../../supabase/supabase';
import { useDispatch } from "react-redux"
import { setUsers } from '../../slices/slices';
// import { useNavigate } from 'react-router-dom';

export default function LoginModel({isopen,setIsopen}) {
    const [email,setEmail] = useState()
    const [name,setName]=useState()
    const [password,setPassword] = useState()
    const dispatch = useDispatch()
    // const navigate =useNavigate()
    
    const [logintype,setLogintype] = useState(true)

    const signin = async ()=>{
        // console.log("calling")
        const{data,error}=await supabase.auth.signUp(
            {
                name,
                email,
                password
            }
        )
        // console.log(data,error)
        if(data.user){
            alert("Account Created")
        }
        // else{
        //     alert(error)
        // }
    }

    const login =async()=>{
        // console.log('success')
        const {data,error} = await supabase.auth.signInWithPassword(
            {
                name,
                email,
                password
            }
        )
        // if(data.user){
        //     navigate('/all')
        // }
            if(error){
                alert(error.message)
                return;
            }
            else{
                dispatch(setUsers(data.user))
            }

    }
  return isopen?(
    
    <div className=' absolute right-5 mt-2 flex flex-col bg-white shadow-lg p-10 w-72 z-20 rounded-md'>
        <h1 className='text-center text-xl font-bold tracking-wide'>Log In</h1>
        <input type="text" placeholder='name' className=' outline-none p-1 border-b mt-4' value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="email" placeholder='email' className=' outline-none p-1 border-b mt-4' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder='password' className=' outline-none p-1 border-b mt-4' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <p className=' mt-4 text-sm'>By continuing, you agree to ShopQ</p>
        <div className='mt-4 gap-5 flex'>
            <span className='text-[#e70071] text-sm'>Terms of use</span>
            <span className='text-[#e70071] text-sm'>Privacy Policy</span>
        </div>

        {
            logintype?(
                <button className=' mt-4 bg-[#e70071] text-white p-1 rounded-md' onClick={login}>Login</button>
            ):(
                <button className=' mt-4 bg-[#e70071] text-white p-1 rounded-md' onClick={signin}>Signin</button>
            )
        }
        {
            logintype?(
                <p className=' cursor-pointer text-sm mt-4' onClick={()=>setLogintype(false)}>Now to ShopQ? Create an account</p>
            ):(
                <p className=' cursor-pointer text-sm mt-4' onClick={()=>setLogintype(true)}>Already an user? Login to an account</p>
            )
        }
        <div className=' absolute top-5 right-5'>
            <RiCloseFill onClick={()=>setIsopen(false)}/>
        </div>
    </div>
  ):(<></>)
}
