import React from 'react';
import { connect } from 'react-redux';

const Bill = ({ cart }) => {
  const totalItems = cart.reduce(
    (accumulator, item) => accumulator + item.quantity,
    0
  );
  const totalPurchase = cart.reduce(
    (accumulator, item) => accumulator + item.price * item.quantity,
    0
  );
  const tax = totalPurchase * 0.002;
  const deliveryCharge = cart.length === 0 ? 0 : 5;
  const subTotal = totalItems + totalPurchase + tax + deliveryCharge;

  return (
    <div className='bill-details mt-8'>
      <table className='w-full'>
        <thead>
          <tr>
            <td>Total Items</td>
            <td>:&nbsp;{totalItems}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Total Purchase</td>
            <td>:&nbsp;${totalPurchase.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>:&nbsp;${tax.toFixed(2)}</td>
          </tr>
          <tr>
            <td>Delivery Charge</td>
            <td>:&nbsp;${deliveryCharge.toFixed(2)}</td>
          </tr>

          <tr className='text-xl font-medium'>
            <td>Sub Total</td>
            <td>:&nbsp;${subTotal.toFixed(2)}</td>
          </tr>
          <tr>
            <td>
              <button className='mt-8 inline-block p-2 px-12 bg-primary-color rounded w-full text-white font-medium'>
                Place order
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
export default connect(mapStateToProps)(Bill);
