import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const ProductFilter = ({
  filter,
  uniqueCategories,
  handleFilterChange,
  search,
  handleSearchChange,
  productsPerPage,
  handleProductsPerPageChange,
}) => {
  return (
    <div>
      <div>
        <label>Filtrar por categoria:</label>
        <select value={filter} onChange={handleFilterChange}>
          <option value="">Todas</option>
          {uniqueCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="search-container">
        <input
          type="text"
          id="search-input"
          value={search}
          onChange={handleSearchChange}
          placeholder="Busque aqui..."
        />
        <FontAwesomeIcon id="search-button" icon={faMagnifyingGlass} />
      </div>
      <div>
        <label>Mostrar </label>
        <select value={productsPerPage} onChange={handleProductsPerPageChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
        <label> itens</label>
      </div>
    </div>
  );
};

export default ProductFilter;
