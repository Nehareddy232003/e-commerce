import React from 'react';
import Badge from './Badge';
import Rating from './Rating';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart, onQuickView }) => {
  if (!product) {
    return <div className="product-card">No product data</div>;
  }
  const { 
    id, name, price, discountPrice, discountPercent, ratingValue, ratingCount, isHot, colors, category, imageUrl } = product;

  return (
    <div className="product-card">
      {isHot && <Badge variant="danger" size="small">HOT</Badge>}
      <img src={imageUrl} alt={name} className="product-image" />
      <div className="product-info">
        <p className="category">{category}</p>
        <h3 className="product-name">{name}</h3>
        <Rating value={ratingValue} count={ratingCount} size="small" />
        {/* <div className="colors">
          {colors.map((color, index) => (
            <span key={index} className="color-dot" style={{ backgroundColor: color }}></span>
          ))}
        </div> */}
        <div className="price-section">
          {discountPrice ? (
            <>
              <span className="discount-price">${discountPrice}</span>
              <span className="original-price">${price}</span>
              <Badge variant="warning" size="small">-{discountPercent}%</Badge>
            </>
          ) : (
            <span className="price">${price}</span>
          )}
        </div>
        <div className="card-actions">
          <button className="btn-primary" onClick={() => onAddToCart?.(product)}>Add to Cart</button>
          <button className="btn-secondary" onClick={() => onQuickView?.(product)}>Quick View</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;