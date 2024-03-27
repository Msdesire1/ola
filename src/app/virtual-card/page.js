

// import Image from "next/image";
import React from "react";
import Link from "next/link";
import Props3 from "@/components/props/Props3";
import { Img } from "@/components/Img";
import Payment1 from "@/components/props1/Payment1";
// import Props3 from "@/components/props/Props3";
import Props4 from "@/components/props/Props4";
import Footer from "@/components/props/Footer";

export default function virtual() {
    return (
      <>
    <section className="bg-[var(--secondary-color)]  text-[var(--text-color)]">
    <div className='grid md:grid-cols-2 items-center gap-10 grid-cols-1 w-full  lg:py-[5%]'>
        <div className='w-full flex flex-col gap-3 pt-2 lg:px-[25%] px-10'>
          <h1 className='font-bold w-[155%]   lg:text-6xl text-xl'>
          Your virtual wallet for the world
          </h1>
          <p className='lg:text-[14px]  lg:w-[120%] py-4  text-[11px]'>The world is your marketplace with the Tulu Purse virtual card. Shop online from international retailers without currency conversion worries.</p>

          <div className="relative   justify-center">
              <Link
                href={
                  "https://tulupay.com/signup-method?prod=switch&in=false&biz=true&&ins=true"
                }
                className="py-2 px-6 bg-[#FFD900] rounded-[7px] border hover:border-text-yellow text-black hover:text-[#FFD900] hover:bg-black hover:border hover:border-solid border-color-secondary">
                    Get started
              </Link>
              </div>
        </div>
        <div className='lg:w-full  items-center lg:pl-5 px-10'>
        <img height={451} width={500} src="/asset/TULUPAY ECCOSYSTEM@5-1536x730 (3) 1.svg" className="lg:h-[px]" alt="png" />
        </div>
      </div>

<div>
   <Props3
   header={" Modern solution for online transactions"}
   paragraph={" Discover the versatility of virtual cards – the modern solution for online transactions. Learn how our virtual cards redefine convenience and security in the digital age."}
   /> 
</div>
        <div className="w-full justify-center items-center px-10 pb-5 py-20">
            <div className="grid md:grid-cols-2 lg:pl-32">
                <div className=" bg-[#fafafa]">
                <div className="bg-[#fafafa] border rounded-lg lg:w-[561px]  lg:h-[470px]   ">
                   <div className="items-center pt-10 lg:w-[439px] lg:h-[293px] lg:pl-10"><img src="/asset/elevate.svg" alt="" /></div>
                  <h3 className="text-[14px] font-bold lg:text-2xl pl-10 pt-16  text-[var(--text-color)]">Elevate your payment experience</h3>
                  <p className="text-[14px] opacity-50 pl-10 pt-2 text-[var(--text-color)]">Make secure and contactless payments with your smartphone or wearable device, eliminating the need to carry physical cards.</p>
                </div>
                
                <div className="pt-5 bg-[#fafafa]">
                <div className="bg-[#fafafa] border rounded-lg lg:w-[561px]  lg:h-[470px]">
                   <div className="items-center pt-10 lg:w-[439px] lg:h-[293px] pl-10"><img src="/asset/global shopping.svg" alt="" /></div>
                  <h3 className="text-[14px] font-bold lg:text-2xl pl-10 pt-16  text-[var(--text-color)]">Global shopping experience</h3>
                  <p className="text-[14px] opacity-50 pl-10 pt-2 text-[var(--text-color)]">Make purchases in any currency directly with your virtual card. Tulu Purse automatically converts the amount at competitive exchange rates, eliminating the need for pre-conversion.</p>
                </div>

                </div>

                </div>


                <div>
                <div className="bg-[#fafafa] border rounded-lg lg:w-[561px]  lg:h-[1,067px] lg:pr-40">
                   <div className="items-center pt-5 lg:w-[500px] lg:h-[500px]  pl-10 pb-20"><img src="/asset/global.svg" alt="" /></div>
                  <h3 className="text-[14px] font-bold lg:text-2xl pl-10 pt-56  text-[var(--text-color)]">Secure and trustworthy transactions</h3>
                  <p className="text-[14px] opacity-50 pl-10 pt-5 pb-10 text-[var(--text-color)]">Instantly lock or freeze your virtual card directly within the app in case of loss or theft, preventing unauthorized use and protecting your funds.</p>
                 <div className="pl-10 pb-5">
                 <Link
                href={
                  "https://tulupay.com/signup-method?prod=switch&in=false&biz=true&&ins=true"
                }
                className="py-2 px-6 bg-[#FFD900] rounded-[7px] border hover:border-text-yellow text-black hover:text-[#FFD900] hover:bg-black hover:border hover:border-solid border-color-secondary">
                 Set up your account
              </Link>
                 </div>
                </div>
                </div>
            </div>
        </div>

         <div className=" flex flex-col-reverse items-center gap-[2rem]  lg:space-x-[100px] text-[var(--text-color)] justify-center lg:flex-row py-20 lg:pl-40 px-10">
           <Img
            priority
            darkModeSrc={"/asset/scan2.svg"}
            lightModeSrc={"/asset/scan2.svg"}
            alt="cards"
            height={400}
            width={400}
            className="lg:p-[40px] px-[70px] py-[55px] sm: md:h-[380px] lg:h-[400px] lg:w-[400px] bg-[var(--tab-color)] rounded-[7px]"/>

<div>
             <Payment1
             header={"Enhanced security measures"}
             paragraph1={"Tulu Purse utilizes industry-leading security protocols to safeguard your virtual card information. Real-time transaction monitoring helps identify and prevent suspicious activity."}
             btn={"Set up your account"}
             />
        </div>
          </div>

          <div>
           <Props3
            header={"Customer testimonials that speak volumes"}
            paragraph={"Discover why so many people choose us for their multi-currency needs."}
          />
        </div>
        {/* 16 */}
        <div className="lg:pl-36  lg:pr-36 px-10">
          <Img
            darkModeSrc={"/asset/Property1.svg"}
            lightModeSrc={"/asset/Property1.svg"}
            properties={"w-full"}
            height={200}
            width={300}
          />
        </div>

        <div>
          <Props4
            header={"Download our app"}
            paragraph1={"Thousands are already enjoying the benefits of Tulu Purse. Download the app and join the movement!"}
            image1={"/asset/image 103.svg"}
            image2={"/asset/png-transparent-app-store-apple-google-play-apple-text-logo-mobile-phones-removebg-preview 1.svg"}
            image3={"/asset/Frame (1).svg"}
            image4={"/asset/Frame 1000004517.svg"}
            image5={"/asset/dave.svg"}
          />
        </div>



    </section>
   <Footer/>
   </>
      
      )}
