import React from "react";
import { Query } from "react-apollo";
import { GET_TOP_CUSTOMERS } from "../../graphql/queries";

const Customers = () => {
  return (
    <Query query={GET_TOP_CUSTOMERS} pollInterval={500}>
      {({ loading, error, data, startPolling, stopPolling }) => {
        if (loading) return "Loading...";
        if (error) return `Error: ${error.message}`;
        // eslint-disable-next-line no-console
        console.log(data);
        return <h1>Customer</h1>;
      }}
    </Query>
  );
};

export default Customers;
