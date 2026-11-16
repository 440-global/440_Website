import React from 'react';
import RequestQuoteForm from '../requestForQuot/RequestQuoteForm';

const RfqPopup = ({handleRfqPopup, isRfqPopupOpen}) => {
  return (
    <div className={`${isRfqPopupOpen ? 'block' : 'hidden'} fixed inset-0 z-50 flex items-center justify-center`}>
      {/* <button onClick={handleRfqPopup} className="absolute top-5 right-5 text-red-500 z-30">
        <IoIosCloseCircle size="50px" />
      </button> */}
      <div onClick={handleRfqPopup} className="absolute inset-0 bg-black opacity-50"></div>
      <RequestQuoteForm handleRfqPopup={handleRfqPopup}/>
    </div>
  );
};

export default RfqPopup;
