import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FormInputData } from '../../JSON_data/FormInputData';
import Form from '../Form/Form';
import { saveShippingAddress } from '../redux/actions/cartAction';

const ShippingAddress = ({ saveShippingAddress }) => {
  const [inputValues, setInputValues] = useState({});
  return (
    <div className='shippingAddress w-full'>
      <h1 className='mb-2 text-2xl'>Delivery Details</h1>
      <hr className='mb-5' />
      <Form
        formInputData={FormInputData.slice(4, 8)}
        buttonText='Save & Continue'
        inputValues={inputValues}
        setInputValues={setInputValues}
        saveInformation={saveShippingAddress}
      />
    </div>
  );
};
const mapDispatchToProps = {
  saveShippingAddress: saveShippingAddress,
};
export default connect(null, mapDispatchToProps)(ShippingAddress);
