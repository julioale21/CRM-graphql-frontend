import React, { Component, Fragment } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import GenerateOrder from "./GenerateOrder";
import Summary from "./Summary";

class OrderContent extends Component {
  state = {
    products: [],
    total: 0,
  };

  selectProduct = (products) => {
    this.setState({ products }, () => {
      this.updateTotal();
    });
  };

  updateQuantity = (quantity, index) => {
    const { products } = this.state;
    products[index].quantity = Number(quantity);

    this.setState(
      {
        products,
      },
      () => {
        this.updateTotal();
      }
    );
  };

  updateTotal = () => {
    const { products } = this.state;

    if (products.length === 0) {
      this.setState({
        total: 0,
      });
      return;
    }

    let total = 0;
    products.map((product) => {
      if (product.quantity) {
        total += product.quantity * product.price;
      }
      return total;
    });

    this.setState({
      total,
    });
  };

  deleteProduct = (id) => {
    this.setState(
      {
        products: this.state.products.filter((product) => product.id !== id),
      },
      () => {
        this.updateTotal();
      }
    );
  };

  render() {
    //const animatedComponents = makeAnimated();
    return (
      <Fragment>
        <h2 className="text-center my-4 font-bold text-2xl">Select products</h2>
        <Select
          onChange={this.selectProduct}
          options={this.props.products}
          isMulti={true}
          //components={animatedComponents}
          placeholder={"Select products"}
          getOptionValue={(option) => option.id}
          getOptionLabel={(option) => option.name}
          value={this.state.products}
          className="mb-10"
        />
        <Summary
          products={this.state.products}
          updateQuantity={this.updateQuantity}
          deleteProduct={this.deleteProduct}
        />
        <p className="font-bold text-right mb-10">
          Total: <span className="font-normal">${this.state.total}</span>
        </p>

        <GenerateOrder />
      </Fragment>
    );
  }
}

export default OrderContent;
