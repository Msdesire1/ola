import Image from "next/image";
import Link from "next/link";
import Props3 from "@/components/props/Props3"; 
 import HomeProps from "@/components/HomeProps";
import { Img } from "@/components/Img";
import Props4 from "@/components/props/Props4";
import Footer from "@/components/props/Footer";


export default function money(){
   return (
<>
<section className="bg-[var(--secondary-color)]  text-[var(--text-color)]">
    <div className='grid md:grid-cols-2 items-center gap-40 grid-cols-1 w-full  lg:py-[5%]'>
        <div className='w-full flex flex-col gap-3 lg:px-[25%] px-10'>
          <h1 className='font-bold w-[155%]   lg:text-6xl text-xl'>
          Break down borders, build connections
          </h1>
          <p className='lg:text-[14px]  lg:w-[120%] py-4  text-[11px]'>Send and receive funds across borders with ease, fostering stronger connections with family, friends, and business associates internationally.</p>

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
        <img height={418} width={540} src="/asset/TULUPAY (2).svg" className="lg:h-[px]" alt="png" />
        </div>
      </div>

    <div>
   <Props3
   header={"Breaking boundaries with money transfers"}
   paragraph={"Tulu Purse empowers you to participate in the global economy, invest internationally, or simply share financial support with loved ones abroad."}
   /> 
</div>
<div className="w-full justify-center items-center px-10 pt-20 pb-3">
          <div className="grid  md:grid-cols-2 text-[var--text-color] gap-5">
            <div className="lg:pl-40">
              <div className="bg-cover bg-no-repeat h-[520px] w-[541px] bg-[url('/asset/Rectangle.svg')]">
                <div className="lg:text-start px-[5%] flex  flex-col lg:gap-5 gap-5 ] pt-7">
                  <h1 className="lg:text-[30px] lg:px-[7%] text-[30px] leading-[60px] font-[700] text-[var(--text-color)]">
                  Multi-currency support
                  </h1>
                  <p className="lg:text-[14px] text-[14px] flex justify-center items-center lg:px-[7%] text-[var(--text-color)]  opacity-80">
                  Tulu Purse supports a wide range of currencies, allowing you to cater to the needs of your international recipients and avoid unnecessary conversions.
                  </p>
               <div className="pl-20">
               <Img
            darkModeSrc={"/asset/Frame10svg"}
            lightModeSrc={"/asset/Frame10.svg"}
            properties={"w-3/3"}
            height={240}
            width={390}
          />
               </div>
                 
                </div>
              </div>
            </div>
            <div className="lg:pr-20">
              <div className="bg-cover bg-no-repeat h-[380px] w-[541px] bg-[url('/asset/Rectangle1.svg')]">
                <div className="lg:text-start px-[5%] flex  flex-col lg:gap-5  pt-7">
                  <h1 className="lg:text-[30px] lg:px-[7%]  text-[30px] leading-[60px] font-[700] text-[var(--text-color)]">
                  Low transaction fees
                  </h1>
                  <p className="lg:text-[14px] text-[14px] flex justify-center items-center lg:px-[7%] text-[var(--text-color)]  opacity-80">
                  Tulu Purse's cost-effective money transfer solutions allow you to focus on what matters most - building connections and achieving your financial goals.
                  </p>
               
                  <div className="pl-24">
                  <Img
            darkModeSrc={"/asset/usd.svg"}
            lightModeSrc={"/asset/usd.svg"}
            properties={"w-2/3"}
            height={400}
            width={160}
          />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*seven  */}

        <div className="grid  md:grid-cols-2 text-[var--text-color] gap-5 px-10">
          <div className="lg:pl-40">
            <div className="bg-cover bg-no-repeat h-[380px] w-[541px] bg-[url('/asset/Rectangle1.svg')]">
              <div className="lg:text-start px-[5%] flex  flex-col lg:gap-5 pt-2">
                <h1 className="lg:text-[30px] lg:px-[7%]  text-[30px] leading-[60px] font-[700] text-[var(--text-color)]">
                Instant transfers
                </h1>
                <p className="lg:text-[14px] text-[14px] flex justify-center items-center lg:px-[7%] text-[var(--text-color)]  opacity-80">
                Experience the speed and convenience of instant money transfers with Tulu Purse. Funds are transferred immediately, ensuring your recipient receives them quickly and efficiently.
                </p>
             <div className="pl-24">
             <Img
            darkModeSrc={"/asset/Authorize payment.svg"}
            lightModeSrc={"/asset/Authorize payment.svg"}
            properties={"w-2/3"}
            height={190}
            width={190}
          />
             </div>
           </div>
            </div>
          </div>
          <div className="lg:pr-20">
            <div className="bg-cover bg-no-repeat h-[520px] w-[541px] bg-[url('/asset/Rectangle.svg')]">
              <div className="lg:text-start px-[5%] flex  flex-col lg:gap-5 ] pt-2">
                <h1 className="lg:text-[30px] lg:px-[7%]  text-[30px] leading-[60px] font-[700] text-[var(--text-color)]">
                Secure cross-border transactions
                </h1>
                <p className="lg:text-[14px] text-[14px] flex justify-center items-center lg:px-[7%] text-[var(--text-color)]  opacity-80">
                Enjoy peace of mind knowing your money transfers are protected with 
                industry-leading security measures. Tulu Purse utilizes advanced encryption technology and fraud prevention protocols to safeguard your financial information.
                </p>
               <div className="pl-24">
               <Img
            darkModeSrc={"/asset/OBJECTS.svg"}
            lightModeSrc={"/asset/OBJECTS.svg"}
            properties={"w-3/3"}
            height={260}
            width={290}
          />
               </div>
              </div>
            </div>
          </div>
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

   )}