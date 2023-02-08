import React from 'react';
import { Link } from 'react-router-dom';

const FoodMenuItem = ({ item }) => {
  const { title, description, img, price } = item;
  return (
    <Link to={`/item/${item.id}`}>
      <div className='menu-item bg-slate-50 p-8 text-center hover:shadow-2xl ease-in-out transition duration-150 rounded-xl'>
        <img
          className='w-64 block mx-auto'
          src={require(`../../images/${img}`)}
          alt=''
        />
        <h1 className='mt-8 text-xl font-medium'>{title}</h1>
        <p className='text-gray-500 mt-1'>{description}</p>
        <p className='mt-4 font-medium text-xl'>${price}</p>
      </div>
    </Link>
  );
};

export default FoodMenuItem;
