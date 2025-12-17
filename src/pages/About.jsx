import React from 'react';

// About page tells our cafe's story and mission
// Designed with premium, calm aesthetic
function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary via-textPrimary to-primary text-background py-20 px-8 text-center">
        <h1 className="font-serif text-6xl font-semibold mb-4">
          About Cozy Corner
        </h1>
        <p className="text-xl text-background/90 max-w-2xl mx-auto">
          Our Story, Our Mission, Our Passion for Coffee
        </p>
      </section>

      {/* Our Story */}
      <section className="py-20 px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-5xl font-semibold text-primary mb-8 text-center">
            Our Story
          </h2>
          <div className="space-y-6 text-textSecondary text-lg leading-relaxed">
            <p>
              Cozy Corner Cafe was born from a simple yet profound dream — to create 
              a sanctuary where exceptional coffee meets genuine human connection. 
              Founded in 2020, we began as a modest coffee cart with big aspirations 
              and have blossomed into the cherished neighborhood gathering place you 
              experience today.
            </p>
            <p>
              Every cup we craft and every pastry we bake carries the essence of our 
              dedication and passion. We believe that great coffee transcends being 
              merely a beverage — it's an experience, a moment of tranquility in our 
              fast-paced world, and a catalyst for meaningful connections.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-8 bg-surface">
        <div className="max-w-container mx-auto">
          <h2 className="font-serif text-5xl font-semibold text-primary mb-16 text-center">
            Our Mission
          </h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            {/* Mission 1 */}
            <div className="text-center p-8 bg-background rounded-card hover:shadow-lg transition-all duration-300">
              <div className="text-6xl mb-6">🌱</div>
              <h3 className="font-serif text-2xl font-medium text-primary mb-4">
                Quality First
              </h3>
              <p className="text-textSecondary leading-relaxed">
                We source only the finest, ethically-sourced beans and ingredients, 
                ensuring every item exceeds our exacting standards of excellence.
              </p>
            </div>

            {/* Mission 2 */}
            <div className="text-center p-8 bg-background rounded-card hover:shadow-lg transition-all duration-300">
              <div className="text-6xl mb-6">❤️</div>
              <h3 className="font-serif text-2xl font-medium text-primary mb-4">
                Community Focus
              </h3>
              <p className="text-textSecondary leading-relaxed">
                We're more than a cafe — we're a gathering place where friendships 
                flourish and cherished memories are created every day.
              </p>
            </div>

            {/* Mission 3 */}
            <div className="text-center p-8 bg-background rounded-card hover:shadow-lg transition-all duration-300">
              <div className="text-6xl mb-6">🌍</div>
              <h3 className="font-serif text-2xl font-medium text-primary mb-4">
                Sustainability
              </h3>
              <p className="text-textSecondary leading-relaxed">
                Environmental stewardship guides our practices, from eco-friendly 
                packaging to supporting local, sustainable suppliers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-5xl font-semibold text-primary mb-8">
            Meet Our Team
          </h2>
          <p className="text-textSecondary text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Our passionate team of baristas and bakers brings heart and expertise 
            to every cup and creation, ensuring your experience is nothing short of exceptional.
          </p>
          
          <div className="flex justify-center gap-16 flex-wrap">
            <div className="flex flex-col items-center">
              <span className="text-5xl mb-3">☕</span>
              <span className="font-medium text-primary text-lg">Expert Baristas</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl mb-3">🥐</span>
              <span className="font-medium text-primary text-lg">Skilled Bakers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl mb-3">😊</span>
              <span className="font-medium text-primary text-lg">Warm Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="py-20 px-8 bg-gradient-to-br from-primary to-textPrimary text-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-5xl font-semibold mb-6">
            Visit Us Today
          </h2>
          <p className="text-lg text-background/90 mb-10 leading-relaxed">
            We would be delighted to welcome you to Cozy Corner Cafe. Whether you're 
            seeking your morning ritual, a productive workspace, or simply a peaceful 
            moment with a good book, we're here for you.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left bg-white/10 backdrop-blur-sm rounded-card p-8">
            <div>
              <p className="text-accent font-semibold mb-2 text-lg">Address</p>
              <p className="text-background/90">123 Coffee Street, Downtown</p>
            </div>
            <div>
              <p className="text-accent font-semibold mb-2 text-lg">Hours</p>
              <p className="text-background/90">Mon-Fri: 7AM-8PM</p>
              <p className="text-background/90">Sat-Sun: 8AM-9PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
