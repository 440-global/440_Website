import {useState} from "react";
import Link from "next/link";
import LiveYouTubeIcon from "./LiveButton";
import { IoIosCloseCircle } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CircleUser } from "lucide-react";

const Navbar = ({scrollTop, handlePopup, scrollToLive, handleNewsPopup}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-40 lg:py-6 md:grid grid-cols-12">
        <div className="col-span-10 col-start-2">
          <nav
            className={`px-8 h-20 flex flex-col justify-center md:border-b w-full lg:rounded-lg md:shadow-lg md:bg-white ${
              scrollTop >= 100 ? "bg-white shadow-lg" : "bg-transparent"
            }`}
          >
            <div className="container">
              <div className="flex items-center">
                {/* Logo */}
                <Link href="/">
                  <img
                    alt="get 440 logo"
                    className="w-[80px] h-[80px] hidden md:block"
                    src="/images/440_logo.png"
                  />
                  <img
                    alt="get 440 logo"
                    className="w-[100px] block md:hidden"
                    src="/images/440_logo.png"
                  />
                </Link>

                {/* Mobile Menu Button */}
                <button  
                  className="w-10 h-10 flex lg:hidden items-center justify-center rounded-md ml-auto bg-slate-900 bg-opacity-0 hover:bg-opacity-10"
                  onClick={scrollToLive}
                >
                <LiveYouTubeIcon/>
                </button>
                <button
                  type="button"
                  className="w-10 h-10 flex lg:hidden items-center justify-center rounded-md bg-slate-900 bg-opacity-0 hover:bg-opacity-10 ml-auto"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.00781 15H0M18 1H0M18 8H0"
                      stroke={`${scrollTop >= 100 ? "#000" : "#fff"}`}
                      strokeMiterlimit="10"
                    ></path>
                  </svg>
                </button>
               
                <ol className="items-center space-x-6 ml-auto hidden lg:flex">
                <li className="cursor-pointer text-gray-600 hover:text-primary transition duration-150" onClick={scrollToLive}>
                      <LiveYouTubeIcon/>
                  </li>
                {/* <li className="cursor-pointer text-gray-600 hover:text-primary transition duration-150">
                    <Link href="https://shop.4401.live/" target="_blank">
                      RFQ
                    </Link>
                  </li> */}
                  {/* <li className="cursor-pointer text-gray-600 hover:text-primary transition duration-150">
                    <Link href="https://shop.4401.live" target="_blank">
                      Shop
                    </Link>
                  </li> */}
                  <li className="w-[1px] h-6 bg-gray-300"></li>
                  <li className="cursor-pointer text-gray-600 hover:text-primary transition duration-150">
                    {/* <Link href="https://chat.whatsapp.com/GSm70mBMrkOET3wrr8eJoO?mode=ems_copy_t" target="_blank">
                      Join community
                    </Link> */}
                     <Link href="https://shop.4401.live" target="_blank">
                      Join a pool
                    </Link>
                  </li>
                  <li className="w-[1px] h-6 bg-gray-300"></li>
                  <li className="cursor-pointer text-gray-600 hover:text-primary transition duration-150">
                    <button onClick={handleNewsPopup}>
                      News
                    </button>
                  </li>
                  <li className="w-[1px] h-6 bg-gray-300"></li>
                  <li className="cursor-pointer transition duration-150 flex space-x-2 items-center">
                    <button
                      onClick={handlePopup}
                      type="button"
                      className="md:flex items-center hidden text-white hover:bg-primary md:border md:bg-transparent md:border-primary md:text-primary md:hover:bg-primary md:hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-8 py-2.5 text-center md:mr-0"
                    >
                      Sign up
                      <span className="ml-2">
                          <CircleUser size={18} />
                        </span>
                    </button>
                  </li>
                </ol>
                
              </div>

              {isOpen && (
                <div className="absolute top-0 left-0 w-full bg-white shadow-lg lg:hidden p-6 space-y-6">
                  <div className="flex justify-between items-center">
                    <img
                      alt="get 440 logo"
                      className="w-[100px] block md:hidden -ml-2"
                      src="/images/logo.svg"
                    />
                    <button onClick={() => setIsOpen(!isOpen)}>
                      <IoIosCloseCircle size={30} className="text-red-500"/>
                    </button>
                  </div>
                  <ol className="space-y-4 ">
                    {/* <li className="cursor-pointer text-gray-600 hover:text-primary transition duration-150">
                      <Link href="https://shop.4401.live" target="_blank">
                        Shop
                      </Link>
                    </li> */}
                    <li className="cursor-pointer text-gray-600 hover:text-primary transition duration-150">
                      {/* <Link href="https://chat.whatsapp.com/GSm70mBMrkOET3wrr8eJoO?mode=ems_copy_t" target="_blank">
                        Join community
                      </Link> */}
                       <Link href="https://shop.4401.live" target="_blank">
                        Join a pool
                      </Link>
                    </li>
                    <li onClick={handleNewsPopup} className="cursor-pointer text-gray-600 hover:text-primary transition duration-150">
                    <button >
                      News
                    </button>
                  </li>
                    <li className="cursor-pointer w-full">
                      <button
                        onClick={handlePopup}
                        type="button"
                        className="text-white bg-primary flex justify-center items-center w-full hover:bg-opacity-80 font-medium rounded-full text-sm px-8 py-2.5"
                      >
                        Sign up
                        <span className="ml-2">
                            <CiUser size={18}/>
                          </span>
                      </button>
                    </li>
                  </ol>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
