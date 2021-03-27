import React, { Fragment } from "react";
import { Query } from "react-apollo";

const CustomerOrdersList = (props) => {
  const customerId = props.match.params.customerId;

  return (
    <Fragment>
      <h2 className="text-center text-2xl font-bold uppercase p-2">
        Customer Orders
      </h2>

      <div className="grid">
        <p>Orders</p>
      </div>
    </Fragment>
  );
};

export default CustomerOrdersList;
