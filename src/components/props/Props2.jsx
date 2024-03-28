import React from 'react'

const Props2 = ({header,paragraph1,btn}) => {
  return (
   
    <div className="w-full  gap-16 pt-20 pb-10 lg:pl-20 lg:pr-20">
    <div className=" lg:text-start px-[5%] flex  flex-col lg:gap-5 gap-5 ]">
      <p className="lg:text-[40px] lg:px-[10%]  text-[30px] leading-[60px] font-[700] text-[var(--text-color)]">
      {header}
      </p>
      <p className="lg:text-[16px] text-[14px] flex justify-center items-center lg:px-[10%] text-[var(--text-color)]  opacity-80">
    {paragraph1}
      </p>
     <div className='lg:pl-12'><button className='btn px-10 bg-[#FFD900] rounded-[7px] border hover:border-text-yellow text-black hover:text-[#FFD900] hover:bg-black hover:border hover:border-solid border-color-secondary py-2'>{btn}</button> </div>
</div>
    </div>
  )
}

export default Props2