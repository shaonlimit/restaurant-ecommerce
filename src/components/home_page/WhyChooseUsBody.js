import React from 'react';

const WhyChooseUsBody = ({ data }) => {
  const { img, icon, title, description, button } = data;
  return (
    <div className='w-full mx-auto lg:w-full p-3 md:w-full'>
      <img
        src={require(`../../images/${img}`)}
        alt=''
        className='h-auto mt-8'
      />
      <div className=' mt-4 lg:flex'>
        <img
          className='w-12 h-12 mb-2 lg:mr-3'
          src={require(`../../images/icons/${icon}`)}
          alt=''
        />
        <div className='why-choose-us-body-text'>
          <p className='text-lg font-medium'>{title}</p>
          <p className='text-gray-500 mt-2 text-justify'>{description}</p>
          <button className='mt-2 text-blue-700 text-sm'>{button}</button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsBody;
