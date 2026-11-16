import React, {useEffect, useRef} from 'react';
import {FaAngleRight} from "react-icons/fa";
import Typed from "typed.js";
import {BsCart4} from "react-icons/bs";
import Link from "next/link";

const HeroMobile = ({handlePopup}) => {
  const el = useRef(null);
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
        className="md:hidden min-h-[85vh] xs:min-h-[75vh] w-full py-6 rounded-lg shadow pb-0 relative overflow-hidden">
        <div className="bg-responsiveHero bg-cover absolute inset-0 h-[50%] w-full"></div>
        <div
          className="absolute bottom-0 bg-[#F1F1F8] min-h-[340px] min-w-full px-6 py-10  rounded-tl-[35px] rounded-tr-[35px] ">
          <h2
            className="pt-[10px] text-black font-dmSans leading-[1] md:block text-[3.5rem] md:text-[5rem] font-bold relative text-slate-800"
          >
           <span
             className="text-slate-800 text-[2.3rem] md:text-[4.4rem]"
           >Import In Bulk,</span> <br/>
            <span ref={el}
                  className="text-primary inline-block min-h-[1.2em] text-[2.3rem] after:animate-blink after:content-['|'] after:inline after:text-slate-800">
            </span>
          </h2>
          <p className="text-[18px] py-4 text-black">
          Source and buy directly from factories in China, the UK, and the US.
          </p>
          <div className="space-y-2">
            <button onClick={handlePopup}
                    className="w-full flex items-center justify-center bg-primary text-[17px] text-white border border-primary px-5 py-3 rounded-lg font-dmSans">
              Download app
              <span className="ml-2">
                <FaAngleRight/>
             </span>
            </button>
           <div>
             <Link href="https://shop.4401.live/" target="_blank">
               <button onClick={handlePopup}
                       className="w-full flex items-center justify-center bg-transparent border border-primary text-[17px] text-primary px-5 py-3 rounded-lg font-dmSans">
                 Shop now
                 <span className="ml-2">
                <BsCart4 size="20px"/>
             </span>
               </button>
             </Link>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroMobile;
