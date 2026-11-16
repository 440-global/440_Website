import React from 'react';

const StripThree = ({handlePopup}) => {
  return (
    <div className="md:hidden px-4 relative bg-[#1D222D] bg-strip bg-center bg-cover w-full overflow-hidden md:mt-[-1rem] z-10">
      <div className="container mx-auto md:block md:pt-[160px] md:pb-[200px] py-[70px] font-dmSans bg-right relative">
        <div className="md:grid grid-cols-12">
          <div className="col-start-2 col-span-10"><h6
            className="font-dmSans text-white md:text-center text-[3rem] md:text-[4.5rem] font-bold leading-[1.1] relative pb-10">Connecting
            500 million <br/> Africans through commerce.</h6>
            <div className="md:flex z-30 justify-center">
              <button onClick={handlePopup}
                className="mx-auto bg-white text-[17px] text-black px-5 py-3 rounded-[12px] font-dmSans hover:border hover:border-white hover:bg-transparent hover:text-white">
                Download app
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StripThree;
