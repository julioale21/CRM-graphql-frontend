import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { UPDATE_CUSTOMER } from "../../graphql/mutations";
import { withRouter } from "react-router-dom";

class CustomerForm extends Component {
  state = {
    customer: this.props.customer,
    emails: this.props.customer.emails,
    error: false,
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
    const { id, name, lastName, age, company, type } = this.state.customer;
    const { emails } = this.state;
    return (
      <Mutation
        mutation={UPDATE_CUSTOMER}
        onCompleted={() =>
          this.props.refetch().then(() => {
            this.props.history.push("/");
          })
        }
      >
        {(updateCustomer) => (
          <form
            className="sm:col-span-3 sm:col-start-2 m-3 sm:grid sm:grid-cols-2 sm:gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              const { name, lastName, age, company, type } = this.state.customer;
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
                id,
                name,
                lastName,
                age: Number(age),
                company,
                emails,
                type,
              };

              // eslint-disable-next-line no-console
              console.log(input);

              updateCustomer({
                variables: { input },
              });
            }}
          >
            <div className="mb-2">
              <input
                type="text"
                placeholder="Name"
                defaultValue={name}
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
                defaultValue={lastName}
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
                defaultValue={company}
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
                    defaultValue={input.email}
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
                defaultValue={age}
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
                defaultValue={type}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
              >
                <option value="">Select a type...</option>
                <option value="PREMIUM">PREMIUM</option>
                <option value="BASIC">BASIC</option>
              </select>
            </div>
            <div className="flex justify-center sm:justify-end col-span-2 sm:col-span-1 sm:col-start-2 mt-4">
              <button className="btn btn-blue sm:float-right uppercase">
                Edit Customer
              </button>
            </div>
          </form>
        )}
      </Mutation>
    );
  }
}

export default withRouter(CustomerForm);
