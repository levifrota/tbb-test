import React, { useState, useEffect } from "react";
import "./style/App.css";
import response from "./products.json";
import Header from "./components/Header";
import ProductFilter from "./components/ProductFilter";
import Product from "./components/Product";
import Footer from "./components/Footer";
import useMatchMedia from "./hooks/useMatchMedia";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const products = response.data.nodes;

function App() {
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);
  const isSmallScreen = useMatchMedia("(max-width: 426px)", true);

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
    <div>
      <div className="App">
        <Header />

        <h1 className="">O QUE VOCÊ ESTÁ PROCURANDO?</h1>

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
        <div className="hamburger" onClick={handleHamburgerClick}>
          Filtros &darr;
        </div>
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

        <div>
          <label>Mostrar </label>
          <select
            value={productsPerPage}
            onChange={handleProductsPerPageChange}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
          <label> itens</label>
        </div>

        <Product currentProducts={currentProducts} />

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
      </div>

      <Footer />
    </div>
  );
}

export default App;
