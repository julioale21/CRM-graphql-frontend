import React, { Component, Fragment } from "react";
import { Mutation, Query } from "react-apollo";
import { GET_ALL_PRODUCTS_QUERY } from "../../graphql/queries";
import { DELETE_PRODUCT } from "../../graphql/mutations";
import { Link } from "react-router-dom";
import Success from "../alerts/success";
import Pager from "../Pager";
class ProductsList extends Component {
  limit = 20;
  state = {
    alert: {
      show: false,
      message: "",
    },
    paginate: {
      offset: 0,
      page: 1,
    },
  };

  previousPage = () => {
    this.setState({
      paginate: {
        offset: this.state.paginate.offset - this.limit,
        page: this.state.paginate.page - 1,
      },
    });
  };

  nextPage = () => {
    this.setState({
      paginate: {
        offset: this.state.paginate.offset + this.limit,
        page: this.state.paginate.page + 1,
      },
    });
  };

  render() {
    const {
      alert: { show, message },
    } = this.state;

    const alert = show ? <Success message={message} /> : "";

    return (
      <Fragment>
        <h2 className="text-center uppercase font-bold text-2xl my-4">
          Product List
        </h2>

        {alert}

        <Query
          query={GET_ALL_PRODUCTS_QUERY}
          pollInterval={1000}
          variables={{
            limit: this.limit,
            offset: this.state.paginate.offset,
          }}
        >
          {({ loading, error, data, startPolling, stopPolling }) => {
            if (loading) return "Cargando ...";
            if (error) return `Error: ${error.message}`;
            return (
              <Fragment>
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-lg leading-normal">
                      <th className="w-2/6 py-3 px-6 text-center">Name</th>
                      <th className="w-1/6 py-3 px-6 text-center">Price</th>
                      <th className="w-1/6 py-3 px-6 text-center">Stock</th>
                      <th className="w-1/6 py-3 px-6 text-center">Delete</th>
                      <th className="w-1/6 py-3 px-6 text-center">Edit</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 text-sm font-light">
                    {data.getProducts.map((product) => (
                      <tr
                        key={product.id}
                        className="border-b border-gray-200 hover:bg-gray-100"
                      >
                        <td className="py-3 px-6 text-center whitespace-nowrap">
                          {product.name}
                        </td>
                        <td className="py-3 px-6 text-center whitespace-nowrap">
                          {product.price}
                        </td>
                        <td className="py-3 px-6 text-center whitespace-nowrap">
                          {product.stock}
                        </td>
                        <td className="py-3 px-6 text-center whitespace-nowrap">
                          <Mutation
                            mutation={DELETE_PRODUCT}
                            onCompleted={(data) => {
                              this.setState(
                                {
                                  alert: {
                                    show: true,
                                    message: data.deleteProduct,
                                  },
                                },
                                () => {
                                  setTimeout(() => {
                                    this.setState({
                                      alert: {
                                        show: false,
                                        message: "",
                                      },
                                    });
                                  }, 3000);
                                }
                              );
                            }}
                          >
                            {(deleteProduct) => (
                              <button
                                onClick={() => {
                                  if (
                                    window.confirm(
                                      "Are you sure that you want to remove the product?."
                                    )
                                  ) {
                                    deleteProduct({
                                      variables: { id: product.id },
                                    });
                                  }
                                }}
                                type="button"
                                className="btn inline-block bg-red-500 text-white font-bold hover:bg-red-700 text-tiny mr-2 sm:text-sm"
                              >
                                &times; Delete
                              </button>
                            )}
                          </Mutation>
                        </td>
                        <td className="py-3 px-6 text-center whitespace-nowrap">
                          <Link
                            to={`/products/edit/${product.id}`}
                            className="btn inline-block bg-green-400 text-white font-bold hover:bg-green-500 text-tiny sm:text-sm w-20"
                          >
                            Edit
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <Pager
                  page={this.state.paginate.page}
                  total={data.totalProducts}
                  limit={this.limit}
                  nextPage={this.nextPage}
                  previousPage={this.previousPage}
                />
              </Fragment>
            );
          }}
        </Query>
      </Fragment>
    );
  }
}

export default ProductsList;
