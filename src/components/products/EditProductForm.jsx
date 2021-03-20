import React, { Component, Fragment } from "react";
import { Mutation } from "react-apollo";
import { UPDATE_PRODUCT } from "../../graphql/mutations";
import { withRouter } from "react-router-dom";

const initialState = {
  name: "",
  price: "",
  stock: "",
};

class EditProductForm extends Component {
  state = {
    ...this.props.product.getProduct,
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

  updateProduct = (e, updateProduct) => {
    e.preventDefault();

    updateProduct().then((data) => {
      this.setState({
        ...initialState,
      });
    });
  };

  render() {
    const { name, price, stock } = this.state;
    const { id } = this.props;
    const input = {
      id,
      name,
      price: Number(price),
      stock: Number(stock),
    };

    return (
      <Fragment>
        <div className="md:grid md:grid-cols-8">
          <Mutation
            mutation={UPDATE_PRODUCT}
            variables={{ input }}
            key={id}
            onCompleted={() =>
              this.props.refetch().then(() => {
                this.props.history.push("/products");
              })
            }
          >
            {(updateProduct, { loading, error, data }) => {
              return (
                <form
                  className="md:col-span-4 md:col-start-3"
                  onSubmit={(e) => this.updateProduct(e, updateProduct)}
                >
                  <div className="form-group">
                    <label>Name:</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Nombre del Producto"
                      value={this.state.name}
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
                        value={this.state.price}
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
                      value={this.state.stock}
                      onChange={this.updateState}
                    />
                  </div>
                  <button
                    type="submit"
                    className={`${
                      this.validateForm() ? "btn-disabled" : ""
                    } btn bg-green-400 hover:bg-green-500 sm:float-right uppercase float-right mt-4`}
                  >
                    Update Producto
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

export default withRouter(EditProductForm);
