import Link from "next/link";
import Image from "next/image";
import Props3 from "@/components/props/Props3";
import HomeProps from "@/components/HomeProps"
import Home1 from "@/components/Home1";
import Props4 from "@/components/props/Props4";
import Footer from "@/components/props/Footer";
import {Img }from "@/components/Img";




export default function expense (){
    return  ( 
        <>
        <section className="bg-[var(--secondary-color)]  text-[var(--text-color)]">
        <div className='grid md:grid-cols-2 items-center gap-40 grid-cols-1 w-full  lg:py-[5%]'>
        <div className='w-full flex flex-col gap-3 pt-2 lg:px-[25%] px-10'>
          <h1 className='font-bold w-[200%] lg:text-6xl text-xl'>
          Master your finances with precision
          </h1>
          <p className='lg:text-[14px] w-[100%] py-4  text-[11px]'>Experience the freedom of international spending with the security of responsible financial management. Tulu Purse's account limits empower you to manage your multi-currency account effectively.</p>

          <div className="relative   justify-center">
              <Link
                href={
                  "https://tulupay.com/signup-method?prod=switch&in=false&biz=true&&ins=true"
                }
                className="py-2 px-6 bg-[#FFD900] rounded-[7px] border hover:border-text-yellow text-black hover:text-[#FFD900] hover:bg-black hover:border hover:border-solid border-color-secondary"
              >Get started
              </Link>
              </div>
        </div>
        <div className='lg:w-full  items-center lg:pl-5 px-10'>
        <img height={450} width={450} src="/asset/tulu.svg" className="lg:h-[px]" alt="png" />
        </div>
        </div>

   <div>
   <Props3
   header={"Taking control of your expenses"}
   paragraph={"Taking control of your expenses is the first step towards achieving financial freedom."}
   /> 
   </div>
   <div>
     <HomeProps
    img={"/asset/liimit.svg"}
      dark={"/asset/liimit.svg"}
      paragraph={
        "Managing international finances can feel overwhelming, especially with the worry of overspending or unauthorized transactions. Tulu Purse solves this by offering a combination of fixed boundaries and secure transactions, ensuring peace of mind with every expense"
      }
      head={"Fixed boundaries, secure transactions"}
      btn={"Set up your account"}
     />
</div>
<div>
     <Home1

img={"/asset/set.svg"}
dark={"/asset/set.svg"}
      paragraph={
        "Personalized virtual card limits work seamlessly with your overall budget. Track your spending across all virtual cards and your main account, gaining valuable insights into your spending habits for each category. This allows you to refine your budget and optimize your spending for a more financially responsible approach.."
      }
      head={"Personalized virtual card limits"}
      btn={"Set up your account"}
    
     />
</div>
<div className="py-10 bg-[var(--secondary-color)] ">
          <Img
            darkModeSrc={"/asset/Frame41svg"}
            lightModeSrc={"/asset/Frame41.svg"}
            properties={"w-full"}
            height={1000}
            width={1200}
          />
        </div>


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

)
  
}