import React, { Component, Fragment } from "react";

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

  render() {
    return (
      <Fragment>
        <h2 className="text-center font-bold text-2xl my-5">New User</h2>

        <div className="grid grid-cols-12">
          <div className="col-span-10 col-start-2 sm:col-span-8 sm:col-start-3">
            <div className="mt-3">
              <label className="font-bold text-green-500 text-sm" htmlFor="username">
                Username
              </label>
              <div className="flex w-full border border-4 border-gray-300 rounded-md p-1 focus-within:ring focus-within:ring-green-200 focus-within:border-none">
                <input
                  onChange={this.updateState}
                  type="text"
                  name="username"
                  placeholder="Name of user"
                  className="outline-none py-1 pl-3 w-full placeholder-gray-500 placeholder-opacity-50"
                />
                <span className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                  <i className="fas fa-user-circle fill-current text-green-400"></i>
                </span>
              </div>
            </div>

            <div className="mt-3">
              <label className="font-bold text-green-500 text-sm" htmlFor="password">
                Password
              </label>
              <div className="flex w-full border border-4 border-gray-300 rounded-md p-1 focus-within:ring focus-within:ring-green-200 focus-within:border-none">
                <input
                  onChange={this.updateState}
                  type={`${this.state.showPassword ? "text" : "password"}`}
                  name="password"
                  placeholder="Enter your password"
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
                  type={`${this.state.showRepeatedPassword ? "text" : "password"}`}
                  name="repeatedPassword"
                  placeholder="Enter your password"
                  className="outline-none py-1 pl-3 w-full placeholder-gray-500 placeholder-opacity-50"
                />
                <span className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                  <i
                    onClick={this.handleIconRepeatedPassword}
                    role="button"
                    className={`fas fa-sm ${
                      this.state.showRepeatedPassword ? "fa-eye-slash" : "fa-eye"
                    } fill-current text-green-400`}
                  ></i>
                </span>
              </div>
            </div>

            <button
              className={`${
                this.validateForm()
                  ? "focus:outline-none hover:bg-green-200 border-green-400 hover:border-green-200"
                  : "btn-disabled bg-gray-100 border-gray-100"
              } btn border float-right text-sm sm:text-base mt-5`}
            >
              Register
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Register;
