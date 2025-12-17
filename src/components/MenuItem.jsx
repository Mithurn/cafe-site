import React from 'react';

// Individual menu item card component
// Receives data through props and displays with premium design
function MenuItem({ name, description, price, image }) {
  return (
    <div className="bg-surface rounded-card shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
      {/* Item Icon/Image */}
      <div className="bg-gradient-to-br from-background to-border p-12 flex items-center justify-center">
        <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
          {image}
        </span>
      </div>
      
      {/* Item Details */}
      <div className="p-6 text-center">
        <h3 className="font-serif text-2xl font-medium text-primary mb-3">
          {name}
        </h3>
        <p className="text-textSecondary leading-relaxed mb-4 text-sm">
          {description}
        </p>
        <p className="text-2xl font-semibold text-secondary">
          ${price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default MenuItem;
