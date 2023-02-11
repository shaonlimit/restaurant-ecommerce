import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { auth } from '../firebaseConfig/firebase';

const PrivateOutlet = () => {
  const user = auth.currentUser;
  const location = useLocation();
  return user ? (
    <Outlet />
  ) : (
    <Navigate to='/sign-in' replace state={{ from: location }} />
  );
};

export default PrivateOutlet;
