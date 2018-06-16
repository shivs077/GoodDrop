import React from 'react';
const Footer=()=>{
    return (
        <footer className="page-footer font-small">
            <div className="row" >
              <div className="col-lg-6 foo-1">
                <div className="row">
                    <div className="col-lg-4">
                      <h4>Company </h4>
                     
                      <li className="nav-item"><a className="nav-link" href="#">About us</a></li>
                      <li className="nav-item"><a className="nav-link" href="#">Customers Reviews</a></li>
                      <li className="nav-item"><a className="nav-link" href="#">Booking Terms</a></li>
                      <li className="nav-item"><a className="nav-link" href="#">Terms of Use</a></li>
                      <li className="nav-item"><a className="nav-link" href="#">Privacy Policy</a></li>
                    
                    </div>
                    <div className="col-lg-4">
                        <h4>Support</h4>
                         <li className="nav-item"><a className="nav-link" href="#">How to</a></li>
                      <li className="nav-item"><a className="nav-link" href="#">FAQs</a></li>
                    </div>
                    <div className="col-lg-4">
                       <h4> Need Help</h4>
                         <li className="nav-item"><a className="nav-link" href="#">support@gooddrop.com</a></li>
                      <li className="nav-item"><a className="nav-link" href="#">Call at 9756432675</a></li>
                    </div>
                </div>
              </div>
              <div className="col-lg-6 foo-2">
                <div className="social-icons"><i className="fab fa-facebook-f"></i></div>
                <div className="social-icons"> <i className="fab fa-twitter"></i></div>
                <div className="social-icons"><i className="fab fa-instagram"></i></div>
        
             </div>
            </div> 
             
            
        </footer>);
};

export default Footer;