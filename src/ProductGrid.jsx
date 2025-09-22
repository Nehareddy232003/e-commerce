import React from 'react';
import ProductCard from './components/ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ products, onAddToCart, viewMode = 'grid' }) => {
  return (
    <div className={`product-${viewMode}`}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} viewMode={viewMode} />
      ))}
    </div>
  );
};

export default ProductGrid;