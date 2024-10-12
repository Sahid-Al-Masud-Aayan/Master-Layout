import React from 'react'

const Products = () => {
  return (
    <>
    <div className=" flex  justify-center items-center min-h-7 bg-gradient-to-r from-[#C6EA8D] to-[#FE90AF]">
        
        <div className=" h-[600px] w-full  flex flex-col items-center gap-2 p-4 mt-9">
            <h2 className='flex-wrap text-4xl font-bold text-[#800082] leading-normal'>We sale parts that make your car fast, turns the accelaration much better and make you feel dropping a gear and disappear.</h2>
            <img src="./public/engine2.jpg" className='w-[780px] h-[440px] rounded-lg ' alt="factory" />
        </div>
      </div>
    </>
  )
}

export default Products