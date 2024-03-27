"use client"
import { useState } from 'react';
import React from 'react'
import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { RxDiscordLogo } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { FetchJson } from "@/lib/FetchJson";
import { useForm } from "react-hook-form";
import { TbBrandFacebook } from "react-icons/tb";


const Footer = () => {
    const [loading, setLoading] = useState(false);
    const [resp, setResp] = useState({});
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm();
  
    const onSubmit = async (data) => {
      setLoading(true);
  
      try {
        const resp = await FetchJson("/api/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
  
        if (resp.statusCode === "00") {
          setResp({ type: "success", message: "You have successfully subscribed to our newsletter" });
          setLoading(false);
          reset();
          setTimeout(() => {
            setResp({});
          }, 3000);
        }
        else if (resp.statusCode === "400") {
          setResp({ type: "error", message: resp.message });
          setLoading(false);
        }
        else {
          setResp({ type: "error", message: resp.message });
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
    };
  
    return (
      <section id="footer">
        <div className="bg-black lg:px-[100px] relative">
          <div className="container py-10">
            <div className="flex justify-between md:flex-row flex-col items-start md:gap-10 md:items-center pt-10 pb-1">
              <div className="">
                <img src="/asset/customcolor_logo_transparent_background 2.svg" alt="" />
              </div>
              <div className="mt-6">
                <ul className="flex lg:gap-2 gap-1.5">
                  
                  <li className="bg-yellow-400 p-[20px] border border-text-yellow rounded-full flex justify-center items-center icon cursor-pointer hover:bg-transparent hover:border hover:border-text-yellow hover:text-yellow-400 transition-all duration-500 text-[20px]">
                    <Link href={"https://twitter.com/tulupay?t=OthGEx7TfQJ3TZyvSYbxXA&s=08"}><FaXTwitter /></Link> 
                  </li>
                  <li className="bg-yellow-400 p-[20px] border border-text-yellow rounded-full flex justify-center items-center icon cursor-pointer hover:bg-transparent hover:border hover:border-text-yellow hover:text-yellow-400 transition-all duration-500 text-[20px]">
                    <Link href={"https://instagram.com/tulupay_ecosystem?igshid=OGQ5ZDc2ODk2ZA=="}>
                    <AiOutlineInstagram />
                    </Link>
                  </li>
                  <li className="bg-yellow-400 p-[20px] border border-text-yellow rounded-full flex justify-center items-center icon cursor-pointer hover:bg-transparent hover:border hover:border-text-yellow hover:text-yellow-400 transition-all duration-500 text-[20px]">
                    <Link href={"https://www.linkedin.com/in/tulupay-ecosystem-41a141264/"}>
                    <AiOutlineLinkedin />
                    </Link>
                  </li>
                  <li className="bg-yellow-400 p-[20px] border border-text-yellow rounded-full flex justify-center items-center icon cursor-pointer hover:bg-transparent hover:border hover:border-text-yellow hover:text-yellow-400 transition-all duration-500 text-[20px]">
                    <Link href={"#"}>
                    <RxDiscordLogo />
                    </Link>
                  </li>
                  <li className="bg-yellow-400 p-[20px] border border-text-yellow rounded-full flex justify-center items-center icon cursor-pointer hover:bg-transparent hover:border hover:border-text-yellow hover:text-yellow-400 transition-all duration-500 text-[20px]">
                    <Link href={"#"}>
                    <TbBrandFacebook />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
  
            <div className="flex lg:flex-row flex-col lg:gap-[80px] gap-10 mt-8 pb-10">
              <div className="grid md:w-[60%] gap-6 w-full grid-cols-2 md:grid-cols-4">
                <div className="space-y-6">
                  <h2 className="font-bold text-lg text-yellow-400">Use Cases</h2>
                  <ul className="space-y-3  text-white mt-2">
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <Link href="https://tulupay.com/payment">Payment</Link>
                    </li>
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <Link href="https://tulupay.com/remittance">Remittance</Link>
                    </li>
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <Link href="https://tulupay.com/investment">Investment</Link>
                    </li>
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <Link href="https://tulupay.com/trade">Trade</Link>
                    </li>
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <Link href="https://tulupay.com/capital">Capital</Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h2 className="text-yellow-400 font-bold text-lg">Products</h2>
                  <ul className="space-y-3  text-white mt-2">
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <Link href="https://exchange.tulupay.com/">Switch</Link>
                    </li>
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <Link href="https://switch.tulupay.com/">Gateway</Link>
                    </li>
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <Link href="https://purse.tulupay.com/">Purse</Link>
                    </li>
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <Link href="https://voucher.tulupay.com/">Academy</Link>
                    </li>
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <Link href="https://gift.tulupay.com/">Wallet</Link>
                    </li>
                    <li className="md:mt-4 sm:mt-2 text-yellow-400 hover:text-fade-text-color underline ">
                      <Link href="https://tulupay.com/">See More</Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h2 className="text-yellow-400 font-bold text-lg">Company</h2>
                  <ul className="space-y-3  text-white mt-2">
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <Link href="https://tulupay.com/about">About</Link>
                    </li>
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <Link href="https://tulupay.com/contact">Contact</Link>
                    </li>
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <Link href="https://tulupay.com/faq">FAQ</Link>
                    </li>
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <Link href="https://tulupay.com/team">Team</Link>
                    </li>
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <Link href="https://tulupay.com/partner">Partner</Link>
                    </li>
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <Link href="https://tulupay.com/pricing">Pricing</Link>
                    </li>
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <Link href="https://tulupay.com/career">Career</Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h2 className="text-yellow-400 font-bold text-lg">Developer</h2>
                  <ul className="space-y-3  text-white mt-2">
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <Link href="https://tulupay.com/api_integration">APIs</Link>
                    </li>
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <Link href="https://tulupay.com/sdk_integration">SDKs</Link>
                    </li>
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <Link href="/documentation">Documentation</Link>
                    </li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h1 className="font-bold text-lg text-yellow-400">Learn</h1>
                  <ul className="space-y-3  text-white mt-2">
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <Link href="https://tulupay.com/tuluedu">Academy</Link>
                    </li>
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <Link href="https://tulupay.com/blog">Blog</Link>
                    </li>
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <Link href="https://tulupay.com/newsfeed">News</Link>
                    </li>
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px] text-[var(--text-color)]">
                      <Link href="https://tulupay.com/press">Press</Link>
                    </li>
                  </ul>
                </div>
                <div className="lg:space-y-6">
                  <h2 className="text-yellow-400 text-lg font-bold">Community</h2>
                  <ul className="space-y-3  text-white mt-2">
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <a href="https://twitter.com/tulupay?t=OthGEx7TfQJ3TZyvSYbxXA&s=08">Twitter</a>
                    </li>
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <a href="#">Facebook</a>
                    </li>
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <a href="https://instagram.com/tulupay_ecosystem?igshid=OGQ5ZDc2ODk2ZA==">Instagram</a>
                    </li>
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <a href="https://www.linkedin.com/in/tulupay-ecosystem-41a141264/">Linkedin</a>
                    </li>
                  </ul>
                </div>
                <div className="space-y-6">
                  <h2 className="text-yellow-400 text-lg font-bold">Resources</h2>
                  <ul className="space-y-3 text-white  mt-2">
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <a href="/">Roadmap</a>
                    </li>
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <a href="/">Whitepaper</a>
                    </li>
                    <li className="md:mt-4 sm:mt-2 hover:text-yellow-400 transition-all duration-500 text-[14px]">
                      <a href="/">Our story</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-100 lg:w-[30%] h-full w-full md:block lg:block sm:block rounded-md p-8 space-y-3">
                {resp && resp.message && (
                  <div
                    className={`py-3 mt-2 lg:mt-0 mb-4 ${resp.type === "success" ? "bg-[black]" : "bg-red-300"
                      } bg-opacity-30 rounded-2xl`}
                  >
                    <div className="flex flex-col justify-between items-start gap-2.5">
                      <div>
                        <span className="text-[yellow] lg:text-[14px] text-[12px] flex items-end justify-end lg:ps-[20px] ps-[50px] font-normal ">
                          {resp.message}
                        </span>
                      </div>
                    </div>
                  </div>
  
                )}
  
                <p className=" lg:text-[20px] mb-[-10px] font-medium text-[14px] text-text-[var(--primary-color)]">
                  Subcribe to newsletter
                </p>
                <p className="text-text-[var(--primary-color)] text-[13px] ">
                  Sign up to receive new updates
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center mt-[40px] text-[14px] text-[var(--text-color)]">
                  <input
                    type="email"
                    className="w-full mb-[20px] mt-[10px] text-color-gray bg-transparent border text-fade-text-color border-fade-text-color p-2 lg:p-3 rounded-md focus:outline-none"
                    placeholder="Email address
                    "
                    {...register("email", {
                      required: "This field is required",
                    })}
                    required
                  />
                  {errors.email && (
                    <p className="text-red-500 text-[12px]">
                      {errors.email.message}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="bg-dark-bg-color w-full mt-3 text-yellow-400 p-4 rounded-md"
                    disabled={loading}
                  >
                    {loading ? 'Loading...' : 'Get started'}
                  </button>
                </form>
              </div>
            </div>
  
            <div className="lg:flex justify-between text-[14px] text-[var(--text-color)] pb-8 mt-10">
              <div className="flex text-center lg:gap-6 gap-6 md:gap-4 sm:gap-2 lg:px-12">
                <Link href={"/privacy_policy"} className="underline">
                  Privacy & Policy
                </Link>
                <Link href="/terms_condition" className="underline">
                  Terms & Condition
                </Link>
              </div>
              <div className="mt-3">
                <p>&copy; 2023 copyright by TuluPay.com. all right reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Footer;
