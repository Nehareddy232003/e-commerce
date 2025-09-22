import React from 'react';
import './Rating.css';

const Rating = ({ value = 0, count, size = 'medium', showCount = true }) => {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const filled = index < Math.floor(value);
    const halfFilled = index === Math.floor(value) && value % 1 !== 0;
    
    return (
      <span key={index} className={`star ${filled ? 'filled' : halfFilled ? 'half' : 'empty'}`}>
        ★
      </span>
    );
  });

  return (
    <div className={`rating rating-${size}`}>
      <div className="stars">{stars}</div>
      {showCount && count && <span className="rating-count">({count})</span>}
    </div>
  );
};

export default Rating;