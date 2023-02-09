import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../images/logo2.png';
import { FormInputData } from '../../JSON_data/FormInputData';
import { auth } from '../firebaseConfig/firebase';

const SignInPage = () => {
  const navigatge = useNavigate();
  const formInputData = FormInputData.slice(1, 3);
  const [inputValues, setInputValues] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };
  const signInUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, inputValues.email, inputValues.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigatge('/shipping');
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage.includes('wrong')) {
          setErrorMessage('Wrong password');
        } else if (errorMessage.includes('found')) {
          setErrorMessage('User not found');
        } else {
          setErrorMessage(errorMessage);
        }
      });
  };
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='sign-up bg-white rounded shadow p-8 w-fit'>
        <img src={logo} alt='' className='w-64 mb-16' />
        {/* Sigin form */}

        <form action='' onSubmit={signInUser}>
          <div className='input flex flex-col'>
            {formInputData.map((input, index) => (
              <input
                className='bg-slate-100 mb-4 p-2 rounded focus:outline-none'
                key={index}
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                required
                onChange={handleChange}
              />
            ))}
          </div>

          {/* button */}
          <div className=' w-full'>
            <button
              type='submit'
              className=' inline-block p-2 px-12 bg-primary-color rounded w-full text-white font-medium'
            >
              Sign In
            </button>
          </div>
        </form>
        {errorMessage && (
          <p className='text-sm text-red-700 text-center mt-3'>
            {errorMessage}
          </p>
        )}
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
