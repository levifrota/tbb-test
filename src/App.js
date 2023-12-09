import React, { useState, useEffect } from "react";
import "./App.css";
import response from "./products.json";

const products = response.data.nodes;

function App() {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);

  useEffect(() => {
    if (filter) {
      setFilteredProducts(
        products.filter((product) => product.category.name === filter)
      );
    } else {
      setFilteredProducts(products);
    }
  }, [filter]);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleProductsPerPageChange = (event) => {
    setProductsPerPage(parseInt(event.target.value, 10));
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category.name))
  );

  return (
    <div>
      <div className="App">
        <h1>Filterable Product List</h1>
        <div>
          <label>Filter by category:</label>
          <select value={filter} onChange={handleFilterChange}>
            <option value="">All</option>
            {uniqueCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Search by name:</label>
          <input type="text" value={search} onChange={handleSearchChange} />
        </div>
        <div>
          <label>Show:</label>
          <select
            value={productsPerPage}
            onChange={handleProductsPerPageChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value={filteredProducts.length}>All</option>
          </select>
        </div>
        <div className="products-list">
          {currentProducts.map((product) => (
            <div className="product" key={product.id}>
              <img
                className="product-img"
                alt={product.images[0].alt}
                src={product.images[0].asset.url}
              />
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>
        <div className="pagination">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage * productsPerPage >= filteredProducts.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
