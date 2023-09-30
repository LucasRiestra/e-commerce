import React from 'react';

type FiltersProps = {
  filters: { minPrice: number };
};

const Filters: React.FC<FiltersProps> = ({ filters }) => {
  return (
    <div className="filters">
      <label htmlFor="price">Price</label>
      <input 
        type="range" 
        id="price"
        min="0"
        max="200"
        value={filters.minPrice} 
      />
    </div>
  );
}

export default Filters;
