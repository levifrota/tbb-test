import React from "react";

const PaginationFilter = ({
  productsPerPage,
  handleProductsPerPageChange,
  products,
  setCurrentPage,
}) => {
  const handleSelectChange = (event) => {
    const value = event.target.value;
    handleProductsPerPageChange(event);

    if (value === products.length.toString()) {
      setCurrentPage(1);
    }
  };

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
