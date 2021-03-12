/* eslint-disable no-console */
import React, { Fragment, Component } from "react";
import { CREATE_CUSTOMER } from "../graphql/mutations";
import { Mutation } from "react-apollo";
class NewCustomer extends Component {
  state = {
    customer: {
      name: "",
      lastName: "",
      age: "",
      company: "",
      email: "",
      type: "BASIC",
    },
  };

  render() {
    return (
      <Fragment>
        <h2 className="text-center uppercase font-bold text-2xl">New Customer</h2>
        <div className="sm:grid sm:grid-cols-5">
          <Mutation mutation={CREATE_CUSTOMER}>
            {(createCustomer) => (
              <form
                className="sm:col-span-3 sm:col-start-2 m-3 sm:grid sm:grid-cols-2 sm:gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  const {
                    name,
                    lastName,
                    age,
                    company,
                    email,
                    type,
                  } = this.state.customer;

                  const input = {
                    name,
                    lastName,
                    age: Number(age),
                    company,
                    email,
                    type,
                  };

                  createCustomer({
                    variables: { input },
                  });
                }}
              >
                <div className="mb-2">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    onChange={(e) => {
                      this.setState({
                        customer: {
                          ...this.state.customer,
                          name: e.target.value,
                        },
                      });
                    }}
                  />
                </div>

                <div className="mb-2">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    onChange={(e) => {
                      this.setState({
                        customer: {
                          ...this.state.customer,
                          lastName: e.target.value,
                        },
                      });
                    }}
                  />
                </div>

                <div className="mb-2">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Company"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    onChange={(e) => {
                      this.setState({
                        customer: {
                          ...this.state.customer,
                          company: e.target.value,
                        },
                      });
                    }}
                  />
                </div>

                <div className="mb-2">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    onChange={(e) => {
                      this.setState({
                        customer: {
                          ...this.state.customer,
                          email: e.target.value,
                        },
                      });
                    }}
                  />
                </div>

                <div className="mb-2">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Age
                  </label>
                  <input
                    type="Number"
                    placeholder="Age"
                    required
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                    onChange={(e) => {
                      this.setState({
                        customer: {
                          ...this.state.customer,
                          age: e.target.value,
                        },
                      });
                    }}
                  />
                </div>

                <div className="mb-2">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-400">
                    Customer Type
                  </label>
                  <select
                    onChange={(e) => {
                      this.setState({
                        customer: {
                          ...this.state.customer,
                          type: e.target.value,
                        },
                      });
                    }}
                    className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                  >
                    <option value="">Select a type...</option>
                    <option value="PREMIUM">PREMIUM</option>
                    <option value="BASIC">BASIC</option>
                  </select>
                </div>
                <div className="sm:col-start-2">
                  <button className="btn btn-blue sm:float-right">Save</button>
                </div>
              </form>
            )}
          </Mutation>
        </div>
      </Fragment>
    );
  }
}

export default NewCustomer;
