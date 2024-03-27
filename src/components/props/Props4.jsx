import React from 'react'

const Props4 = ({header,paragraph1,image1,image2,image3,image4,image5}) => {
  return (
    <div className=' w-full px-10  grid md:grid-cols-2  gap-16 pt-20 pb-10  lg:pl-28 '>
        <div className='text-[var--text-color]'>
        <p className="lg:text-[50px] lg:px-[10%]  text-[30px] leading-[60px] font-[700] text-[var(--text-color)]">
      {header}
      </p>
      <p className="lg:text-[16px] text-[14px] lg:px-[10%] text-[var(--text-color)]  opacity-80 pb-10">
    {paragraph1}
      </p>
         <div className='flex flex-row  lg:w-[300px]  lg:h-[60px] gap-3 lg:pl-20 '>
         <img src={image1} alt="" />
         <img src={image2} alt="" />
            </div>  
            <div className='pt-10 lg:pl-20'>
            <div className='flex w-[124px]  h-[89px] gap-5'>
            <img src= {image3} alt="" />
            <img src={image4} alt="" />
           </div>  
            </div>
         </div>

         <div className='lg:w-[496px] lg:h-[448px]'>
        <img src={image5} alt="" />
      </div>
       

    </div>
  )
}

export default Props4