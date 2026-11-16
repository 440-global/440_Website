import React from "react";
import Link from "next/link";
import {FaAngleRight} from "react-icons/fa";

function StripMobile() {
  return (
    <>
      <div
        className="px-4 md:px-0 md:py-[160px] py-[100px] relative bg-black">
        <div className="md:grid grid-cols-12 space-y-8 md:space-y-0">
          <div className="col-start-2 col-span-4">
            <h2
            className="text-[3.5rem] font-[900] font-dmSans leading-[1.1] relative">List with Us,<br/> Sell Everywhere</h2>
            <p className="text-[18px] md:py-8 py-4 text-white text-slate-800">
              Connect your products with customers worldwide
            </p>
            <div>
              <Link href="https://app.get440.com/onboard">
                <button
                  className="flex items-center bg-primary text-[17px] text-white px-5 py-3 rounded-lg font-dmSans hover:border hover:border-white hover:bg-transparent hover:text-white">
                  Get started
                  <span className="ml-2">
                <FaAngleRight/>
             </span>
                </button>
              </Link>
            </div>
          </div>
          <div className="col-start-7 col-span-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="min-h-[250px] mb-[3rem] relative">
                <img
                  className="w-full object-cover h-full rounded-[24px]"
                  src="/images/13.jpg"
                  alt=" get 440 store_img"
                />
                <div className="inset-0 absolute bg-slate-900 opacity-50 rounded-[24px]"></div>
                <div className="absolute bottom-4 left-2 text-white">
                  <p className="!font-pacifico text-[18px] py-2">Seun Stores</p>
                  <p className="!font-pacifico text-[18px]">Footwears</p>
                </div>
              </div>
              <div className="min-h-[250px] mt-[4rem] relative">
                <img
                  className="w-full object-cover h-full rounded-[24px]"
                  src="/images/12.jpg"
                  alt=" get 440 store_img"
                />
                <div className="inset-0 absolute bg-slate-900 opacity-50 rounded-[24px]"></div>
                <div className="absolute bottom-4 left-2 text-white">
                  <p className="!font-pacifico text-[18px] py-2">Aurora Stores</p>
                  <p className="!font-pacifico text-[18px]">Fashion</p>
                </div>
              </div>
              <div className="min-h-[250px] relative">
                <img
                  className="w-full object-cover h-full rounded-[24px]"
                  src="/images/15.jpg"
                  alt=" get 440 store_img"
                />
                <div className="inset-0 absolute bg-slate-900 opacity-50 rounded-[24px]"></div>
                <div className="absolute bottom-4 left-2 text-white">
                  <p className="!font-pacifico text-[18px] py-2">Emmanuel Stores</p>
                  <p className="!font-pacifico text-[18px]">Phones</p>
                </div>
              </div>
              <div className="min-h-[250px] mt-[2rem] relative">
                <img
                  className="w-full object-cover rounded-[24px]"
                  src="/images/14.jpg"
                  alt=" get 440 store_img"
                />
                <div className="inset-0 absolute bg-slate-900 opacity-50 rounded-[24px]"></div>
                <div className="absolute bottom-4 left-2 text-white">
                  <p className="!font-pacifico text-[18px] py-2">Shirley Stores</p>
                  <p className="!font-pacifico text-[18px]">Furniture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StripMobile;
