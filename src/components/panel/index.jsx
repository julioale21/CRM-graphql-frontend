import React, { Fragment } from "react";
import Customers from "./Customers";
import Sellers from "./Sellers";

const Panel = () => {
  return (
    <Fragment>
      <h2 className="text-center my-5 text-md font-extrabold">
        Top 10 customers who buy the most.
      </h2>
      <Customers />

      <h2 className="text-center my-5 text-md font-extrabold">
        Top 10 Sellers who more sell.
      </h2>
      <Sellers />
    </Fragment>
  );
};

export default Panel;
