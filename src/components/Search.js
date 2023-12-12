import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = ({ search, handleSearchChange, setCurrentPage }) => {
  const handlePageChange = (event) => {
    handleSearchChange(event);
    setCurrentPage(1);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        id="search-input"
        value={search}
        onChange={handlePageChange}
        placeholder="Busque aqui..."
      />
      <FontAwesomeIcon id="search-button" icon={faMagnifyingGlass} />
    </div>
  );
};

export default Search;
