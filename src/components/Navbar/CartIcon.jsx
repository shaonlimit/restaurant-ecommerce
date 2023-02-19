import React from 'react';
import { Link } from 'react-router-dom';
import './CartIcon.css';

const CartIcon = ({ cart }) => {
  const totalProducts = cart.reduce((p, item) => p + item.quantity, 0);
  // const [cartLength, setCartLength] = useState(0);
  // useEffect(() => {
  //   setCartLength(cart.length);
  // }, [cart]);
  return (
    <>
      <Link to={'/shipping'}>
        <i className='bx bx-cart text-xl' />
        {totalProducts > 0 && (
          <span className='cart-length-bubble'>{totalProducts}</span>
        )}
      </Link>
    </>
  );
};

export default CartIcon;
