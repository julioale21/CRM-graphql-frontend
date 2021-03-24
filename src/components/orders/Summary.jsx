import React, { Fragment } from "react";
import Product from "./Product";

const Summary = ({ products, updateQuantity, deleteProduct }) => {
  if (products.length === 0) return null;
  return (
    <Fragment>
      <h2 className="text-center text-2xl font-bold my-2">Symmary and quantities</h2>

      <table className="w-full table-auto mb-10">
        <thead className="bg-green-400 text-gray-50">
          <tr className="font-bold">
            <th className="w-2/6 py-2">Producto</th>
            <th className="w-1/6 py-2">Price</th>
            <th className="w-1/6 py-2">Inventary</th>
            <th className="w-1/6 py-2">Quantity</th>
            <th className="w-1/6 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <Product
              product={product}
              key={product.id}
              id={product.id}
              index={index}
              updateQuantity={updateQuantity}
              deleteProduct={deleteProduct}
            />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Summary;
