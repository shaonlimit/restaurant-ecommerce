import React, { useEffect, useState } from 'react';
import './CartIcon.css';

const CartIcon = (props) => {
  const [cartLength, setCartLength] = useState(0);
  useEffect(() => {
    setCartLength(props.cart.length);
  }, [props.cart]);
  return (
    <>
      <i className='bx bx-cart text-xl' />
      {cartLength > 0 && (
        <span className='cart-length-bubble'>{cartLength}</span>
      )}
    </>
  );
};

export default CartIcon;
