import React from "react";
import Link from "next/link";
import { IoIosCloseCircle } from "react-icons/io";

const Popup = ({ handlePopup, isPopupOpen , scrollToLive}) => {

  const watchLive =()=>{
    handlePopup()
    scrollToLive()
  }
  return (
    <div
      className={`${
        isPopupOpen ? "flex" : "hidden"
      } fixed inset-0 z-50 items-center justify-center`}
    >
      {/* Background overlay */}
      <div
        onClick={handlePopup}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />
         <button
              onClick={handlePopup}
              className="hidden md:block absolute top-3 right-5 text-red-500 hover:text-red-600 transition"
            >
              <IoIosCloseCircle size={40} />
            </button>
      {/* Popup content */}
      <div className="relative bg-white text-black w-full max-w-4xl rounded-xl shadow-2xl m-4 overflow-hidden">
        <div className="grid md:grid-cols-2 relative">
          {/* Right image section */}
          <div className="order-1 md:order-2 h-64 md:h-[500px] relative">
        
            <div
              className="w-full h-full bg-center bg-no-repeat bg-cover rounded-t-xl md:rounded-r-xl md:rounded-l-none"
              style={{
                backgroundImage: 'url("/images/gpt_mobile.png")',
              }}
            ></div>

            {/* Close button (mobile) */}
            <button
              onClick={handlePopup}
              className="absolute top-0 right-0 md:hidden bg-white/70 backdrop-blur-md rounded-full p-1.5 shadow-md"
            >
              <IoIosCloseCircle size="30px" className="text-red-500" />
            </button>
          </div>
          {/* Left text section */}
          <div className="flex flex-col justify-center p-8 order-2 md:order-1 text-center md:text-left relative">
            {/* Close button (desktop) */}
          

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Go to China with 440
            </h2>
            <p className="text-gray-600 mb-6">
              Order directly from Chinese suppliers at unbeatable prices. <br />
              Pay 50% now and pay the balance when the goods arrive.
            </p>

            {/* CTA links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-6">
              {/* <Link
                href="https://chat.whatsapp.com/GSm70mBMrkOET3wrr8eJoO?mode=ems_copy_t"
                target="_blank"
                className="text-orange-500 font-bold"
              >
                Join Community
              </Link> */}

                <Link
                href="https://shop.4401.live"
                target="_blank"
                className="text-orange-500 font-bold"
              >
                Join a pool
              </Link>
              <button 
                className="text-orange-500 font-bold"
                onClick={watchLive}
              >
                Watch Live
              </button>
            </div>

            {/* App store buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <Link
                href="https://play.google.com/store/apps/details?id=com.get440.com&hl=en&gl=US"
                target="_blank"
              >
                <button className="flex items-center bg-black text-white py-3 px-5 rounded-full shadow-md hover:bg-gray-800 transition">
                  <img
                    alt="Playstore"
                    src="/images/google-play.svg"
                    className="w-[28px]"
                  />
                  <div className="ml-2 flex flex-col text-left">
                    <p className="text-[11px]">Get on</p>
                    <span className="text-sm font-semibold">Play Store</span>
                  </div>
                </button>
              </Link>

              <Link
                href="https://apps.apple.com/ng/app/440/id6474253185"
                target="_blank"
              >
                <button className="flex items-center bg-black text-white py-3 px-5 rounded-full shadow-md hover:bg-gray-800 transition">
                  <img
                    alt="App Store"
                    src="/images/app-store.svg"
                    className="w-[28px]"
                  />
                  <div className="ml-2 flex flex-col text-left">
                    <p className="text-[11px]">Get on</p>
                    <span className="text-sm font-semibold">App Store</span>
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
