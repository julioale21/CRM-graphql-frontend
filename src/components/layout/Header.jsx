import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-black p-3 w-full z-10 pin-t mb-4">
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

      <div className="block sm:hidden">
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
        className={`w-full flex-grow sm:flex items-center sm:w-auto sm:block pt-6 sm:pt-0 ${
          isNavCollapsed ? "flex" : "hidden"
        }`}
        id="nav-content"
      >
        <ul className="list-reset flex flex-col sm:flex-row justify-end flex-1 items-center">
          <li className="mr-3">
            <Link
              to="/customers/new"
              className="btn bg-transparent sm:bg-green-400 block sm:inline-block py-2 px-4 text-white no-underline hover:text-blue-200 mr-2 mb-2 w-40 sm:w-auto text-center"
            >
              New Customer
            </Link>
            <Link
              to="/products/new"
              className="btn bg-transparent sm:bg-green-400 block sm:inline-block py-2 px-4 text-white no-underline hover:text-blue-200 w-40 sm:w-auto text-center"
            >
              New Product
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
