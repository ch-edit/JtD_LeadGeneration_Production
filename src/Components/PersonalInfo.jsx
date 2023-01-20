import React from 'react';

const PersonalInfo = ({ firstName, lastName, companyName, email, postcode, handleInputs, handleStepChange }) => {
  return (
    <div className='formStep_container'>
        <div className='input_container'>
          <label className='label_personalInfo' htmlFor='firstName' aria-label='First Name'>First Name:</label>
          <input id='firstName' type='text' placeholder='First Name' name='firstName' value={firstName} onChange={handleInputs} />
        </div>
        <div className='input_container'>
          <label className='label_personalInfo' htmlFor='lastName' aria-label='Last Name'>Last Name:</label>
          <input id='lastName' type='text' placeholder='Last Name' name='lastName' value={lastName} onChange={handleInputs} />
        </div>
        <div className='input_container'>
          <label className='label_personalInfo' htmlFor='companyName' aria-label='Company Name'>Company Name:</label>
          <input id='companyName' type='text' placeholder='Company Name' name='companyName' value={companyName} onChange={handleInputs} />
        </div>
        <div className='input_container'>
          <label className='label_personalInfo' htmlFor='email' aria-label='Email Address'>Email:</label>
          <input id='email' type='email' placeholder='Email Address' name='email' value={email} onChange={handleInputs} />
        </div>
        <div className='input_container'>
          <label className='label_personalInfo' htmlFor='postcode' aria-label='Postcode'>Postcode:</label>
          <input id='postcode' type='text' placeholder='Postcode' name='postcode' value={postcode} onChange={handleInputs} />
        </div>
        <button onClick={handleStepChange}>Next</button>
    </div>
  );
};

export default PersonalInfo;
