import React, { Fragment } from "react";

const NewCustomer = () => {
  return (
    <Fragment>
      <h2 className="text-center uppercase font-bold text-2xl">New Customer</h2>
      <div className="sm:grid sm:grid-cols-5">
        <form className="sm:col-span-3 sm:col-start-2 m-3 sm:grid sm:grid-cols-2 sm:gap-2">
          <div class="mb-2">
            <label
              for="name"
              class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              required
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>

          <div class="mb-2">
            <label
              for="lastName"
              class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastname"
              placeholder="Last Name"
              required
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>

          <div class="mb-2">
            <label
              for="lastName"
              class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
            >
              Company
            </label>
            <input
              type="text"
              name="company"
              id="company"
              placeholder="Company"
              required
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>

          <div class="mb-2">
            <label
              for="lastName"
              class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              required
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>

          <div class="mb-2">
            <label
              for="lastName"
              class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
            >
              Age
            </label>
            <input
              type="Number"
              name="age"
              id="age"
              placeholder="Age"
              required
              class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500"
            />
          </div>

          <div className="mb-2">
            <label
              for="lastName"
              class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
            >
              Customer Type
            </label>
            <select class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500">
              <option value="">Select a type...</option>
              <option value="PREMIUM">PREMIUM</option>
              <option value="BASIC">BASIC</option>
            </select>
          </div>
          <div className="sm:col-start-2">
            <button className="btn btn-blue sm:float-right">Save</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default NewCustomer;
