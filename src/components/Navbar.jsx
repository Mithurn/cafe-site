import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Navigation bar component that appears on all pages
// Uses Tailwind CSS for styling with our custom design system
function Navbar() {
  const location = useLocation();
  
  // Helper function to check if a link is active
  const isActive = (path) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 bg-background shadow-sm">
      <div className="max-w-container mx-auto px-8 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-3xl font-serif font-semibold text-primary hover:text-secondary transition-colors duration-300"
        >
          ☕ Cozy Corner
        </Link>
        
        {/* Navigation Links */}
        <ul className="flex items-center gap-10">
          <li>
            <Link 
              to="/" 
              className={`text-base font-medium tracking-wide transition-all duration-300 ${
                isActive('/') 
                  ? 'text-secondary border-b-2 border-secondary pb-1' 
                  : 'text-textSecondary hover:text-primary'
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/menu" 
              className={`text-base font-medium tracking-wide transition-all duration-300 ${
                isActive('/menu') 
                  ? 'text-secondary border-b-2 border-secondary pb-1' 
                  : 'text-textSecondary hover:text-primary'
              }`}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={`text-base font-medium tracking-wide transition-all duration-300 ${
                isActive('/about') 
                  ? 'text-secondary border-b-2 border-secondary pb-1' 
                  : 'text-textSecondary hover:text-primary'
              }`}
            >
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
