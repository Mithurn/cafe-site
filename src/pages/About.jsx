import React from 'react';
import './About.css';

// This page tells the story of our cafe
// It helps visitors understand our mission and values
function About() {
  return (
    <div className="about-page">
      {/* Header section */}
      <div className="about-header">
        <h1>About Cozy Corner Cafe</h1>
        <p>Our Story, Our Mission, Our Passion</p>
      </div>

      {/* Main content section */}
      <div className="about-content">
        {/* Our Story */}
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Cozy Corner Cafe was born from a simple dream - to create a warm, 
            welcoming space where people could enjoy exceptional coffee and connect 
            with their community. Founded in 2020, we started as a small coffee 
            cart and have grown into the beloved neighborhood cafe you see today.
          </p>
          <p>
            Every cup we serve and every pastry we bake is made with care and 
            passion. We believe that great coffee is more than just a drink - 
            it's an experience, a moment of peace in a busy day, and a reason 
            to gather with friends.
          </p>
        </section>

        {/* Our Mission */}
        <section className="about-section mission-section">
          <h2>Our Mission</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">🌱</div>
              <h3>Quality First</h3>
              <p>
                We source only the finest, ethically-sourced coffee beans and 
                ingredients to ensure every item meets our high standards.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">❤️</div>
              <h3>Community Focus</h3>
              <p>
                We're more than a cafe - we're a gathering place where 
                friendships are formed and memories are made.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🌍</div>
              <h3>Sustainability</h3>
              <p>
                We're committed to environmental responsibility through 
                eco-friendly practices and supporting local suppliers.
              </p>
            </div>
          </div>
        </section>

        {/* Team section */}
        <section className="about-section">
          <h2>Meet Our Team</h2>
          <p className="team-intro">
            Our passionate team of baristas and bakers work together to bring 
            you the best cafe experience every single day.
          </p>
          <div className="team-values">
            <div className="value-item">
              <span className="value-icon">☕</span>
              <span>Expert Baristas</span>
            </div>
            <div className="value-item">
              <span className="value-icon">🥐</span>
              <span>Skilled Bakers</span>
            </div>
            <div className="value-item">
              <span className="value-icon">😊</span>
              <span>Friendly Service</span>
            </div>
          </div>
        </section>

        {/* Visit Us CTA */}
        <section className="about-section cta-section">
          <h2>Visit Us Today</h2>
          <p>
            We'd love to welcome you to Cozy Corner Cafe. Whether you're looking 
            for your morning coffee, a place to work, or just want to relax with 
            a good book, we're here for you.
          </p>
          <div className="cta-info">
            <div>
              <strong>Address:</strong> 123 Coffee Street, Downtown
            </div>
            <div>
              <strong>Hours:</strong> Mon-Fri 7AM-8PM, Sat-Sun 8AM-9PM
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
