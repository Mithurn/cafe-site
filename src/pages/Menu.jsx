import React, { useState } from 'react';
import MenuItem from '../components/MenuItem';
import './Menu.css';

// This page displays all our menu items organized by categories
// Users can filter items by clicking on different categories
function Menu() {
  // State to track which category is currently selected
  // By default, we show all items
  const [selectedCategory, setSelectedCategory] = useState('All');

  // All our menu items stored in an array
  // Each item has a name, description, price, category, and image
  const menuItems = [
    // Coffee items
    {
      id: 1,
      name: 'Espresso',
      description: 'Rich and bold shot of pure coffee',
      price: 3.50,
      category: 'Coffee',
      image: '☕'
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Espresso with steamed milk and foam',
      price: 4.50,
      category: 'Coffee',
      image: '☕'
    },
    {
      id: 3,
      name: 'Latte',
      description: 'Smooth espresso with steamed milk',
      price: 4.75,
      category: 'Coffee',
      image: '☕'
    },
    {
      id: 4,
      name: 'Mocha',
      description: 'Chocolate-flavored latte with whipped cream',
      price: 5.00,
      category: 'Coffee',
      image: '☕'
    },

    // Pastries
    {
      id: 5,
      name: 'Croissant',
      description: 'Buttery, flaky French pastry',
      price: 3.00,
      category: 'Pastries',
      image: '🥐'
    },
    {
      id: 6,
      name: 'Chocolate Muffin',
      description: 'Moist muffin loaded with chocolate chips',
      price: 3.50,
      category: 'Pastries',
      image: '🧁'
    },
    {
      id: 7,
      name: 'Blueberry Scone',
      description: 'Fresh baked scone with blueberries',
      price: 3.25,
      category: 'Pastries',
      image: '🥐'
    },

    // Desserts
    {
      id: 8,
      name: 'Cheesecake',
      description: 'Creamy New York style cheesecake',
      price: 5.50,
      category: 'Desserts',
      image: '🍰'
    },
    {
      id: 9,
      name: 'Chocolate Cake',
      description: 'Rich chocolate cake with ganache',
      price: 5.00,
      category: 'Desserts',
      image: '🍰'
    },
    {
      id: 10,
      name: 'Tiramisu',
      description: 'Classic Italian coffee-flavored dessert',
      price: 6.00,
      category: 'Desserts',
      image: '🍰'
    },

    // Sandwiches
    {
      id: 11,
      name: 'Club Sandwich',
      description: 'Turkey, bacon, lettuce, tomato on toasted bread',
      price: 8.50,
      category: 'Food',
      image: '🥪'
    },
    {
      id: 12,
      name: 'Veggie Wrap',
      description: 'Fresh vegetables in a whole wheat wrap',
      price: 7.50,
      category: 'Food',
      image: '🌯'
    },
    {
      id: 13,
      name: 'Grilled Cheese',
      description: 'Classic grilled cheese on sourdough',
      price: 6.50,
      category: 'Food',
      image: '🥪'
    }
  ];

  // List of all available categories
  const categories = ['All', 'Coffee', 'Pastries', 'Desserts', 'Food'];

  // Function to filter menu items based on selected category
  // If 'All' is selected, show everything
  // Otherwise, only show items that match the selected category
  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="menu-page">
      {/* Page header */}
      <div className="menu-header">
        <h1>Our Menu</h1>
        <p>Explore our delicious selection of coffee, food, and treats</p>
      </div>

      {/* Category filter buttons */}
      <div className="category-filters">
        {categories.map(category => (
          <button
            key={category}
            // Apply 'active' class to currently selected category
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            // When clicked, update the selected category
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display filtered menu items in a grid */}
      <div className="menu-grid">
        {filteredItems.map(item => (
          // Pass each item as props to the MenuItem component
          <MenuItem
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
