import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../redux/actions/cartAction';

const CartProduct = ({ item, removeFormCart }) => {
  return (
    <div className='cart-product  bg-gray-100 p-6 rounded mb-4 lg:grid grid-cols-2'>
      <div className='product-img w-3/5 lg:w-4/5'>
        <img src={require(`../../images/${item.img}`)} alt='' />
      </div>
      <div className='product-details mt-4'>
        <h1 className='text-xl font-medium'>{item.title}</h1>
        <p className='text-lg font-medium text-primary-color'>${item.price}</p>
        <p>Quantity:&nbsp;{item.quantity}</p>
        <button
          onClick={() => removeFormCart(item)}
          className='inline-block px-2 py-1 bg-primary-color rounded text-white font-medium mt-2'
        >
          Remove Item
        </button>
      </div>
    </div>
  );
};
const mapDispatchToProps = {
  removeFormCart: removeFromCart,
};
export default connect(null, mapDispatchToProps)(CartProduct);
