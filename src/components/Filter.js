import React, { useState } from "react";

const Filter = () => {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const categories = [
    { id: "all", name: "All" },
    { id: "aerosol", name: "Aerosol" },
    { id: "handkerchief", name: "Handkerchief" },
    { id: "creme-stick", name: "Creme Stick" },
    { id: "alcohol-spray", name: "Alcohol Spray" },
    { id: "alcohol-gel", name: "Alcohol Gel" },
    { id: "bar-soap", name: "Bar Soap" },
    { id: "roll-on", name: "Roll-On" },
    { id: "liquid-soap", name: "Liquid Soap" },
    { id: "talc", name: "Talc" },
  ];

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filterProducts = (products) => {
    return products.filter((product) => {
      const categoryMatch = category === "all" || product.category === category;
      const searchMatch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());
      return categoryMatch && searchMatch;
    });
  };
  console.log("filter", filterProducts);

  return (
    <div>
      <select value={category} onChange={handleCategoryChange}>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search products..."
      />
    </div>
  );
};

export default Filter;
