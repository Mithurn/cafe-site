import React from 'react';
import { Link } from 'react-router-dom';

// Home page - first page visitors see
// Designed with calm, premium aesthetic using our design system
function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Main welcome area */}
      <section className="relative bg-gradient-to-br from-primary to-textPrimary text-surface py-32 px-8">
        <div className="max-w-container mx-auto text-center">
          <h1 className="font-serif text-6xl font-semibold mb-6 tracking-tight text-background">
            Welcome to Cozy Corner Cafe
          </h1>
          <p className="text-xl text-background/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the perfect blend of artisanal coffee, fresh pastries, 
            and warm hospitality in a serene atmosphere
          </p>
          
          <div className="flex gap-6 justify-center">
            <Link 
              to="/menu" 
              className="bg-secondary text-white px-8 py-4 rounded-button font-medium uppercase tracking-wider text-sm hover:bg-secondary/90 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              Explore Menu
            </Link>
            <Link 
              to="/about" 
              className="bg-transparent border-2 border-background text-background px-8 py-4 rounded-button font-medium uppercase tracking-wider text-sm hover:bg-background hover:text-primary transition-all duration-300 hover:-translate-y-1"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section - Why choose us */}
      <section className="py-20 px-8">
        <div className="max-w-container mx-auto">
          <h2 className="font-serif text-5xl font-semibold text-center text-primary mb-16">
            Why Choose Us
          </h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-surface p-10 rounded-card shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="text-6xl mb-6">☕</div>
              <h3 className="font-serif text-2xl font-medium text-primary mb-4">
                Premium Coffee
              </h3>
              <p className="text-textSecondary leading-relaxed">
                Carefully sourced beans from sustainable farms, expertly roasted 
                and brewed to perfection
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-surface p-10 rounded-card shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="text-6xl mb-6">🥐</div>
              <h3 className="font-serif text-2xl font-medium text-primary mb-4">
                Fresh Pastries
              </h3>
              <p className="text-textSecondary leading-relaxed">
                Artisan baked goods made fresh daily with organic ingredients 
                and traditional recipes
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-surface p-10 rounded-card shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="text-6xl mb-6">🏠</div>
              <h3 className="font-serif text-2xl font-medium text-primary mb-4">
                Cozy Atmosphere
              </h3>
              <p className="text-textSecondary leading-relaxed">
                A tranquil space thoughtfully designed for relaxation, 
                work, or meaningful conversations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section - Hours and location */}
      <section className="py-20 px-8 bg-gradient-to-r from-primary via-textPrimary to-primary text-surface">
        <div className="max-w-container mx-auto">
          <h2 className="font-serif text-5xl font-semibold text-center text-background mb-16">
            Visit Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-16 text-center">
            {/* Hours */}
            <div>
              <h3 className="font-serif text-3xl font-medium text-accent mb-6">
                Opening Hours
              </h3>
              <div className="space-y-3 text-background/90 text-lg">
                <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                <p>Saturday - Sunday: 8:00 AM - 9:00 PM</p>
              </div>
            </div>

            {/* Location */}
            <div>
              <h3 className="font-serif text-3xl font-medium text-accent mb-6">
                Location
              </h3>
              <div className="space-y-3 text-background/90 text-lg">
                <p>123 Coffee Street</p>
                <p>Downtown, Your City</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
