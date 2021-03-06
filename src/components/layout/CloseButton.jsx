import React from "react";
import { ApolloConsumer } from "react-apollo";
import { withRouter } from "react-router-dom";

const closeSession = (customer, history) => {
  localStorage.removeItem("token", "");
  customer.resetStore();
  history.push("/login");
};

const CloseButton = ({ history }) => (
  <ApolloConsumer>
    {(customer) => {
      return (
        <button
          onClick={() => closeSession(customer, history)}
          className="group w-20 p-2 inline-flex items-center text-base font-medium text-white focus:outline-none hover:text-green-100"
        >
          Close
        </button>
      );
    }}
  </ApolloConsumer>
);

export default withRouter(CloseButton);
