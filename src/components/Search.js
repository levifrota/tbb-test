import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Search = ({ search, handleSearchChange }) => {
  return (
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
  );
};

export default Search;
