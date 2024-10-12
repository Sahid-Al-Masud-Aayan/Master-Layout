import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowCircleRight } from "react-icons/fa";

const Services = () => {
  return (
    <>
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-[#1BFFFE] via-[#2680BB] to-[#2B51A4]">
        <h1 className='  text-5xl font-medium text-[#fff] mb-[60px]'>Our Services</h1>
        <div className=" flex justify-center items-center gap-6 p-20">
            <div className=" flex flex-col justify-center items-center ">
                <img className=' h-96 w-[460px]' src="./public/laptop.jpg" alt="remamp" />
            <Link to='#' className=' text-3xl font-medium text-[#fbff21] flex items-center gap-4'>Stage tuning<FaArrowCircleRight className=' mt-2'/></Link>
            </div>
            <div className=" flex flex-col justify-center items-center">
                <img className=' h-96 w-[460px]' src="./public/engine.jpg" alt="remamp" />
            <Link to='#' className=' text-3xl font-medium text-[#fbff21] flex items-center gap-4'>Engine swap<FaArrowCircleRight className=' mt-2'/></Link>
            </div>
            <div className=" flex flex-col justify-center items-center">
                <img className=' h-96 w-[460px]' src="./public/pipe.jpg" alt="remamp" />
            <Link to='#' className=' text-3xl font-medium text-[#fbff21] flex items-center gap-4'>Straight pipe<FaArrowCircleRight className=' mt-2'/></Link>
            </div>
        </div>
      </div>
    </>
  )
}

export default Services