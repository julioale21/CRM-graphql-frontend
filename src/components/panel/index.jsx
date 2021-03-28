import React, { Fragment } from "react";
import Customers from "./Customers";

const Panel = () => {
  return (
    <Fragment>
      <h2 className="text-center my-5">Top 10 customers who buy the most.</h2>
      <Customers />
    </Fragment>
  );
};

export default Panel;
