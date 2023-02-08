import React from 'react';
import backgroundImage from '../../images/bannerbackground.png';

const Header = () => {
  return (
    <div
      className='bg-cover bg-center flex flex-col justify-center items-center w-full'
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: '400px',
      }}
    >
      <h1 className=' text-slate-800 font-medium text-center lg:text-6xl md:text-5xl sm:text-4xl'>
        Best food waiting for your belly
      </h1>
      <div className='w-2/5 md:relative'>
        <input
          type='text'
          placeholder='Search food items'
          className='rounded-full w-full focus: outline-none mt-7 px-5 py-2 sm:block'
        />
        <button className='bg-primary-color px-5 py-2  text-white font-medium rounded-full md:absolute right-0 top-0 md:w-28 md:mt-7  sm:block mx-auto sm:mt-2 sm:w-full'>
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
