import gql from "graphql-tag";

export const CREATE_CUSTOMER = gql`
  mutation($input: CustomerInput) {
    createCustomer(input: $input) {
      id
      name
      lastName
      age
      company
      email
    }
  }
`;
