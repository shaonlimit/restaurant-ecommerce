import React from 'react';
import logo from '../../images/logo.png';
import { FooterLinkListData } from '../../JSON_data/FooterLinkListData';
import FooterLinkList from './FooterLinkList';
import FooterLink from './FooterLink';

const Footer = () => {
  return (
    <footer className='bg-black p-8 mt-8'>
      <div className='footer-top md:grid grid-cols-2 gap-6'>
        {/* footer logo */}
        <div className='logo mb-6'>
          <img src={logo} alt='' className='w-48' />
        </div>
        {/* footer middle list */}
        <div className='footer-link text-slate-300 md:grid grid-cols-2 gap-6'>
          <div className='footer-half-link mb-4'>
            {/* about online food, read our blog, sign up to deliver, add your restaurant link */}
            <FooterLink okay='okay' />
          </div>
          <div className='footer-half-link mb-6'>
            {/* get help, read faq, view all cities, restaurants near me */}
            <FooterLink />
          </div>
        </div>
      </div>
      <div className='footer-bottom md:grid grid-cols-2 gap-6'>
        <div className='copyright mb-2 text-gray-600'>
          <p>Copyright @ Saiful Islam Shaon</p>
        </div>
        <div className='footer-bottom-link text-slate-300'>
          {/* privacy policy, terms of use, pricing */}
          <ul className='md:grid grid-cols-3 gap-6'>
            {FooterLinkListData.map((data, index) => (
              <FooterLinkList key={index} data={data} />
            )).slice(8, 11)}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
