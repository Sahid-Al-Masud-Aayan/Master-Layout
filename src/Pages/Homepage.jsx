import React from 'react'

const Homepage = () => {
  return (
    <>
    <div className=' min-h-screen bg-gradient-to-r from-[#BFF098] to-[#6FD6FF] '>
      <h1 className=" flex justify-center items-center min-h-5 text-3xl font-bold text-[#470000] ">Welcome to Top Secret Company Ltd.</h1>
    <p className=" flex justify-center items-center min-h-2 text-xl font-medium text-[#353535] ">Here you can find the best and most exclusive perfomance parts for your car.</p>
    <div className=" flex justify-center items-center min-h-7 ">
        
  <div className=" h-[550px] w-[1100px] bg-gradient-to-r from-[#879af2] via-[#7614cd] to-[#F68616] rounded-3xl flex items-center gap-2 p-4">
      <h2 className='flex-wrap text-5xl font-extrabold text-[#fff] leading-normal'>We are providing you the best perfomance parts for your car at the cheapest rate.</h2>
      <img src="./public/e34.jpg" className='w-[780px] h-[470px] rounded-lg ' alt="factory" />
  </div>
</div>
    </div>
    
 </>
  )
}

export default Homepage