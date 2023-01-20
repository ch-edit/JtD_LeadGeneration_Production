import { useState} from 'react';

import Intro from './Components/Intro';
import PersonalInfo from './Components/PersonalInfo';
import Address from './Components/Address';
import ThankYou from './Components/ThankYou';

function App() {

//Controlled Inputs
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    postcode: '',
    address: ''
  });

//Input Handler function
  const handleInputs = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

//Form Steps
  const [step, setStep] = useState(0);

//Form Step Handler
  const handleStepChange = () => {
    setStep(step + 1);
  };

//Form Step Array
  const formSteps = [
    <Intro handleStepChange={handleStepChange}/>,
    <PersonalInfo step={step} {...inputs} handleInputs={handleInputs} handleStepChange={handleStepChange}/>,
    <Address step={step} {...inputs} handleInputs={handleInputs} handleStepChange={handleStepChange}/>,
    <ThankYou step={step} firstName={inputs.firstName} />,
  ];

  return (
    <div className='form_container'>
        {formSteps[step]}
    </div>
  );
}

export default App;
