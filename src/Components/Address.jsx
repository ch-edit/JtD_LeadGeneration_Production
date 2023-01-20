import React, { useEffect } from 'react';

const Address = ({ firstName, lastName, email, postcode, address, handleStepChange, handleInputs}) => {


  //Dataguard Config and form submission
  useEffect(() => {
    const DG_config = {
      id: 'dg_widget',
      templateId: 'hqGAW5UsmUK',
      uniqueReference: `JtD_test-${email}`,
      channel: 'Online display media purchase',
      campaign: 'BT: Broadband -  Lead Generation',

      display: {
        applyDefaultStyle: false,
        location: 'inside',
        closeOnSubmit: false,
        displayCancelButtons: false,
        consentricLogo: false,
      },

      events: {
        onUpdate: (state) => {
          console.log('Current state:', state);
        },
        onSuccess: (response, submission) => {
          handleStepChange(1);
          console.log('Response body:', response);
          console.log('Submission sent to DataGuard:', submission);
        },
        onFailure: (error, submission) => {
          console.log('Error:', error);
          console.log('Submission sent to DataGuard:', submission);
        },
      },

      dataSharing: {
        partner: 'Join the Dots',
        data: {
          firstName: firstName,
          lastName: lastName,
          email: email,
          postcode: postcode,
          address: address,
        },
      },

      contactDetails: {
        verification: {
          email: email
        }
    }


    };

    const widget = (config) => {
      ExpressStatelessCapturePoint.load(config);
      console.table(config.dataSharing.data);
    };

    const dgScript = document.createElement('script');

    document.body.appendChild(dgScript);
    dgScript.addEventListener('load', widget(DG_config));

    return () => {
      document.body.removeChild(dgScript);
    };
  }, []);


  return (
    <div className='formStep_container' >
      <div className='input_container'>
        <label htmlFor='address'>Select Address:</label>
        <select name='address' id='address' value={address} onChange={handleInputs}>
          <option value='Address 1'>Address 1 {postcode && `for ${postcode}`}</option>
          <option value='Address 2'>Address 2 {postcode && `for ${postcode}`}</option>
          <option value='Address 3'>Address 3 {postcode && `for ${postcode}`}</option>
          <option value='Address 4'>Address 4 {postcode && `for ${postcode}`}</option>
          <option value='Address 5'>Address 5 {postcode && `for ${postcode}`}</option>
        </select>
      </div>
      <div id='dg_widget'></div>
    </div>
  );
};

export default Address;