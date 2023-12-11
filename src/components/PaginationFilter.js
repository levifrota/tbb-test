import React from "react";

const PaginationFilter = ({
  productsPerPage,
  handleProductsPerPageChange,
  products,
}) => {
  return (
    <div className="pagination-filter">
      <label>Mostrar</label>
      <select
        value={productsPerPage}
        onChange={handleProductsPerPageChange}
        className="select-items"
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value={products.length}>Todos</option>
      </select>
      <label>itens</label>
    </div>
  );
};

export default PaginationFilter;
