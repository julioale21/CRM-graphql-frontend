import React, { Component, Fragment } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Summary from "./Summary";

class OrderContent extends Component {
  state = {
    products: [],
  };

  selectProduct = (products) => {
    this.setState({ products });
  };

  render() {
    const animatedComponents = makeAnimated();
    return (
      <Fragment>
        <h2 className="text-center my-5 uppercase font-bold text-2xl">Order</h2>
        <Select
          onChange={this.selectProduct}
          options={this.props.products}
          isMulti={true}
          components={animatedComponents}
          placeholder={"Select products"}
          getOptionValue={(option) => option.id}
          getOptionLabel={(option) => option.name}
        />
        <Summary products={this.state.products} />
      </Fragment>
    );
  }
}

export default OrderContent;
