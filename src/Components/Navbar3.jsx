import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { AiFillExclamationCircle } from "react-icons/ai";
import { MdOutlineHeadsetMic } from "react-icons/md";


const Navbar3 = () => {
  return (
    <>
    <nav className=" h-[60px] w-full bg-gradient-to-r from-[#276174] via-[#33c58e] to-[#63fd88] flex justify-center items-center ">
        <div className="container flex justify-between items-center">
        <Link to="/" ><img className=" w-[120px] h-[50px] " src="./public/car.jpg" alt="logo" /></Link>
        
            <ul className=" flex justify-center items-center gap-3 flex-wrap ">
            <Link to="/" className=" text-2xl font-semibold text-[#fff] flex-wrap flex justify-center items-center gap-1 hover:text-[#666666]"><FaHome className=' text-3xl text-[#fff] hover:text-[#666666]'/>Home</Link>
            <Link to="/third/about" className=" text-2xl font-semibold text-[#fff] flex-wrap flex justify-center items-center gap-1 hover:text-[#666666]"><AiFillExclamationCircle className=' text-3xl text-[#fff] hover:text-[#666666] rotate-180'/>About</Link>
            <Link to="/third/conatct" className=" text-2xl font-semibold text-[#fff] flex-wrap flex justify-center items-center gap-1 hover:text-[#666666]">< MdOutlineHeadsetMic className=' text-3xl text-[#fff] hover:text-[#666666]'/>Contact</Link>

        </ul>
        <div className=" flex justify-center items-center gap-2 flex-wrap">
            <Link to="/Signup" className=" h-[100%] w-[100px] p-2 flex justify-center items-center bg-gradient-to-r from-[#fbb040] to-[#f9ed32] text-xl font-semibold text-[#fff] rounded-xl">Sign Up</Link>
         <Link to="/Login" className="  h-[100%] w-[100px] p-2 flex justify-center items-center bg-gradient-to-r from-[#fbb040] to-[#f9ed32] text-xl font-semibold text-[#fff] rounded-xl mr-2 ">Login</Link>
         </div>
     </div>   
        
    </nav>
    </>
  )
}

export default Navbar3