import React from 'react';
import './Navbar.css';

const Navbar = ({ logo, links = [], onSearch, cartCount = 0 }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">{logo}</div>
      <div className="navbar-links">
        {links.map((link, index) => (
          <a key={index} href={link.href} className="navbar-link">
            {link.label}
          </a>
        ))}
      </div>
      <div className="navbar-actions">
        <input 
          type="text" 
          placeholder="Search..." 
          className="search-input"
          onChange={(e) => onSearch?.(e.target.value)}
        />
        <div className="cart-icon">Cart ({cartCount})</div>
      </div>
    </nav>
  );
};

export default Navbar;