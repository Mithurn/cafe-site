import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// This is the main landing page that visitors see first
// It welcomes them and encourages them to explore the cafe
function Home() {
  return (
    <div className="home">
      {/* Hero section with main welcome message */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Cozy Corner Cafe</h1>
          <p className="hero-subtitle">
            Your perfect spot for great coffee, delicious food, and warm conversations
          </p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn btn-primary">
              View Menu
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Features section showing what makes the cafe special */}
      <div className="features-section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="features-grid">
          {/* Feature 1 */}
          <div className="feature-card">
            <div className="feature-icon">☕</div>
            <h3>Premium Coffee</h3>
            <p>Freshly brewed coffee from the finest beans around the world</p>
          </div>

          {/* Feature 2 */}
          <div className="feature-card">
            <div className="feature-icon">🍰</div>
            <h3>Fresh Pastries</h3>
            <p>Homemade pastries and desserts baked daily with love</p>
          </div>

          {/* Feature 3 */}
          <div className="feature-card">
            <div className="feature-icon">🏠</div>
            <h3>Cozy Atmosphere</h3>
            <p>A warm and welcoming space perfect for work or relaxation</p>
          </div>
        </div>
      </div>

      {/* Opening hours section */}
      <div className="hours-section">
        <h2 className="section-title">Visit Us</h2>
        <div className="hours-content">
          <div className="hours-info">
            <h3>Opening Hours</h3>
            <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
            <p>Saturday - Sunday: 8:00 AM - 9:00 PM</p>
          </div>
          <div className="location-info">
            <h3>Location</h3>
            <p>123 Coffee Street</p>
            <p>Downtown, Your City</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
