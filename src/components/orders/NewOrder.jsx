import React, { Component, Fragment } from "react";
import CustomerCard from "./CustomerCard";
import { Query } from "react-apollo";
import { GET_ALL_PRODUCTS_QUERY } from "../../graphql/queries";
import Spinner from "../Spinner";
import OrderContent from "./OrderContent";
import { withRouter } from "react-router-dom";

class NewOrder extends Component {
  state = {};
  render() {
    const { customerId } = this.props.match.params;
    const sellerId = this.props.session.getUser.id;

    return (
      <Fragment>
        <div className="grid grid-cols-3 gap-16">
          <div className="col-span-3 sm:col-span-1">
            <CustomerCard id={customerId} />
          </div>
          <div className="col-span-3 sm:col-span-2 mt-3 sm:mt-0">
            <Query
              query={GET_ALL_PRODUCTS_QUERY}
              pollInterval={1000}
              variables={{ stock: true }}
            >
              {({ loading, error, data, startPolling, stopPolling }) => {
                if (loading) return <Spinner textColor={"text-green-400"} />;
                if (error) return `Error: ${error.message}`;

                return (
                  <OrderContent
                    products={data.getProducts}
                    customerId={customerId}
                    sellerId={sellerId}
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

export default withRouter(NewOrder);
