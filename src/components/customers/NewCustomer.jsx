/* eslint-disable no-console */
import React, { Fragment, Component } from "react";
import { CREATE_CUSTOMER } from "../../graphql/mutations";
import { Mutation } from "react-apollo";
class NewCustomer extends Component {
  state = {
    customer: {
      name: "",
      lastName: "",
      age: "",
      company: "",
      type: "BASIC",
    },
    error: false,
    emails: [],
  };

  addInputEmail = () => {
    this.setState({
      emails: this.state.emails.concat([{ email: "" }]),
    });
  };

  deleteEmail = (i) => () => {
    this.setState({
      emails: this.state.emails.filter((email, index) => i !== index),
    });
  };

  addEmail = (i) => (e) => {
    const newEmails = this.state.emails.map((email, index) => {
      if (i !== index) return email;
      return {
        ...email,
        email: e.target.value,
      };
    });
    this.setState({
      emails: newEmails,
    });
  };

  render() {
    const { error } = this.state;
    let response = error ? (
      <p className="bg-red-200 text-center text-white">All field are required</p>
    ) : (
      ""
    );
    return (
      <Fragment>
        <h2 className="text-center uppercase font-bold text-2xl">New Customer</h2>

        <div className="sm:grid sm:grid-cols-5">
          <Mutation
            mutation={CREATE_CUSTOMER}
            onCompleted={() => this.props.history.push("/")}
          >
            {(createCustomer) => (
              <form
                className="sm:col-span-3 sm:col-start-2 m-3 sm:grid sm:grid-cols-2 sm:gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  const { name, lastName, age, company, type } = this.state.customer;
                  const { emails } = this.state;

                  if (
                    name === "" ||
                    lastName === "" ||
                    age === "" ||
                    company === "" ||
                    type === ""
                  ) {
                    this.setState({
                      error: true,
                    });
                    return;
                  }

                  this.setState({
                    error: false,
                  });

                  const input = {
                    name,
                    lastName,
                    age: Number(age),
                    company,
                    emails,
                    type,
                  };

                  createCustomer({
                    variables: { input },
                  });
                }}
              >
                <div className="col-span-2 mb-4">{response}</div>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Name"
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
                  <input
                    type="text"
                    placeholder="Last Name"
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

                <div className="mb-2 sm:col-span-2">
                  <input
                    type="text"
                    placeholder="Company"
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

                {this.state.emails.map((input, index) => (
                  <div key={index} className="mb-2 col-span-2">
                    <span className="flex">
                      <input
                        onChange={this.addEmail(index)}
                        type="email"
                        placeholder={`Email: ${index + 1}`}
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
                      />
                      <button
                        onClick={this.deleteEmail(index)}
                        className="btn bg-red-600 hover:bg-red-700 text-xs float-right"
                      >
                        Delete
                      </button>
                    </span>
                  </div>
                ))}

                <div className="mb-2 flex justify-center col-span-2">
                  <button
                    onClick={this.addInputEmail}
                    type="button"
                    className="btn bg-yellow-500 text-sm"
                  >
                    + Add Email
                  </button>
                </div>

                <div className="mb-2">
                  <input
                    type="Number"
                    placeholder="Age"
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
                <div className="flex justify-center sm:justify-end col-span-2 sm:col-span-1 sm:col-start-2 mt-4">
                  <button className="btn btn-blue sm:float-right uppercase">
                    Add Customer
                  </button>
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