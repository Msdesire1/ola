import Image from "next/image";
import Link from "next/link";
import { TbCash } from "react-icons/tb";
import Props from "@/components/props/Propsone";
import { LiaArrowRightSolid } from "react-icons/lia";
import { Img } from "@/components/Img";
import { TbDevicesDollar } from "react-icons/tb";
import { PiTidalLogoBold } from "react-icons/pi";
import { TbTransform } from "react-icons/tb";
import { TbDiscountOff } from "react-icons/tb";
import Props4 from "@/components/props/Props4";
import Props2 from "@/components/props/Props2";
import Props3 from "@/components/Props/Props3";
import Footer from "@/components/props/Footer";
export default function Home() {
  return (
    <>
      <section className="bg-[var(--secondary-color)] text-[var(--text-color)]">
        {/* <div className="bg-cover bg-no-repeat h-90 bg-[url('/asset/bg.svg')] pt-10 px-10"> */}
        <div className="relative">
          <Img
            darkModeSrc={"/asset/bg.svg"}
            lightModeSrc={"/asset/bg.svg"}
            properties={"w-full shadow-lg"}
            height={500}
            width={500}
          />
        </div>
        <div className="w-full flex  absolute lg:top-[28%] top-[20%] justify-center items-center flex-col gap-16 pt-20 px-10">
          <div className="text-left lg:text-center px-[5%] flex  flex-col lg:gap-10 gap-5 ]">
            <h1 className="lg:text-[50px] lg:px-[23%]  text-[30px] leading-[60px] font-[700] text-[var(--text-color)]">
              Your one-stop wallet for all things currency!
            </h1>
            <p className="lg:text-[16px] text-[14px] flex justify-center items-center lg:px-[22%] text-[var(--text-color)]  opacity-80">
              Tulu Purse keeps your finances organized. Effortlessly convert, save, transact, swap, and manage all your traditional currencies in one place.
            </p>
            <div className="relative  flex  gap-7  justify-center">
              <Link
                href={
                  "https://tulupay.com/signup-method?prod=switch&in=false&biz=true&&ins=true"
                }
                className="py-2 px-6 bg-[#FFD900] rounded-[7px] border hover:border-text-yellow text-black hover:text-[#FFD900] hover:bg-black hover:border hover:border-solid border-color-secondary"
              >
                Start banking with us
              </Link>

              <Link
                href={
                  "https://tulupay.com/signup-method?prod=switch&in=false&biz=true&&ins=true"
                }
                className="py-2 px-6 text-[var(--text-color)] rounded-[7px] border hover:border-text-yellow text-black hover:text-[#FFD900] hover:bg-black hover:border hover:border-solid border-color-secondary flex gap-3"
              >
                Contact support<div className="pt-1"><LiaArrowRightSolid /></div>
              </Link>

            </div>
          </div>
          <div className="relative ">
           <Img
              darkModeSrc={"/asset/Frametop.svg"}
              lightModeSrc={"/asset/Group1.svg"}
              properties={"w-full"}
              height={500}
              width={500}
            />
          </div>
        </div>
        {/* </div>   */}
        {/*one  */}
        {/* <div className="py-10  flex justify-center items-center px-10">
 <div className="border w-1/2  border-gray-400"></div>
 </div> */}
        {/* two */}
        <div className="justify-center items-center lg:gap-20  flex lg:flex-row  flex-col  pt-28  gap-5">
          <div className="flex  gap-3  ">
            <img src="/asset/Frame 1000004456.svg" alt="logo" />
            <p className="text-[var(--text-color)] text-[12px] pt-4">Licensed by the Central Bank of Nigeria</p>
          </div>
          <div className="flex  gap-3  ">
            <img src="/asset/sec(2).svg" alt="logo" />
            <p className="text-[var(--text-color)] text-[12px] pt-4">Licensed by SEC</p>
          </div>

          <div className="flex  gap-3 ">
            <img src="/asset/Frame 1000004456.svg" alt="logo" />
            <p className="text-[var(--text-color)] text-[10px] pt-4">Licensed by NDIC</p>
          </div>
        </div>
        {/*four  */}
        <div className="pt-28 justify-center items-center px-10">
          <div className="flex  justify-center items-center "><button className="btn rounded-xl text-[var(--text-color)] border px-5 py-1 border-gray-100">BENEFITS</button></div>
        </div>
        {/* five */}
        <div>
          <Props
            header={"Level up your finances"}
            paragraph={"Take your finances to the next level with Tulu Purse. Explore the perks that make managing multiple currencies a breeze, giving you the control and freedom you deserve."}
          />
        </div>
        {/* six */}
        <div className="w-full justify-center items-center px-10 pt-20 pb-3">
          <div className="grid  md:grid-cols-2 text-[var--text-color] gap-5">
            <div className="lg:pl-40">
              <div className="bg-cover bg-no-repeat h-[520px] w-[541px] bg-[url('/asset/Rectangle.svg')]">
                <div className="lg:text-start px-[5%] flex  flex-col lg:gap-5 gap-5 ] pt-7">
                  <h1 className="lg:text-[30px] lg:px-[7%]  text-[20px] leading-[60px] font-[300] text-[var(--text-color)]">
                    CONVERSION
                  </h1>
                  <h1 className="lg:text-[30px] lg:px-[7%]  text-[30px] leading-[60px] font-[700] text-[var(--text-color)]">
                    Effortless conversions
                  </h1>
                  <p className="lg:text-[14px] text-[14px] flex justify-center items-center lg:px-[7%] text-[var(--text-color)]  opacity-80">
                    Convert between different currencies quickly and easily, directly within the Tulu Purse app. No more need for third-party exchanges or complex calculations.
                  </p>
                  <div className="lg:pl-16">
                    <Img
                  darkModeSrc={"/asset/$00.svg"}
            lightModeSrc={"/asset/$00.svg"}
            properties={"3/3"}
            height={200}
            width={350}
          />
               </div>


                </div>
              </div>
            </div>
            <div className="lg:pr-20">
              <div className="bg-cover bg-no-repeat h-[380px] w-[541px] bg-[url('/asset/Rectangle1.svg')]">
                <div className="lg:text-start px-[5%] flex  flex-col lg:gap-5  pt-7">
                  <h1 className="lg:text-[30px] lg:px-[7%]  text-[20px] leading-[60px] font-[300] text-[var(--text-color)]">
                    FEES
                  </h1>
                  <h1 className="lg:text-[30px] lg:px-[7%]  text-[30px] leading-[60px] font-[700] text-[var(--text-color)]">
                    Save on fees
                  </h1>
                  <p className="lg:text-[14px] text-[14px] flex justify-center items-center lg:px-[7%] text-[var(--text-color)]  opacity-80">
                    Tulu Purse offers competitive exchange rates and low transaction fees, saving you money compared to traditional currency exchange services.
                  </p>

                  <div className="lg:pl-20">
                    <Img
                  darkModeSrc={"/asset/$001.svg"}
            lightModeSrc={"/asset/$001.svg"}
            properties={"w-3/3"}
            height={50}
            width={350}
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
              <div className="lg:text-start px-[5%] flex  flex-col lg:gap-5 pt-7">
                <h1 className="lg:text-[30px] lg:px-[7%]  text-[20px] leading-[60px] font-[300] text-[var(--text-color)]">
                  SECURITY
                </h1>
                <h1 className="lg:text-[30px] lg:px-[7%]  text-[30px] leading-[60px] font-[700] text-[var(--text-color)]">
                  Security and peace of mind
                </h1>
                <p className="lg:text-[14px] text-[14px] flex justify-center items-center lg:px-[7%] text-[var(--text-color)]  opacity-80">
                  Tulu Purse prioritizes security with robust measures to protect your financial information and transactions. Enjoy peace of mind knowing your money is safe.
                </p>
                <div className="lg:pl-20">
                    <Img
                  darkModeSrc={"/asset/pin.svg"}
            lightModeSrc={"/asset/pin.svg"}
            properties={"w-3/3"}
            height={50}
            width={350}
          />
               </div>
              </div>
            </div>
          </div>
          <div className="lg:pr-20">
            <div className="bg-cover bg-no-repeat h-[520px] w-[541px] bg-[url('/asset/Rectangle.svg')]">
              <div className="lg:text-start px-[5%] flex  flex-col lg:gap-5 ] pt-7">
                <h1 className="lg:text-[30px] lg:px-[7%]  text-[20px] leading-[60px] font-[300] text-[var(--text-color)]">
                  TRANSPARENCY
                </h1>
                <h1 className="lg:text-[30px] lg:px-[7%]  text-[30px] leading-[60px] font-[700] text-[var(--text-color)]">
                  Transparency and control
                </h1>
                <p className="lg:text-[14px] text-[14px] flex justify-center items-center lg:px-[7%] text-[var(--text-color)]  opacity-80">
                  Tulu Purse offers clear exchange rates and fees upfront, empowering you to make informed decisions about your finances.
                </p>
                <div className="pl-16  h-[50px]">
                    <Img
                  darkModeSrc={"/asset/control.svg"}
            lightModeSrc={"/asset/control.svg"}
            properties={"w-3/3"}
            height={50}
            width={350}
          />
               </div>
              </div>
            </div>
          </div>
        </div>
        {/* 8 */}
        <div>
          <Props
            header={"Financial life made easy"}
            paragraph={"Take the hassle out of finances!  Explore Tulu Purse's cool tricks that take your money management skills to the next level."}
          />
        </div>
        {/* 9 */}
        <div className="grid  md:grid-cols-2 text-[var--text-color] gap-5 px-10">
          <Props2
            header={"Multi-currency account"}
            paragraph1={"Ditch the stacks of cash! Tulu Purse lets you hold all your favorite currencies in one convenient account. Effortlessly switch between them, track your balances, and say goodbye to hidden fees."}
            btn={"Learn more"}
          />
          <div data-aos="fade-left" className=" pt-5">
             <Img
              darkModeSrc={"/asset/phone.svg"}
              lightModeSrc={"/asset/phone.svg"}
              properties={"w-[500px] h-[448px]"}
              height={200}
              width={400}
            />
             </div>
        </div>


        {/* 10  */}
        <div className="grid  md:grid-cols-2 text-[var--text-color] gap-5 px-1 pt-10">
          <Props2
            header={"Swap money to any currency"}
            paragraph1={"The world is your oyster with Tulu Purse! Swap between any supported currency with just a few taps. No matter where you are or who you're sending money to, Tulu Purse makes it easy."}
            btn={"Learn more"}
          />
          <div className="pt-20 pb-3 text-[var{--text-color}]"><img src="/asset/jonh.svg" width={"500px"} height={"380px"} alt="" /></div>
        </div>
        {/* 11 */}
        <div className="grid  md:grid-cols-2 text-[var--text-color] gap-5 px-10 pt-10">
          <Props2
            header={"Shop like a local (anywhere!)"}
            paragraph1={"Forget the currency exchange hassle! Use your Tulu Purse virtual card to shop online or in-store, anywhere in the world. Pay in the local currency without hidden fees and enjoy the freedom of global spending."}
            btn={"Learn more"}
          />
          <div className="text-[var{--text-color}]"><img src="/asset/atm.svg" width={"500px"} height={"380px"} alt="" /></div>
        </div>

        {/* 12 */}
        <div className="grid  md:grid-cols-2 text-[var--text-color] gap-5 px-10 py-20">
          <Props2
            header={"Send and receive like a pro"}
            paragraph1={"Sending money home? Tulu Purse makes international transfers a breeze. Send and receive money securely with competitive rates, all within the app."}
            btn={"Learn more"}
          />
          <div className="pt-20 pb-3 text-[var{--text-color}]"><img src="/asset/amount.svg" width={"500px"} height={"380px"} alt="" />
          </div>
        </div>
        {/* 13 */}
        <div className="grid  md:grid-cols-3 text-[var--text-color] gap-5 px-10 bg-[var(--secondary-color)] pb-10">
          <div className="lg:pl-28 bg-[var(--secondary-color)]">
            <div className=" border rounded-md w-[364px] px-4 py-7 h-[260px] bg-[url('/asset/Rectangle5.svg')]">
              <h1 className="lg:text-[30px] lg:px-[7%] text-[30px] leading-[50px] font-[600] text-[var(--text-color)]">It's more than just a wallet!</h1>
              <p className="lg:text-[14px] text-[14px] flex justify-center items-center lg:px-[7%] text-[var(--text-color)] opacity-80">
                We're more than just a place to store your money. Tulu Purse is a community of people who value financial freedom and ease.
              </p>
            </div>
          </div>


          <div className="lg:pl-14">
            <div className="border rounded-md w-[364px] h-[260px] px-5  py-4  bg-[var(--secondary-color)]">
              <div className="pt-5 pl-4 text-6xl text-gray-400">
                <TbCash />
              </div>
              <h1 className="lg:text-[20px] lg:px-[7%] text-[20px] leading-[50px] font-[700] text-[var(--text-color)]">Multicurrency wallet</h1>
              <p className="lg:text-[14px] text-[14px] flex justify-center items-center lg:px-[7%] text-[var(--text-color)] opacity-80">
                Hold all your favorite currencies in one convenient place. Effortlessly switch between them, track your balances, and say goodbye to carrying multiple wallets.
              </p>
            </div>
          </div>
          <div>
            <div className="border rounded-md w-[364px] h-[260px] px-5  py-4  bg-[var(--secondary-color)]">
              <div className="pt-5 pl-4 text-6xl text-gray-400">
                <TbDiscountOff />
              </div>
              <h1 className="lg:text-[20px] lg:px-[7%] text-[20px] leading-[50px] font-[700] text-[var(--text-color)]">Low cost conversion ratet</h1>
              <p className="lg:text-[14px] text-[14px] flex justify-center items-center lg:px-[7%] text-[var(--text-color)] opacity-80">
                Enjoy some of the best rates in the market when converting between currencies. Save money on every transaction and avoid hidden fees.
              </p>
            </div>
          </div>
        </div>
        {/* 14 */}
        <div className="grid  md:grid-cols-3 text-[var--text-color] gap-5 px-10 bg-[var(--secondary-color)] pb-10">
          <div className="lg:pl-28">
            <div className="border rounded-md w-[364px] h-[260px] px-5  py-4  bg-[var(--secondary-color)]">
              <div className="pt-5 pl-4 text-6xl text-gray-400">
                <TbTransform />
              </div>
              <h1 className="lg:text-[20px] lg:px-[7%] text-[20px] leading-[50px] font-[700] text-[var(--text-color)]">Competitive exchange rate</h1>
              <p className="lg:text-[14px] text-[14px] flex justify-center items-center lg:px-[7%] text-[var(--text-color)] opacity-80">
                Get the most out of your money with our competitive exchange rates. We offer transparent pricing so you know exactly what you're paying upfront.
              </p>
            </div>
          </div>
          <div className="lg:pl-14">
            <div className="border rounded-md w-[364px] h-[260px] px-5  py-4  bg-[var(--secondary-color)]">
              <div className="pt-5 pl-4 text-6xl text-gray-400 ">
                <PiTidalLogoBold />
              </div>
              <h1 className="lg:text-[20px] lg:px-[7%] text-[20px] leading-[50px] font-[700] text-[var(--text-color)]">Expenses tracking</h1>
              <p className="lg:text-[14px] text-[14px] flex justify-center items-center lg:px-[7%] text-[var(--text-color)] opacity-80">
                Stay on top of your finances with our built-in expense tracking system. Easily categorize your spending and gain valuable insights into your financial habits.
              </p>
            </div>
          </div>
          <div>
            <div className="border rounded-md w-[364px] h-[260px] px-5  py-4  bg-[var(--secondary-color)]">
              <div className="pt-5 pl-4 text-6xl text-gray-400">
                <TbDevicesDollar />
              </div>
              <h1 className="lg:text-[20px] lg:px-[7%] text-[20px] leading-[50px] font-[700] text-[var(--text-color)]">International money transfert</h1>
              <p className="lg:text-[14px] text-[14px] flex justify-center items-center lg:px-[7%] text-[var(--text-color)] opacity-80">
                Send and receive money internationally with ease and security. Enjoy fast transfer times and competitive rates, all within the Tulu Purse app.
              </p>
            </div>
          </div>
        </div>
        {/* 15 */}
        <div>
          <Props3
            header={"Customer testimonials that speak volumes"}
            paragraph={"Discover why so many people choose us for their multi-currency needs."}
          />
        </div>
        {/* 16 */}
        <div className="pl-36 pr-36">
          <Img
            darkModeSrc={"/asset/Property1.svg"}
            lightModeSrc={"/asset/Property1.svg"}
            properties={"w-full"}
            height={200}
            width={300}
          />
        </div>
        {/* 17 */}
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
      <Footer />
    </>



  );
}
