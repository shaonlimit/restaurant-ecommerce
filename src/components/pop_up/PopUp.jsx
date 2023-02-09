import React from 'react';
import './PopUp.css';

const PopUp = ({ text }) => {
  return (
    <>
      <div className='pop-up'>
        <div className='bg-white flex flex-col justify-center items-center p-8 rounded'>
          <i class='bx bxs-check-square text-primary-color text-4xl mb-4'></i>
          <h2 className='text-xl text-center font-medium text-primary-color'>
            {text}
          </h2>
        </div>
      </div>
    </>
  );
};

export default PopUp;
