import React, { Fragment } from "react";
import { Query } from "react-apollo";
import { GET_ORDERS_BY_CUSTOMER } from "../../graphql/queries";
import Spinner from "../Spinner";
import Order from "./Order";
import { withRouter } from "react-router-dom";

const CustomerOrdersList = (props) => {
  const customerId = props.match.params.customerId;
  return (
    <Fragment>
      <h2 className="text-center text-2xl font-bold uppercase p-2">
        Customer Orders
      </h2>

      <div className="grid grid-cols-12 gap-4 mb-10">
        <Query
          query={GET_ORDERS_BY_CUSTOMER}
          variables={{ customer: customerId }}
          pollInterval={500}
        >
          {({ loading, error, data, startPolling, stopPolling }) => {
            if (loading)
              return (
                <div className="col-span-12 md:col-span-6 lg:col-span-4 gap-4  border-4">
                  <Spinner textColor={"text-green-400"} />
                </div>
              );
            if (error) return `Error: ${error.message}`;

            return data.getOrders.map((order) => (
              <Order key={order.id} order={order} customer={customerId} />
            ));
          }}
        </Query>
      </div>
    </Fragment>
  );
};

export default withRouter(CustomerOrdersList);
