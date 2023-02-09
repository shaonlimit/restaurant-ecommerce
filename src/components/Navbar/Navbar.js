import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo2.png';
import { auth } from '../firebaseConfig/firebase';
import CartIcon from './CartIcon';

const Navbar = ({ cart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const user = auth.currentUser;

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/');
        console.log('Signed out successfully');
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <nav className='bg-white  w-full z-30 top-0 shadow'>
      <div className='w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2'>
        <div className='pl-4'>
          <Link to='/'>
            {' '}
            <img src={logo} alt='' className='w-40' />
          </Link>
        </div>
        <div className='block lg:hidden pr-4'>
          <button
            onClick={toggleMenu}
            className='flex items-center px-3 py-2 border rounded text-primary-color border-primary-color'
          >
            <svg
              className='fill-current h-3 w-3'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title>Menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
            </svg>
          </button>
        </div>
        <div
          className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${
            isOpen ? 'block' : 'hidden'
          } lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20`}
        >
          <ul className='list-reset lg:flex justify-end flex-1 items-center'>
            {/* shopping cart icon */}
            <li className='cart-icon mr-3'>
              <CartIcon cart={cart} />
            </li>
            <li className='sign-in-button mr-3'>
              {/* sign in button */}
              {user !== null ? (
                <p>{user.displayName}</p>
              ) : (
                <Link to='/sign-in'>
                  {' '}
                  <button className='inline-block py-1 px-5 text-black font-medium'>
                    Sign In
                  </button>
                </Link>
              )}
            </li>
            <li className='sign-up-button mr-3'>
              {/* sign up button */}
              {user !== null ? (
                <button
                  onClick={handleLogout}
                  className='inline-block p-1 px-5 bg-primary-color rounded-full text-white font-medium'
                >
                  Sign Out
                </button>
              ) : (
                <Link to='/sign-up'>
                  <button className='inline-block p-1 px-5 bg-primary-color rounded-full text-white font-medium'>
                    Sign Up
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
