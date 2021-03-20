/* eslint-disable no-console */
import React, { Component, Fragment } from "react";
import { Query, Mutation } from "react-apollo";
import { GET_ALL_CUSTOMERS_QUERY } from "../../graphql/queries";
import { DELETE_CUSTOMER } from "../../graphql/mutations";
import { Link } from "react-router-dom";
import Success from "../alerts/success";
import Pager from "../Pager";

class Customers extends Component {
  limit = 10;
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
      <Query
        query={GET_ALL_CUSTOMERS_QUERY}
        pollInterval={1000}
        variables={{
          limit: this.limit,
          offset: this.state.paginate.offset,
        }}
      >
        {({ loading, error, data, startPolling, stopPolling }) => {
          if (loading) return "Cargando...";
          if (error) return `Error: ${error.message}`;

          return (
            <Fragment>
              <h2 className="text-center text-2xl font-bold uppercase">
                Customers List
              </h2>

              {alert}

              <ul className="mt-4">
                {data.getCustomers.map((customer) => (
                  <li
                    key={customer.id}
                    className="border list-none rounded-sm px-3 py-3"
                  >
                    <div className="grid grid-cols-3">
                      <div className="col-span-2 text-sm sm:text-lg">
                        {customer.name} {customer.lastName}
                      </div>
                      <div className="col-span-1 flex justify-end">
                        <Mutation
                          mutation={DELETE_CUSTOMER}
                          onCompleted={(data) => {
                            this.setState(
                              {
                                alert: {
                                  show: true,
                                  message: data.deleteCustomer,
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
                          {(deleteCustomer) => (
                            <button
                              type="button"
                              className="btn bg-red-500 hover:bg-red-700 text-tiny mr-2 sm:text-lg"
                              onClick={() => {
                                if (
                                  window.confirm(
                                    "Are you sure that you want to delete this customer ?"
                                  )
                                ) {
                                  deleteCustomer({
                                    variables: {
                                      id: customer.id,
                                    },
                                  });
                                }
                              }}
                            >
                              Delete
                            </button>
                          )}
                        </Mutation>
                        <Link
                          to={`/customer/edit/${customer.id}`}
                          className="btn bg-green-400 hover:bg-green-500 text-tiny sm:text-lg"
                        >
                          Edit
                        </Link>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <Pager
                page={this.state.paginate.page}
                total={data.totalCustomers}
                limit={this.limit}
                nextPage={this.nextPage}
                previousPage={this.previousPage}
              />
            </Fragment>
          );
        }}
      </Query>
    );
  }
}

export default Customers;
