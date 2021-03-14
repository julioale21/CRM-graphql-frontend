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
