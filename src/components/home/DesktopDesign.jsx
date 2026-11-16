import React from 'react';
import Link from "next/link";

const DesktopDesign = () => {

  return (
    <div
      className="px-4 md:px-0 z-10 overflow-hidden relative w-full bg-[#F1F1F8] bg-vector bg-center md:bg-mockup md:bg-right bg-cover">
      <div className="container mx-auto md:grid grid-cols-12 overflow-hidden md:relative md:z-10 py-[100px]">
        <div
          className="col-start-2 col-span-10 relative md:min-h-screen flex-col md:flex justify-center items-center h-full">
          <div className="mx-auto w-[40%]">
            <img alt=" get 440 phone_upper" src="/images/phone-upper.png"/>
          </div>
          <div className="z-20 md:py-[70px] py-10">
            <h2
              className="text-center font-dmSans leading-[1] md:block text-[3rem] md:text-[4.5rem] font-bold relative text-slate-800"
            >
              Shop Globally  <br/>with Ease
            </h2>
            <p className="text-[18px] text-center md:py-8 py-4 text-black">
              Find products from international stores in one spot
            </p>
            <div className="flex mx-auto md:justify-center md:flex-row flex-col items-center gap-4">
              <Link href="https://play.google.com/store/apps/details?id=com.get440.com&hl=en&gl=US" target="_blank">
                <button
                  className="flex items-center bg-black text-[18px] text-white py-3 px-6 font-dmSans rounded-full md:ml-4">
                  <img src="/images/google-play.svg" alt="" className="w-[30px]"/>
                  <div className="ml-2 flex flex-col">
                    <p className="text-[12px] text-left">Get on</p>
                    <span
                      className="text-sm font-bold">Play store</span>
                  </div>
                </button>
              </Link>
              <Link href="https://apps.apple.com/ng/app/440/id6474253185" target="_blank">
                <button
                  className="flex items-center bg-black text-[18px] text-white py-3 px-6 font-dmSans rounded-full">
                  <img src="/images/app-store.svg" alt="" className="w-[30px]"/>
                  <div className="ml-2 flex flex-col">
                    <p className="text-[12px] text-left">Get on</p>
                    <span
                      className="text-sm font-bold">App store</span>
                  </div>
                </button>
              </Link>
            </div>

          </div>
          <div className="mx-auto w-[40%]">
            <img alt=" get 440 phone_lower" src="/images/phone-lower.png"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopDesign;
