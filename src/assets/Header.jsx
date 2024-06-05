import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';

export default function Header() {


  return (
    <>
    <div id='header-container'>
      <ul>
        <li><Link to="/SignUp" className='header-details'>Sign-Up</Link></li>
        <li><Link to="/about-us" className='header-details'>About Us</Link></li>
        <li><Link to="/contact" className='header-details'>Contact</Link></li>
      </ul>
    </div>
    </>
  );
}
