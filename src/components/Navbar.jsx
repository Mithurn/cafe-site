import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

// This component shows the navigation bar at the top of every page
// It helps users move between different pages of our website
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Cafe logo and name */}
        <Link to="/" className="navbar-logo">
          ☕ Cozy Corner Cafe
        </Link>
        
        {/* Navigation links to different pages */}
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/menu" className="nav-link">
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
