import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { numberWithCommas } from '@/lib/utils';
import CountUpOnScroll from '@/components/global/CountUpOnScroll';
import UserBubbles from '../global/UserBubble';
import Progress from '../global/progress';

const BALES_API = 'https://lendnode.creditclan.com/gateway/store/stores/buyer/bales';

// Store/source icons for "max 3 + others" (use first 3, then "+ others")
const STORE_ICONS = [
  { src: '/images/amazon.png', alt: 'Amazon' },
  { src: '/images/aliexpress.png', alt: 'AliExpress' },
  { src: '/images/shopee.png', alt: 'Shopee' },
];

function formatPrice(value) {
  if (value == null || value === '') return '—';
  const n = Number(value);
  if (Number.isNaN(n)) return '—';
  return `₦${numberWithCommas(Math.round(n))}`;
}

const Ecommerce = () => {
  const [mounted, setMounted] = useState(false);
  const [swiper, setSwiper] = useState(null);
  const [realIndex, setRealIndex] = useState(0);
  const [bales, setBales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setLoading(false);
      return;
    }
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetch(BALES_API)
      .then((res) => res.json())
      .then((json) => {
        if (cancelled) return;
        if (json?.success && Array.isArray(json.data)) {
          setBales(json.data.filter((b) => b?.product));
        } else {
          setBales([]);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err?.message || 'Failed to load bales');
          setBales([]);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  const handleSwiperChange = useCallback(() => {
    if (swiper) setRealIndex(swiper.realIndex);
  }, [swiper]);

  return (
    <div className="relative bg-[#F1F1F8] bg-center bg-cover w-full overflow-hidden mt-[-1rem] z-10">
      <div className="container mx-auto xl:block py-[100px] font-dmSans bg-right relative">
        <div className="grid grid-cols-12">
          <div className="col-start-2 col-span-10">
            <div className="pb-10">
              <h2 className="hidden font-dmSans text-slate-800 xl:text-center text-[2.5rem] xl:text-[4rem] font-bold leading-[1.1] relative xl:flex items-center justify-center flex-wrap">
                Trending Pools in the <br />
                Marketplace
              </h2>
              <h2 className="xl:hidden font-dmSans text-slate-800 xl:text-center text-[3rem] md:text-[4rem] font-bold leading-[1.1] relative flex items-center justify-center flex-wrap">
              Trending Pools in the
                 Marketplace
              </h2>
              <p className="text-[18px] py-4 md:text-slate-800 text-slate-800 xl:text-center">
              Access over thousands of products worldwide
              </p>
            </div>
            {error && (
              <p className="text-center text-red-600 py-4">Unable to load products. Please try again.</p>
            )}
            {loading ? (
              <div className="flex justify-center items-center min-h-[320px]">
                <div className="animate-pulse text-slate-500">Loading products…</div>
              </div>
            ) : bales.length === 0 && !error ? (
              <p className="text-center text-slate-600 py-8">No bales available at the moment.</p>
            ) : !mounted ? (
              <div className="flex justify-center items-center min-h-[320px]">
                <div className="animate-pulse text-slate-500">Loading…</div>
              </div>
            ) : (
            <Swiper
              modules={[Autoplay]}
              loop={bales.length > 1}
              autoplay={
                bales.length > 1
                  ? { delay: 0, disableOnInteraction: false }
                  : false
              }
              speed={5000}
              slidesPerView={1.1}
              spaceBetween={40}
              breakpoints={{
                0: { slidesPerView: 1.1, spaceBetween: 20 },
                470: { slidesPerView: 1.1, spaceBetween: 20 },
                760: { slidesPerView: 3.2, spaceBetween: 20 },
                1100: { slidesPerView: 3.7, spaceBetween: 20 },
              }}
              className="mySwiper"
              onSwiper={setSwiper}
              onSlideChange={handleSwiperChange}
            >
              {bales.map((bale, index) => {
                const product = bale.product || {};
                const imageUrl = product.images?.[0] || '';
                const name = product.name || 'Product';
                const price = bale.price ?? product.price ?? 0;
                const oldPrice = bale.oldPrice ?? product.oldPrice ?? 0;
                const hasRange = oldPrice > 0 && oldPrice !== price;
                const minP = hasRange ? Math.min(price, oldPrice) : price;
                const maxP = hasRange ? Math.max(price, oldPrice) : price;

                return (
                  <SwiperSlide key={bale.id} className="bg-[#fff] rounded-lg my-8">
                    <Link href={`https://shop.4401.live/${bale.id}`} className="block relative z-20">
                      <div className="relative z-0">
                        <img
                          alt={name}
                          className="rounded-t-lg object-cover h-[220px] md:h-[260px] w-full bg-slate-200"
                          src={imageUrl}
                          loading="lazy"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect fill="%23e2e8f0" width="400" height="300"/%3E%3Ctext fill="%2394a3b8" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle"%3ENo image%3C/text%3E%3C/svg%3E';
                          }}
                        />
                        {/* Small card: max 3 icons + others */}
                      <div className="md:my-2 px-4">
                     
                      <div className="flex justify-between items-center flex-wrap">
                      <p className="text-[18px] text-black font-[900] mt-1">
                          {formatPrice(price)}
                        </p>
                        <p className="font-bold text-(--primary) text-sm">
                          {bale.filledSlot}/{ bale.slot } joined
                        </p>
                        <UserBubbles count={bale.filledSlot} />
                      </div>
                      <Progress
                        totalQty={bale.slot}
                        currentQty={bale.filledSlot}
                        className='my-0!'
                      />
                    </div>
                        {/* <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between bg-white/95 backdrop-blur rounded-lg shadow py-2 px-3">
                          <div className="flex items-center gap-1">
                            {STORE_ICONS.slice(0, 3).map((store, i) => (
                              <img
                                key={i}
                                src={store.src}
                                alt={store.alt}
                                className="w-6 h-6 object-contain rounded flex-shrink-0"
                                onError={(e) => { e.target.style.display = 'none'; }}
                              />
                            ))}
                            <span className="text-xs text-slate-500 ml-0.5">+ others</span>
                          </div>
                        </div> */}
                      </div>
                      <div className="relative bg-[#F1F1F8] rounded-b-lg p-4">
                        <p className="text-sm font-semibold text-black line-clamp-2 min-h-[2.5rem]" title={name}>
                          {name}
                        </p>
                        {hasRange && (
                          <p className="text-xs text-slate-500 mt-1">
                            Range: {formatPrice(minP)} – {formatPrice(maxP)}
                          </p>
                        )}
                       
                      </div>
                      {/* <div
                        className={`${
                          realIndex === index ? 'translate-x-0 opacity-100' : 'translate-x-[500px] opacity-0'
                        } z-0 ease-in-out transition-all duration-[1000ms] absolute left-[-1rem] xl:right-[-1rem] bottom-[1px] w-full xl:w-[350px] bg-black p-4 rounded-lg shadow-lg`}
                      >
                        <div className="relative flex items-center">
                          <img
                            alt={name}
                            className="hidden xl:block w-[150px] h-[150px] object-cover rounded-sm flex-shrink-0"
                            src={imageUrl}
                            loading="lazy"
                          />
                          <div className="ml-4 min-w-0">
                            <p className="text-[17px] text-white font-[900] line-clamp-2">{name}</p>
                            {hasRange && (
                              <p className="text-xs text-slate-400">
                                {formatPrice(minP)} – {formatPrice(maxP)}
                              </p>
                            )}
                            <p className="text-[17px] text-gray-400 font-[900]">{formatPrice(price)}</p>
                            <div className="flex items-center mt-4">
                              <button className="flex items-center text-sm bg-primary text-white px-4 py-2 rounded-sm font-dmSans">
                                Buy now
                              </button>
                              <button className="ml-3 flex items-center text-sm bg-transparent text-white border border-white px-4 py-2 rounded-sm font-dmSans">
                                <BsFillCartCheckFill />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
