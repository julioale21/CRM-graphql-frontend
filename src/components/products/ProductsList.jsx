import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import { GET_ALL_PRODUCTS_QUERY } from "../../graphql/queries";
class ProductsList extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <h2 className="text-center uppercase font-bold text-2xl my-4">
          Product List
        </h2>

        <Query query={GET_ALL_PRODUCTS_QUERY} pollInterval={1000}>
          {({ loading, error, data, startPolling, stopPollong }) => {
            if (loading) return "Cargando ...";
            if (error) return `Error: ${error.message}`;
            return (
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-lg leading-normal">
                    <th className="w-2/6 py-3 px-6 text-center">Name</th>
                    <th className="w-1/6 py-3 px-6 text-center">Price</th>
                    <th className="w-1/6 py-3 px-6 text-center">Stock</th>
                    <th className="w-1/6 py-3 px-6 text-center">Delete</th>
                    <th className="w-1/6 py-3 px-6 text-center">Edit</th>
                  </tr>
                </thead>
                <tbody class="text-gray-600 text-sm font-light">
                  {data.getProducts.map((product) => (
                    <tr class="border-b border-gray-200 hover:bg-gray-100">
                      <td class="py-3 px-6 text-center whitespace-nowrap">
                        {product.name}
                      </td>
                      <td class="py-3 px-6 text-center whitespace-nowrap">
                        {product.price}
                      </td>
                      <td class="py-3 px-6 text-center whitespace-nowrap">
                        {product.stock}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default ProductsList;
