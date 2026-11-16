import React from "react";
import SwiperCore from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {numberWithCommas} from "@/lib/utils";
import Link from "next/link";
import {Autoplay} from 'swiper/modules';
import {FaAngleRight} from "react-icons/fa";

function MultipleMarketplace() {
  SwiperCore.use([Autoplay]);

  const products = [
    {
      id: 1,
      name: "TLC Chair",
      description: "A beautiful green sofa",
      img: "/images/7.png",
      price: 50000,
      store: "Primeria chairs",
      marketplaceLogo: "/images/jumia.png",
    },
    {
      id: 2,
      name: "Android phone",
      description: "A working android smart phone",
      img: "/images/8.png",
      price: 70000,
      store: "Phone hub",
      marketplaceLogo: "/images/konga.png",
    },
    {
      id: 3,
      name: "Black Camera",
      description: "Perfectly working black camera",
      img: "/images/9.png",
      price: 88000,
      store: "Camera depot",
      marketplaceLogo: "/images/jumia.png",
    },
    {
      id: 4,
      name: "Vintage heels",
      description: "Feel the confident walk in these heels",
      img: "/images/10.png",
      price: 15000,
      store: "Shirley stores",
      marketplaceLogo: "/assets/images/jiji.png",
    },
    {
      id: 5,
      name: "Black Tablet",
      description: "Tablet can be used as a laptop at times",
      img: "/images/11.png",
      price: 50500,
      store: "Emmanuel stores",
      marketplaceLogo: "/images/jumia.png",
    },
  ];
  return (
    <div className="px-4 md:px-0 relative bg-[#F1F1F8] w-full overflow-hidden z-10">
      <div className="pb-[160px] relative bg-[#F1F1F8] font-dmSans">
        <div className="md:grid grid-cols-12 space-y-4 md:space-y-0">
          <div className="col-start-2 col-span-4 pt-10">
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-[900] font-dmSans leading-[1.1] relative text-slate-800">
              Multiple marketplace, <br/> one store
            </h2>
            <p className="font-dmSans text-[18px] md:py-10 py-4 text-black">
              Monitor orders from customers with our all-in-one mobile app
            </p>
            <Link href="https://app.get440.com/onboard">
              <button
                className="flex items-center bg-primary text-[17px] text-white px-5 py-3 rounded-lg font-dmSans hover:border hover:border-primary hover:bg-transparent hover:text-primary">
                Get started
                <span className="ml-2">
                <FaAngleRight/>
             </span>
              </button>
            </Link>
          </div>
          <div className="col-start-7 col-span-5">
            <Swiper
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={10000}
              slidesPerView={1.5}
              spaceBetween={40}
              breakpoints={{
                0: {
                  slidesPerView: 1.1,
                  spaceBetween: 20,
                },
                470: {
                  slidesPerView: 1.1,
                  spaceBetween: 20,
                },
                760: {
                  slidesPerView: 1.1,
                  spaceBetween: 20,
                },
                1100: {
                  slidesPerView: 1.6,
                  spaceBetween: 20,
                },
              }}
              className="mySwiper"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id} className="bg-[#fff] rounded-lg min-h-[580px]">
                  <div className="px-8 py-8">
                    <div className="flex items-center justify-between py-[1rem]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        viewBox="0 96 960 960"
                        width="48"
                        className="w-8 h-6 ml-2 -mr-1"
                      >
                        <path d="M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z"/>
                      </svg>
                      <p className="font-dmSans text-[17px]">{product.name}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="48"
                        viewBox="0 96 960 960"
                        width="48"
                        className="w-8 h-6 ml-2 -mr-1"
                      >
                        <path
                          d="M796 935 533 672q-30 26-69.959 40.5T378 727q-108.162 0-183.081-75Q120 577 120 471t75-181q75-75 181.5-75t181 75Q632 365 632 471.15 632 514 618 554q-14 40-42 75l264 262-44 44ZM377 667q81.25 0 138.125-57.5T572 471q0-81-56.875-138.5T377 275q-82.083 0-139.542 57.5Q180 390 180 471t57.458 138.5Q294.917 667 377 667Z"/>
                      </svg>
                    </div>
                    <div className="flex pb-[2rem]">
                      <img className="mx-auto" src={product.img} alt="get440-product-img"/>
                    </div>
                    <div className="bg-[#bbb0c5] min-h-[150px] rounded-lg px-4 py-2 shadow-lg">
                      <hr className="border-2 rounded w-[80px] mx-auto mb-2"/>
                      <span className="text-sm text-gray-100 font-pacifico flex justify-between items-center">
                      {product.store}
                        <img
                          className="w-[50px]"
                          src={product.marketplaceLogo}
                          alt=" get 440 -marketplace-logo"
                        />
                    </span>
                      <div className="flex items-center justify-between">
                        <p className="font-dmSans text-[17px] font-bold">
                          {product.name}
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="48"
                          viewBox="0 96 960 960"
                          width="48"
                          className="w-8 h-6 ml-2 -mr-1"
                        >
                          <path
                            d="m480 935-41-37q-105.768-97.121-174.884-167.561Q195 660 154 604.5T96.5 504Q80 459 80 413q0-90.155 60.5-150.577Q201 202 290 202q57 0 105.5 27t84.5 78q42-54 89-79.5T670 202q89 0 149.5 60.423Q880 322.845 880 413q0 46-16.5 91T806 604.5Q765 660 695.884 730.439 626.768 800.879 521 898l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712 630 750.5 580t54-89.135q15.5-39.136 15.5-77.72Q820 347 778 304.5T670.225 262q-51.524 0-95.375 31.5Q531 325 504 382h-49q-26-56-69.85-88-43.851-32-95.375-32Q224 262 182 304.5t-42 108.816Q140 452 155.5 491.5t54 90Q248 632 314 698t166 158Zm0-297Z"/>
                        </svg>
                      </div>
                      <p className="font-dmSans text-[14px] text-gray-100">
                        {product.description}
                      </p>
                      <button
                        className="flex items-center justify-between bg-black text-[17px] text-white w-full my-4 px-4 py-4 rounded-[12px] font-dmSans">
                        <p className="flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="48"
                            viewBox="0 96 960 960"
                            width="48"
                            fill="#fff"
                            className="w-8 h-6"
                          >
                            <path
                              d="M286.788 975Q257 975 236 953.788q-21-21.213-21-51Q215 873 236.212 852q21.213-21 51-21Q317 831 338 852.212q21 21.213 21 51Q359 933 337.788 954q-21.213 21-51 21Zm400 0Q657 975 636 953.788q-21-21.213-21-51Q615 873 636.212 852q21.213-21 51-21Q717 831 738 852.212q21 21.213 21 51Q759 933 737.788 954q-21.213 21-51 21ZM235 315l110 228h288l125-228H235Zm-30-60h589.074q22.964 0 34.945 21Q841 297 829 318L694 561q-11 19-28.559 30.5Q647.881 603 627 603H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z"/>
                          </svg>
                          Add to cart
                        </p>
                        <span className="hidden md:block absolute text-4xl left-[60%]">|</span>
                        <span className="hidden md:block">₦{numberWithCommas(product.price)}</span>
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultipleMarketplace;
