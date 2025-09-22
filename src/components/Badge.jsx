import React from 'react';
import './Badge.css';

const Badge = ({ children, variant = 'primary', size = 'medium' }) => {
  return (
    <span className={`badge badge-${variant} badge-${size}`}>
      {children}
    </span>
  );
};

export default Badge;