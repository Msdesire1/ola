import React from 'react'
import Link from 'next/link'
import {Img }from "@/components/Img";

const Hometwo = ({head,paragraph,btn,dark,img,}) => {
  return (
    <div className="md:px-16 px-8 lg:px-28 py-8 md:py-20">
      <div className="flex gap-1 flex-col items-center text-[var(--text-color)] justify-center lg:flex-row md:gap-4">
        <div className="lg:w-1/2 w-full text-[var(--text-color)] text-left">
          <h1 className="font-[700] w-[110%] text-[var(--text-color)] md:text-[30px] text-[25px] lg:text-[40px]">
            {head}
          </h1>
          <p className="my-6 text-[14px] opacity-80">{paragraph}</p>
          <div className=' text-start'><button className='btn px-10 bg-[#FFD900] rounded-[7px] border hover:border-text-yellow text-black hover:text-[#FFD900] hover:bg-black hover:border hover:border-solid border-color-secondary py-2'>{btn}</button></div>
       
          <div className="lg:w-1/2 flex justify-start items-center w-full">
          <Img
            priority
            height={380}
            width={380}
            darkModeSrc ={dark}
            lightModeSrc ={img}
            // className="h-[450px] w-full"
            alt=""
          />
        </div>


      </div>
    </div>
    </div>
  )
};


export default Hometwo