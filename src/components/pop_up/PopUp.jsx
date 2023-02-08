import React from 'react';
import './PopUp.css';

const PopUp = ({ text, setPopUp }) => {
  return (
    <>
      <div className='pop-up' onClick={setPopUp}>
        <div className='bg-white w-64  p-8 rounded-lg'>
          <h2 className='text-xl text-center'>{text}</h2>
          <button
            className='mt-6 block mx-auto text-center p-1 px-5 bg-primary-color rounded-full text-white font-medium'
            onClick={setPopUp}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default PopUp;
