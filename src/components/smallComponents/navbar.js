import React from 'react';
import navstyle from '../../css/navbar.css';

function Navbar() {
  return (
    <nav className="custom-navbar">

      <a href="/" className="custom-navbar-brand">Brand Name</a>
      <ul className="custom-navbar-nav">
        <li className="custom-nav-item">
          <a href="/" className="custom-nav-link">Home</a>
        </li>
        <li className="custom-nav-item">
          <a href="/about" className="custom-nav-link">About</a>
        </li>
        <li className="custom-nav-item">
          <a href="/contact" className="custom-nav-link">Contact</a>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;