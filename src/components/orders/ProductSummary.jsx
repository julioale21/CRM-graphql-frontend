import React, { Fragment } from "react";

const ProductoSummary = ({ quantity, product }) => {
  return (
    <Fragment>
      <div className="border-b-2 border-gray-100 rounded mb-4 p-4 text-sm">
        <p className="font-bold">
          Product:
          <span className="ml-3 font-light">{product.name}</span>
        </p>
        <p className="font-bold text-sm">
          Quantity:
          <span className="ml-3 font-light">{quantity}</span>
        </p>
        <p className="font-bold text-sm">
          Unit Price:
          <span className="ml-3 font-light">$ {product.price}</span>
        </p>
      </div>
    </Fragment>
  );
};

export default ProductoSummary;
