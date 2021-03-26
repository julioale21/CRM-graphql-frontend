import React, { Component, Fragment } from "react";

class Product extends Component {
  state = {};
  render() {
    const { product, id, index, updateQuantity, deleteProduct } = this.props;

    return (
      <Fragment>
        <tr className="h-10">
          <td className="text-center text-tiny sm:text-sm">{product.name}</td>
          <td className="text-center text-tiny sm:text-sm">$ {product.price}</td>
          <td className="text-center text-tiny sm:text-sm">{product.stock}</td>
          <td className="text-center">
            <input
              onChange={(e) => {
                if (e.target.value > product.stock) {
                  e.target.value = 0;
                }
                updateQuantity(e.target.value, index);
              }}
              type="number"
              min="1"
              className="border border-2 border-green-100 w-20 text-right"
            />
          </td>
          <td className="text-center">
            <button
              onClick={() => deleteProduct(id)}
              className="text-tiny sm:text-sm text-center text-red-400 rounded font-bold border border-red-200 py-1 px-2 hover:bg-red-100"
              type="button"
            >
              Delete
            </button>
          </td>
        </tr>
      </Fragment>
    );
  }
}

export default Product;
