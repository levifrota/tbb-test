import React from "react";
import { createHandler } from "../handler/createHandler";

const ProductFilter = ({
  uniqueCategories,
  handleFilterChange,
  setCurrentPage,
}) => {
  const handlePageChange = createHandler(handleFilterChange, setCurrentPage);
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
                onChange={handlePageChange}
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
