import React from "react";
import { Mutation } from "react-apollo";
import { CREATE_ORDER } from "../../graphql/mutations";
import { withRouter } from "react-router-dom";

const validateOrder = (props) => {
  return !props.products || props.total === 0;
};

const GenerateOrder = (props) => {
  return (
    <Mutation mutation={CREATE_ORDER} onCompleted={() => props.history.push("/")}>
      {(createOrder) => (
        <button
          type="button"
          className={`btn bg-yellow-400 mt-4 mb-6 ${
            validateOrder(props) ? "btn-disabled" : ""
          }`}
          onClick={(e) => {
            const productsInput = props.products.map(
              ({ name, price, stock, ...object }) => object
            );
            const input = {
              order: productsInput,
              total: props.total,
              customer: props.customerId,
              seller: props.sellerId,
            };

            createOrder({
              variables: { input },
            });
          }}
        >
          Generate Order
        </button>
      )}
    </Mutation>
  );
};

export default withRouter(GenerateOrder);
