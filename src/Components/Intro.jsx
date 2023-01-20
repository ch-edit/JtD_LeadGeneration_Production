import React from 'react';
import Logo from '../assets/logo_JtD.png';

const Intro = ({ handleStepChange }) => {
  return (
    <div className='formStep_container'>
      <a href='https://wejointhedots.co.uk/' target='_blank'>
        <img src={Logo} className='logo' alt='Join the Dots logo' />
      </a>
      <h1>Let’s make your media unstoppable. Request our brochure today…</h1>
      <button onClick={handleStepChange}>Next</button>
    </div>
  );
};

export default Intro; 