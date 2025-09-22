import React, { useState } from 'react';
import Header from './Header.jsx';
import ProductGrid from './ProductGrid.jsx';
import Cart from './components/Cart';
// import FilterPanel from './components/FilterPanel';
import Pagination from './components/Pagination';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import {products} from './products';

import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    color: [],
    priceRange: [0, 1000],
    rating: 0
  });
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');
  const [showMobileFilters, setShowMobileFilters] = useState(false);


  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };



  const handleFilterChange = (key, value, checked) => {
    let newFilters = { ...filters };
    
    if (key === 'clearBrand') {
      newFilters.brand = [];
    } else if (key === 'category' || key === 'brand' || key === 'color') {
      if (checked) {
        newFilters[key] = [...filters[key], value];
      } else {
        newFilters[key] = filters[key].filter(item => item !== value);
      }
    } else {
      newFilters[key] = value;
    }
    
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (currentFilters) => {
    let filtered = products.filter(product => {
      const price = product.discountPrice || product.price;
      const matchesCategory = currentFilters.category.length === 0 || currentFilters.category.includes(product.category);
      const matchesBrand = currentFilters.brand.length === 0 || currentFilters.brand.includes(product.brand);
      const matchesColor = currentFilters.color.length === 0 || currentFilters.color.some(color => product.colors.includes(color));
      const matchesPrice = Array.isArray(currentFilters.priceRange) 
        ? price >= currentFilters.priceRange[0] && price <= currentFilters.priceRange[1]
        : price <= currentFilters.priceRange;
      const matchesRating = product.ratingValue >= currentFilters.rating;
      
      return matchesCategory && matchesBrand && matchesColor && matchesPrice && matchesRating;
    });
    
    setFilteredProducts(applySorting(filtered, sortBy));
    setCurrentPage(1);
  };

  const applySorting = (products, sortType) => {
    const sorted = [...products];
    switch (sortType) {
      case 'priceLowHigh':
        return sorted.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
      case 'priceHighLow':
        return sorted.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
      case 'popularity':
        return sorted.sort((a, b) => b.ratingCount - a.ratingCount);
      case 'name':
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return sorted;
    }
  };

  const handleSortChange = (sortType) => {
    setSortBy(sortType);
    setFilteredProducts(applySorting(filteredProducts, sortType));
  };

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Unused filterConfig - commented out to remove warnings
  /*
  const filterConfig = [
    {
      title: 'Category',
      key: 'category',
      type: 'checkbox',
      options: [
        { label: 'Electronics', value: 'Electronics', checked: filters.category.includes('Electronics') },
        { label: 'Fashion', value: 'Fashion', checked: filters.category.includes('Fashion') },
        { label: 'Sports', value: 'Sports', checked: filters.category.includes('Sports') },
        { label: 'Home', value: 'Home', checked: filters.category.includes('Home') },
        { label: 'Accessories', value: 'Accessories', checked: filters.category.includes('Accessories') }
      ]
    },
    {
      title: 'Brand',
      key: 'brand',
      type: 'checkbox',
      options: [
        { label: 'Sony', value: 'Sony', checked: filters.brand.includes('Sony') },
        { label: 'Apple', value: 'Apple', checked: filters.brand.includes('Apple') },
        { label: 'Nike', value: 'Nike', checked: filters.brand.includes('Nike') },
        { label: 'Samsung', value: 'Samsung', checked: filters.brand.includes('Samsung') },
        { label: 'Adidas', value: 'Adidas', checked: filters.brand.includes('Adidas') }
      ]
    },
    {
      title: 'Color',
      key: 'color',
      type: 'checkbox',
      options: [
        { label: 'Black', value: '#000', checked: filters.color.includes('#000') },
        { label: 'White', value: '#fff', checked: filters.color.includes('#fff') },
        { label: 'Red', value: '#ff0000', checked: filters.color.includes('#ff0000') },
        { label: 'Blue', value: '#0000ff', checked: filters.color.includes('#0000ff') },
        { label: 'Green', value: '#008000', checked: filters.color.includes('#008000') }
      ]
    },
    {
      title: 'Max Price',
      key: 'priceRange',
      type: 'range',
      min: 0,
      max: 1000,
      value: filters.priceRange
    },
    {
      title: 'Min Rating',
      key: 'rating',
      type: 'range',
      min: 0,
      max: 5,
      value: filters.rating
    }
  ];
  */

  return (
    <div className="App">
      <Header cartItems={cartItems} onCartToggle={toggleCart} />
      <div className="main-content">
        <Sidebar onFilterChange={handleFilterChange} className={showMobileFilters ? 'mobile-open' : ''} onClose={() => setShowMobileFilters(false)} />

        <div className="filter-drag-handle" onClick={() => setShowMobileFilters(true)}>☰</div>
        {showMobileFilters && (
          <div className="filter-overlay" onClick={() => setShowMobileFilters(false)}></div>
        )}
        <div className="products-section">
          <div className="hero-banner">
            <div className="hero-content">
              <div className="hero-text">
                <h2>Adidas Men Running Sneakers</h2>
                <p>Performance and design. Taken right to the edge.</p>
                <button className="shop-now-btn" onClick={() => handleFilterChange('brand', 'Adidas', true)}>SHOP NOW</button>
              </div>
              <div className="hero-image">
                <img src="image.png.png" alt="Adidas Running Sneakers" />
              </div>
            </div>
          </div>
          <div className="products-header">
            <div className="left-controls">
              <span className="total-items">{filteredProducts.length} Items</span>
              <div className="sort-section">
                <label>Sort by: </label>
                <select value={sortBy} onChange={(e) => handleSortChange(e.target.value)}>
                  <option value="name">Name</option>
                  <option value="priceLowHigh">Price: Low to High</option>
                  <option value="priceHighLow">Price: High to Low</option>
                  <option value="popularity">Popularity</option>
                </select>
              </div>
            </div>
            <div className="view-controls">
              <button 
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                ⊞
              </button>
              <button 
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                ☰
              </button>
            </div>
          </div>
          <ProductGrid products={currentProducts} onAddToCart={addToCart} viewMode={viewMode} />
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} 
          />
        </div>
      </div>
      <Cart 
        isOpen={showCart} 
        cartItems={cartItems} 
        onRemove={removeFromCart} 
        onClose={() => setShowCart(false)} 
      />

      <Footer />
    </div>
  );
}

export default App;