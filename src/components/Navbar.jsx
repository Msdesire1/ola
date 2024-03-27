"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { IoMdArrowDropdown, IoMdNotificationsOutline } from "react-icons/io";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { BsMoon, BsSun } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { TbGridDots, TbReport } from "react-icons/tb";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const Menu = (Props) => {
  return (
    <Link href={Props.link}>

     <div className="">
     <div className="flex  hover:bg-[var(--secondary-color)] p-1  hover:rounded-[5px] gap-1 bg-[var(--tetiary-color)] ">

        <Image
          height={33}
          width={70}
          className="h-[60px]"
          src={Props.img}
          alt="Logo"
        />
        <div className="flex flex-col gap-1 pt-2">
          <h4 className="text-[17px] font-[500] capitalize text-[var(--text-color)]">
            {Props.head}
          </h4>
          <p className="font-[500] text-[11px] text-[var(--text-color)] opacity-50">
            {Props.sub}
          </p>
        </div>
      </div>
     </div>
    </Link>
  );
};

const Navbar = ({ icon, handleToggleIcon }) => {
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);
  const [dropdown3Open, setDropdown3Open] = useState(false);
  const [dropdown4Open, setDropdown4Open] = useState(false);

  const [mobileDropdown1Open, setMobileDropdown1Open] = useState(false);
  const [mobileDropdown2Open, setMobileDropdown2Open] = useState(false);
  const [mobileDropdown3Open, setMobileDropdown3Open] = useState(false);
  const [mobileDropdown4Open, setMobileDropdown4Open] = useState(false);

  const [menu, setMenu] = useState(false);
 
  const dropdown1Ref = useRef(null);
  const dropdown2Ref = useRef(null);
  const dropdown3Ref = useRef(null);
  const dropdown4Ref = useRef(null);

  const handleDropdown1 = () => {
    setDropdown1Open(!dropdown1Open);
  };

  const handleDropdown2 = () => {
    setDropdown2Open(!dropdown2Open);
  };

  const handleDropdown3 = () => {
    setDropdown3Open(!dropdown3Open);
  };

  const handleDropdown4 = () => {
    setDropdown4Open(!dropdown4Open);
  };

  const toggleMenu = () => {
    setMenu(!menu);
  };


  

  return (
    <div className="px-[3%] shadow sticky top-0 bg-[#000000] nav-wrapper z-50 pt-5">
      <div>
        <div className="w-full flex items-center justify-between">
          <Link href={"/"} className="flex z-[1000] items-center lg:pl-20">
            <Image
              width={150}
              className="h-auto"
              height={130}
              src="/asset/Frame 1000004442.svg"
              alt="logo"
            />
          </Link>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <div
                className="relative"
                onMouseEnter={handleDropdown1}
                onMouseLeave={handleDropdown1}
              >
                <button className="text-white py-2 rounded-md text-sm font-medium focus:outline-none">
                  <span className="flex flex-row gap-2 items-start">
                  Products
                    <IoMdArrowDropdown />
                  </span>
                </button>
                {dropdown1Open && (
                  <div
                    className={`transition nav-drop-down duration-150 w-[800px] left-[-200px] bg-[var(--tetiary-color)] ease-out absolute z-50  rounded-md shadow-lg cursor-pointer`}
                    ref={dropdown1Ref}
                  >
                    <ul className="py-[10px] px-2 grid grid-cols-2 gap-5">
                      <Menu
                        link="/payment"
                        img="/asset/logo1.svg"
                        head="Multi-currency account"
                        sub="Payment made easy with our streamlined Tulupay process."
                      />
                      <Menu
                        link="/swap"
                        img="/asset/logo2.svg"
                        head="Swap money"
                        sub="Payment made easy with our streamlined Tulupay process."
                      />
                      <Menu
                        link="/expense"
                        img="/asset/logo3.svg"
                        head="Expense management"
                        sub="Payment made easy with our streamlined Tulupay process."
                      />
                       <Menu
                        link="/virtual"
                        img="/asset/logo4.svg"
                        head="Virtual Card"
                        sub="Payment made easy with our streamlined Tulupay process."
                      /> 
                      <Menu
                        link="/money"
                        img="/asset/logo5.svg"
                        head="Money transfer"
                        sub="Payment made easy with our streamlined Tulupay process."
                      />
                      {/* <Menu
                        link="/money"
                        img="/assets/logo5.svg"
                        head="Money transfer"
                        sub="Increase engagement in your store."
                      /> */}




                    </ul>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={handleDropdown2}
                onMouseLeave={handleDropdown2}
              >
                <button className="text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none">
                  <span className="flex flex-row gap-2 items-center">
                    Solutions <IoMdArrowDropdown />
                  </span>
                </button>
                {dropdown2Open && (
                  <div
                    className={`transition nav-drop-down duration-150 w-[800px] bg-[var(--tetiary-color)] ease-out left-[-200px] absolute z-50  rounded-md shadow-lg cursor-pointer`}
                    ref={dropdown2Ref}
                  >
                    <ul className="py-[10px] px-2 grid grid-cols-2 gap-5 ">
                      <Menu
                        link="/Individuals"
                        img="/asset/logo1.svg"
                        head="Individuals"
                        sub="Payment made easy with our streamlined Tulupay process."
                      />
                      <Menu
                        link="/Travelers"
                        img="/asset/logo2.svg"
                        head="Travelers"
                        sub="Payment made easy with our streamlined Tulupay process."
                      />
                      <Menu
                        link="/Freelancers"
                        img="/asset/logo4.svg"
                        head="Freelancers"
                        sub="Payment made easy with our streamlined Tulupay process."
                      />
                      <Menu
                        link="Creatives"
                        img="/asset/logo5.svg"
                        head="Creatives"
                        sub="Payment made easy with our streamlined Tulupay process."
                      />
                      {/* <Menu
                        link="atm"
                        img="/assets/navbar/machine.svg"
                        head="ATM"
                        sub="Convenient access to your funds through our Automated Teller Machine."
                      /> */}
                    </ul>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={handleDropdown3}
                onMouseLeave={handleDropdown3}
              >
                <button className="text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none">
                  <span className="flex flex-row gap-2 items-center">
                  Pricing
                    <IoMdArrowDropdown />
                  </span>
                </button>
                {dropdown3Open && (
                  <div
                    className={`transition nav-drop-down duration-150 w-[300px] right-[-200px] bg-[var(--tetiary-color)] ease-out absolute z-50  rounded-md shadow-lg cursor-pointer`}
                    ref={dropdown3Ref}
                  >
                    <ul className="py-[10px] px-2 grid grid-cols-1 gap-5">
                      <Menu
                        link="#"
                        img="/assets/navbar/documentation.svg"
                        head="Documenttation"
                        sub="Convenient access to your funds through our Automated Teller Machine"
                      />
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
                <a href="#support" className="text-[var(--text-color)] text-white text-[14px] pl-16 flex  gap-1 underline py-3"><IoIosHelpCircleOutline />Support</a>
              </div>


          <div className="hidden relative lg:flex lg:flex-row items-center my-3 lg:gap-3 lg:pr-20">
            <button>
              <span onClick={handleToggleIcon}>
                {icon ? (
                  <BsMoon className="text-white" />
                ) : (
                  <BsSun className="text-white" />
                )}
              </span>
            </button>

            <Link
              href={"/"}
              // href={"/login"}
             
              className='text-yellow-300 px-5 text-[14px]  py-2 border border-gray-700 rounded-lg '
            >
              Log in
            </Link>
            <Link
              href={"https:/"}

              className='px-10 py-2 bg-[#FFD900] rounded-[7px] border hover:border-text-yellow text-black hover:text-[#FFD900] hover:bg-black hover:border hover:border-solid border-color-secondary'
            >
             Register
            </Link>
          </div>
          <div className="lg:hidden z-[1000] flex items-center gap-3">
            <button>
              <span onClick={handleToggleIcon}>
                {icon ? (
                  <BsMoon className="text-white" />
                ) : (
                  <BsSun className="text-white" />
                )}
              </span>
            </button>
            
            <button
              onClick={toggleMenu}
              className={`  ${menu ? "toggle open" : "toggle"}`}
            >
              <div className="first"></div>
              <div className="second"></div>
              <div className="third"></div>
            </button>
            <div
        className={`lg:hidden pt-24 pl-4 h-screen mx-auto transition-[all,3s,ease-linear] container ${menu ? "ml-[0px]" : "ml-[-1500px]"
          } absolute top-0 left-0 bg-black z-[400] flex flex-col gap-5`}
      >
        <div className="flex flex-col w-full overflow-y-scroll gap-3 py-3">
          <div className="relative">
            <button
              onClick={() => setMobileDropdown1Open(!mobileDropdown1Open)}
              className="text-white w-full flex justify-between items-center px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
            >
              <span>Products</span>
              <span className="flex justify-end text-[35px]">
                {mobileDropdown1Open ? (
                  <RiArrowDropUpLine />
                ) : (
                  <RiArrowDropDownLine />
                )}
              </span>
            </button>
            {mobileDropdown1Open && (
              <div
                className=" nav-drop-down w-full  bg-[var(--tetiary-color)] rounded-md shadow-lg cursor-pointer"
                ref={dropdown1Ref}
              >
                <ul className="py-[10px] px-2 grid grid-cols-1 gap-5">
                  <Menu
                    link="/fiat"
                    img="/assets/navbar/fiat.svg"
                    head="Fiat currency"
                    sub="Seamless bridge between traditional finance and digital transaction."
                  />
                  <Menu
                    link="/cbdcs"
                    img="/assets/navbar/cbdcs.svg"
                    head="CBDC"
                    sub="Facilitating the future of finance through central bank digital currency transaction."
                  />
                  {/* <Menu
                    link="/virtual"
                    img="/assets/navbar/fiat.svg"
                    head="Virtual Card"
                    sub="Seamless bridge between traditional finance and digital transaction."
                  /> */}
                  <Menu
                    link="/crypto"
                    img="/assets/navbar/crypto.svg"
                    head="Cryptocurrency"
                    sub="Navigate the digital realm of transactions securely and efficiently."
                  />
                  <Menu
                    link="/giftcard"
                    img="/assets/navbar/gift.svg"
                    head="Gift card"
                    sub="Discover endless gifting possiblities and convenience."
                  />
                  <Menu
                    link="/voucher"
                    img="/assets/navbar/voucher.svg"
                    head="Voucher"
                    sub="Increase engagement in your store."
                  />
                </ul>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => setMobileDropdown2Open(!mobileDropdown2Open)}
              className="text-white w-full flex justify-between items-center px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
            >
              <span>Solutions</span>
              <span className="flex justify-end text-[35px]">
                {mobileDropdown2Open ? (
                  <RiArrowDropUpLine />
                ) : (
                  <RiArrowDropDownLine />
                )}
              </span>
            </button>
            {mobileDropdown2Open && (
              <div
                className=" nav-drop-down w-full  bg-[var(--tetiary-color)] rounded-md shadow-lg cursor-pointer"
                ref={dropdown2Ref}
              >
                <ul className="py-[10px] px-2 grid grid-cols-1 gap-5">
                  <Menu
                    link="/wallet"
                    img="/assets/navbar/Group1140.svg"
                    head="Wallets"
                    sub="Safely manage, store and access your funds within our digital wallet system."
                  />
                  <Menu
                    link="/cardpage"
                    img="/assets/navbar/atm.svg"
                    head="Debit & Credit card"
                    sub="Manage your financial transactions using our widely card options."
                  />
                  <Menu
                    link="/nfc"
                    img="/assets/navbar/card.svg"
                    head="NFC card"
                    sub="Experience fast and secure transactions with near field communication card."
                  />
                  <Menu
                    link="pos"
                    img="/assets/navbar/pos.svg"
                    head="POS Machine"
                    sub="Modernize your business transaction with our state-of-the-art point of sales machine."
                  />
                  <Menu
                    link="atm"
                    img="/assets/navbar/machine.svg"
                    head="ATM"
                    sub="Convenient access to your funds through our Automated Teller Machine."
                  />
                </ul>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => setMobileDropdown3Open(!mobileDropdown3Open)}
              className="text-white w-full flex justify-between items-center px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
            >
              <span>Pricing</span>
              <span className="flex justify-end text-[35px]">
                {mobileDropdown3Open ? (
                  <RiArrowDropUpLine />
                ) : (
                  <RiArrowDropDownLine />
                )}
              </span>
            </button>
            {mobileDropdown3Open && (
              <div
                className="nav-drop-down w-full  bg-[var(--tetiary-color)] rounded-md shadow-lg cursor-pointer"
                ref={dropdown3Ref}
              >
                <ul className="py-[10px] px-2 grid grid-cols-1 gap-5">
                  <Menu
                    link="#"
                    img="/assets/navbar/documentation.svg"
                    head="Documenttation"
                    sub="Convenient access to your funds through our Automated Teller Machine"
                  />
                </ul>
              </div>
            )}
          </div>

          <div className="flex mt-48 flex-row gap-2">
            <Link
              href={"https://tulupay.com/login?prod=switch"}
              // href={"/login"}
              className="py-2 px-6 hover:bg-[#FFD900] rounded-[7px] border hover:border-text-yellow hover:text-black text-[#FFD900] bg-black hover:border hover:border-solid border-color-secondary"
            >
              Sign in
            </Link>
            <Link
              href={"https://tulupay.com/signup-method?prod=switch&in=false&biz=true&&ins=true"}
              className="py-2 px-6 bg-[#FFD900] rounded-[7px] border hover:border-text-yellow text-black hover:text-[#FFD900] hover:bg-black hover:border hover:border-solid border-color-secondary"
            >
              Get started
            </Link>
          </div>
          <style jsx>{`
            ::-webkit-scrollbar {
              width: 0px;
            }
          `}</style>
        </div>
      </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Navbar;