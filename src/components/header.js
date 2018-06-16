import React from 'react';
import logo from '../images/logo.jpg';
const Header=()=>{
    return (<nav className="navbar"> 
               
            <div className="navbar-brand">
            
                   <a className="logo" href="#"><img src={logo} alt="logo" />
                </a>
               <span className="purple">GOOD</span>
                    <span className="blue">DROP</span>
                </div> 
                <ul className="navbar-nav">
                    <li className="nav-item">
                    
                     <a className="nav-link head" href="#"><i id="call" className="fas fa-phone"> </i>   9566123640</a>
                    </li>
            <li className="nav-item">
                    
                     <a className="nav-link head" href="#"><i id="user" className="fas fa-user-alt"> </i>   Account</a>
                    </li>
                </ul>
            </nav>)
};

export default Header;
            