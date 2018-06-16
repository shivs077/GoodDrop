import React from 'react';
import ModalExample from './modal2';
import bike from '../images/bike.jpg';

const Upper=()=>{
    return (
        <div className="container-fluid" id="container-up">  
            <h2> Bike Shipping Through Railways Got</h2><h2> Convienient and Easy
            </h2>
            <div className="bike-img">
                <img src={bike} alt="bike"/>
            </div>
        <div className="btn-group">
  <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    YOUR PARCEL DETAILS
  </button>
            <div className="dropdown-menu">
  <form className="px-4 py-3">
    <div className="form-group">
      <label for="parcelFrom">Parcel From</label>
      <select className="form-control" id="exampleDropdownFormEmail1" ></select>
    </div>
    <div className="form-group">
      <label for="ParcelTo">To</label>
      <select className="form-control" id="exampleDropdownFormPassword1" > </select>
    </div>
    <div className="form-group">
        <label for="date">Parcel Date</label>
      <input type="date" className="form-control" id="dropdownCheck"/>
    </div>
   
        
  </form>
        
        
        <div className="clearfix"></div>
        <p> Could not find your city? <a href="#"> click here </a></p>
   <button type="submit" className="btn-primary">NEXT</button>
        <button type="submit" className="btn-2">CANCEL</button>
</div>
      </div>
        <div className="btn-group">
  <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    YOUR BIKE DETAILS
  </button>
            <div className="dropdown-menu">
  <form className="px-4 py-3">
    <div className="form-group">
      <label for="parcelFrom"></label>
      <select className="form-control" id="exampleDropdownFormEmail1" ></select>
    </div>
    <div className="form-group">
      <label for="ParcelTo">To</label>
      <select className="form-control" id="exampleDropdownFormPassword1" > </select>
    </div>
    <div className="form-group">
        <label for="date">Parcel Date</label>
      <input type="date" clasNames="form-control" id="dropdownCheck"/>
    </div>
    <button type="submit" className="btn btn-primary">Sign in</button>
        
  </form>
  
</div>
      </div>
        
        <ModalExample />
            </div>
           );
};

export default Upper;

        