import React from 'react';
import Logo from '../assets/logo_JtD.png';

const ThankYou = ({ firstName }) => {
  return (
    <div className='formStep_container'>
      <a href='https://wejointhedots.co.uk/' target='_blank'>
        <img src={Logo} className='logo' alt='Join the Dots logo'/>
      </a>
      <h1>Thank you {firstName && firstName} - We'll be in touch</h1>
    </div>
  );
};

export default ThankYou;
