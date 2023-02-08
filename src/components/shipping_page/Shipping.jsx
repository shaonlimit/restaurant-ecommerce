import React from 'react';
import { connect } from 'react-redux';
import Bill from './Bill';
import CartProduct from './CartProduct';
import DeliveryAdress from './DeliveryAdress';

import ShippingAddress from './ShippingAddress';

const Shipment = ({ cart }) => {
  return (
    <div className='delivery-page p-8 md:container lg:grid grid-cols-2 gap-16 mx-auto'>
      <div className='delivery-adress-form mb-16'>
        <ShippingAddress />
      </div>
      <div className='billing-details'>
        <div className='delivery-adress'>
          <DeliveryAdress />
        </div>
        <div className='product-details mt-8'>
          {cart.map((food, index) => (
            <CartProduct key={index} item={food} />
          ))}
        </div>
        <div className='bill'>
          <Bill />
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
export default connect(mapStateToProps)(Shipment);
