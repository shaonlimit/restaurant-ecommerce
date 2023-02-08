import React from 'react';
import { FooterLinkListData } from '../../JSON_data/FooterLinkListData';
import FooterLinkList from './FooterLinkList';

const FooterLink = ({ okay }) =>
  okay === 'okay' ? (
    <ul>
      {FooterLinkListData.map((data, index) => (
        <FooterLinkList key={index} data={data} />
      )).slice(0, 4)}
    </ul>
  ) : (
    <ul>
      {FooterLinkListData.map((data, index) => (
        <FooterLinkList key={index} data={data} />
      )).slice(4, 8)}
    </ul>
  );
export default FooterLink;
