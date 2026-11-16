import React from "react";
import {
  FaCreditCard,
  FaIndustry,
  FaSearch,
  FaShieldAlt,
  FaShoppingBasket,
  FaTruck,
} from "react-icons/fa";

const WHAT_WE_DO_ITEMS = [
  {
    Icon: FaIndustry,
    title: "Direct Factory Access",
    text: "We connect you to verified manufacturers in the UK, US, and China at factory-level prices.",
  },
  {
    Icon: FaShoppingBasket,
    title: "Demand pooling",
    text: "We group buyers ordering the same products together, so you can meet the factory's minimum order quantity.",
  },
  {
    Icon: FaCreditCard,
    title: "Split Payments",
    text: "Put down 50% to lock in your order. Pay the remaining balance when your goods arrive.",
  },
  {
    Icon: FaSearch,
    title: "Inspection Before Shipment",
    text: "We inspect your goods at the factory before shipping. What you ordered is exactly what you get.",
  },
  {
    Icon: FaShieldAlt,
    title: "Structured Procurement",
    text: "We partner exclusively with verified suppliers and enforce strict quality control protocols at every stage of production.",
  },
  {
    Icon: FaTruck,
    title: "Managed Cross-Border Logistics",
    text: "We coordinate freight, documentation, and customs clearance. Your goods move from the factory to your door without the chaos.",
  },
];

const WhatWeDo = () => {
  return (
    <section className="bg-[#F8F9FB] font-dmSans py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[2.25rem] md:text-5xl font-bold text-slate-900 tracking-tight">
            What We Do
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            From Factory to Your Doorstep. You don&apos;t need multiple middlemen for one shipment.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {WHAT_WE_DO_ITEMS.map(({ Icon, title, text }) => (
            <article
              key={title}
              className="bg-white border border-gray-200/90 rounded-xl p-6 md:p-7 shadow-sm text-left transition-shadow hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5">
                <Icon className="w-6 h-6" aria-hidden />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
              <p className="text-sm md:text-[15px] text-gray-500 leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-24 bg-white dark:bg-background-dark overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold mb-4 text-black">How It Works</h2>
          <p className="text-gray-600">Join the movement in four simple steps</p>
        </div>
        <div className="relative flex flex-col lg:flex-row justify-between gap-12 lg:gap-4">
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gray-100 z-0" />
          <div className="flex-1 text-center relative z-10">
            <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-white dark:border-background-dark">
              <span className="text-2xl font-black">1</span>
            </div>
            <h4 className="text-lg font-bold mb-2 text-black">Find Trending Products</h4>
            <p className="text-sm text-gray-500 max-w-50 mx-auto">
              Browse high-demand categories or tell us what you need.
            </p>
          </div>
          <div className="flex-1 text-center relative z-10">
            <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-white dark:border-background-dark">
              <span className="text-2xl font-black">2</span>
            </div>
            <h4 className="text-lg font-bold mb-2 text-black">Join a Bulk Pool</h4>
            <p className="text-sm text-gray-500 max-w-50 mx-auto">
              Reserve your quantity. Orders activate only after you commit a 50% deposit.
            </p>
          </div>
          <div className="flex-1 text-center relative z-10">
            <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-white dark:border-background-dark">
              <span className="text-2xl font-black">3</span>
            </div>
            <h4 className="text-lg font-bold mb-2 text-black">We Inspect Before Shipment</h4>
            <p className="text-sm text-gray-500 max-w-50 mx-auto">
              Our team verifies your goods at the factory to confirm quality.
            </p>
          </div>
          <div className="flex-1 text-center relative z-10">
            <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-white dark:border-background-dark">
              <span className="text-2xl font-black">4</span>
            </div>
            <h4 className="text-lg font-bold mb-2 text-black">We Ship to You</h4>
            <p className="text-sm text-gray-500 max-w-50 mx-auto">
              You receive your goods tracked, cleared, and ready to sell.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <>
      <WhatWeDo />
      <HowItWorks />
    </>
  );
};

export default Services;
