import React from 'react';
import './MenuItem.css';

// This component displays a single menu item card
// It receives data as props from the Menu page
function MenuItem({ name, description, price, image }) {
  return (
    <div className="menu-item-card">
      {/* Item image/icon */}
      <div className="item-image">{image}</div>
      
      {/* Item details */}
      <div className="item-details">
        <h3 className="item-name">{name}</h3>
        <p className="item-description">{description}</p>
        <p className="item-price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default MenuItem;
