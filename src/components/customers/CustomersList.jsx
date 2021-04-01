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

    let id;
    const { role } = this.props.session.getUser;
    if (role === "SELLER") {
      id = this.props.session.getUser.id;
    } else {
      id = "";
    }

    return (
      <Query
        query={GET_ALL_CUSTOMERS_QUERY}
        pollInterval={1000}
        variables={{
          limit: this.limit,
          offset: this.state.paginate.offset,
          seller: id,
        }}
      >
        {({ loading, error, data, startPolling, stopPolling }) => {
          if (loading) return "Cargando...";
          if (error) return `Error: ${error.message}`;

          return (
            <Fragment>
              <h2 className="text-center text-2xl font-bold uppercase p-2">
                Customers List
              </h2>

              {alert}

              <ul className="mt-4">
                {data.getCustomers.map((customer) => (
                  <li
                    key={customer.id}
                    className="border border-gray-100 rounded-sm list-none rounded-sm px-3 py-3 my-1"
                  >
                    <div className="grid grid-cols-3">
                      <div className="text-center  sm:text-left col-span-3 mb-4 sm:mb-0 sm:col-span-2 text-lg">
                        {customer.name} {customer.lastName} - {customer.company}
                      </div>
                      <div className="col-span-3 sm:col-span-1 flex justify-center sm:justify-end">
                        <Link
                          to={`/orders/new/${customer.id}`}
                          className="btn border border-yellow-400 text-yellow-400 flex items-center text-xs sm:text-sm font-bold hover:bg-yellow-100 hover:text-yellow-500 mr-2"
                        >
                          <p>New Order</p>
                        </Link>
                        <Link
                          to={`/orders/${customer.id}`}
                          className="btn border border-blue-400 text-blue-400 flex items-center text-xs sm:text-sm font-bold hover:bg-blue-100 hover:text-blue-500 mr-2"
                        >
                          <p>Orders</p>
                        </Link>
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
                              className="btn border border-red-400 text-red-400 text-xs sm:text-sm font-bold hover:bg-red-100 hover:text-red-500 mr-2"
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
                              <p>Delete</p>
                            </button>
                          )}
                        </Mutation>
                        <Link
                          to={`/customers/edit/${customer.id}`}
                          className="btn flex items-center border border-green-400 text-green-400 text-xs sm:text-sm hover:bg-green-100  hover:text-green-500"
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
