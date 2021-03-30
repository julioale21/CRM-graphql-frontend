import React, { Component, Fragment } from "react";
import { Mutation } from "react-apollo";
import { CREATE_USER } from "../../graphql/mutations";
import Error from "../alerts/Error";
import { withRouter } from "react-router-dom";

const initialState = {
  username: "",
  password: "",
  repeatedPassword: "",
  showPassword: false,
  showRepeatedPassword: false,
};
class Register extends Component {
  state = {
    ...initialState,
  };

  clearState = () => {
    this.setState({
      ...initialState,
    });
  };

  updateState = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleIconPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };

  handleIconRepeatedPassword = () => {
    this.setState({
      showRepeatedPassword: !this.state.showRepeatedPassword,
    });
  };

  validateForm = () => {
    const { username, password, repeatedPassword } = this.state;
    return username !== "" && password !== "" && password === repeatedPassword;
  };

  handleSubmit = (e, createUser) => {
    e.preventDefault();
    if (!this.validateForm()) return;

    createUser().then(() => {
      this.clearState();
      this.props.history.push("/login");
    });
  };

  render() {
    const { username, password, repeatedPassword } = this.state;

    return (
      <Fragment>
        <h2 className="text-center font-bold text-2xl pt-5">New User</h2>

        <Mutation
          errorPolicy="ignore"
          mutation={CREATE_USER}
          variables={{ username, password }}
          onError={() => {}}
        >
          {(createUser, { loading, error, data }) => {
            return (
              <form
                onSubmit={(e) => this.handleSubmit(e, createUser)}
                className="grid grid-cols-12"
              >
                <div className="col-span-10 col-start-2 sm:col-span-8 sm:col-start-3">
                  {error && <Error error={error} />}
                  <div className="mt-3">
                    <label
                      className="font-bold text-green-500 text-sm"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <div className="flex w-full border border-4 border-gray-300 rounded-md p-1 focus-within:ring focus-within:ring-green-200 focus-within:border-none">
                      <input
                        onChange={this.updateState}
                        type="text"
                        name="username"
                        placeholder="Name of user"
                        value={username}
                        className="outline-none py-1 pl-3 w-full placeholder-gray-500 placeholder-opacity-50"
                      />
                      <span className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                        <i className="fas fa-user-circle fill-current text-green-400"></i>
                      </span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <label
                      className="font-bold text-green-500 text-sm"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <div className="flex w-full border border-4 border-gray-300 rounded-md p-1 focus-within:ring focus-within:ring-green-200 focus-within:border-none">
                      <input
                        onChange={this.updateState}
                        type={`${this.state.showPassword ? "text" : "password"}`}
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        className="outline-none py-1 pl-3 w-full placeholder-gray-500 placeholder-opacity-50"
                      />
                      <span className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                        <i
                          onClick={this.handleIconPassword}
                          role="button"
                          className={`fas fa-sm ${
                            this.state.showPassword ? "fa-eye-slash" : "fa-eye"
                          } fill-current text-green-400`}
                        ></i>
                      </span>
                    </div>
                  </div>

                  <div className="mt-3">
                    <label
                      className="font-bold text-green-500 text-sm"
                      htmlFor="repeatedPassword"
                    >
                      Repeat Password
                    </label>
                    <div className="flex w-full border border-4 border-gray-300 rounded-md p-1 focus-within:ring focus-within:ring-green-200 focus-within:border-none">
                      <input
                        onChange={this.updateState}
                        type={`${
                          this.state.showRepeatedPassword ? "text" : "password"
                        }`}
                        name="repeatedPassword"
                        placeholder="Enter your password"
                        value={repeatedPassword}
                        className="outline-none py-1 pl-3 w-full placeholder-gray-500 placeholder-opacity-50"
                      />
                      <span className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                        <i
                          onClick={this.handleIconRepeatedPassword}
                          role="button"
                          className={`fas fa-sm ${
                            this.state.showRepeatedPassword
                              ? "fa-eye-slash"
                              : "fa-eye"
                          } fill-current text-green-400`}
                        ></i>
                      </span>
                    </div>
                  </div>

                  <button
                    className={`${
                      loading || !this.validateForm()
                        ? "btn-disabled bg-gray-100 border-gray-100"
                        : ""
                    } btn border hover:bg-green-200 border-green-400 hover:border-green-200 float-right text-sm sm:text-base mt-5 focus:outline-none`}
                  >
                    Register
                  </button>
                </div>
              </form>
            );
          }}
        </Mutation>
      </Fragment>
    );
  }
}

export default withRouter(Register);
