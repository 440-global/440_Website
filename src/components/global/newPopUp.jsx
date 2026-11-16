import React from "react";
import Link from "next/link";
import { IoIosCloseCircle } from "react-icons/io";

const NesPopup = ({ handleNewsPopup, isNewsPopupOpen }) => {
    const newsList = [
        {date:"June 2, 2024", title:"AI-powered firm to scale operation in Q3 …Targets Africans in diaspora", source:"Business Day", link:"https://businessday.ng/life/article/ai-powered-firm-to-scale-operation-in-q3-targets-africans-in-diaspora"},
        {date:"1 Jun 2024", title:"Firm unveils platform to enable shoppers discover products at competitive prices", source:"Guardian", link:"https://guardian.ng/news/firm-unveils-platform-to-enable-shoppers-discover-products-at-competitive-prices/"},
        {date:"May 31, 2024", title:"Meet 440, an AI-powered global products, price, and deals discovery platform", source:"Nairametrics", link:"https://nairametrics.com/2024/05/31/meet-440-an-ai-powered-global-products-price-and-deals-discovery-platform/"}
    ]
  return (
    <div
      className={`${
        isNewsPopupOpen ? "flex" : "hidden"
      } fixed inset-0 z-50 items-center justify-center`}
    >
      {/* Background overlay */}
      <div
        onClick={handleNewsPopup}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />
      {/* Popup content */}
      <div className="relative bg-white w-full max-w-3xl rounded-xl shadow-2xl m-4 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Latest News
          </h2>
          <button
            onClick={handleNewsPopup}
            className="text-red-500 hover:text-red-600 transition"
          >
            <IoIosCloseCircle size={36} />
          </button>
        </div>

        {/* News List */}
        <div className="max-h-[70vh] overflow-y-auto p-5 space-y-4">
          {newsList.length === 0 ? (
            <div className="text-center text-gray-500 py-10">
              No news available at the moment.
            </div>
          ) : (
            newsList.map((news, index) => (
                <Link key={index+1} href={news.link}>
                 <div
                key={index}
                className="border rounded-xl mb-2 p-4 shadow-sm hover:shadow-md transition bg-gray-50"
              >
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {news.description}
                </p>
                <div className="flex justify-between items-center text-xs text-gray-700">
                  <span>{news.date}</span>
                  {news.source && (
                    <span className="italic">Source: {news.source}</span>
                  )}
                </div>
              </div>
                </Link>
             
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t bg-gray-50 flex justify-end">
          <button
            onClick={handleNewsPopup}
            className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default NesPopup;
