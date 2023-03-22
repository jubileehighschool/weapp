import React from 'react';
import {Link} from "react-router-dom"
import Logo from "../components/images/Logo.png"
import serch from "../components/images/Capture.PNG"
import "./Navbar.css"

const Navbar = () => {
  return (
    
    <Link to="/">
    <div className='Navbar'>
    <img className='Logo' src={Logo} alt="jubilee high school"/>
    <ul className='list'>
      <li>HOME</li>
      <li>ABOUT US</li>
      <li>CURRICULUM</li>
      <li> ADMISSIONS </li>
      <li>CONTACT US</li>
      <li>BLOGS</li>
    </ul>
     <div>
      <image className='circle' src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Circle_%28transparent%29.png" alt="circle"/>
      <img className='serch' src={serch} alt="jubilee high school"/>
    </div>
    
    </div>
    </Link>
    
  );
};

export default Navbar;
