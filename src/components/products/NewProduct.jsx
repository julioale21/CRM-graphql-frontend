import React, { Component, Fragment } from "react";
import { CREATE_PRODUCT } from "../../graphql/mutations";
import { Mutation } from "react-apollo";

const initialState = {
  name: "",
  price: "",
  stock: "",
};

class NewProduct extends Component {
  state = {
    ...initialState,
  };

  cleanState = () => {
    this.setState({
      ...initialState,
    });
  };

  updateState = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  validateForm = () => {
    const { name, price, stock } = this.state;
    const invalid = !name || !price || !stock;
    return invalid;
  };

  createNewProduct = (e, createProduct) => {
    e.preventDefault();

    createProduct().then((data) => {
      this.cleanState();

      this.props.history.push("/products");
    });
  };

  render() {
    const { name, price, stock } = this.state;

    const input = {
      name,
      price: Number(price),
      stock: Number(stock),
    };

    return (
      <Fragment>
        <h2 className="text-center uppercase font-bold text-2xl">New Product</h2>
        <div className="md:grid md:grid-cols-8">
          <Mutation mutation={CREATE_PRODUCT} variables={{ input }}>
            {(createProduct, { loading, error, data }) => {
              return (
                <form
                  className="md:col-span-4 md:col-start-3"
                  onSubmit={(e) => this.createNewProduct(e, createProduct)}
                >
                  <div className="form-group">
                    <label>Name:</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Nombre del Producto"
                      onChange={this.updateState}
                    />
                  </div>
                  <div className="form-group">
                    <label>Price:</label>
                    <div className="flex">
                      <span className="border border-2 rounded-l px-4 py-2 bg-gray-300 whitespace-no-wrap">
                        $
                      </span>
                      <input
                        type="number"
                        name="price"
                        className="form-control"
                        placeholder="Precio del Producto"
                        onChange={this.updateState}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Stock:</label>
                    <input
                      type="number"
                      name="stock"
                      className="form-control"
                      placeholder="stock del Producto"
                      onChange={this.updateState}
                    />
                  </div>
                  <button
                    type="submit"
                    className={`${
                      this.validateForm() ? "btn-disabled" : ""
                    } btn bg-green-400 hover:bg-green-500 sm:float-right uppercase float-right mt-4`}
                  >
                    Crear Producto
                  </button>
                </form>
              );
            }}
          </Mutation>
        </div>
      </Fragment>
    );
  }
}

export default NewProduct;
