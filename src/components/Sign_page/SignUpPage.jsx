import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo2.png';
import { FormInputData } from '../../JSON_data/FormInputData';

import Form from '../Form/Form';

const SignUpPage = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='sign-up bg-white rounded shadow  p-8 w-fit'>
        <img src={logo} alt='' className='w-64 mb-16' />
        {/* Signup form */}
        <Form formInputData={FormInputData.slice(0, 4)} buttonText='Sign Up' />
        <Link to='/sign-in'>
          <p className='text-sm text-red-700 text-center mt-3'>
            Already have an account?
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
