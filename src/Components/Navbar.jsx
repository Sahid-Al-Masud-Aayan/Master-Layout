import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi2";
import { GrServicePlay } from "react-icons/gr";
import { AiFillProduct } from "react-icons/ai";
import { GrHelpBook } from "react-icons/gr";
import { GrHistory } from "react-icons/gr";

const Navbar = () => {
  return (
    <>
        <nav className=" h-[60px] w-full bg-gradient-to-r from-[#276174] via-[#33c58e] to-[#63fd88] flex justify-center items-center ">
        <div className="container flex justify-between items-center">
        <Link to="/" ><img className=" w-[120px] h-[50px] " src="./public/car.jpg" alt="logo" /></Link>
        
            <ul className=" flex justify-center items-center gap-3 flex-wrap ">
            <Link to="/" className=" text-2xl font-semibold text-[#fff] flex-wrap flex justify-center items-center gap-1 hover:text-[#666666]"><FaHome className=' text-3xl text-[#fff] hover:text-[#666666]'/>Home</Link>
            <Link to="/menusecond" className=" text-2xl font-semibold text-[#fff] flex-wrap flex justify-center items-center gap-1 hover:text-[#666666]"><GrHistory className=' text-3xl text-[#fff] hover:text-[#666666]'/>Story</Link>
            <Link to="/services" className=" text-2xl font-semibold text-[#fff] flex-wrap flex justify-center items-center gap-1 hover:text-[#666666]"><GrServicePlay className=' text-3xl text-[#fff] hover:text-[#666666]'/>Services</Link>
            <Link to="/products" className=" text-2xl font-semibold text-[#fff] flex-wrap flex justify-center items-center gap-1 hover:text-[#666666]"><AiFillProduct className=' text-3xl text-[#fff] hover:text-[#666666]'/>Products</Link>
            <Link to="/third" className=" text-2xl font-semibold text-[#fff] flex-wrap flex justify-center items-center gap-1 hover:text-[#666666]"><GrHelpBook className=' text-3xl text-[#fff] hover:text-[#666666]'/>Help</Link>
        </ul>
        
        
        <div className=" flex justify-center items-center gap-2 flex-wrap"><Link to="/Signup" className=" h-[100%] w-[100px] p-2 flex justify-center items-center bg-gradient-to-r from-[#fbb040] to-[#f9ed32] text-xl font-semibold text-[#fff] rounded-xl">Sign Up</Link>
         <Link to="/Login" className="  h-[100%] w-[100px] p-2 flex justify-center items-center bg-gradient-to-r from-[#fbb040] to-[#f9ed32] text-xl font-semibold text-[#fff] rounded-xl mr-2 ">Login</Link>
         </div>
     </div>   
        
    </nav>
    </>
  )
}

export default Navbar