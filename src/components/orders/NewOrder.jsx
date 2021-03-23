import React, { Component, Fragment } from "react";
import CustomerCard from "./CustomerCard";
import { Query } from "react-apollo";
import { GET_ALL_PRODUCTS_QUERY } from "../../graphql/queries";
import Spinner from "../Spinner";
import OrderContent from "./OrderContent";

class NewOrder extends Component {
  state = {};
  render() {
    const { customerId } = this.props.match.params;

    return (
      <Fragment>
        <h2 className="text-center my-5 uppercase font-bold text-2xl">New Order</h2>
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-3 sm:col-span-1">
            <CustomerCard id={customerId} />
          </div>
          <div className="col-span-3 sm:col-span-2 mt-12 sm:mt-0">
            <Query query={GET_ALL_PRODUCTS_QUERY} pollInterval={1000}>
              {({ loading, error, data, startPolling, stopPolling }) => {
                if (loading) return <Spinner textColor={"text-blue-400"} />;
                if (error) return `Error: ${error.message}`;

                return (
                  <OrderContent
                    products={data.getProducts}
                    customerId={customerId}
                  />
                );
              }}
            </Query>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NewOrder;
