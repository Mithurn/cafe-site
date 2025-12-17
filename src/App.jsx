import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';

// Main App component with routing
// Defines which page component to show for each URL
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        {/* Navigation bar appears on all pages */}
        <Navbar />
        
        {/* Route configuration - maps URLs to components */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
