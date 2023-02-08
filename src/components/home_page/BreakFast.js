import React from 'react';
import { MenuItem } from '../../JSON_data/MenuItem';
import FoodMenuItem from './FoodMenuItem';

const BreakFast = () => {
  const breakFast = MenuItem.slice(0, 6);
  return (
    <div className='container mt-12 grid grid-cols-1 gap-12 mx-auto md:grid md:grid-cols-2 lg:grid lg:grid-cols-3'>
      {breakFast.map((item, index) => (
        <FoodMenuItem key={index} item={item} />
      ))}
    </div>
  );
};

export default BreakFast;
