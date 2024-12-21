import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext'; 
import Home from './pages/Home/Home';
import Cart from './components/Cart';  

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />  {}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
