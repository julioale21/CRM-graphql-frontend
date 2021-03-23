import React, { Component, Fragment } from "react";
import CustomerCard from "./CustomerCard";

class NewOrder extends Component {
  state = {};
  render() {
    const { customerId } = this.props.match.params;

    return (
      <Fragment>
        <h2 className="text-center my-5 uppercase font-bold text-2xl">New Order</h2>
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-1">
            <CustomerCard id={customerId} />
          </div>
          <div className="col-span-2">
            <h1>Order</h1>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NewOrder;
