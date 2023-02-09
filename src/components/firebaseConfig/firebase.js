import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBNgLoASPkcNUUxtZutPjalyj8i3B1b8GM',
  authDomain: 'red-onion-restaurant-react.firebaseapp.com',
  projectId: 'red-onion-restaurant-react',
  storageBucket: 'red-onion-restaurant-react.appspot.com',
  messagingSenderId: '345059876742',
  appId: '1:345059876742:web:8a395ab5c4be8ae33c5607',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
