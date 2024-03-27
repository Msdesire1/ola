import React from 'react'

const Props = ({header, paragraph}) => {
  return (
    <div className="w-full flex  justify-center items-center flex-col gap-16 pt-20 pb-10 px-10 ">
    <div className="text-left lg:text-center px-[5%] flex  flex-col lg:gap-10 gap-5 ]">
      <p className="lg:text-[40px] lg:px-[23%]  text-[30px] leading-[60px] font-[700] text-[var(--text-color)]">
      {header}
      </p>
      <p className="lg:text-[16px] text-[14px] flex justify-center items-center lg:px-[22%] text-[var(--text-color)]  opacity-80">
    {paragraph}
      </p>

</div>
</div>
  )
}

export default Props