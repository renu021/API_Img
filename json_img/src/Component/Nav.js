import React from 'react';
import { Link } from 'react-router-dom';
import "./NavStyle.css";


const Nav = () => {
  return (
    <div>
        <div className="nav-section">
            <div className="logo">
                <a href="/" className="logoText">Img Collections</a>
            </div>

            <div className="menu">
              <ul className="menu-section">
                <li><Link to="/">Home</Link></li>   
                <li> <Link to="/Explore">Explore</Link></li> 
                <li><Link to="/Login">Login</Link></li> 
              </ul>

            </div>
        </div>
    </div>
  )
}

export default Nav