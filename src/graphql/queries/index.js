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

export const GET_ALL_PRODUCTS_QUERY = gql`
  query($limit: Int, $offset: Int, $stock: Boolean) {
    getProducts(limit: $limit, offset: $offset, stock: $stock) {
      id
      name
      price
      stock
    }
    totalProducts
  }
`;

export const GET_PRODUCT_QUERY = gql`
  query($id: ID!) {
    getProduct(id: $id) {
      id
      name
      price
      stock
    }
  }
`;
