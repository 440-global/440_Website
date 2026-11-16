import React, {useEffect, useState} from 'react';
import CountUp from 'react-countup';
import CountUpOnScroll from "@/components/global/CountUpOnScroll";

const StripTwo = () => {
  const [browserType, setBrowserType] = useState("")
  useEffect(() => {
    if (navigator.userAgent.includes("iPhone")) return setBrowserType("iPhone")
    if (navigator.userAgent.includes("Android")) return setBrowserType("Android")
  }, []);
  return (
    <div
      className={`${browserType === "Android" ? 'bg-fixed' : ''} px-4 md:px-0 relative md:bg-fixed bg-stripTwo bg-bottom md:bg-center bg-cover w-full overflow-hidden mt-[-1rem] z-10`}>
      <div className="container mx-auto md:block md:pt-[160px] md:pb-[200px] py-[70px] font-dmSans bg-right relative">
        <div className="md:grid grid-cols-12">
          <div className="col-start-2 col-span-10">
            <h2
              className="font-dmSans text-white md:text-center text-[3rem] md:text-[4.5rem] font-bold leading-[1.1] relative pb-10">
              The numbers consumers <br/>are talking about
            </h2>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-8">
              <div className="md:text-center">
                <div className="text-[2.5rem] font-[900] text-white flex items-center md:justify-center">
                  <CountUpOnScroll start={0} duration={5} end={250}/>
                  <span>
                    +
                  </span>
                </div>
                <p className="text-[18px] text-white">Transactions Processed</p>
              </div>
              <div className="md:text-center">
                <div className="text-[2.5rem] font-[900] text-white flex items-center md:justify-center">
                  <CountUpOnScroll start={0} duration={5} end={45}/>
                  <span>
                   %
                  </span>
                </div>
                <p className="text-[18px] text-white">Savings</p>
              </div>
              <div className="md:text-center">
                <div className="text-[2.5rem] font-[900] text-white flex items-center md:justify-center">
                  <CountUpOnScroll start={0} duration={5} end={100}/>%
                </div>
                <p className="text-white text-[18px]">Secure Payments </p>
              </div>
              <div className="md:text-center">
                <div className="text-[2.5rem] font-[900] text-white flex items-center md:justify-center">
                  <CountUpOnScroll start={0} duration={5} end={30}/>K
                  <span>
                   +
                  </span>
                </div>
                <p className="text-white text-[18px]">Factories</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default StripTwo;
