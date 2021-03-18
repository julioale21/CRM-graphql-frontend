import React, { Component, Fragment } from "react";
import { Query } from "react-apollo";
import {  } from "../../graphql/queries";
class ProductsList extends Component {
  state = {};

  render() {
    return (
      <Fragment>
        <h1>Product List</h1>

        <Query>
          {({ loading, error, data, startPolling, stopPollong }) => {
            if (loading) return "Cargando ...";
            if (error) return `Error: ${error.message}`;
            return <h2>fasd</h2>;
          }}
        </Query>
      </Fragment>
    );
  }
}

export default ProductsList;
