import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import Marquee from './Marquee';

import Businesslogo from "../../../public/images/business.png";
import Guardian from "../../../public/images/guardian.png";
import Nairametrics from "../../../public/images/nairametrics.png";
import AliExpress from "../../../public/images/aliexpress.png";
import Sixteen from "../../../public/images/1688.png";
import Oraimo from "../../../public/images/oraimo.png";
import Clan from "../../../public/images/clan.png";
import Routely from "../../../public/images/routely.jpg";
import Rollafi from "../../../public/images/rolla.jpg";
import Reeple from "../../../public/images/reeple.jpg";

const Strip = () => {
  // const scrollLeft = (duration = 12, delay = 0, distance = 260) => ({
  //   x: [distance, -distance],
  //   transition: {
  //     duration,
  //     delay,
  //     repeat: Infinity,
  //     repeatType: 'loop',
  //     ease: 'linear',
  //   },
  // });

  const images = [Businesslogo, Guardian, Nairametrics, AliExpress, Sixteen, Oraimo, Clan, Routely, Rollafi, Reeple];

  return (
    // <div className="px-4 relative bg-[#F1F1F8] w-full overflow-hidden  z-10">
    //   <div className="container mx-auto md:block md:pt-8 md:pb-0 py-10 font-dmSans bg-right relative">
    //     <div className="md:grid grid-cols-12">
    //       <div className="col-start-2 col-span-10">
    //         <div className="md:flex flex-col items-center z-30 justify-center">
    //           <div className="space-y-2 my-8">
    //             <h2
    //               className="md:text-slate-800 font-dmSans text-center leading-[1] md:block text-[3rem] md:text-[4.5rem] font-bold relative text-slate-800"
    //             >
    //              <br className="md:block hidden"/>Our Partners
    //             </h2>
    //             <p className="text-[18px] md:text-gray-700 text-slate-800 text-center">
    //               Explore products from international stores across the globe, all in one place
    //             </p>
    //           </div>
    //           <motion.div className="relative w-screen h-full">
    //             <motion.img
    //               animate={scrollLeft(18, 0, 320)}
    //               className="absolute top-0 left-24 w-[80px] h-[80px] bg-white shadow-lg rounded-full object-contain"
    //               alt="1688 get 440 link"
    //               src='/images/1688.png'/>
    //             <motion.img
    //               animate={scrollLeft(16, 0.6, 280)}
    //               className="absolute md:top-32 md:left-60 top-[6rem] left-[10rem] w-[80px] h-[80px] bg-white shadow-lg rounded-full object-contain"
    //               alt="shopee get 440 link"
    //               src='/images/business.png'/>
    //             <motion.img
    //               animate={scrollLeft(20, 1.2, 340)}
    //               className="absolute top-0 left-96 w-[80px] h-[80px] bg-white object-contain shadow-lg rounded-full"
    //               alt="asos get 440 link"
    //               src='/images/guardian.png'/>
    //             <motion.img
    //               animate={scrollLeft(17, 0.9, 300)}
    //               className="absolute top-0 left-[50%] w-[80px] h-[80px] bg-white shadow-lg rounded-full object-contain"
    //               alt="1688 get 440 link"
    //               src='/images/oraimo.png'/>
    //             <motion.img
    //               animate={scrollLeft(19, 1.4, 280)}
    //               className="absolute md:top-32 md:left-[35%] top-[13rem] left-[18rem] w-[80px] h-[80px] bg-blue-600 shadow-lg rounded-full object-contain"
    //               alt="shopee get 440 link"
    //               src='/images/reeple.jpg'/>
                
    //             <motion.img
    //               animate={scrollLeft(18, 0.3, 320)}
    //               className="absolute top-0 right-24 w-[80px] h-[80px] bg-white shadow-lg object-contain rounded-full"
    //               alt="taobao get 440 link"
    //               src='/images/clan.png'/>
    //             <motion.img
    //               animate={scrollLeft(16, 0.8, 280)}
    //               className="absolute md:top-32 md:right-60 top-[13rem] right-[19rem] w-[80px] h-[80px] shadow-lg bg-white rounded-full"
    //               alt="aliExpress get 440 link"
    //               src='/images/aliexpress.png'/>
    //             <motion.img
    //               animate={scrollLeft(20, 1.1, 340)}
    //               className="absolute md:top-32 md:right-[35%] top-[12rem] right-[11rem] w-[80px] h-[80px] shadow-lg bg-white object-contain rounded-full"
    //               alt="aliExpress get 440 link"
    //               src='/images/routely.jpg'/>
    //             <motion.img
    //               animate={scrollLeft(17, 0.4, 300)}
    //               className="absolute top-0 right-96 w-[80px] h-[80px] bg-white object-contain shadow-lg rounded-full"
    //               alt="ebay get 440 link"
    //               src='/images/nairametrics.png'/>
    //           </motion.div>
    //           <img alt=" get 440 _phone" className="w-[40%] mx-auto opacity-0 md:opacity-100" src="/images/phone.svg"/>
    //           {/* <div className="absolute bottom-2">
    //             <div className="w-[70%] flex items-center justify-center gap-4 mx-auto">
    //               <Tilt>
    //                 <div className="hidden md:block bg-gray-50 border shadow py-4 w-[350px] rounded">
    //                   <p className="px-4 md:text-[17px] text-[16px] border-b pb-1 border-gray-300 font-extralight text-black">Samsung Galaxy A24 6.5"
    //                     4GB
    //                     RAM/128GB ROM Android 13 - Black</p>
    //                   <div className="my-1 px-4">
    //                     <p className="text-small text-gray-800">₦86,000</p>
    //                    <div className="flex gap-4 items-center">
    //                      <p className="text-small text-gray-500 line-through">₦176,000</p>
    //                      <p className="text-small text-red-500">2 hours remaining</p>
    //                    </div>
    //                   </div>
    //                 </div>
    //               </Tilt>
    //               <Tilt>
    //                 <div className="hidden md:block bg-gray-50 border shadow py-4 w-[350px] rounded">
    //                   <p className="px-4 md:text-[17px] text-[16px] border-b pb-1 border-gray-300 font-extralight text-black">
    //                     Hisense 20 Litres
    //                     (H20MOWS10) Microwave - White With 1 Year Warranty
    //                   </p>
    //                   <div className="my-1 px-4">
    //                     <p className="text-small text-gray-800">₦29,300</p>
    //                     <div className="flex gap-4 items-center">
    //                       <p className="text-small text-gray-500 line-through">₦73,000</p>
    //                       <p className="text-small text-red-500">16 hours remaining</p>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </Tilt>
    //               <Tilt>
    //                 <div className="hidden md:block bg-gray-50 border shadow py-4 w-[350px] rounded">
    //                   <p className="px-4 md:text-[17px] text-[16px] border-b pb-1 border-gray-300 font-extralight text-black">
    //                     Sony PlayStation 4 Pro
    //                     Console 1tb + Extra Controller
    //                   </p>
    //                   <div className="my-1 px-4">
    //                     <p className="text-small text-gray-800">₦136,000</p>
    //                     <div className="flex gap-4 items-center">
    //                       <p className="text-small text-gray-500 line-through">₦299,500</p>
    //                       <p className="text-small text-red-500">8 hours remaining</p>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </Tilt>
    //             </div>

    //           </div> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className='bg-white pt-4 pb-6'>
      <h1 className="text-center text-3xl md:text-6xl font-bold mt-0 mb-8 text-slate-800">Our Partners</h1>
      <p className="text-center text-gray-500 text-lg md:text-xl mb-8">Partnering with top international brands to bring you millions of products at your fingertips</p>
      <Marquee images={images} />
    </div>
  );
};

export default Strip;