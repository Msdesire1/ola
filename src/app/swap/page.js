import Image from "next/image";
import Link from "next/link";
import Props3 from "@/components/props/Props3"; 
 import HomeProps from "@/components/HomeProps";
import { Img } from "@/components/Img";
import Props4 from "@/components/props/Props4";
import Footer from "@/components/props/Footer";


export default function swap(){
   return (
<>
<section className="bg-[var(--secondary-color)]  text-[var(--text-color)]">
    <div className='grid md:grid-cols-2 items-center gap-10 grid-cols-1 w-full  lg:py-[5%]'>
        <div className='w-full flex flex-col gap-3 lg:px-[25%] px-10'>
          <h1 className='font-bold w-[155%]   lg:text-6xl text-xl'>
          Effortless currency conversion
          </h1>
          <p className='lg:text-[14px]  lg:w-[120%] py-4  text-[11px]'>Effortlessly swap between currencies, hold various denominations, and track your transactions in real-time.</p>

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
        <div className='lg:w-full  items-center lg:pl-10 px-10'>
        <img height={400} width={487} src="/asset/TULUPAY ECCOSYSTEM@5-1536x730 1.svg" className="lg:h-[px]" alt="png" />
        </div>
      </div>

    <div>
   <Props3
   header={"Simplify your global operations"}
   paragraph={"Effortlessly exchange funds for international investments, online shopping from global retailers, or sending money to loved ones abroad."}
   /> 
</div>

<div>
     <HomeProps
    img={"/asset/key.svg"}
      dark={"/asset/key.svg"}
      paragraph={
        "Say goodbye to guesswork! With real-time exchange rates, you always know exactly how much you'll receive when converting funds. This transparency empowers you to make informed financial decisions and manage your international finances strategically."
      }
      head={"Real-time exchange rates"}
      btn={"Set up your account"}
     />
</div>
<div>
     <HomeProps
      paragraph={
        "No surprises here! Tulu Purse offers a clear and upfront fee structure for all currency conversions. You'll know exactly what costs are involved before you initiate a transaction, allowing you to budget effectively"
      }
      head={"Cost-effective transactions"}
      btn={"Set up your account"}
      img={"/asset/cost effective 1.svg"}
      dark={"/asset/cost effective 1.svg"}
     />
</div>
<div>
     <HomeProps
    img={"/asset/swap.svg"}
      dark={"/asset/swap.svg"}
      paragraph={
        "Enjoy the flexibility of instant conversion for various needs. Whether you need funds for an upcoming trip or want to take advantage of a favorable exchange rate, Tulu Purse empowers you to convert instantly and seize the opportunity."
      }
      head={"Instant conversion"}
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
