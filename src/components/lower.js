import React from 'react';
import Step1 from '../images/step1.JPG';
import Step2 from '../images/step2.JPG';
import Step3 from '../images/step3.JPG';
const Lower=()=>{
    return (<div className="container-fluid con-2"> 
              <h2> Bike shipping is easy with us </h2>
            <h2> in 3 simple steps
               </h2>
            <div className="row">
              <div className="col-lg-4">
                <p>STEP 01</p><hr/>
                <div className="steps"><img src={Step1} alt="step1"/>
                    <p> Enter bike shipping details</p>
                </div>
              </div>
            
              <div className="col-lg-4">
                <p>STEP 02</p><hr/>
           <div className="steps"> <img src={Step2} alt="step1"/>
            <p> Hand over the keys to Gooddrop executives</p>
                </div>
              </div>
              <div className="col-lg-4">
                <p>STEP 03</p><hr/>
           <div className="steps"> <img src={Step3} alt="step1"/>
            <p> Get you bike at your destination</p>
                </div>
              </div>
            </div>
             <button className="btn" type="submit" data-inline="true" ><a href="#container-up">book now</a></button>
             <button className="btn btn-2" type="submit" data-inline="true">contact</button>
            
            </div>);
};

export default Lower;