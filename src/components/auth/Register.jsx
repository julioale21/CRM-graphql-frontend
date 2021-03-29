import React, { Component, Fragment } from "react";

class Register extends Component {
  state = {};
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
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="outline-none py-1 pl-3 w-full placeholder-gray-500 placeholder-opacity-50"
                />
                <span className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                  <i className="fas fa-lock fill-current text-green-400"></i>
                </span>
              </div>
            </div>

            <div className="mt-3">
              <label
                className="font-bold text-green-500 text-sm"
                htmlFor="repeat-passwor"
              >
                Repeat Password
              </label>
              <div className="flex w-full border border-4 border-gray-300 rounded-md p-1 focus-within:ring focus-within:ring-green-200 focus-within:border-none">
                <input
                  type="password"
                  name="repeat-password"
                  placeholder="Enter your password"
                  className="outline-none py-1 pl-3 w-full placeholder-gray-500 placeholder-opacity-50"
                />
                <span className="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600">
                  <i className="fas fa-lock fill-current text-green-400"></i>
                </span>
              </div>
            </div>

            <button className="float-right focus:outline-none btn border border-green-400 hover:bg-green-200 hover:border-green-200 mt-5 text-sm sm:text-base">
              Register
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Register;
