import React, { useState } from 'react';
import MenuItem from '../components/MenuItem';

// Menu page displays all items with category filtering
// Uses state to track selected category and props to pass data to MenuItem
function Menu() {
  // State to track currently selected category
  // Defaults to 'All' to show everything initially
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Menu items data - each item has name, description, price, category, and icon
  const menuItems = [
    // Coffee items
    {
      id: 1,
      name: 'Espresso',
      description: 'Rich and bold shot of pure coffee excellence',
      price: 3.50,
      category: 'Coffee',
      image: '☕'
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Silky espresso with steamed milk and foam',
      price: 4.50,
      category: 'Coffee',
      image: '☕'
    },
    {
      id: 3,
      name: 'Latte',
      description: 'Smooth espresso with perfectly steamed milk',
      price: 4.75,
      category: 'Coffee',
      image: '☕'
    },
    {
      id: 4,
      name: 'Mocha',
      description: 'Chocolate-infused latte with whipped cream',
      price: 5.00,
      category: 'Coffee',
      image: '☕'
    },

    // Pastries
    {
      id: 5,
      name: 'Croissant',
      description: 'Buttery, flaky French pastry baked fresh',
      price: 3.00,
      category: 'Pastries',
      image: '🥐'
    },
    {
      id: 6,
      name: 'Chocolate Muffin',
      description: 'Moist muffin loaded with premium chocolate',
      price: 3.50,
      category: 'Pastries',
      image: '🧁'
    },
    {
      id: 7,
      name: 'Blueberry Scone',
      description: 'Fresh baked scone with organic blueberries',
      price: 3.25,
      category: 'Pastries',
      image: '🥐'
    },

    // Desserts
    {
      id: 8,
      name: 'Cheesecake',
      description: 'Creamy New York style with graham crust',
      price: 5.50,
      category: 'Desserts',
      image: '🍰'
    },
    {
      id: 9,
      name: 'Chocolate Cake',
      description: 'Rich layered cake with ganache frosting',
      price: 5.00,
      category: 'Desserts',
      image: '🍰'
    },
    {
      id: 10,
      name: 'Tiramisu',
      description: 'Classic Italian coffee-flavored delight',
      price: 6.00,
      category: 'Desserts',
      image: '🍰'
    },

    // Food
    {
      id: 11,
      name: 'Club Sandwich',
      description: 'Turkey, bacon, lettuce, tomato on artisan bread',
      price: 8.50,
      category: 'Food',
      image: '🥪'
    },
    {
      id: 12,
      name: 'Veggie Wrap',
      description: 'Fresh seasonal vegetables in wheat wrap',
      price: 7.50,
      category: 'Food',
      image: '🌯'
    },
    {
      id: 13,
      name: 'Grilled Cheese',
      description: 'Classic grilled cheese on sourdough bread',
      price: 6.50,
      category: 'Food',
      image: '🥪'
    }
  ];

  // Available categories for filtering
  const categories = ['All', 'Coffee', 'Pastries', 'Desserts', 'Food'];

  // Filter logic - show all items if 'All' is selected
  // Otherwise, show only items matching the selected category
  const filteredItems = selectedCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary via-textPrimary to-primary text-background py-20 px-8 text-center">
        <h1 className="font-serif text-6xl font-semibold mb-4">
          Our Menu
        </h1>
        <p className="text-xl text-background/90 max-w-2xl mx-auto">
          Explore our carefully curated selection of artisanal coffee, fresh pastries, and delicious meals
        </p>
      </section>

      {/* Category Filter Buttons */}
      <section className="py-12 px-8">
        <div className="max-w-container mx-auto flex flex-wrap justify-center gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-3 rounded-button font-medium uppercase tracking-wider text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-secondary text-white shadow-lg scale-105'
                  : 'bg-surface text-textSecondary border-2 border-border hover:border-secondary hover:text-secondary hover:-translate-y-1'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="pb-20 px-8">
        <div className="max-w-container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <MenuItem
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Menu;
