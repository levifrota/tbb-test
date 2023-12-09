import React, { useState, useEffect } from "react";
import "./App.css";
import "./Footer.css";
import response from "./products.json";
import Header from "./components/Header";
import ProductFilter from "./components/ProductFilter";
import Product from "./components/Product";
import Footer from "./components/Footer";

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

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

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
        <Header title="exemplo" image="./public/logo@2x.png" />
        <h1>O QUE VOCÊ ESTÁ PROCURANDO?</h1>
        <ProductFilter
          filter={filter}
          uniqueCategories={uniqueCategories}
          handleFilterChange={handleFilterChange}
          search={search}
          handleSearchChange={handleSearchChange}
          productsPerPage={productsPerPage}
          handleProductsPerPageChange={handleProductsPerPageChange}
        />
        <Product currentProducts={currentProducts} />
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
      <Footer />
    </div>
  );
}

export default App;
