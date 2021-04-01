/* eslint-disable no-console */
import React, { Component, Fragment } from "react";
import { GET_CUSTOMER_QUERY } from "../../graphql/queries";
import { Query } from "react-apollo";
import CustomerForm from "./CustomerForm";
class EditCustomer extends Component {
  state = {};
  render() {
    const { id } = this.props.match.params;
    return (
      <Fragment>
        <h2 className="text-center uppercase font-bold text-2xl">Edit Customer</h2>
        <Query query={GET_CUSTOMER_QUERY} variables={{ id }}>
          {({ loading, error, data, refetch }) => {
            if (loading) return "Cargando...";
            if (error) return `Error! ${error.message}`;
            return <CustomerForm customer={data.getCustomer} refetch={refetch} />;
          }}
        </Query>
      </Fragment>
    );
  }
}

export default EditCustomer;
