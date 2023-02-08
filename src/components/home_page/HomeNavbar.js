import React, { useState } from 'react';

const HomeNavbar = ({ toggleBreakFast, toggleLunch, toggleDinner }) => {
  const [active, setActive] = useState('breakfast');
  return (
    <div className='flex justify-center mt-20'>
      <button
        className={`font-medium border-b-orange-800 mr-4 hover:text-primary-color transition duration-150 ${
          active === 'breakfast'
            ? 'text-primary-color border-b-2 rounded border-solid border-b-primary-color'
            : ''
        }`}
        onClick={() => {
          toggleBreakFast();
          setActive('breakfast');
        }}
      >
        Break Fast
      </button>

      <button
        className={`font-medium mr-4 hover:text-primary-color transition duration-150 ${
          active === 'lunch'
            ? 'text-primary-color border-b-2 rounded border-solid border-b-primary-color'
            : ''
        }`}
        onClick={() => {
          toggleLunch();
          setActive('lunch');
        }}
      >
        Lunch
      </button>
      <button
        className={`font-medium mr-4 hover:text-primary-color transition duration-150 ${
          active === 'dinner'
            ? 'text-primary-color border-b-2 rounded border-solid border-b-primary-color'
            : ''
        }`}
        onClick={() => {
          toggleDinner();
          setActive('dinner');
        }}
      >
        Dinner
      </button>
    </div>
  );
};

export default HomeNavbar;
