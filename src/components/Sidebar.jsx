import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ onFilterChange, className, onClose }) => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedHotDeal, setSelectedHotDeal] = useState('All');

  const handleMinPriceChange = (value) => {
    const newRange = [+value, priceRange[1]];
    setPriceRange(newRange);
    onFilterChange?.('priceRange', newRange);
  };

  const handleMaxPriceChange = (value) => {
    const newRange = [priceRange[0], +value];
    setPriceRange(newRange);
    onFilterChange?.('priceRange', newRange);
  };

  const handleColorSelect = (color) => {
    const colorMap = {
      blue: '#0000ff',
      red: '#ff0000', 
      black: '#000000',
      yellow: '#ffff00',
      pink: '#ffc0cb',
      lightgray: '#d3d3d3'
    };
    const newColor = selectedColor === color ? null : color;
    setSelectedColor(newColor);
    onFilterChange?.('color', colorMap[newColor], !!newColor);
  };

  const handleBrandSelect = (brand) => {
    if (brand === 'All') {
      setSelectedBrand('All');
      onFilterChange?.('clearBrand');
    } else {
      const newBrand = selectedBrand === brand ? null : brand;
      setSelectedBrand(newBrand);
      onFilterChange?.('brand', brand, !!newBrand);
    }
  };

  const handleHotDealSelect = (dealName, filterType, filterValue) => {
    if (dealName === 'All') {
      setSelectedHotDeal('All');
      onFilterChange?.('clearBrand');
    } else {
      const newDeal = selectedHotDeal === dealName ? null : dealName;
      setSelectedHotDeal(newDeal);
      onFilterChange?.(filterType, filterValue, !!newDeal);
    }
  };

  return (
    <div className={`sidebar ${className || ''}`}>
      {className && className.includes('mobile-open') && (
        <button className="mobile-close-btn" onClick={(e) => { e.stopPropagation(); onClose(); }}>×</button>
      )}
      {/* Hot Deals */}
      <div className="section">
        <h4>Hot Deals</h4>
        <ul className="list">
          <li className={selectedHotDeal === 'All' ? 'highlight' : ''} onClick={() => handleHotDealSelect('All')}>All <span>30</span></li>
          <li className={selectedHotDeal === 'Nike Air Max' ? 'highlight' : ''} onClick={() => handleHotDealSelect('Nike Air Max', 'brand', 'Nike')}>Nike Air Max <span>1</span></li>
          <li className={selectedHotDeal === 'Adidas Sneakers' ? 'highlight' : ''} onClick={() => handleHotDealSelect('Adidas Sneakers', 'brand', 'Adidas')}>Adidas Sneakers <span>1</span></li>
          <li className={selectedHotDeal === 'Samsung Smart TV' ? 'highlight' : ''} onClick={() => handleHotDealSelect('Samsung Smart TV', 'brand', 'Samsung')}>Samsung Smart TV <span>1</span></li>
          <li className={selectedHotDeal === 'Apple iPhone' ? 'highlight' : ''} onClick={() => handleHotDealSelect('Apple iPhone', 'brand', 'Apple')}>Apple iPhone <span>1</span></li>
          <li className={selectedHotDeal === 'Adidas Tracksuit' ? 'highlight' : ''} onClick={() => handleHotDealSelect('Adidas Tracksuit', 'brand', 'Adidas')}>Adidas Tracksuit <span>1</span></li>
          <li className={selectedHotDeal === 'Winter Coat' ? 'highlight' : ''} onClick={() => handleHotDealSelect('Winter Coat', 'category', 'Fashion')}>Winter Coat <span>1</span></li>
          <li className={selectedHotDeal === 'Denim Jeans' ? 'highlight' : ''} onClick={() => handleHotDealSelect('Denim Jeans', 'category', 'Fashion')}>Denim Jeans <span>1</span></li>
        </ul>
      </div>

      {/* Prices */}
      <div className="section">
        <h4>Prices</h4>
        <p>Range: ${priceRange[0]} - ${priceRange[1]}</p>
        <div className="dual-range-container">
          <div 
            className="range-fill" 
            style={{
              left: `${(priceRange[0] / 1000) * 100}%`,
              width: `${((priceRange[1] - priceRange[0]) / 1000) * 100}%`
            }}
          ></div>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[0]}
            onChange={(e) => handleMinPriceChange(e.target.value)}
            className="range-min"
          />
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => handleMaxPriceChange(e.target.value)}
            className="range-max"
          />
        </div>
      </div>

      {/* Colors */}
      <div className="section">
        <h4>Color</h4>
        <div className="colors">
          {["blue", "red", "black", "yellow", "pink", "lightgray"].map((c) => (
            <span
              key={c}
              className={`color ${c} ${selectedColor === c ? "active" : ""}`}
              onClick={() => handleColorSelect(c)}
            />
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="section">
        <h4>Brand</h4>
        <ul className="list">
          <li className={selectedBrand === 'All' ? 'highlight' : ''} onClick={() => handleBrandSelect('All')}>All <span>30</span></li>
          <li className={selectedBrand === 'Nike' ? 'highlight' : ''} onClick={() => handleBrandSelect('Nike')}>Nike <span>4</span></li>
          <li className={selectedBrand === 'Adidas' ? 'highlight' : ''} onClick={() => handleBrandSelect('Adidas')}>Adidas <span>4</span></li>
          <li className={selectedBrand === 'Samsung' ? 'highlight' : ''} onClick={() => handleBrandSelect('Samsung')}>Samsung <span>2</span></li>
          <li className={selectedBrand === 'Apple' ? 'highlight' : ''} onClick={() => handleBrandSelect('Apple')}>Apple <span>3</span></li>
        </ul>
      </div>

      {/* More button */}
      <button className="more-btn">More</button>
    </div>
  );
};

export default Sidebar;