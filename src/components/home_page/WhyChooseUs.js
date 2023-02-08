import React from 'react';
import { WhyChooseUsData } from '../../JSON_data/WhyChooseUsData';
import WhyChooseUsBody from './WhyChooseUsBody';
import WhyChooseUsHead from './WhyChooseUsHead';

const WhyChooseUs = () => {
  return (
    <div className='container mx-auto'>
      {/* Why choose us description section */}
      <WhyChooseUsHead />
      <div className='lg:grid grid-cols-3'>
        {WhyChooseUsData.map((data, index) => (
          <WhyChooseUsBody key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
