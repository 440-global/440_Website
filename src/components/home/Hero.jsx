import React, {useEffect, useRef} from 'react';
import {FaAngleRight} from "react-icons/fa";
import Typed from "typed.js";
import HeroMobile from "../responsive/HeroMobile";
import Link from 'next/link';
import {BsCart4} from "react-icons/bs";

const Hero = ({handlePopup}) => {
  const el = useRef(null);
  const ed = useRef(null);
  useEffect(() => {
    // const typed = new Typed(ed.current, {
    //   strings: [
    //     "Start with just 50% deposit",
    //     "Nebechi stores",
    //     "Picanto stores",
    //     "Emeka gadgets",
    //     "Aurora stores",
    //     "Foluke stores",
    //     "Mike shoes",
    //     "your stores"
    //   ],
   

    //   startDelay: 300,
    //   typeSpeed: 100,
    //   backSpeed: 100,
    //   backDelay: 100,
    // });

    // return () => {
    //   typed.destroy();
    // };
  }, []);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Access Factory Pricing.",
        "Enjoy Up to 50% Financing.",
        "Skip the Middleman.",
        "Scale Your Inventory.",
        "Buy Direct, Save Big.",
      ],
       
      
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div
        className="hidden md:block z-10 overflow-hidden relative w-full md:bg-[#232323] bg-vector bg-center md:bg-mockup md:bg-right bg-cover min-h-[70vh]">
        <div className="bg-[#F1F1F8] px-4 md:px-0 mx-auto md:grid grid-cols-12 overflow-hidden md:relative md:z-10">
          <div className="col-start-2 col-span-6 relative py-[120px]">
            <svg className="absolute hidden xl:block top-[-1px] h-full right-[-2px]" fill="#232323"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 298.22 997.11">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    d="M.33,989.23c2-29.14,9.12-57.1,18.53-84.66C57.94,790.19,105.09,679.07,153,568.22,184.6,495.05,212,420.36,230.85,342.71c15.71-64.87,24.66-130.51,22.23-197.41A532.75,532.75,0,0,0,239.3,43.74c-3.07-13.21-1.78-26.66-2.3-40-.16-4.08,2.36-3.51,4.84-3.52L298.22,0V996.34c-2.12,1.2-4.43.63-6.65.63q-142.09,0-284.19,0C-.45,997-.45,997,.33,989.23Z"/>
                </g>
              </g>
            </svg>
            <div className="md:absolute w-[800px] z-20">
              <h1
                className="md:pt-[20px] text-black font-dmSans leading-[1] font-bold relative text-slate-800 text-[2.8rem] md:text-[3.8rem] lg:text-[4.1rem] xl:text-[4.3rem] 2xl:text-[4.5rem]"
              >
                <span
                  className="text-slate-800 text-[2.8rem] md:text-[3.8rem] lg:text-[4.1rem] xl:text-[4.3rem] 2xl:text-[4.5rem]"
                >Import In Bulk, </span><br/>
                <span ref={el}
                      className="text-primary inline-block min-h-[1.2em] text-[2.8rem] md:text-[3.8rem] lg:text-[4.1rem] xl:text-[4.3rem] 2xl:text-[4.5rem] after:animate-blink after:content-['|'] after:inline after:text-slate-800"></span><br/>
              </h1>
              <p className="text-[18px] py-8 text-black">
              Source and buy directly from factories in China, the UK, and the US.
              </p>
              <div className="flex items-center gap-4">
                <button onClick={handlePopup}
                        className="border flex items-center bg-primary text-[17px] text-white px-5 py-3 rounded-lg font-dmSans hover:border-primary hover:bg-transparent hover:text-primary">
                  Download app
                  <span className="ml-2">
                <FaAngleRight/>
             </span>
                </button>
                <Link href="https://shop.4401.live/" target="_blank">
                <button onClick={handlePopup}
                        className="flex items-center bg-transparent border border-primary text-[17px] text-primary px-5 py-3 rounded-lg font-dmSans">
                  Shop now
                  <span className="ml-2">
                <BsCart4 size="20px"/>
             </span>
                </button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-start-8 col-span-6 relative min-h-[70vh] md:bg-[#232323] md:py-[120px] flex-col md:flex justify-center items-center h-full">
            <div className="bg-phone bg-cover rounded-lg w-[318px] h-[520px] relative">
              <div
                className="md:absolute md:bg-[#F1F1F8] w-[300px] h-[85px] top-[2rem] right-[-2rem] rounded-lg py-2 px-4">
                <p className="text-[18px] pt-4 text-black font-[900]">
                Start with just 50% deposit
                 {/* <span ref={ed} className="text-slate-800">your stores</span> */}
                </p>
                <p className="text-sm text-black">
                  Add product from your existing stores
                </p>
              </div>
              <div
                className="md:absolute md:bg-[#F1F1F8] w-[400px] h-[195px] bottom-[1rem] right-[-9rem] rounded-lg py-3 px-5">
                <p className="text-[18px] pt-4 text-black font-[900]">
                Import Globally
                </p>
                <p className="text-sm text-black">
                Connect to 2000+ global markets
                </p>
                <div className="md:grid grid-cols-3 gap-4 my-3">
                  <div className="relative mb-2 custom-cursor-on-hover flex flex-col">
                    <div
                      className="flip h-full flex flex-col items-center p-3 rounded-lg min-h-[70px] features-container ">
                      <img alt="China get 440 link" className="w-[50px] h-[50px]" src="/images/chinaflag.png"/>
                      <span className="text-sm text-center">
                    China
                  </span>
                    </div>
                    <div
                      className="flipTwo flex flex-col items-center absolute inset-0 p-3 rounded-lg min-h-[70px] features-container ">
                      <img alt="USA get 440 link" className="w-[50px] h-[50px]" src="/images/usaflag.png"/>
                      <span className="text-sm text-center">
                    USA
                  </span>
                    </div>
                  </div>
                  <div className="relative mb-2 custom-cursor-on-hover flex flex-col">
                    <div
                      className="flipThree h-full flex flex-col items-center p-3 rounded-lg min-h-[70px] features-container ">
                      <img alt="UK get 440 link" className="w-[50px] h-[50px]" src="/images/ukflag.png"/>
                      <span className="text-sm text-center">
                    UK
                  </span>
                    </div>
                    <div
                      className="flipFour absolute flex flex-col items-center inset-0 p-3 rounded-lg min-h-[70px] features-container ">
                      <img
                        alt="Canada get 440 link"
                        className="w-[50px] h-[50px]"
                        src="/images/canadaflag.png"
                      />
                      <span className="text-sm text-center">
                    Canada
                  </span>
                    </div>
                  </div>
                  <div className="relative mb-2 custom-cursor-on-hover flex flex-col">
                    <div
                      className="flip h-full flex flex-col items-center p-3 rounded-lg min-h-[70px] features-container ">
                      <img
                        alt="Nigeria get 440 link"
                        className="w-[50px] h-[50px]"
                        src="/images/indiaflag.png"
                      />
                      <span className="text-sm text-center">
                    Nigeria
                  </span>
                    </div>
                    <div
                      className="flipTwo flex flex-col items-center absolute inset-0 p-3 rounded-lg min-h-[70px] features-container ">
                      <img
                        alt="Ghana get 440 link"
                        className="w-[50px] h-[50px]"
                        src="/images/newzealandflag.png"
                      />
                      <span className="text-sm text-center">
                    Ghana
                  </span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="md:absolute hidden lg:hidden xl:block md:bg-gray-200 w-[300px] h-[150px] top-[11rem] left-[-12rem] rounded-lg p-4 text-center">
                <div className="relative">
                  <svg className="absolute w-[50px] bottom-[-2rem] right-0 rotate-[180deg]" fill="#865334"
                       xmlns="http://www.w3.org/2000/svg" viewBox="0 0 114 92">
                    <defs>
                      <style>.cls-1.cls-2</style>
                    </defs>
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path className="cls-1"
                              d="M37.63,42H72.74A4.26,4.26,0,0,1,77,46.26V87.74A4.26,4.26,0,0,1,72.74,92H4.26A4.26,4.26,0,0,1,0,87.74V79.63A37.63,37.63,0,0,1,37.63,42Z"/>
                        <path className="cls-2"
                              d="M91.06,42h19.87A3.06,3.06,0,0,1,114,45.06V88.94A3.06,3.06,0,0,1,110.94,92h-6.33A16.61,16.61,0,0,1,88,75.39V45.06A3.06,3.06,0,0,1,91.06,42Z"/>
                        <path d="M63,0h0A15,15,0,0,1,78,15V30a0,0,0,0,1,0,0H63A15,15,0,0,1,48,15v0A15,15,0,0,1,63,0Z"/>
                      </g>
                    </g>
                  </svg>
                </div>
                <p className="text-sm text-black py-2">
                Pay suppliers in Naira
                </p>
                <p className="text-sm text-black text-[1.5rem] font-[900]">
                  XXX XXX XX023
                </p>
                <div className="flex justify-center items-center mt-4">
                  <button
                    className="flex items-center bg-transparent border border-slate-800 text-slate-800 px-5 py-2 rounded-lg font-dmSans hover:border hover:border-slate-800 hover:bg-transparent hover:text-slate-800">
                    {/* <span>
               <svg className="w-[30px] h-[20px]"
                    xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path
                 d="M286.788-81Q257-81 236-102.212q-21-21.213-21-51Q215-183 236.212-204q21.213-21 51-21Q317-225 338-203.788q21 21.213 21 51Q359-123 337.788-102q-21.213 21-51 21Zm400 0Q657-81 636-102.212q-21-21.213-21-51Q615-183 636.212-204q21.213-21 51-21Q717-225 738-203.788q21 21.213 21 51Q759-123 737.788-102q-21.213 21-51 21ZM235-741l110 228h288l125-228H235Zm-30-60h589.074q22.964 0 34.945 21Q841-759 829-738L694-495q-11 19-28.559 30.5Q647.881-453 627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z"/></svg>
             </span> */}
                    Pay
                  </button>
                </div>
                <div className="relative">
                  <svg className="absolute w-[50px] bottom-[-1rem]" fill="#865334" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 114 92">
                    <defs>
                      <style>.cls-1.cls-2</style>
                    </defs>
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path className="cls-1"
                              d="M37.63,42H72.74A4.26,4.26,0,0,1,77,46.26V87.74A4.26,4.26,0,0,1,72.74,92H4.26A4.26,4.26,0,0,1,0,87.74V79.63A37.63,37.63,0,0,1,37.63,42Z"/>
                        <path className="cls-2"
                              d="M91.06,42h19.87A3.06,3.06,0,0,1,114,45.06V88.94A3.06,3.06,0,0,1,110.94,92h-6.33A16.61,16.61,0,0,1,88,75.39V45.06A3.06,3.06,0,0,1,91.06,42Z"/>
                        <path d="M63,0h0A15,15,0,0,1,78,15V30a0,0,0,0,1,0,0H63A15,15,0,0,1,48,15v0A15,15,0,0,1,63,0Z"/>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HeroMobile handlePopup={handlePopup}/>
    </>
);
};

export default Hero;
