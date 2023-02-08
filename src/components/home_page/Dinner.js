import React from 'react';
import { MenuItem } from '../../JSON_data/MenuItem';

import FoodMenuItem from './FoodMenuItem';

const Dinner = () => {
  const dinner = MenuItem.slice(12, 18);
  return (
    <div className='container mt-12 block mx-auto gap-16 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3'>
      {dinner.map((item, index) => (
        <FoodMenuItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Dinner;
