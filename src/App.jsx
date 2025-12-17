import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import './App.css';

// This is the main App component that sets up routing
// It defines which component to show for each URL path
function App() {
  return (
    // Router enables navigation between different pages
    <Router>
      <div className="App">
        {/* Navbar appears on all pages */}
        <Navbar />
        
        {/* Routes define which component to show for each path */}
        <Routes>
          {/* Home page at root URL */}
          <Route path="/" element={<Home />} />
          
          {/* Menu page at /menu */}
          <Route path="/menu" element={<Menu />} />
          
          {/* About page at /about */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
