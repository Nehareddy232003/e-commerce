import React, { useState } from 'react';
import './Header.css';
import { Diamond, ShoppingCart } from "lucide-react";

function Header({ cartItems = [], onCartToggle }) {
  const cartCount = cartItems.length;
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.discountPrice || item.price), 0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header" >
        <div className="logo-container" >
          <div className="diamond-container">
            <Diamond className="diamond-outer" size={20} />
          </div>
          <div className="company-name" >
            E-COMM
          </div>
      </div>
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        Menu
      </button>
      <nav className={`nav-container ${menuOpen ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#bag">Bag</a>
        <a href="#sneakers">Sneakers</a>
        <a href="#belt">Belt</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="cart-section" onClick={onCartToggle}>
          <ShoppingCart size={24} />
          <div className="cart-info">
            <span className="cart-count">{cartCount} item</span>
            <span className="cart-total">${cartTotal}</span>
          </div>
        </div>
    </header>
  );
}

export default Header;