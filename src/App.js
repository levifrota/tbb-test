import React, { useState, useEffect } from "react";
import "./style/App.css";
import response from "./products.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Search from "./components/Search";
import PaginationFilter from "./components/PaginationFilter";
import Header from "./components/Header";
import ProductFilter from "./components/ProductFilter";
import Product from "./components/Product";
import Footer from "./components/Footer";
import useMatchMedia from "./hooks/useMatchMedia";

const products = response.data.nodes;

function App() {
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);
  const isSmallScreen = useMatchMedia("(max-width: 580px)", true);

  useEffect(() => {
    if (filter.length > 0) {
      setFilteredProducts(
        products.filter((product) => filter.includes(product.category.name))
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

  const handleHamburgerClick = () => {
    setShowFilter(!showFilter);
  };

  const handleFilterChange = (event) => {
    const { value, checked } = event.target;
    setFilter((prevFilter) => {
      if (checked) {
        return [...prevFilter, value];
      } else {
        return prevFilter.filter((category) => category !== value);
      }
    });
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
    <div className="App">
      <Header />
      <div className="app-body">
        <h1 className="">O QUE VOCÊ ESTÁ PROCURANDO?</h1>

        <Search search={search} handleSearchChange={handleSearchChange} />

        <PaginationFilter
          productsPerPage={productsPerPage}
          handleProductsPerPageChange={handleProductsPerPageChange}
          products={products}
        />

        <div className="product-and-filter">
          {showFilter ? (
            <div className="hamburger" onClick={handleHamburgerClick}>
              Filtros <FontAwesomeIcon icon={faChevronUp} />
            </div>
          ) : (
            <div className="hamburger" onClick={handleHamburgerClick}>
              Filtros <FontAwesomeIcon icon={faChevronDown} />
            </div>
          )}
          {isSmallScreen ? (
            showFilter && (
              <ProductFilter
                filter={filter}
                uniqueCategories={uniqueCategories}
                handleFilterChange={handleFilterChange}
                search={search}
                handleSearchChange={handleSearchChange}
                productsPerPage={productsPerPage}
                handleProductsPerPageChange={handleProductsPerPageChange}
              />
            )
          ) : (
            <ProductFilter
              filter={filter}
              uniqueCategories={uniqueCategories}
              handleFilterChange={handleFilterChange}
              search={search}
              handleSearchChange={handleSearchChange}
              productsPerPage={productsPerPage}
              handleProductsPerPageChange={handleProductsPerPageChange}
            />
          )}

          <Product currentProducts={currentProducts} />
        </div>

        <div className="pagination">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="btn"
          >
            Anterior
          </button>

          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage * productsPerPage >= filteredProducts.length}
            className="btn"
          >
            Próximo
          </button>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
