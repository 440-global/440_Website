import React, {useRef} from 'react';
import Tilt from 'react-parallax-tilt';
import {motion, useScroll, useTransform} from "framer-motion";
import Link from 'next/link';

const Finance = ({handleRfqPopup, rfqRef}) => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["0 0.1", "1.5 1"]
  });

  const scaleXProgress = useTransform(scrollYProgress, [0, 1], [20, -80])
  const reverseScaleXProgress = useTransform(scrollYProgress, [0, 1], [-40, 100])

  return (
    // <div className="flex items-center justify-center min-h-full b" ref={rfqRef}>
    // <div className="w-full    sm:px-6 lg:px-8">
    <div className="grid grid-cols-12 bg-[#232323] py-10" ref={rfqRef}>
      <div className="col-start-2 col-span-10 md:px-4  py-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 justify-between  w-full">

          <div className="flex flex-col gap-4  transition-all duration-300 transform  border-none  shadow-sm rounded-xl  hover:scale-105">
            <div className="w-full h-56 md:h-96  bg-center bg-no-repeat bg-cover rounded-lg" style={{ backgroundImage: 'url("/images/shop_half.png")' }}></div>
            <div className="flex flex-col">
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <p className="text-xl font-medium text-primary">You have a huge order, but limited funds?</p>
              <h1 className="text-4xl font-black  text-white sm:text-5xl md:text-6xl tracking-tighter">
                Shop with just 50% Deposit
              </h1>
              <p className="max-w-2xl text-lg text-[#A8B5C1] leading-relaxed">
                Pay the balance when goods arrive. Enjoy flexible payment options and shop with confidence.
              </p>
            </div>
            <Link href="https://shop.4401.live" target="_blank">
                <button
                  className="flex items-center justify-center w-fit h-12 px-6 text-base font-bold text-white transition-colors rounded-lg bg-primary hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background-light dark:focus-visible:ring-offset-background-dark">
                  <span>Browse Marketplace</span>
                </button>
              </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Finance;
