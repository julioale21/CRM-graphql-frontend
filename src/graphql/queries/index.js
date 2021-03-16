import gql from "graphql-tag";

export const GET_ALL_CUSTOMERS_QUERY = gql`
  query($limit: Int, $offset: Int) {
    getCustomers(limit: $limit, offset: $offset) {
      id
      name
      lastName
      age
      company
      emails {
        email
      }
    }
    totalCustomers
  }
`;

export const GET_CUSTOMER_QUERY = gql`
  query($id: ID!) {
    getCustomer(id: $id) {
      id
      name
      lastName
      age
      company
      emails {
        email
      }
      type
    }
  }
`;
