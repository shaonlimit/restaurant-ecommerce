import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { MenuItem } from '../../JSON_data/MenuItem';
import { addToCart } from '../redux/actions/cartAction';
import PopUp from '../pop_up/PopUp';

const SingleProductView = ({ addToCart, cart }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [popUp, setPopUp] = useState(false);
  const product = MenuItem.find((item) => item.id === id);
  const [quantity, setQuantity] = useState(1);
  const handleClick = () => {
    const sameProduct = cart.findIndex((item) => item.id === product.id);
    if (sameProduct !== -1) {
      cart[sameProduct].quantity += quantity;
    } else {
      addToCart({ ...product, quantity: quantity });
    }
    setPopUp(true);
    setTimeout(() => {
      setPopUp(false);
      navigate('/');
    }, 1000);
  };

  return (
    <>
      <div className='single-product-view p-8 lg:grid grid-cols-2'>
        <div className='product-img w-56 lg:w-3/5 lg:mx-auto'>
          <img src={require(`../../images/${product.img}`)} alt='' />
        </div>
        <div className='product-description mt-8 lg:w-4/5'>
          <h1 className='text-3xl'>{product.title}</h1>
          <p className='mt-4 text-gray-500'>{product.details}</p>
          <p className='text-2xl mt-6'>${product.price}</p>
          <div className='quantity mt-2'>
            <label htmlFor='quantity'>Quantity: </label>
            <input
              type='number'
              value={quantity}
              onChange={(e) => {
                if (e.target.value === '0') {
                  return;
                }
                setQuantity(Number(e.target.value));
              }}
            />
          </div>

          <div className='button-group mt-4'>
            <button
              onClick={handleClick}
              className='inline-block p-1 px-5 bg-primary-color rounded-full text-white font-medium mr-4 mb-4'
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {popUp && <PopUp text='Food added to cart' />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = {
  addToCart: addToCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleProductView);
