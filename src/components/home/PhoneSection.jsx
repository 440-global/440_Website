import Link from 'next/link';
import React, {useEffect, useRef} from 'react';
import { FaAngleRight } from 'react-icons/fa';
import Typed from "typed.js";
import {FaNairaSign} from "react-icons/fa6";

const PhoneSection = ({handlePopup}) => {
  const el = useRef(null);
  const ed = useRef(null);
  const edy = useRef(null);

  useEffect(() => {
    const typed = new Typed(edy.current, {
      strings: [
        "Dollars,",
        "Pounds,",
        "Yen,",
        "Euro,",
        "Yuan,",
        "Cedis,",
        "Rands,",
        "Cefa,",
      ],

      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 3000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Next batch order has been placed from US",
        "Chinedu's order just arrived from USA",
        "Omotola just placed order worth ₦3M to USA"
      ],
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 3000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);
  useEffect(() => {
    const typed = new Typed(ed.current, {
      strings: [
        "Mrs Kehinde just completed her orders from US",
        "Mohamed’s order has been delivered",
      ],

      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 3000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="w-full bg-[#232323] relative z-10 overflow-hidden mt-[-1rem]">
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          {/* <li></li>
          <li></li>
          <li></li>
          <li></li> */}
        </ul>
      </div>
      <div
        className="gap-8 px-4 md:px-0 container mx-auto md:grid grid-cols-12 md:py-[160px] py-[45px] overflow-hidden md:relative md:z-10">
        <div className="col-span-3 col-start-3 z-50 relative space-y-2">
          <div className="bg-[#F1F1F8] min-h-[200px] rounded w-full p-4 space-y-4">
            <div className="flex items-start gap-2">
              <img alt="uba get 440 bank_link" className="w-[30px] object-cover" src="/images/china.png"/>
              <div>
                <p className="md:text-[17px] text-[16px] font-extralight text-gray-800">Abel Ajayi's first order just arrived from China</p>
                <div className="space-y-1 mt-1">
                  <div className="xl:w-full bg-slate-400 h-[10px]"></div>
                  <div className="xl:w-[50%] bg-slate-400 h-[10px]"></div>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <img alt="access get 440 bank_link" className="w-[30px] object-cover" src="/images/us.png"/>
              <div className="w-full">
                <p ref={el} className="min-h-[27px] md:text-[17px] text-[16px] font-extralight text-gray-800">Abel Ajayi's first order just arrived from USA</p>
                <div className="space-y-1 mt-1">
                  <div className="xl:w-[80%] bg-slate-400 h-[10px]"></div>
                  <div className="xl:w-[50%] bg-slate-400 h-[10px]"></div>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <img alt="gtb get 440 bank_link" className="w-[30px] object-cover" src="/images/uk.png"/>
              <div className="w-full">
                <p ref={ed} className="md:text-[17px] min-h-[27px] text-[16px] font-extralight text-gray-800">Abel Ajayi's first order just arrived from UK</p>
                <div className="space-y-1 mt-1">
                  <div className="xl:w-[80%] bg-slate-400 h-[10px]"></div>
                  <div className="xl:w-[50%] bg-slate-400 h-[10px]"></div>
                </div>
              </div>
            </div>
          </div>
          <img alt=" get 440 -phone-img-lower" className="md:w-full w-[70%]"
               src="/images/phone-lower.png"/>
        </div>
        <div data-aos="fade-left" className="col-span-5 col-start-6 relative flex flex-col justify-center my-8 md:my-0">
          <h2
            className="text-black font-dmSans leading-[1.1]"
          >
                       <span className="text-[3rem] md:text-[5rem] font-bold text-white">
                    Shop in
                        </span><br/>
            <span ref={edy} className="text-[3rem] md:text-[5rem] font-bold text-white">

                        </span><br/>
            <span className="text-[3rem] md:text-[5.5rem] font-bold text-white xl:flex block">
                    <span>Pay in </span> <span className="ml-2 flex items-center xl:text-[80px] xl:block hidden">
                   <FaNairaSign/>
                   </span><span className="xl:hidden ml-3">N</span>aira
                        </span>

          </h2>
          <div>
              <button onClick={handlePopup}
                className="mt-5 flex items-center bg-primary text-[17px] text-white px-5 py-3 rounded-lg font-dmSans hover:border hover:border-white hover:bg-transparent hover:text-white">
                Download app
                <span className="ml-2">
                <FaAngleRight />
             </span>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneSection;
