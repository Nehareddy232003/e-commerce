import React from 'react';
import './FilterPanel.css';

const FilterPanel = ({ filters, onFilterChange }) => {
  return (
    <div className="filter-panel">
      {filters.map((filter, index) => (
        <div key={index} className="filter-group">
          <h4>{filter.title}</h4>
          {filter.type === 'checkbox' && (
            <div className="checkbox-group">
              {filter.options.map((option, i) => (
                <label key={i} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={option.checked || false}
                    onChange={(e) => onFilterChange?.(filter.key, option.value, e.target.checked)}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          )}
          {filter.type === 'range' && (
            <div className="range-group">
              <input
                type="range"
                min={filter.min}
                max={filter.max}
                value={filter.value}
                onChange={(e) => onFilterChange?.(filter.key, e.target.value)}
              />
              <span>${filter.value}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterPanel;