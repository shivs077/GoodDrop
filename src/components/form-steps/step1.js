import React from 'react';

const StepOne=()=>{
    return (
       <div>
          <p> Charges for this order would be <strong> INR 500/- </strong></p>
        
          <h4> PICKUP DETAILS </h4>
          <form>
  <div className="form-group">
    <label for="InputName">Sender Name*</label>
    <input type="name" className="form-control" id="InputName" aria-describedby="nameHelp" placeholder="" />
  </div>
  <div className="form-group">
    <label for="InputContact">Contact Number*</label>
    <input type="number" className="form-control" id="InputContact" placeholder="" />
  </div>
  <div className="form-group">
       <label for="InputEmail">Email ID*</label>
    <input type="email" className="form-control" id="InputEmail" placeholder=""/>
  </div>
   <div className="row">
    <div className="col">
        <label for="InputDate">Pick Up Date*</label>
      <input type="date" className="form-control" placeholder=""/>
    </div>
    <div className="col">
        <label for="InputSlot">Pick Up Slot*</label>
      <select className="form-control" id="exampleFormControlSelect1">
      <option></option>
      </select>
    </div>
  </div>
   <div className="form-group">
    <label for="InputName">Address Line*</label>
    <input type="name" className="form-control" id="InputName" aria-describedby="nameHelp" placeholder="" />
  </div>
  <div className="form-group">
    <label for="InputContact">Town/City*</label>
   <select className="form-control" id="exampleFormControlSelect1">
              <option></option>
      </select>
  </div>
  <div className="form-group">
       <label for="InputEmail">State*</label>
    <select className="form-control" id="exampleFormControlSelect1">
              <option></option>
      </select>
  </div>
  
</form>
        </div>
    );
};

export default StepOne;