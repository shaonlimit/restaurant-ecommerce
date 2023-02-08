import React from 'react';
import { connect } from 'react-redux';

const DeliveryAdress = ({ shippingAddress }) => {
  return (
    <div className='delivery-address'>
      <p>
        Delivery To:&nbsp;<b>{shippingAddress.businessName}</b>
      </p>
      <p>
        Delivery Method:&nbsp;<b>{shippingAddress.deliveryMethod}</b>
      </p>
      <p>
        Delivery Address: &nbsp; <b>{shippingAddress.address}</b>
      </p>
      <p>
        Delivery Notes: &nbsp; <b>{shippingAddress.deliveryNotes}</b>
      </p>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    shippingAddress: state.shippingAddress,
  };
};
export default connect(mapStateToProps)(DeliveryAdress);
