import React from "react";

const validateOrder = (props) => {
  return !props.products || props.total === 0;
};

const GenerateOrder = (props) => {
  return (
    <button
      className={`btn bg-yellow-400 mt-4 ${
        validateOrder(props) ? "btn-disabled" : ""
      }`}
    >
      Generate Order
    </button>
  );
};

export default GenerateOrder;
