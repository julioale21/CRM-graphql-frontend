import React, { Component, Fragment } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

class OrderContent extends Component {
  state = {};
  render() {
    const animatedComponents = makeAnimated();
    return (
      <Fragment>
        <h2 className="text-center my-5 uppercase font-bold text-2xl">Order</h2>
        <Select
          options={this.props.products}
          isMulti={true}
          components={animatedComponents}
          placeholder={"Select products"}
          getOptionValue={(option) => option.id}
          getOptionLabel={(option) => option.name}
        />
      </Fragment>
    );
  }
}

export default OrderContent;
