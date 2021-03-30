import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [isNavCustomersCollapse, setIsNavCustomersCollapse] = useState(false);
  const [isNavProductCollapse, setIsNavProductsCollapse] = useState(false);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const handleNavCustomerCollapse = () => {
    setIsNavProductsCollapse(false);
    setIsNavCustomersCollapse(!isNavCustomersCollapse);
  };

  const handleNavProductCollapse = () => {
    setIsNavCustomersCollapse(false);
    setIsNavProductsCollapse(!isNavProductCollapse);
  };

  const resetAllCollapse = () => {
    setIsNavCollapsed(false);
    setIsNavCustomersCollapse(false);
    setIsNavProductsCollapse(false);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-3 sm:px-16 w-full z-10 pin-t mb-0">
      <div className="flex items-center flex-no-shrink text-white mr-6">
        <a
          className="text-white no-underline hover:text-white hover:no-underline"
          href="/"
        >
          <span className="text-2xl pl-2">
            <i className="em em-grinning"></i>CRM
          </span>
        </a>
      </div>

      <div className="sm:hidden">
        <button
          onClick={handleNavCollapse}
          id="nav-toggle"
          className="flex text-white items-center px-3 py-2 border rounded text-grey border-grey-dark hover:text-green-200 hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        className={`w-full flex-grow flex-col sm:flex sm:flex-row sm:justify-end items-center sm:w-auto pt-6 sm:pt-0 ${
          isNavCollapsed ? "flex" : "hidden"
        }`}
        id="nav-content"
      >
        <div className="relative sm:mr-4 mb-4 sm:mb-0">
          <button
            onClick={handleNavCustomerCollapse}
            type="button"
            className="group p-2 inline-flex items-center text-base font-medium text-green-300 focus:outline-none hover:text-green-400"
            aria-expanded="false"
          >
            <span>Customers</span>
            <svg
              className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              view-box="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={`${
              isNavCustomersCollapse ? "block" : "hidden"
            } absolute z-10  mt-3 transform px-2 w-screen sm:max-w-xs sm:px-0 ml-0 left-1/2 -translate-x-1/2 sm:right-0 sm:left-0 sm:-translate-x-2/3`}
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                <Link
                  onClick={resetAllCollapse}
                  to="/"
                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    ></path>
                  </svg>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">Customers</p>
                    <p className="mt-1 text-sm text-gray-500">Get a all customes.</p>
                  </div>
                </Link>
                <Link
                  onClick={resetAllCollapse}
                  to="/customers/new"
                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    ></path>
                  </svg>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">
                      New Customer
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Create a new customer.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={handleNavProductCollapse}
            type="button"
            className="group p-2 inline-flex items-center text-base font-medium text-green-300 focus:outline-none hover:text-green-400"
            aria-expanded="false"
          >
            <span>Products</span>
            <svg
              className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              view-box="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className={`${
              isNavProductCollapse ? "block" : "hidden"
            } absolute z-10  mt-3 transform px-2 w-screen sm:max-w-xs sm:px-0 ml-0 left-1/2 -translate-x-1/2 sm:right-0 sm:left-0 sm:-translate-x-2/3`}
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                <Link
                  onClick={resetAllCollapse}
                  to="/products"
                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    ></path>
                  </svg>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">Products</p>
                    <p className="mt-1 text-sm text-gray-500">Get a all products.</p>
                  </div>
                </Link>
                <Link
                  onClick={resetAllCollapse}
                  to="/products/new"
                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                    ></path>
                  </svg>
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">
                      New Product
                    </p>
                    <p className="mt-1 text-sm text-gray-500">
                      Create a new product.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* <ul className="list-reset flex flex-col sm:flex-row justify-end flex-1 items-center">
          <li className="w-full sm:w-auto sm:mr-3">
            <Link
              to="/products/new"
              className="btn bg-transparent sm:bg-green-400 block sm:inline-block py-2 px-4 text-white no-underline hover:text-blue-200 w-40 sm:w-auto text-center"
            >
              New Product
            </Link>
          </li>
        </ul> */}
      </div>
    </nav>
  );
};

export default Header;
