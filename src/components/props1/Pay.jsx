import React from 'react'
import { TbCircleNumber1 } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleNumber3 } from "react-icons/tb";
// import Link from 'next/link'
const Pay = ({ head, head2, paragraph2, paragraph3, paragraph4, image }) => {
    return (
        <div className='w-full grid grid-cols-2 items-center gap-20 lg:pl-40 px-10 py-20'>
            <div className='w-[496px] h-[448px]'>
                <img src={image} alt="" />
            </div>

            <div className='text-[var(--text-color)] '>
                <div className=" w-full text-[var(--text-color)] l">
                    <h1 className="font-[700] text-[16px] lg:leading-[40px] leading-[30px] text-[var(--text-color)] lg:text-[30px] pb-5">
                        {head}

                    </h1>
                    <h1 className="font-[200] flex items-center gap-2 text-[14px] lg:leading-[40px] leading-[30px] text-[var(--text-color)] lg:text-[20px]">
                        <span className='text-xl  gap-5'><TbCircleNumber1 /></span>{head2}
                    </h1>
                    <p className="lg:my-6 my-[10px] text-[14px] lg:text-[16px] font-[200] opacity-50">{paragraph2}</p>

                    <p className="lg:my-6 my-[10px] text-[14px]  flex items-center gap-2 lg:text-[16px] font-[200]"> <TbCircleNumber2 />{paragraph3}</p>

                    <p className="lg:my-6 flex items-center gap-2 my-[10px] text-[14px] lg:text-[16px] font-bold "> <TbCircleNumber3 />{paragraph4}</p>

                </div>

            </div>



        </div>
    )
}

export default Pay