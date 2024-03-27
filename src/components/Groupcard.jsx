import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLockClosedOutline } from "react-icons/io5";
import { TbUserExclamation } from "react-icons/tb";
import { TbAB2 } from "react-icons/tb";
import { MdOutlineRemove } from "react-icons/md";
// import { Img } from "../home page Cards";

export const Groupcard = ({
  paragraphOne,
  headOne,
  paragraphTwo,
  headTwo,
  paragraphThree,
  headThree,
}) => {
  const SingleCard = ({ paragraph, head, icon }) => {
    return (
      <div className="text-[var(--text-color)] flex flex-row  gap-3">
        <div className="h-[20vh] p-[2px] w-[3px] rounded-sm bg-[var(--text-color)]"></div>
        <div className="flex flex-col gap-3">
          <h3 className="text-[var(--text-color)] font-[700] text-[14px] lg:text-[20px]">
           
           {icon}
           
           {head}
          </h3>
          <p className="opacity-60 text-[14px] lg:text-[14px] font-[200]">{paragraph}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="md:px-16 bg-[var(--secondary-color)] px-8 lg:px-24 py-10 md:py-20">
      <div className="container grid grid-cols-1  lg:grid-cols-3 leading-5 gap-5">
     <SingleCard paragraph={paragraphOne} icon={<IoLockClosedOutline/>} head={headOne}/>
     <SingleCard paragraph={paragraphTwo} head={headTwo} icon={<TbUserExclamation />}/>
    <SingleCard paragraph={paragraphThree} head={headThree} icon={<TbAB2 />}/>
      </div>
    </section>
  );
};
