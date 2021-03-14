/* eslint-disable no-console */
import React, { Fragment } from "react";
import { Query } from "react-apollo";
import { GET_ALL_CUSTOMERS_QUERY } from "../graphql/queries";
import { Link } from "react-router-dom";

const Customers = () => (
  <Query query={GET_ALL_CUSTOMERS_QUERY} pollInterval={1000}>
    {({ loading, error, data, startPolling, stopPolling }) => {
      if (loading) return "Cargando...";
      if (error) return `Error: ${error.message}`;

      return (
        <Fragment>
          <h2 className="text-center text-2xl font-bold uppercase">
            Customers List
          </h2>
          <ul className="mt-4">
            {data.getCustomers.map((customer) => (
              <li
                key={customer.id}
                className="border list-none rounded-sm px-3 py-3"
              >
                <div className="grid grid-cols-3">
                  <div className="col-span-2">
                    {customer.name} {customer.lastName} - {customer.company}
                  </div>
                  <div className="col-span-1 flex justify-end">
                    <Link
                      to={`/customer/edit/${customer.id}`}
                      className="btn bg-green-400 hover:bg-green-500"
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Fragment>
      );
    }}
  </Query>
);

export default Customers;
