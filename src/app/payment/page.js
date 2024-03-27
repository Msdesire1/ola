import Payment from "@/components/props1/Payment"
import Image from "next/image"
import { LiaArrowRightSolid } from "react-icons/lia";
import Link from "next/link"
import { TbCircleNumber1 } from "react-icons/tb";
import { MdOutlineRemove } from "react-icons/md";
import { Img } from "@/components/Img";
import Props3 from "@/components/Props/Props3";
import Pay from "@/components/props1/Pay"
import {Groupcard} from "@/components/Groupcard";
import Props4 from "@/components/props/Props4";
import Footer from "@/components/props/Footer";


export default function payment() {
    return (
      <>
      <section className="bg-[var(--secondary-color)]  text-[var(--text-color)]">
             <div className='grid md:grid-cols-2 items-center gap-10 grid-cols-1 w-full  lg:py-[5%]'>
        <div className='w-full flex flex-col gap-3 pt-2 lg:px-[25%] px-10'>
          <h1 className='font-bold w-[155%]   lg:text-6xl text-xl'>
          Conquer borders without breaking a sweat
          </h1>
          <p className='lg:text-[14px] w-[120%] py-4  text-[11px]'>Transact seamlessly in different currencies, all at competitive exchange rates.</p>

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
        <img height={451} width={500} src="/asset/TULUPAY ECCOSYSTEM@5-1536x730 (5) 1.svg" className="lg:h-[px]" alt="png" />
        </div>

      </div>
      <div className="container-fluid bg-[var(--secondary-color)] md:px-16 px-8 lg:px-24 py-8 md:py-20 normal-case">
        <div className="container flex flex-col-reverse items-center gap-[2rem]  lg:space-x-[100px] text-[var(--text-color)] justify-center lg:flex-row ">
          <Img
            priority
            darkModeSrc={"/asset/Rectangle1.svg"}
            lightModeSrc={"/asset/Rectangle1.svg"}
            alt="cards"
            height={400}
            width={400}
            className="lg:p-[40px] px-[50px] py-[65px] sm: md:h-[380px] lg:h-[400px] lg:w-[400px] bg-[var(--tab-color)] rounded-[7px]"
          />
          <div className="lg:w-1/2 w-full text-[var(--text-color)] text-left">
            <h1 className="font-[700] text-[18px] lg:leading-[40px] leading-[20px] text-[var(--text-color)] lg:text-[30px]">
            Manage Your Money Your Way
            </h1>
            <p className="lg:my-6 my-[10px] text-[14px] lg:text-[16px] font-[400] opacity-50">
            Tulu Purse understands that everyone's financial needs are unique. That's why we offer a flexible and customizable platform that puts you in control. Open multiple
             multi-currency accounts to easily manage different aspects of your financial life. Tulu Purse empowers you to manage your money on your terms, wherever you are in the world.
            </p>
            {/* <div className="flex font-[700] text-text-yellow gap-0.5">
              <Link
                href={
                  "https://tulupay.com/signup-method?prod=switch&in=false&biz=true&&ins=true"
                }
              >
                Get started
              </Link>
              <span>
                <MdOutlineRemove />
              </span>
            </div> */}
          </div>
        </div>
      </div>
      <div>
          <Props3
            header={"Your financial gateway to the world"}
            paragraph={"Activate your Tulu Purse account and experience the freedom of effortless multi-currency transactions."}
          />
        </div>

        <div> 
      <Payment
     head= {"Activate your financial toolkit"}
      head2={"Benefits of a Tulu Purse account"}
      paragraph2={"Receive money internationally too, with account details and IBANs for 9 currencies. Use them to get money from overseas."}
      paragraph3={"Creating a secure login"}
      paragraph4={"Verifying your identity"}
      image={"/asset/payment.svg"}
      />
</div> 

      <div> 
      <Pay
       image={"/asset/payment.svg"}
     head= {"Expanding your financial horizon"}
      head2={"Adding a new currency to your account"}
      paragraph2={"Receive money internationally too, with account details and IBANs for 9 currencies. Use them to get money from overseas."}
      paragraph3={"Different methods for transferring funds"}
      paragraph4={"Associated fees"}
     
      />
</div> 

<div> 
      <Payment
     head= {"Break down currency barriers"}
      head2={"Embrace Global Opportunities"}
      paragraph2={"Receive money internationally too, with account details and IBANs for 9 currencies. Use them to get money from overseas."}
      paragraph3={"Empower Your Loved Ones"}
      paragraph4={"Experience a Borderless World"}
      image={"/asset/payment.svg"}
      />
</div> 
<div>
<Groupcard

        headOne={"Single platform management"}
        paragraphOne={
          "Consolidate all your foreign currency holdings and transactions into one secure and user-friendly platform. No more juggling multiple bank accounts and logins. Send, receive, and convert currencies directly within your Tulu Purse account."}
        headTwo={"Cost-effective transactions"}
        paragraphTwo={
          "Save money on international transactions with Tulu Purse's multi-currency account. Enjoy competitive exchange rates, a transparent fee structure with no hidden costs, and the ability to strategically convert currencies in advance to potentially save even more."}
        headThree={"Transparent swapping"}
        paragraphThree={
          "Convert currencies seamlessly within your Tulu Purse account in a few simple steps. No need for complex processes or multiple platforms. Swap currencies with ease and focus on what matters most - your international transactions."}
      />
</div>
<div>
           <Props3
            header={"Join 2,328 people on the success trains"}
            paragraph={"Create an invoice, accept an in-person payment with your phone, or share a payment link directly from your Dashboard to start generating revenue in minutes—no code required"}
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
      };