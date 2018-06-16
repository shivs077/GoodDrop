import Multistep from 'react-multistep';
import React from 'react';
import StepOne from './form-steps/step1';
import StepTwo from './form-steps/step2';
import StepThree from './form-steps/step3';
import StepFour from './form-steps/step4';

const steps = [
              {name: 'PICKUP DETAILS', component: <StepOne/>},
              {name: 'DESTINATION DETAILS', component: <StepTwo/>},
              {name: 'SUMMARY', component: <StepThree/>},
              {name: 'PAY', component: <StepFour/>}
            ];

const Form =()=>{
   return (<Multistep showNavigation={true} steps={steps}/>);
};
           
export default Form;

