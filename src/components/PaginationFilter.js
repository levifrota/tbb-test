import React from "react";
import { createHandler } from "../handler/createHandler";

const PaginationFilter = ({
  productsPerPage,
  handleProductsPerPageChange,
  products,
  setCurrentPage,
}) => {
  const handleSelectChange = createHandler(
    handleProductsPerPageChange,
    setCurrentPage
  );

  const options = [5, 10, 15, products.length];

  return (
    <div className="pagination-filter">
      <label>Mostrar</label>
      <select
        value={productsPerPage}
        onChange={handleSelectChange}
        className="select-items"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option === products.length ? "Todos" : option}
          </option>
        ))}
      </select>
      <label>itens</label>
    </div>
  );
};

export default PaginationFilter;
