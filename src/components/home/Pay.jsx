import React from 'react';
import Link from 'next/link';
import {IoBookmarkOutline, IoPaperPlaneOutline} from "react-icons/io5";
import {HiOutlineChatBubbleOvalLeft} from "react-icons/hi2";
import {IoMdHeartEmpty} from "react-icons/io";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-flip"
import SwiperCore from "swiper";
import {Autoplay, EffectFlip} from "swiper/modules";
import { FaAngleRight } from 'react-icons/fa';

const Pay = ({handleRfqPopup, liveRef, isRfqPopupOpen, isPopupOpen, isNewsPopupOpen}) => {
  SwiperCore.use([Autoplay]);
  return (
    <div className="w-full relative z-10  bg-[#131315] py-10 md:py-20 px-4">
      <main className="flex-grow " ref={liveRef}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


          <div className="lg:col-span-2 shadow-lg ">

            <div
              className={`relative aspect-video rounded-xl overflow-hidden shadow-1xl ${(isPopupOpen || isRfqPopupOpen || isNewsPopupOpen) ? "pointer-events-none" : ""
                }`}>
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/MuOX9_FKXYA"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded text-xs font-bold">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                LIVE
              </div>
            </div>
          </div>


          <div className="flex flex-col  justify-center bg-background-light dark:bg-background-dark p-6 rounded-xl  border-primary/20">
            <div className=''>
              <h2 className="text-2xl md:text-5xl font-bold text-white ">Canton Fair Live</h2>
              <p className="mt-3 text-base text-gray-400 md:text-2xl">
                Connect with thousands of original equipment manufacturers (OEM) at the Canton Fair in China.<br />
                Financing option is available for your procurement needs.
              </p>
            </div>
            <div className="mt-6">
              <Link href="https://shop.4401.live" target="_blank">
              <button
                className="mt-5 flex items-center bg-primary text-[17px] text-white px-5 py-3 rounded-lg font-dmSans hover:border hover:border-white hover:bg-transparent hover:text-white transition-all"
              >
                     
                Request for Quotation
                <span className="ml-2">
                  <FaAngleRight />
                </span>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pay;
