import React from "react";

const ProductFilter = ({ uniqueCategories, handleFilterChange }) => {
  return (
    <div className="product-filter">
      <div className="filter-pagination">
        <div className="filter-categories">
          <label>Filtrar por categoria: </label>
          {uniqueCategories.map((category) => (
            <div key={category}>
              <input
                type="checkbox"
                id={category}
                value={category}
                onChange={handleFilterChange}
              />
              <label htmlFor={category}>{category}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
