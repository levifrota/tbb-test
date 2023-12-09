import React from "react";

const Product = (currentProducts) => {
  console.log("current", currentProducts.currentProducts);
  return (
    <div className="products-list">
      {currentProducts.currentProducts.map((product) => (
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
  );
};

export default Product;
