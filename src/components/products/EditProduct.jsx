import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import { GET_PRODUCT_QUERY } from "../../graphql/queries";
import EditProductForm from "./EditProductForm";
class EditProduct extends Component {
  state = {};
  render() {
    const { id } = this.props.match.params;

    return (
      <Fragment>
        <h2 className="text-center uppercase font-bold text-2xl my-4">
          Edit Product
        </h2>
        <Query query={GET_PRODUCT_QUERY} variables={{ id }}>
          {({ loading, error, data, refetch }) => {
            if (loading) return "Cargando...";
            if (error) return `Error ${error.message}`;

            return <EditProductForm product={data} id={id} refetch={refetch} />;
          }}
        </Query>
      </Fragment>
    );
  }
}

export default EditProduct;
