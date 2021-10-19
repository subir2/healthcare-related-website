import React from 'react';
import { Link } from "react-router-dom";
import './Menu.css';


const Menu = () => {
    return (
        <div className="MenuBar-container">
        <div className="container">
          <div className="row">
             <div className="col-md-2">
             <div className="logo-img">
        
            </div>
            </div>
            <div className="col-md-10">
              <div className="menu-container ">
                <ul className="d-flex align-items-end justify-content-end">
            
                    <Link to="/home" className="items">
                         <li>Home</li>
                      </Link>

                      <Link to="/Services" className="items">
                         <li>Services</li>
                      </Link>
                  
                      <Link to="/about" className="items">
                         <li>About</li>
                      </Link>
                  
                      <Link to="/contact" className="items">
                         <li>Contact</li>
                      </Link>
              
                      <Link to="/Login" className="items">
                         <li>Login</li>
                      </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Menu;