import React from 'react';
import FoodMenuItem from '../home_page/FoodMenuItem';
import { MenuItem } from '../../JSON_data/MenuItem';

const Shop = () => {
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  shuffleArray(MenuItem);
  return (
    <div className='container mt-12 grid grid-cols-1 gap-12 mx-auto md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 mb-8'>
      {MenuItem.map((item, index) => (
        <FoodMenuItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Shop;
