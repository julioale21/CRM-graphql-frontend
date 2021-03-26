import gql from "graphql-tag";

export const CREATE_CUSTOMER = gql`
  mutation($input: CustomerInput) {
    createCustomer(input: $input) {
      id
      name
      lastName
      age
      company
      emails {
        email
      }
    }
  }
`;

export const UPDATE_CUSTOMER = gql`
  mutation($input: CustomerInput) {
    updateCustomer(input: $input) {
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

export const DELETE_CUSTOMER = gql`
  mutation($id: ID!) {
    deleteCustomer(id: $id)
  }
`;

export const CREATE_PRODUCT = gql`
  mutation($input: ProductInput) {
    createProduct(input: $input) {
      id
      name
      price
      stock
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation($input: ProductInput) {
    updateProduct(input: $input) {
      id
      name
      price
      stock
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation($id: ID!) {
    deleteProduct(id: $id)
  }
`;

export const CREATE_ORDER = gql`
  mutation($input: OrderInput) {
    createOrder(input: $input) {
      id
    }
  }
`;
