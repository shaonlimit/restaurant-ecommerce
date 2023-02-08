import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo2.png';
import { FormInputData } from '../../JSON_data/FormInputData';

import Form from '../Form/Form';

const SignInPage = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='sign-up bg-white rounded shadow p-8 w-fit'>
        <img src={logo} alt='' className='w-64 mb-16' />
        {/* Sigin form */}
        <Form formInputData={FormInputData.slice(1, 3)} buttonText='Sign In' />
        <Link to='/sign-up'>
          <p className='text-sm text-red-700 text-center mt-3'>
            Don't have an account?
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;
