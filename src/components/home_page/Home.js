import React, { useState } from 'react';
import BreakFast from './BreakFast';
import Footer from '../Footer/Footer.jsx';

import Dinner from './Dinner';
import Lunch from './Lunch';
import Header from './Header';
import HomeNavbar from './HomeNavbar';
import WhyChooseUs from './WhyChooseUs';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = ({ cart }) => {
  const [showBreakFast, setShowBreakFast] = useState(true);
  const [showLunch, setShowLunch] = useState(false);
  const [showDinner, setShowDinner] = useState(false);

  const toggleBreakFast = () => {
    setShowBreakFast(true);
    setShowLunch(false);
    setShowDinner(false);
  };
  const toggleLunch = () => {
    setShowLunch(true);
    setShowBreakFast(false);
    setShowDinner(false);
  };
  const toggleDinner = () => {
    setShowDinner(true);
    setShowBreakFast(false);
    setShowLunch(false);
  };
  return (
    <>
      <Header />
      <HomeNavbar
        toggleBreakFast={toggleBreakFast}
        toggleLunch={toggleLunch}
        toggleDinner={toggleDinner}
      />
      {showBreakFast && <BreakFast />}
      {showLunch && <Lunch />}

      {showDinner && <Dinner />}
      <div className='flex justify-center mt-12 w-1/5 mx-auto'>
        <Link to='/shipping'>
          <button
            className={`inline-block p-2 px-12 ${
              cart.length === 0
                ? 'bg-gray-600 cursor-not-allowed'
                : ' bg-primary-color'
            } rounded w-full text-white font-medium`}
          >
            Checkout Your Food
          </button>
        </Link>
      </div>
      <WhyChooseUs />
      <Footer />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
export default connect(mapStateToProps)(Home);
