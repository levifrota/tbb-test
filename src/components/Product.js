import React from "react";

const Product = (currentProducts) => {
  return (
    <div className="products-list">
      {currentProducts.currentProducts.map((product) => (
        <div className="product" key={product.id}>
          <div className="product-img">
            <img
              alt={product.images[0].alt}
              src={product.images[0].asset.url}
            />
          </div>
          <h3>{product.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Product;
