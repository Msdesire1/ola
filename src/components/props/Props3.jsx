import React from 'react'

const props3 = ({header,paragraph}) => {
  return (
    <div>
        <div className="w-full flex  justify-center  flex-col gap-16 pt-7 pb-10 px-10">
    <div className="text-right lg:text-center px-[5%] flex  flex-col lg:gap-10 gap-5 ]">
<div className='flex flex-col w-full justify-center items-center'>
<p className="lg:text-[40px] lg:px-[13%]  text-[30px] leading-[60px] font-[700] text-[var(--text-color)] w-[80%]">
      {header}
      </p>
</div>
      <p className="lg:text-[16px] text-[14px] flex justify-center items-center lg:px-[15%] text-[var(--text-color)]  opacity-80">
    {paragraph}
      </p>

</div>
</div>
    </div>
  )
}

export default props3